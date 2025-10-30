import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { useMDXComponents } from '@/mdx-components';
import { getPosts, type BlogFrontmatter } from '../getPosts';

const postsDirectory = path.join(process.cwd(), 'content/blog');
const remarkPlugins: any[] = [remarkGfm];
const rehypePlugins: any[] = [rehypeHighlight];

export function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPosts().find((item) => item.slug === params.slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.frontmatter.title} | Katie Kelly`,
    description: post.frontmatter.excerpt ?? 'Insights from Katie Kelly on fintech operations and leadership.',
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(postsDirectory, `${params.slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, 'utf8');

  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins,
        rehypePlugins,
      },
    },
    components: useMDXComponents({}),
  });

  return (
    <article className="bg-light-gray py-24 text-charcoal">
      <div className="mx-auto max-w-3xl space-y-6 px-6">
        <header className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-orange">{new Date(frontmatter.date).toLocaleDateString()}</p>
          <h1 className="font-display text-4xl font-bold text-charcoal">{frontmatter.title}</h1>
          {frontmatter.excerpt && <p className="text-base text-medium-gray">{frontmatter.excerpt}</p>}
        </header>
        <div className="space-y-6 text-left text-medium-gray [&_h2]:mt-10 [&_h2]:text-3xl [&_h2]:font-semibold [&_p]:leading-relaxed [&_a]:text-orange [&_strong]:text-charcoal">
          {content}
        </div>
      </div>
    </article>
  );
}
