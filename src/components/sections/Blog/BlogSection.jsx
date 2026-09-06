// src/components/sections/Blog/BlogSection.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from './BlogCard';
import BlogModal from './BlogModal';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';
import styles from './BlogSection.module.css';

const BlogSection = ({ posts = [] }) => {
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  if (!posts || posts.length === 0) return null;

  // Get only the 3 most recent posts
  const recentPosts = posts.slice(0, 3);

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
