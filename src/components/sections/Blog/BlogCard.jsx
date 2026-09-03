import React from 'react';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import styles from './BlogCard.module.css';

const BlogCard = ({ post, onClick }) => {
  return (
    <div className={styles.blogCard} onClick={onClick} role="button" tabIndex={0}>
      <div className={styles.imageContainer}>
        {post.imagePlaceholder ? (
          <div className={styles.placeholderImg}>
            <div className="mono-accent">
              [{post.imagePlaceholder.replace('PLACEHOLDER_', '').replace(/_/g, ' ')}]
            </div>
          </div>
        ) : (
          <img src={post.image} alt={post.title} className={styles.cardImage} />
        )}
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.metaInfo}>
          <span className={styles.metaItem}>
            <Calendar size={12} />
            {post.date}
          </span>
          <span className={styles.metaItem}>
            <Clock size={12} />
            {post.readTime}
          </span>
        </div>

        <h3 className={`serif-header ${styles.title}`}>{post.title}</h3>
        <p className={styles.summary}>{post.summary}</p>

        <div className={styles.tags}>
          {post.tags?.slice(0, 3).map((tag, i) => (
            <span key={i} className={`mono-accent ${styles.tag}`}>
              [{tag.toUpperCase()}]
            </span>
          ))}
          {post.tags?.length > 3 && (
            <span className={`mono-accent ${styles.tag}`}>
              [+{post.tags.length - 3}]
            </span>
          )}
        </div>

        <div className={styles.readMore}>
          <span className="mono-accent">READ_LOG</span>
          <ArrowRight size={16} className={styles.arrow} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
