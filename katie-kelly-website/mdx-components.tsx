import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-6 text-4xl font-bold text-charcoal md:text-5xl">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 mb-4 text-3xl font-semibold text-charcoal">{children}</h2>
    ),
    p: ({ children }) => <p className="mb-4 text-base leading-relaxed text-medium-gray">{children}</p>,
    ul: ({ children }) => <ul className="mb-4 list-disc space-y-2 pl-6 text-medium-gray">{children}</ul>,
    ...components,
  };
}
