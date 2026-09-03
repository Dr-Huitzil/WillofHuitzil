import {
  collection,
  doc,
  getDoc,
  setDoc,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  increment
} from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase';

// Helper to format timestamps gracefully
export const formatCommentDate = (dateOrTimestamp) => {
  if (!dateOrTimestamp) return 'Just now';

  // Firestore Timestamp support
  let date;
  if (typeof dateOrTimestamp.toDate === 'function') {
    date = dateOrTimestamp.toDate();
  } else if (dateOrTimestamp instanceof Date) {
    date = dateOrTimestamp;
  } else if (typeof dateOrTimestamp === 'number' || typeof dateOrTimestamp === 'string') {
    date = new Date(dateOrTimestamp);
  } else {
    return 'Just now';
  }

  const now = new Date();
  const diffInMinutes = Math.floor((now - date) / (1000 * 60));

  if (diffInMinutes < 1) return 'Just now';
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}d ago`;

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

/**
 * Fetch all comments for a given blog post
 */
export const fetchComments = async (postId) => {
  if (!postId) return [];

  if (isFirebaseConfigured && db) {
    try {
      const commentsRef = collection(db, 'posts', String(postId), 'comments');
      const q = query(commentsRef, orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);

      return snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          author: data.author || 'Anonymous',
          content: data.content || '',
          createdAt: data.createdAt || new Date()
        };
      });
    } catch (error) {
      console.error(`[Firebase] Failed to fetch comments for ${postId}:`, error);
    }
  }

  // Fallback to localStorage
  try {
    const local = localStorage.getItem(`local_comments_${postId}`);
    return local ? JSON.parse(local) : [];
  } catch {
    return [];
  }
};

/**
 * Add a new comment without requiring sign-in
 */
export const addComment = async (postId, { author, content, honeypot = '' }) => {
  if (!postId || !content || content.trim().length === 0) {
    throw new Error('Comment content cannot be empty.');
  }

  // Honeypot anti-spam check: if bot filled this hidden field, silently drop
  if (honeypot && honeypot.trim().length > 0) {
    return { id: 'honeypot_discarded', author, content, createdAt: new Date() };
  }

  const cleanAuthor = author && author.trim().length > 0 ? author.trim() : 'Anonymous Guest';
  const cleanContent = content.trim();

  if (isFirebaseConfigured && db) {
    try {
      const commentsRef = collection(db, 'posts', String(postId), 'comments');
      const newDocRef = await addDoc(commentsRef, {
        author: cleanAuthor,
        content: cleanContent,
        createdAt: serverTimestamp()
      });

      return {
        id: newDocRef.id,
        author: cleanAuthor,
        content: cleanContent,
        createdAt: new Date()
      };
    } catch (error) {
      console.error(`[Firebase] Failed to add comment for ${postId}:`, error);
      throw error;
    }
  }

  // Fallback to localStorage
  const localList = await fetchComments(postId);
  const newComment = {
    id: `local_${Date.now()}`,
    author: cleanAuthor,
    content: cleanContent,
    createdAt: new Date().toISOString()
  };
  const updated = [newComment, ...localList];
  localStorage.setItem(`local_comments_${postId}`, JSON.stringify(updated));
  return newComment;
};

/**
 * Get views and likes stats for a post
 */
export const getPostStats = async (postId) => {
  if (!postId) return { views: 0, likes: 0 };

  if (isFirebaseConfigured && db) {
    try {
      const postRef = doc(db, 'posts', String(postId));
      const snap = await getDoc(postRef);
      if (snap.exists()) {
        const data = snap.data();
        return {
          views: data.views || 0,
          likes: data.likes || 0
        };
      }
    } catch (error) {
      console.error(`[Firebase] Failed to fetch stats for ${postId}:`, error);
    }
  }

  // Fallback to localStorage
  try {
    const local = localStorage.getItem(`local_stats_${postId}`);
    return local ? JSON.parse(local) : { views: 0, likes: 0 };
  } catch {
    return { views: 0, likes: 0 };
  }
};

/**
 * Atomically increment post view count (guarded by sessionStorage to avoid reload spam)
 */
export const incrementViews = async (postId) => {
  if (!postId) return;

  const sessionKey = `viewed_post_${postId}`;
  if (sessionStorage.getItem(sessionKey)) {
    return; // Already counted for this session
  }

  sessionStorage.setItem(sessionKey, 'true');

  if (isFirebaseConfigured && db) {
    try {
      const postRef = doc(db, 'posts', String(postId));
      await setDoc(postRef, { views: increment(1) }, { merge: true });
    } catch (error) {
      console.error(`[Firebase] Failed to increment views for ${postId}:`, error);
    }
    return;
  }

  // Fallback to localStorage
  const stats = await getPostStats(postId);
  stats.views = (stats.views || 0) + 1;
  localStorage.setItem(`local_stats_${postId}`, JSON.stringify(stats));
};

/**
 * Check if the user has already liked this post on this device
 */
export const checkIsLiked = (postId) => {
  if (!postId) return false;
  return localStorage.getItem(`liked_post_${postId}`) === 'true';
};

/**
 * Toggle like on a post (atomic increment or decrement)
 */
export const toggleLike = async (postId) => {
  if (!postId) return { isLiked: false, newLikesCount: 0 };

  const isCurrentlyLiked = checkIsLiked(postId);
  const nextLikedState = !isCurrentlyLiked;
  const delta = nextLikedState ? 1 : -1;

  if (nextLikedState) {
    localStorage.setItem(`liked_post_${postId}`, 'true');
  } else {
    localStorage.removeItem(`liked_post_${postId}`);
  }

  if (isFirebaseConfigured && db) {
    try {
      const postRef = doc(db, 'posts', String(postId));
      await setDoc(postRef, { likes: increment(delta) }, { merge: true });
      const snap = await getDoc(postRef);
      return {
        isLiked: nextLikedState,
        newLikesCount: snap.exists() ? (snap.data().likes || 0) : 0
      };
    } catch (error) {
      console.error(`[Firebase] Failed to toggle like for ${postId}:`, error);
    }
  }

  // Fallback to localStorage
  const stats = await getPostStats(postId);
  stats.likes = Math.max(0, (stats.likes || 0) + delta);
  localStorage.setItem(`local_stats_${postId}`, JSON.stringify(stats));

  return {
    isLiked: nextLikedState,
    newLikesCount: stats.likes
  };
};
