import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './BlogCard.module.css';

const BlogCard = ({ post, onClick }) => {
  return (
    <div className={styles.blogCard} onClick={onClick} role="button" tabIndex={0}>


      <div className={styles.contentContainer}>


        <h3 className={`serif-header ${styles.title}`}>{post.title}</h3>

        <div className={styles.metaInfo}>
          <div className={styles.metaAuthor}>
            {post.author}
          </div>
          <div className={styles.metaSecondary}>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className={`${styles.readMore} mono-accent`}>
          <span>READ_LOG</span>
          <ArrowRight size={16} className={styles.arrow} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
