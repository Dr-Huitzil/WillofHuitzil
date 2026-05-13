/**
 * Parses a plain-text pseudo-markdown string into JSX.
 * Supports ### headings only. Does NOT support ####, ##, or #.
 *
 * SECURITY NOTE: `text` must only ever come from the local data files,
 * never from user input or an external API without sanitization first.
 *
 * @param {string|null} text - The raw markdown-like string to render.
 * @returns {JSX.Element[]|null}
 */
export function renderMarkdown(text) {
  if (!text) return null;

  return text.split('\n').map((line, i) => {
    const trimmed = line.trim();

    // Anchored regex: matches exactly "### " prefix, excludes "####"
    if (/^### (?!#)/.test(trimmed)) {
      return (
        <h3 key={i} className="mono-accent">
          {trimmed.replace(/^### /, '')}
        </h3>
      );
    }

    return <p key={i}>{line}</p>;
  });
}
