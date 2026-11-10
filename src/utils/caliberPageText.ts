/** Collapse template-literal whitespace for readable paragraph output. */
export function normalizeCaliberText(input: string): string {
  return input.replace(/\s+/g, ' ').trim();
}
