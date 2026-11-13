// src/components/sections/Projects/ScriptExplorer/ScriptExplorer.jsx

import React, { useState, useMemo } from 'react';
import {
  Copy,
  Check,
  ExternalLink,
  Terminal,
  Folder,
  FolderOpen,
  FileCode,
  Search,
  X,
  ChevronRight,
  ChevronDown,
  Code2
} from 'lucide-react';
import styles from './ScriptExplorer.module.css';

const ScriptExplorer = ({ scripts = [] }) => {
  if (!scripts || scripts.length === 0) return null;

  const [activeId, setActiveId] = useState(scripts[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [collapsedFolders, setCollapsedFolders] = useState({});

  // Group scripts by folder / category
  const folderGroups = useMemo(() => {
    const groups = {};
    scripts.forEach((script) => {
      const folderKey = script.folder || 'general';
      if (!groups[folderKey]) {
        groups[folderKey] = {
          folderKey,
          categoryName: script.category || folderKey.replace('-', ' ').toUpperCase(),
          scripts: []
        };
      }
      groups[folderKey].scripts.push(script);
    });
    return Object.values(groups);
  }, [scripts]);

  // Filter scripts based on search query
  const filteredGroups = useMemo(() => {
    if (!searchQuery.trim()) return folderGroups;
    const q = searchQuery.toLowerCase();

    return folderGroups
      .map((group) => {
        const matchingScripts = group.scripts.filter(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.path.toLowerCase().includes(q) ||
            (s.description && s.description.toLowerCase().includes(q)) ||
            (s.category && s.category.toLowerCase().includes(q))
        );
        return {
          ...group,
          scripts: matchingScripts
        };
      })
      .filter((group) => group.scripts.length > 0);
  }, [folderGroups, searchQuery]);

  const totalFilteredCount = useMemo(() => {
    return filteredGroups.reduce((acc, g) => acc + g.scripts.length, 0);
  }, [filteredGroups]);

  const activeScript = useMemo(() => {
    return scripts.find((s) => s.id === activeId) || scripts[0];
  }, [scripts, activeId]);

  const toggleFolder = (folderKey) => {
    setCollapsedFolders((prev) => ({
      ...prev,
      [folderKey]: !prev[folderKey]
    }));
  };

  const handleCopy = () => {
    if (!activeScript?.code) return;
    navigator.clipboard.writeText(activeScript.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const codeLines = (activeScript.code || '').split('\n');

  return (
    <div className={styles.explorerLayout}>
      {/* ── Left Pane: IDE File Tree & Search ── */}
      <aside className={styles.treeSidebar}>
        {/* Search & Filter Header */}
        <div className={styles.searchBox}>
          <Search size={14} className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search 45 scripts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Filter scripts"
          />
          {searchQuery && (
            <button
              type="button"
              className={styles.clearSearchBtn}
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              <X size={13} />
            </button>
          )}
        </div>

        {/* Script Count Stats */}
        <div className={`${styles.statsRow} mono-accent`}>
          <span>SCRIPTS: {totalFilteredCount} OF {scripts.length}</span>
          {searchQuery && <span className={styles.filterBadge}>FILTERED</span>}
        </div>

        {/* Tree Explorer */}
        <div className={styles.treeScroll}>
          {filteredGroups.length === 0 ? (
            <div className={styles.noMatches}>
              <p>No scripts matching "{searchQuery}"</p>
              <button
                type="button"
                className={`${styles.resetBtn} mono-accent`}
                onClick={() => setSearchQuery('')}
              >
                Clear Filter
              </button>
            </div>
          ) : (
            filteredGroups.map((group) => {
              const isCollapsed = Boolean(collapsedFolders[group.folderKey]);
              const hasActiveScript = group.scripts.some((s) => s.id === activeScript.id);

              return (
                <div key={group.folderKey} className={styles.folderNode}>
                  <button
                    type="button"
                    className={`${styles.folderHeader} ${hasActiveScript ? styles.folderHeaderActive : ''}`}
                    onClick={() => toggleFolder(group.folderKey)}
                    aria-expanded={!isCollapsed}
                  >
                    <span className={styles.chevron}>
                      {isCollapsed ? <ChevronRight size={13} /> : <ChevronDown size={13} />}
                    </span>
                    <span className={styles.folderIcon}>
                      {isCollapsed ? <Folder size={14} /> : <FolderOpen size={14} />}
                    </span>
                    <span className={styles.folderTitle}>{group.categoryName}</span>
                    <span className={styles.folderCount}>{group.scripts.length}</span>
                  </button>

                  {!isCollapsed && (
                    <div className={styles.fileList}>
                      {group.scripts.map((script) => {
                        const isSelected = script.id === activeScript.id;
                        return (
                          <button
                            key={script.id}
                            type="button"
                            className={`${styles.fileItem} ${isSelected ? styles.fileItemActive : ''}`}
                            onClick={() => {
                              setActiveId(script.id);
                              setCopied(false);
                            }}
                          >
                            <FileCode size={13} className={styles.fileIcon} />
                            <span className={styles.fileName}>{script.name}</span>
                            <span className={styles.fileLines}>{script.lineCount}L</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </aside>

      {/* ── Right Pane: Code Viewer & Inspector ── */}
      <main className={styles.viewerPane}>
        {/* Breadcrumb & Path Bar */}
        <div className={styles.breadcrumbBar}>
          <div className={styles.breadcrumbs}>
            <span className={styles.crumbRepo}>windows-endpoint-automation-toolkit</span>
            <span className={styles.crumbSep}>/</span>
            <span className={styles.crumbFolder}>{activeScript.folder}</span>
            <span className={styles.crumbSep}>/</span>
            <span className={styles.crumbFile}>{activeScript.name}</span>
          </div>

          <div className={styles.metaBadges}>
            <span className={`${styles.langBadge} mono-accent`}>
              {activeScript.language?.toUpperCase() || 'POWERSHELL'}
            </span>
            <span className={`${styles.lineBadge} mono-accent`}>
              {codeLines.length} LINES
            </span>
          </div>
        </div>

        {/* Synopsis & Actions Header */}
        <div className={styles.viewerHeader}>
          <div className={styles.synopsisWrapper}>
            <div className={styles.titleLine}>
              <Terminal size={16} className={styles.terminalIcon} />
              <h4 className={styles.scriptHeading}>{activeScript.name}</h4>
            </div>
            <p className={styles.synopsisText}>{activeScript.description}</p>
          </div>

          <div className={styles.actionButtons}>
            <button
              type="button"
              className={`${styles.copyBtn} ${copied ? styles.copyBtnSuccess : ''} mono-accent`}
              onClick={handleCopy}
              title="Copy entire script to clipboard"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'COPIED!' : 'COPY SCRIPT'}</span>
            </button>

            {activeScript.githubUrl && (
              <a
                href={activeScript.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.githubBtn} mono-accent`}
                title="View original file on GitHub"
              >
                <ExternalLink size={14} />
                <span>GITHUB</span>
              </a>
            )}
          </div>
        </div>

        {/* Terminal Code Viewer */}
        <div className={styles.terminalContainer}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalDots}>
              <span className={`${styles.dot} ${styles.dotRed}`} />
              <span className={`${styles.dot} ${styles.dotYellow}`} />
              <span className={`${styles.dot} ${styles.dotGreen}`} />
            </div>
            <span className={styles.terminalTabTitle}>
              <Code2 size={12} className={styles.tabCodeIcon} />
              {activeScript.name}
            </span>
            <span className={styles.encodingTag}>UTF-8</span>
          </div>

          <div className={styles.editorBody}>
            <div className={styles.lineNumbers}>
              {codeLines.map((_, idx) => (
                <span key={idx} className={styles.lineNum}>
                  {idx + 1}
                </span>
              ))}
            </div>
            <pre className={styles.codeText}>
              <code>{activeScript.code}</code>
            </pre>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ScriptExplorer;
