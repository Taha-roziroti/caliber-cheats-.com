/** Shared placeholder media — swap paths when real assets are ready. */

export const PLACEHOLDER_IMAGE = '/images/placeholders/media.svg';

export const PLACEHOLDER_IMAGE_ALT = 'Placeholder image — replace with your asset';

export interface PlaceholderSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

const slideCaptions = [
  { caption: 'Hero slide 1', captionDesc: 'Short caption placeholder for carousel slide one.' },
  { caption: 'Hero slide 2', captionDesc: 'Short caption placeholder for carousel slide two.' },
  { caption: 'Hero slide 3', captionDesc: 'Short caption placeholder for carousel slide three.' },
  { caption: 'Hero slide 4', captionDesc: 'Short caption placeholder for carousel slide four.' },
  { caption: 'Hero slide 5', captionDesc: 'Short caption placeholder for carousel slide five.' },
] as const;

export const placeholderHeroSlides: PlaceholderSlide[] = slideCaptions.map((meta, i) => ({
  src: PLACEHOLDER_IMAGE,
  alt: `Placeholder hero image ${i + 1}`,
  ...meta,
}));

export const placeholderGallery = Array.from({ length: 7 }, (_, i) => ({
  src: PLACEHOLDER_IMAGE,
  alt: `Placeholder gallery image ${i + 1}`,
}));
