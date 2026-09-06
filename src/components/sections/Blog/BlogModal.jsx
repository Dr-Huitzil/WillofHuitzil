// src/components/sections/Blog/BlogModal.jsx

import React, { useCallback, useState, useEffect } from 'react';
import { FileText, Calendar, Clock, Eye, ChevronRight, ChevronDown, Heart } from 'lucide-react';
import ModalShell from '@/components/ui/ModalShell/ModalShell';
import { renderMarkdown } from '@/utils/renderMarkdown';
import CommentSection from './CommentSection/CommentSection';
import {
  getPostStats,
  incrementViews,
  toggleLike,
  checkIsLiked
} from '@/services/blogInteractions';
import styles from './BlogModal.module.css';

const BlogModal = ({ post, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [viewsCount, setViewsCount] = useState(post?.views || 0);
  const [likesCount, setLikesCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Fetch initial stats and record view
  useEffect(() => {
    if (!post?.id) return;

    let isMounted = true;

    // Check if user already liked
    setIsLiked(checkIsLiked(post.id));

    // Increment view counter and load live stats
    const initStats = async () => {
      await incrementViews(post.id);
      const stats = await getPostStats(post.id);
      if (isMounted) {
        // Fall back to static post.views if live views is 0
        const parsedStatic = parseInt(String(post.views).replace(/\D/g, ''), 10) || 0;
        setViewsCount(Math.max(stats.views || 0, parsedStatic));
        setLikesCount(stats.likes || 0);
      }
    };

    initStats();

    return () => {
      isMounted = false;
    };
  }, [post?.id, post?.views]);

  // Handle like toggle
  const handleToggleLike = async () => {
    if (!post?.id) return;
    const result = await toggleLike(post.id);
    setIsLiked(result.isLiked);
    setLikesCount(result.newLikesCount);
  };

  if (!post) return null;

  const handleToggleExpand = useCallback(
    () => setIsExpanded((prev) => !prev),
    []
  );

  return (
    <ModalShell
      onClose={onClose}
      ariaLabel={`${post.title} by ${post.author}`}
    >
      <div className={`${styles.blogModal} ${isExpanded ? styles.expanded : ''}`}>
        <div className={styles.modalContentWrapper}>
          {/* LEFT SIDEBAR: Metadata */}
          <div className={styles.modalLeft}>
            <div className={styles.sidebarMeta}>
              <div className={styles.iconBox}>
                <FileText size={28} color="var(--accent-teal-bright)" />
              </div>

              <div className={styles.mainMeta}>
                <div className={styles.modalTags}>
                  {post.tags?.map((tag) => (
                    <span key={tag} className={`mono-accent ${styles.tag}`}>
                      [{tag.toUpperCase()}]
                    </span>
                  ))}
                </div>
                <h2 className={`serif-header ${styles.blogTitle}`}>{post.title}</h2>
                <div className={`mono-accent ${styles.author}`}>{post.author}</div>
              </div>

              <div className={styles.subMeta}>
                <div className={`mono-accent ${styles.metaItem}`}>
                  <Calendar size={14} /> {post.date}
                </div>
                <div className={`mono-accent ${styles.metaItem}`}>
                  <Clock size={14} /> {post.readTime}
                </div>
                <div className={`mono-accent ${styles.metaItem}`}>
                  <Eye size={14} /> {viewsCount} Views
                </div>
                <button
                  type="button"
                  className={`${styles.likeBtn} ${isLiked ? styles.liked : ''} mono-accent`}
                  onClick={handleToggleLike}
                  title={isLiked ? "Unlike post" : "Like post"}
                  aria-label="Like post"
                >
                  <Heart
                    size={14}
                    className={styles.heartIcon}
                    fill={isLiked ? "currentColor" : "none"}
                  />
                  <span>{likesCount} {likesCount === 1 ? 'Like' : 'Likes'}</span>
                </button>
              </div>

              <button
                className={`${styles.expandBtn} mono-accent`}
                onClick={handleToggleExpand}
                aria-expanded={isExpanded}
                aria-controls="blog-technical-brief"
              >
                {isExpanded ? 'CLOSE_READER' : 'READ_LOG'}
                {isExpanded
                  ? <ChevronDown size={14} />
                  : <ChevronRight size={14} />}
              </button>
            </div>
          </div>

          {/* RIGHT PANEL: Content */}
          <div className={styles.modalRight}>
            <div className={styles.mobileHideContent}>
              <div className={styles.contentSection}>
                <h4 className={`mono-accent ${styles.contentTitle}`}>
                  SUMMARY
                </h4>
                <div className={styles.detailsList}>
                  <p className={styles.detailItem} style={{ color: 'var(--text-sans-slate)', lineHeight: 1.7, fontSize: '1rem' }}>
                    {post.summary}
                  </p>
                </div>
              </div>
            </div>

            {isExpanded && (
              <div id="blog-technical-brief" className={styles.expandedInfoSection}>
                <h4 className={`mono-accent ${styles.contentTitle}`}>
                  ARTICLE
                </h4>
                <div className={styles.longDescription}>
                  {renderMarkdown(post.content)}
                </div>
              </div>
            )}

            {/* PEER COMMENTS */}
            <CommentSection postId={post.id} />
          </div>
        </div>
      </div>
    </ModalShell>
  );
};

export default BlogModal;
