// src/components/sections/Projects/ScriptExplorer/ScriptExplorer.jsx

import React, { useState } from 'react';
import { Copy, Check, ExternalLink, Terminal, Shield, CheckCircle2 } from 'lucide-react';
import styles from './ScriptExplorer.module.css';

const ScriptExplorer = ({ scripts = [] }) => {
  if (!scripts || scripts.length === 0) return null;

  const [activeId, setActiveId] = useState(scripts[0].id);
  const [copied, setCopied] = useState(false);

  const activeScript = scripts.find((s) => s.id === activeId) || scripts[0];

  const handleCopy = () => {
    if (!activeScript?.code) return;
    navigator.clipboard.writeText(activeScript.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const codeLines = (activeScript.code || '').split('\n');

  return (
    <div className={styles.explorerContainer}>
      {/* Script Selector Tabs */}
      <div className={styles.selectorBar}>
        {scripts.map((script) => (
          <button
            key={script.id}
            type="button"
            className={`${styles.scriptTab} ${script.id === activeScript.id ? styles.scriptTabActive : ''}`}
            onClick={() => {
              setActiveId(script.id);
              setCopied(false);
            }}
          >
            <Terminal size={14} className={styles.tabIcon} />
            <span className={styles.tabName}>{script.name}</span>
            <span className={styles.tabCategory}>{script.category}</span>
          </button>
        ))}
      </div>

      {/* Script Details Header */}
      <div className={styles.scriptHeader}>
        <div className={styles.scriptIdentity}>
          <div className={styles.titleRow}>
            <h4 className={styles.scriptTitle}>{activeScript.name}</h4>
            <span className={`${styles.langBadge} mono-accent`}>
              {activeScript.language?.toUpperCase() || 'POWERSHELL'}
            </span>
          </div>
          <p className={styles.scriptPath}>
            <code>{activeScript.path}</code>
          </p>
          <p className={styles.scriptDesc}>{activeScript.description}</p>
        </div>

        <div className={styles.scriptActions}>
          <button
            type="button"
            className={`${styles.actionBtn} ${copied ? styles.actionBtnCopied : ''} mono-accent`}
            onClick={handleCopy}
            title="Copy script to clipboard"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>{copied ? 'COPIED!' : 'COPY SCRIPT'}</span>
          </button>

          {activeScript.githubUrl && (
            <a
              href={activeScript.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.actionBtnSecondary} mono-accent`}
              title="Open full file on GitHub"
            >
              <ExternalLink size={14} />
              <span>VIEW ON GITHUB</span>
            </a>
          )}
        </div>
      </div>

      {/* Architectural Highlights */}
      {activeScript.highlights && activeScript.highlights.length > 0 && (
        <div className={styles.highlightsBox}>
          <div className={styles.highlightsHeader}>
            <Shield size={14} className={styles.highlightsIcon} />
            <span className="mono-accent">PRODUCTION HARDENING &amp; HIGHLIGHTS</span>
          </div>
          <ul className={styles.highlightsList}>
            {activeScript.highlights.map((item, idx) => (
              <li key={idx}>
                <CheckCircle2 size={13} className={styles.bulletIcon} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Terminal Code Viewer */}
      <div className={styles.terminalWindow}>
        <div className={styles.terminalBar}>
          <div className={styles.terminalDots}>
            <span className={`${styles.dot} ${styles.dotRed}`} />
            <span className={`${styles.dot} ${styles.dotYellow}`} />
            <span className={`${styles.dot} ${styles.dotGreen}`} />
          </div>
          <span className={styles.terminalTitle}>{activeScript.name}</span>
          <span className={styles.terminalCount}>{codeLines.length} LINES</span>
        </div>

        <div className={styles.codeViewport}>
          <div className={styles.gutter}>
            {codeLines.map((_, i) => (
              <span key={i} className={styles.lineNumber}>
                {i + 1}
              </span>
            ))}
          </div>
          <pre className={styles.codeArea}>
            <code>{activeScript.code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ScriptExplorer;
