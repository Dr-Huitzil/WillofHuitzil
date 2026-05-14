/**
 * Parses a Markdown-like string into styled JSX.
 *
 * Standard syntax:
 *   # H1  |  ## H2  |  ### H3  |  #### H4
 *   ---                  (horizontal rule)
 *   **bold text**        (inline bold)
 *   - item               (unordered list, "-" or "*" prefix)
 *   1. item              (ordered list)
 *   | col | col |        (pipe table with optional separator row)
 *   ![Caption](src)      (image — use "PLACEHOLDER_*" src for styled placeholders)
 *
 * Custom block syntax (fenced with :::blocktype / :::):
 *   :::palette
 *   #hexcode | Token Name | Usage note
 *   :::
 *
 *   :::typography
 *   Font Family | Classification | Usage note
 *   :::
 *
 * SECURITY NOTE: `text` must only ever come from the local data files,
 * never from user input or an external API without sanitization first.
 *
 * @param {string|null} text
 * @returns {JSX.Element[]|null}
 */
export function renderMarkdown(text) {
  if (!text) return null;

  const lines = text.split('\n');
  const elements = [];
  let i = 0;

  // ── Inline: parse **bold** and `code` spans ────────────────────────────
  function parseBold(str) {
    // Split on **bold** and `code` tokens in one pass
    const parts = str.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
    return parts.map((part, idx) => {
      if (/^\*\*[^*]+\*\*$/.test(part))
        return <strong key={idx}>{part.slice(2, -2)}</strong>;
      if (/^`[^`]+`$/.test(part))
        return <code key={idx} className="md-code">{part.slice(1, -1)}</code>;
      return part;
    });
  }

  // ── Helper: parse a pipe-delimited table row into cell strings ──────────
  function parseRow(row) {
    return row.split('|').slice(1, -1).map((c) => c.trim());
  }

  while (i < lines.length) {
    const raw  = lines[i];
    const trimmed = raw.trim();

    // ── Custom fenced blocks :::blocktype ... ::: ─────────────────────────
    const fenceMatch = trimmed.match(/^:::(\w+)$/);
    if (fenceMatch) {
      const blockType = fenceMatch[1];
      i++;
      const blockLines = [];
      while (i < lines.length && lines[i].trim() !== ':::') {
        blockLines.push(lines[i].trim());
        i++;
      }
      i++; // consume closing :::

      // ── :::palette block ──────────────────────────────────────────────
      if (blockType === 'palette') {
        const swatches = blockLines
          .filter(Boolean)
          .map((line) => {
            const [hex, name, usage] = line.split('|').map((s) => s.trim());
            return { hex, name, usage };
          });

        elements.push(
          <div key={`palette-${i}`} className="md-palette">
            {swatches.map(({ hex, name, usage }, si) => (
              <div key={si} className="md-swatch">
                <div
                  className="md-swatch-color"
                  style={{ background: hex }}
                  title={hex}
                />
                <div className="md-swatch-info">
                  <span className="md-swatch-name">{name}</span>
                  <span className="md-swatch-hex">{hex}</span>
                  {usage && <span className="md-swatch-usage">{usage}</span>}
                </div>
              </div>
            ))}
          </div>
        );
        continue;
      }

      // ── :::typography block ───────────────────────────────────────────
      if (blockType === 'typography') {
        const fonts = blockLines
          .filter(Boolean)
          .map((line) => {
            const [family, classification, usage] = line
              .split('|')
              .map((s) => s.trim());
            return { family, classification, usage };
          });

        elements.push(
          <div key={`typo-${i}`} className="md-typography">
            {fonts.map(({ family, classification, usage }, fi) => (
              <div key={fi} className="md-font-row">
                <div
                  className="md-font-sample"
                  style={{ fontFamily: `'${family}', serif` }}
                >
                  Aa
                </div>
                <div className="md-font-meta">
                  <span className="md-font-name">{family}</span>
                  <span className="md-font-class">{classification}</span>
                  {usage && (
                    <span className="md-font-usage">{usage}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        );
        continue;
      }

      // Unknown block — skip
      continue;
    }

    // ── H1 ────────────────────────────────────────────────────────────────
    if (/^# (?!#)/.test(trimmed)) {
      elements.push(
        <h1 key={i} className="md-h1 serif-header">
          {parseBold(trimmed.replace(/^# /, ''))}
        </h1>
      );
      i++; continue;
    }

    // ── H2 ────────────────────────────────────────────────────────────────
    if (/^## (?!#)/.test(trimmed)) {
      elements.push(
        <h2 key={i} className="md-h2 serif-header">
          {parseBold(trimmed.replace(/^## /, ''))}
        </h2>
      );
      i++; continue;
    }

    // ── H3 ────────────────────────────────────────────────────────────────
    if (/^### (?!#)/.test(trimmed)) {
      elements.push(
        <h3 key={i} className="md-h3 mono-accent">
          {parseBold(trimmed.replace(/^### /, ''))}
        </h3>
      );
      i++; continue;
    }

    // ── H4 ────────────────────────────────────────────────────────────────
    if (/^#### /.test(trimmed)) {
      elements.push(
        <h4 key={i} className="md-h4 mono-accent">
          {parseBold(trimmed.replace(/^#### /, ''))}
        </h4>
      );
      i++; continue;
    }

    // ── Horizontal Rule ───────────────────────────────────────────────────
    if (/^---+$/.test(trimmed)) {
      elements.push(<hr key={i} className="md-hr" />);
      i++; continue;
    }

    // ── Image: ![Caption](src) ────────────────────────────────────────────
    const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]*)\)$/);
    if (imgMatch) {
      const [, caption, src] = imgMatch;
      const isPlaceholder = src.startsWith('PLACEHOLDER');
      const label = isPlaceholder
        ? src.replace('PLACEHOLDER_', '').replace(/_/g, ' ')
        : null;

      elements.push(
        <figure key={i} className="md-figure">
          {isPlaceholder ? (
            <div className="md-img-placeholder">
              <div className="md-placeholder-inner">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
                <span className="md-placeholder-label">
                  {label ? `[ ${label.toUpperCase()} ]` : '[ SCREENSHOT ]'}
                </span>
              </div>
            </div>
          ) : (
            <img
              src={src}
              alt={caption}
              className="md-img"
              loading="lazy"
            />
          )}
          {caption && (
            <figcaption className="md-figcaption">{caption}</figcaption>
          )}
        </figure>
      );
      i++; continue;
    }

    // ── Pipe Table ────────────────────────────────────────────────────────
    if (trimmed.startsWith('|')) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }
      const dataRows = tableLines.filter(
        (l) => !/^\|[\s\-|:]+\|$/.test(l)
      );
      if (dataRows.length === 0) continue;

      const [headerRow, ...bodyRows] = dataRows;
      const headers = parseRow(headerRow);

      elements.push(
        <div key={`table-${i}`} className="md-table-wrapper">
          <table className="md-table">
            <thead>
              <tr>
                {headers.map((h, ci) => <th key={ci}>{parseBold(h)}</th>)}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, ri) => (
                <tr key={ri}>
                  {parseRow(row).map((cell, ci) => (
                    <td key={ci}>{parseBold(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // ── Unordered List ────────────────────────────────────────────────────
    if (/^[-*] /.test(trimmed)) {
      const listItems = [];
      while (i < lines.length && /^[-*] /.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^[-*] /, ''));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="md-ul">
          {listItems.map((item, li) => (
            <li key={li}>{parseBold(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // ── Ordered List ──────────────────────────────────────────────────────
    if (/^\d+\. /.test(trimmed)) {
      const listItems = [];
      while (i < lines.length && /^\d+\. /.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\. /, ''));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="md-ol">
          {listItems.map((item, li) => (
            <li key={li}>{parseBold(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // ── Empty line — skip (CSS margins handle spacing) ────────────────────
    if (trimmed === '') { i++; continue; }

    // ── Paragraph ─────────────────────────────────────────────────────────
    elements.push(
      <p key={i} className="md-p">
        {parseBold(trimmed)}
      </p>
    );
    i++;
  }

  return elements;
}
