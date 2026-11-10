export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}

export const forumPosts: ForumPost[] = [
  {
    slug: 'placeholder-discussion-one',
    category: 'General',
    categoryTone: 'purple',
    title: 'Placeholder forum thread — welcome',
    excerpt: 'Starter discussion copy until you import real community topics.',
    author: 'Moderator',
    age: '1d',
    commentsCount: 2,
    upvotes: 12,
    flair: 'Placeholder',
    body: [
      'Opening post placeholder for a general community thread.',
      'Replace this text with onboarding rules, links, or pinned announcements.',
    ],
    comments: [
      {
        author: 'MemberOne',
        age: '20h',
        score: 4,
        body: 'Placeholder reply — forum voting and nesting remain functional.',
      },
      {
        author: 'MemberTwo',
        age: '8h',
        score: 2,
        body: 'Another placeholder reply for layout testing.',
      },
    ],
  },
  {
    slug: 'placeholder-discussion-two',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'Placeholder guide discussion',
    excerpt: 'Sample thread tied to a guide or blog article.',
    author: 'GuideAuthor',
    age: '3d',
    commentsCount: 1,
    upvotes: 8,
    sourceTitle: 'Placeholder blog article one',
    sourcePath: '/blog/placeholder-article-one/',
    body: [
      'Placeholder body for a guide-linked discussion.',
      'Use sourceTitle and sourcePath to connect forum posts to blog content.',
    ],
    comments: [
      {
        author: 'Reader',
        age: '1d',
        score: 3,
        body: 'Placeholder question about the linked guide.',
      },
    ],
  },
];
