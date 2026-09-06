import { introPost } from './blogPosts/introPost';
import { obsidianPost } from './blogPosts/obsidianPost';
import { apReplacementPost } from './blogPosts/apReplacementPost';
import { schoolResumePost } from './blogPosts/schoolResumePost';
import { firstWeekCSO } from './blogPosts/firstWeekCSO';

export const blogPosts = [
  {
    id: 1,
    slug: 'welcome-to-my-portfolio',
    title: 'Welcome to My Portfolio',
    summary: 'A brief introduction to my newly redesigned portfolio and what to expect from this digital space.',
    date: 'September 2, 2026',
    author: 'Ivan Alier-Reyes',
    views: 50,
    readTime: '2 min read',
    tags: ['Personal', 'Portfolio', 'Introduction'],
    //imagePlaceholder: 'PLACEHOLDER_PORTFOLIO_HOME',
    content: introPost
  },
  {
    id: 2,
    slug: 'down-the-obsidian-rabbit-hole',
    title: 'Down the Obsidian Rabbit Hole',
    summary: 'Discovering Obsidian for knowledge management, bidirectional linking, and building a second brain.',
    date: 'August 15, 2026',
    author: 'Ivan Alier-Reyes',
    views: 20,
    readTime: '4 min read',
    tags: ['Personal', 'Obsidian', 'Knowledge Management'],
    //imagePlaceholder: 'PLACEHOLDER_OBSIDIAN_GRAPH',
    content: obsidianPost
  },
  {
    id: 3,
    slug: 'ap-replacement-project',
    title: 'Scaling Heights: The AP Replacement Project',
    summary: 'Lessons learned from a major Access Point deployment, customizing the Meraki dashboard, and overcoming a fear of heights.',
    date: 'July 20, 2026',
    author: 'Ivan Alier-Reyes',
    views: 32,
    readTime: '5 min read',
    tags: ['Work', 'Networking', 'Meraki', 'Infrastructure'],
    //imagePlaceholder: 'PLACEHOLDER_MERAKI_DASHBOARD',
    content: apReplacementPost
  },
  {
    id: 4,
    slug: 'resuming-bachelors-cs',
    title: 'The "1 Year Break" That Took 3 Years',
    summary: 'Excited to announce my return to my Computer Science degree after gaining 3 years of real-world IT experience.',
    date: 'June 10, 2026',
    author: 'Ivan Alier-Reyes',
    views: 21,
    readTime: '3 min read',
    tags: ['School', 'Computer Science', 'Education', 'Career Growth'],
    //imagePlaceholder: 'PLACEHOLDER_CS_CODE_SNIPPET',
    content: schoolResumePost
  },
  {
    id: 5,
    slug: 'first-week-cso',
    title: 'First Week in the Computer Science Online Program',
    summary: 'Reflections on my first week in the Computer Science Online program, including initial impressions, assignments, and excitement for the journey ahead.',
    date: 'September 5, 2026',
    author: 'Ivan Alier-Reyes',
    views: 15,
    readTime: '4 min read',
    tags: ['School', 'Computer Science', 'Online Learning', 'Reflections'],
    //imagePlaceholder: 'PLACEHOLDER_CSO_PROGRAM',
    content: firstWeekCSO
  }
];
