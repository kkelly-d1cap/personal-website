import Link from 'next/link';
import type { Metadata } from 'next';
import { getPosts } from './getPosts';

export const metadata: Metadata = {
  title: 'Blog | Katie Kelly',
  description: 'Insights and lessons on scaling fintech operations and teams from Katie Kelly.',
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <section className="bg-light-gray py-24 text-charcoal">
      <div className="mx-auto max-w-4xl space-y-12 px-6">
        <div className="space-y-4 text-center">
          <h1 className="font-display text-4xl font-bold text-charcoal">Blog</h1>
          <p className="text-base text-medium-gray">
            Long-form thinking on fintech operations, team leadership, and building resilient client experiences.
          </p>
        </div>
        {posts.length === 0 ? (
          <p className="text-base text-medium-gray">New writing coming soon. Check back for the latest insights.</p>
        ) : (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.slug} className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-card">
                <Link href={`/blog/${post.slug}`} className="space-y-3">
                  <h2 className="text-2xl font-semibold text-charcoal">{post.frontmatter.title}</h2>
                  <p className="text-sm uppercase tracking-wide text-orange">{new Date(post.frontmatter.date).toLocaleDateString()}</p>
                  {post.frontmatter.excerpt && (
                    <p className="text-base text-medium-gray">{post.frontmatter.excerpt}</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
