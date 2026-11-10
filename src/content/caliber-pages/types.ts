export interface CaliberPage {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  internalLinks: {
    href: string;
    anchor: string;
  }[];
  imageAltText: string[];
}
