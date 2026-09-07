// src/components/sections/Blog/BlogSection.jsx

import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from './BlogCard';
import BlogModal from './BlogModal';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';
import styles from './BlogSection.module.css';

const BlogSection = ({ posts = [] }) => {
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  // Get the 3 most recent posts sorted by date descending
  const recentPosts = useMemo(() => {
    return [...posts]
      .sort((a, b) => {
        const timeA = new Date(a.date).getTime() || 0;
        const timeB = new Date(b.date).getTime() || 0;
        return timeB - timeA || (b.id - a.id);
      })
      .slice(0, 3);
  }, [posts]);

  if (!posts || posts.length === 0) return null;

  return (
    <section className={styles.blogSection} id="blog">
      <div className={styles.sectionHeader}>
        <SectionHeader tag="LOGS // ARTICLES" title="Recent Insights" />
      </div>

      <div className={styles.blogGrid}>
        {recentPosts.map(post => (
          <BlogCard
            key={post.id}
            post={post}
            onClick={() => setSelectedPost(post)}
          />
        ))}
      </div>

      <div className={styles.ctaContainer}>
        <button
          className={`mono-accent ${styles.viewAllBtn}`}
          onClick={() => navigate('/blog')}
        >
          VIEW ALL POSTS ({posts.length})
        </button>
      </div>

      {selectedPost && (
        <BlogModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </section>
  );
};

export default BlogSection;
