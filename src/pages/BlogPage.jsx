import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import BlogCard from '../components/sections/Blog/BlogCard';
import BlogModal from '../components/sections/Blog/BlogModal';
import { blogPosts } from '../data/blogData';
import styles from './BlogPage.module.css';

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    blogPosts.forEach(post => {
      post.tags?.forEach(tag => tags.add(tag));
    });
    return ['All', ...Array.from(tags).sort()];
  }, []);

  // Filter posts based on search query and selected tag
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTag = selectedTag === 'All' || post.tags?.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

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
              <div className="pill section-pill">
                KNOWLEDGE_BASE
              </div>
              <h1 className="serif-header serif-glow section-title">Logs & Articles</h1>
            </div>
          </div>

          <div className={styles.controls}>
            <div className={styles.searchBar}>
              <Search size={18} className={styles.searchIcon} />
              <input 
                type="text" 
                placeholder="Search logs..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
            
            <div className={styles.tagFilters}>
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`${styles.filterTag} ${selectedTag === tag ? styles.active : ''}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              ))}
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
                <p>No articles match your current filter criteria.</p>
                <button onClick={() => {setSearchQuery(''); setSelectedTag('All');}} className={styles.clearBtn}>
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
