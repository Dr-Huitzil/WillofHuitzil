import React, { useState, useEffect, useCallback } from 'react';
import { MessageSquare, Send, User, AlertCircle, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { fetchComments, addComment, formatCommentDate } from '@/services/blogInteractions';

import styles from './CommentSection.module.css';

const MAX_COMMENT_LENGTH = 1000;

const CommentSection = ({ postId }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [isAuthorFocused, setIsAuthorFocused] = useState(false);
  const [isContentFocused, setIsContentFocused] = useState(false);
  const [honeypot, setHoneypot] = useState(''); // Anti-spam trap
  const [statusMessage, setStatusMessage] = useState(null);

  const isAuthorFloating = isAuthorFocused || Boolean(author.trim());
  const isContentFloating = isContentFocused || Boolean(content.trim());

  // Load comments
  const loadComments = useCallback(async () => {
    if (!postId) return;
    setLoading(true);
    try {
      const data = await fetchComments(postId);
      setComments(data);
    } catch (err) {
      console.error('Failed to load comments:', err);
    } finally {
      setLoading(false);
    }
  }, [postId]);

  useEffect(() => {
    loadComments();
  }, [loadComments]);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    setSubmitting(true);
    setStatusMessage(null);

    try {
      const newComment = await addComment(postId, {
        author,
        content,
        honeypot
      });

      // Prepend the new comment to the list
      setComments((prev) => [newComment, ...prev]);
      setContent('');
      setAuthor('');
      setStatusMessage({ type: 'success', text: 'Comment published successfully!' });

      setTimeout(() => {
        setStatusMessage(null);
      }, 4000);
    } catch (err) {
      console.error('Failed to submit comment:', err);
      setStatusMessage({
        type: 'error',
        text: 'Failed to post comment. Please try again.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.commentSectionWrapper}>
      {/* Expandable Comments Trigger Button */}
      <button
        type="button"
        className={`${styles.toggleButton} ${isExpanded ? styles.toggleActive : ''}`}
        onClick={() => setIsExpanded((prev) => !prev)}
        aria-expanded={isExpanded}
        aria-controls={`comment-stream-${postId}`}
      >
        <div className={styles.toggleLeft}>
          <div className={styles.iconCircle}>
            <MessageSquare size={16} className={styles.toggleIcon} />
          </div>
          <div className={styles.toggleMeta}>
            <div className={`mono-accent ${styles.toggleTitle}`}>
              COMMENTS <span className={styles.commentCount}>[{loading ? '...' : comments.length}]</span>
            </div>
            <div className={`mono-accent ${styles.toggleSubtitle}`}>
              {isExpanded
                ? 'Click to collapse'
                : comments.length === 0
                ? 'Leave feedback or peer review'
                : `Read ${comments.length} comment${comments.length === 1 ? '' : 's'} & discussion`}
            </div>
          </div>
        </div>

        <div className={styles.toggleRight}>
          <span className={`mono-accent ${styles.actionLabel}`}>
            {isExpanded ? 'CLOSE_COMMENTS' : 'OPEN_COMMENTS'}
          </span>
          {isExpanded ? (
            <ChevronUp size={16} className={styles.chevron} />
          ) : (
            <ChevronDown size={16} className={styles.chevron} />
          )}
        </div>
      </button>

      {/* Expanded Container */}
      {isExpanded && (
        <div id={`comment-stream-${postId}`} className={styles.expandedContent}>
          <div className={`mono-accent ${styles.streamNotice}`}>
            FEEDBACK_STREAM // PUBLIC // NO SIGN-IN REQUIRED
          </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className={styles.commentForm}>
        {/* Invisible Honeypot field for bot detection */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <label htmlFor={`website-${postId}`}>Leave this field empty</label>
          <input
            id={`website-${postId}`}
            type="text"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex="-1"
            autoComplete="off"
          />
        </div>

        <div className={styles.inputRow}>
          <div className={styles.authorInputWrapper}>
            <User
              size={14}
              className={`${styles.inputIcon} ${
                isAuthorFocused ? styles.inputIconFocused : ''
              }`}
            />
            <label
              htmlFor={`comment-author-${postId}`}
              className={`mono-accent ${styles.floatingLabel} ${styles.authorFloatingLabel} ${
                isAuthorFloating ? styles.floatingLabelActive : ''
              }`}
            >
              Display name
            </label>
            <input
              id={`comment-author-${postId}`}
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              onFocus={() => setIsAuthorFocused(true)}
              onBlur={() => setIsAuthorFocused(false)}
              className={styles.authorInput}
              maxLength={60}
              disabled={submitting}
              autoComplete="nickname"
            />
          </div>
        </div>

        <div className={styles.textareaWrapper}>
          <label
            htmlFor={`comment-content-${postId}`}
            className={`mono-accent ${styles.floatingLabel} ${styles.textareaFloatingLabel} ${
              isContentFloating ? styles.floatingLabelActive : ''
            }`}
          >
            {isContentFloating ? 'Comment' : 'Write a comment, note, or peer review...'}
          </label>
          <textarea
            id={`comment-content-${postId}`}
            value={content}
            onChange={(e) => setContent(e.target.value.slice(0, MAX_COMMENT_LENGTH))}
            onFocus={() => setIsContentFocused(true)}
            onBlur={() => setIsContentFocused(false)}
            className={styles.commentTextarea}
            rows={3}
            required
            disabled={submitting}
          />
          <div className={`mono-accent ${styles.charCounter}`}>
            {content.length}/{MAX_COMMENT_LENGTH}
          </div>
        </div>

        {statusMessage && (
          <div
            className={`${styles.statusAlert} ${
              statusMessage.type === 'success' ? styles.statusSuccess : styles.statusError
            } mono-accent`}
          >
            {statusMessage.type === 'success' ? (
              <CheckCircle2 size={14} />
            ) : (
              <AlertCircle size={14} />
            )}
            <span>{statusMessage.text}</span>
          </div>
        )}

        <div className={styles.formFooter}>
          <button
            type="submit"
            disabled={submitting || !content.trim()}
            className={`${styles.submitBtn} mono-accent`}
          >
            {submitting ? (
              <span>PUBLISHING...</span>
            ) : (
              <>
                <span>POST_COMMENT</span>
                <Send size={13} />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className={styles.commentsList}>
        {loading ? (
          <div className={`mono-accent ${styles.loadingState}`}>
            INITIALIZING_COMMENT_STREAM...
          </div>
        ) : comments.length === 0 ? (
          <div className={styles.emptyState}>
            <p className={`mono-accent ${styles.emptyText}`}>
              No comments yet. Be the first to leave feedback or a question!
            </p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className={styles.commentCard}>
              <div className={styles.commentHeader}>
                <div className={styles.authorBadge}>
                  <div className={styles.avatar}>
                    {(comment.author || 'A').charAt(0).toUpperCase()}
                  </div>
                  <span className={`mono-accent ${styles.authorName}`}>
                    {comment.author || 'Anonymous Guest'}
                  </span>
                </div>
                <span className={`mono-accent ${styles.commentDate}`}>
                  {formatCommentDate(comment.createdAt)}
                </span>
              </div>
              <div className={styles.commentBody}>
                <p>{comment.content}</p>
              </div>
            </div>
          ))
        )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
