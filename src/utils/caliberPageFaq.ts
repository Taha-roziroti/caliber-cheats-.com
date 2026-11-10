import type { SiteFaqItem } from '../data/faq';
import type { CaliberPage } from '../content/caliber-pages';
import { normalizeCaliberText } from './caliberPageText';

export function faqsFromCaliberPage(page: CaliberPage, idPrefix: string): SiteFaqItem[] {
  return page.faqs.map((faq, index) => ({
    id: `${idPrefix}-faq-${index}`,
    topic: 'all',
    icon: 'faqMore',
    q: faq.question.trim(),
    a: normalizeCaliberText(faq.answer),
  }));
}
