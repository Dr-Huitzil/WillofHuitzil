// src/pages/BlogPage.jsx

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Filter, ArrowUpDown, X, RotateCcw } from 'lucide-react';
import BlogCard from '@/components/sections/Blog/BlogCard';
import BlogModal from '@/components/sections/Blog/BlogModal';
import DropdownSelect from '@/components/ui/DropdownSelect/DropdownSelect';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';
import { blogPosts } from '@/data/blogData';
import styles from './BlogPage.module.css';

const FILTER_OPTIONS = [
  { id: 'all', label: 'All' },
  { id: 'school', label: 'School' },
  { id: 'work', label: 'Work' },
  { id: 'personal', label: 'Personal' }
];

const SORT_OPTIONS = [
  { id: 'most-recent', label: 'Most Recent' },
  { id: 'oldest', label: 'Oldest to Most Recent' },
  { id: 'shortest', label: 'Shortest to Longest' },
  { id: 'longest', label: 'Longest to Shortest' }
];

// Helper to extract numeric minutes from readTime string (e.g. "3 min read" -> 3)
const parseReadTime = (readTimeString) => {
  if (!readTimeString) return 0;
  const match = String(readTimeString).match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
};

// Helper to parse date to timestamp
const parseDate = (dateString) => {
  const parsed = new Date(dateString).getTime();
  return isNaN(parsed) ? 0 : parsed;
};

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedSort, setSelectedSort] = useState('most-recent');

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const filterDropdownRef = useRef(null);
  const sortDropdownRef = useRef(null);
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(e.target)) {
        setIsFilterOpen(false);
      }
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(e.target)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const filtered = blogPosts.filter(post => {
      // 1. Search Query filter (matches title, summary, or tags)
      const matchesSearch = !query ||
        post.title.toLowerCase().includes(query) ||
        post.summary.toLowerCase().includes(query) ||
        post.tags?.some(tag => tag.toLowerCase().includes(query));

      // 2. Filter by school, work, personal (or all)
      const matchesCategory = selectedFilter === 'all' ||
        post.tags?.some(tag => tag.toLowerCase() === selectedFilter.toLowerCase());

      return matchesSearch && matchesCategory;
    });

    // 3. Sort posts
    return filtered.sort((a, b) => {
      switch (selectedSort) {
        case 'shortest': {
          const diff = parseReadTime(a.readTime) - parseReadTime(b.readTime);
          return diff !== 0 ? diff : (a.content?.length || 0) - (b.content?.length || 0);
        }
        case 'longest': {
          const diff = parseReadTime(b.readTime) - parseReadTime(a.readTime);
          return diff !== 0 ? diff : (b.content?.length || 0) - (a.content?.length || 0);
        }
        case 'oldest': {
          return parseDate(a.date) - parseDate(b.date);
        }
        case 'most-recent':
        default: {
          return parseDate(b.date) - parseDate(a.date);
        }
      }
    });
  }, [searchQuery, selectedFilter, selectedSort]);

  const handleResetAll = () => {
    setSearchQuery('');
    setSelectedFilter('all');
    setSelectedSort('most-recent');
    setIsFilterOpen(false);
    setIsSortOpen(false);
  };

  const isFilteredOrSorted = searchQuery !== '' || selectedFilter !== 'all' || selectedSort !== 'most-recent';

  const currentFilterLabel = FILTER_OPTIONS.find(f => f.id === selectedFilter)?.label || 'All';
  const currentSortLabel = SORT_OPTIONS.find(s => s.id === selectedSort)?.label || 'Most Recent';

  return (
    <div className="portfolio-app-root">
      <div className={`hud-container hud-surface ${styles.blogPageContainer}`}>
        <main className={styles.blogMain}>

          <div className={styles.pageHeader}>
            <button
              className={`mono-accent ${styles.backBtn}`}
              onClick={() => navigate('/')}
            >
              <ArrowLeft size={16} />
              RETURN_TO_SYSTEM
            </button>

            <div className={styles.titleContainer}>
              <SectionHeader tag="KNOWLEDGE_BASE" title="Logs & Articles" as="h1" />
            </div>
          </div>

          <div className={styles.controls}>
            <div className={styles.controlsBar}>
              {/* Search Bar */}
              <div className={styles.searchBar}>
                <Search size={18} className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search logs by title, content, or tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                  aria-label="Search articles"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className={styles.clearSearchBtn}
                    aria-label="Clear search input"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              {/* Filter and Sort Group */}
              <div className={styles.filterSortGroup}>
                <DropdownSelect
                  ref={filterDropdownRef}
                  icon={<Filter size={14} />}
                  label="FILTER"
                  activeLabel={currentFilterLabel}
                  isActive={selectedFilter !== 'all'}
                  isOpen={isFilterOpen}
                  onToggle={() => { setIsFilterOpen(prev => !prev); setIsSortOpen(false); }}
                  dropdownHeader="FILTER BY TAG"
                  options={FILTER_OPTIONS}
                  selectedId={selectedFilter}
                  onSelect={(id) => { setSelectedFilter(id); setIsFilterOpen(false); }}
                />

                <DropdownSelect
                  ref={sortDropdownRef}
                  icon={<ArrowUpDown size={14} />}
                  label="SORT"
                  activeLabel={currentSortLabel}
                  isActive={selectedSort !== 'most-recent'}
                  isOpen={isSortOpen}
                  onToggle={() => { setIsSortOpen(prev => !prev); setIsFilterOpen(false); }}
                  dropdownHeader="SORT ARTICLES"
                  options={SORT_OPTIONS}
                  selectedId={selectedSort}
                  onSelect={(id) => { setSelectedSort(id); setIsSortOpen(false); }}
                />

                {/* Reset button when non-default filter/sort/search is active */}
                {isFilteredOrSorted && (
                  <button
                    type="button"
                    className={`${styles.resetBtn} mono-accent`}
                    onClick={handleResetAll}
                    title="Reset all filters and sorting"
                  >
                    <RotateCcw size={13} />
                    RESET
                  </button>
                )}
              </div>
            </div>

            {/* Results meta bar */}
            <div className={styles.statusBar}>
              <div className={`mono-accent ${styles.countBadge}`}>
                SHOWING <span className={styles.countHighlight}>{filteredPosts.length}</span> OF {blogPosts.length} ARTICLES
              </div>

              {isFilteredOrSorted && (
                <div className={styles.activeChips}>
                  {selectedFilter !== 'all' && (
                    <span className={styles.chip}>
                      TAG: {currentFilterLabel.toUpperCase()}
                      <button
                        type="button"
                        onClick={() => setSelectedFilter('all')}
                        className={styles.chipRemoveBtn}
                        aria-label="Remove tag filter"
                      >
                        <X size={11} />
                      </button>
                    </span>
                  )}
                  {searchQuery && (
                    <span className={styles.chip}>
                      "{searchQuery}"
                      <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        className={styles.chipRemoveBtn}
                        aria-label="Clear search"
                      >
                        <X size={11} />
                      </button>
                    </span>
                  )}
                  {selectedSort !== 'most-recent' && (
                    <span className={styles.chip}>
                      SORT: {currentSortLabel.toUpperCase()}
                      <button
                        type="button"
                        onClick={() => setSelectedSort('most-recent')}
                        className={styles.chipRemoveBtn}
                        aria-label="Reset sort"
                      >
                        <X size={11} />
                      </button>
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className={styles.postsGrid}>
            {filteredPosts.length > 0 ? (
              filteredPosts.map(post => (
                <BlogCard
                  key={post.id}
                  post={post}
                  onClick={() => setSelectedPost(post)}
                />
              ))
            ) : (
              <div className={styles.emptyState}>
                <span className="mono-accent">NO_LOGS_FOUND</span>
                <p>No articles match your current filter and sort criteria.</p>
                <button onClick={handleResetAll} className={styles.clearBtn}>
                  CLEAR_FILTERS
                </button>
              </div>
            )}
          </div>

        </main>
      </div>

      {selectedPost && (
        <BlogModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </div>
  );
};

export default BlogPage;
