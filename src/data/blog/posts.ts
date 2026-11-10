import type { BlogPostFull } from './types';
import { CALIBER_IMAGE } from '../caliberMedia';

export const blogPosts: BlogPostFull[] = [
  {
    tag: 'Guides',
    title: 'Placeholder blog article one',
    slug: 'placeholder-article-one',
    image: CALIBER_IMAGE.blogOverview,
    desc: 'Short excerpt placeholder for the first sample blog post.',
    date: 'Jan 1, 2026',
    readTime: '5 min read',
    body: [
      { type: 'p', text: 'Opening paragraph placeholder for blog article one.' },
      { type: 'h2', text: 'Section heading placeholder' },
      { type: 'p', text: 'Body copy placeholder. Replace with your guide content.' },
      { type: 'p', text: 'Link to the [pricing page](/caliber-cheats-price/) or [FAQ](/faq/) when copy is ready.' },
    ],
  },
  {
    tag: 'Setup',
    title: 'Placeholder blog article two',
    slug: 'placeholder-article-two',
    image: CALIBER_IMAGE.supplyInteraction,
    desc: 'Short excerpt placeholder for the second sample blog post.',
    date: 'Jan 2, 2026',
    readTime: '4 min read',
    body: [
      { type: 'p', text: 'Opening paragraph placeholder for blog article two.' },
      { type: 'h2', text: 'Setup steps placeholder' },
      { type: 'p', text: 'Describe setup workflow here when you add real instructions.' },
    ],
  },
  {
    tag: 'Updates',
    title: 'Placeholder blog article three',
    slug: 'placeholder-article-three',
    image: CALIBER_IMAGE.snowCombat,
    desc: 'Short excerpt placeholder for the third sample blog post.',
    date: 'Jan 3, 2026',
    readTime: '3 min read',
    body: [
      { type: 'p', text: 'Opening paragraph placeholder for blog article three.' },
      { type: 'h2', text: 'Release notes placeholder' },
      { type: 'p', text: 'Summarize product or site updates in this section later.' },
    ],
  },
];
