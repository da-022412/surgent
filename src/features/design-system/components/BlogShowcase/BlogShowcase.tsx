"use client";

import { ArticleCard } from "@/components/surgent/ArticleCard";
import { AuthorCard } from "@/components/surgent/AuthorCard";
import { TagBadge } from "@/components/surgent/TagBadge";
import { Prose } from "@/components/surgent/Prose";

const articles = [
  {
    title: "How AI Agents Are Replacing Entire Marketing Departments",
    excerpt:
      "The shift from AI-assisted work to AI-autonomous workflows is happening faster than anyone predicted. Here's what it means for your team.",
    tag: "Strategy",
    author: "Dennis Acosta",
    date: "Apr 27, 2026",
    readTime: "6 min read",
  },
  {
    title: "Building Deterministic Agent Pipelines at Scale",
    excerpt:
      "Flaky agents are the silent killer of enterprise AI adoption. This is how we engineer for reliability from the ground up.",
    tag: "Engineering",
    author: "Surgent Team",
    date: "Apr 20, 2026",
    readTime: "9 min read",
  },
  {
    title: "The Zero-Click Future: What Grok's Rise Means for SEO",
    excerpt:
      "When AI answers questions before users even visit your site, traditional SEO is dead. Here's what comes next.",
    tag: "Insights",
    author: "Dennis Acosta",
    date: "Apr 14, 2026",
    readTime: "5 min read",
  },
];

const tags = ["Strategy", "Engineering", "Insights", "Product", "Case Study", "Research"];

export function BlogShowcase() {
  return (
    <div className="space-y-12">
      {/* Tags */}
      <div className="space-y-3">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
          TagBadge — content categories
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TagBadge key={tag}>{tag}</TagBadge>
          ))}
        </div>
      </div>

      <div className="border-t border-surgent-border" />

      {/* Article Cards */}
      <div className="space-y-3">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
          ArticleCard — blog grid
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
      </div>

      <div className="border-t border-surgent-border" />

      {/* Author Cards */}
      <div className="space-y-3">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
          AuthorCard — full + compact
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <AuthorCard
            name="Dennis Acosta"
            role="Founder & CEO"
            bio="Building the future of autonomous business workflows at Surgent. Previously led growth at two enterprise SaaS companies."
          />
          <div className="flex flex-col gap-4 justify-center pl-2">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
              Compact (inline)
            </p>
            <AuthorCard name="Dennis Acosta" role="Founder & CEO" size="sm" />
            <AuthorCard name="Surgent Team" role="Engineering" size="sm" />
          </div>
        </div>
      </div>

      <div className="border-t border-surgent-border" />

      {/* Prose */}
      <div className="space-y-3">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
          Prose — article body typography
        </p>
        <div className="rounded-sm border border-surgent-border bg-surgent-surface p-6 max-w-2xl">
          <Prose>
            <h2>Why deterministic agents outperform probabilistic ones</h2>
            <p>
              Most teams start with a simple prompt and call it an agent. It works fine in demos. In
              production, at scale, with real data — it breaks. The root cause is almost always the
              same: <strong>non-determinism</strong>.
            </p>
            <p>
              A deterministic agent pipeline has explicit state transitions, typed inputs/outputs,
              and idempotent operations. When something fails, you know exactly where and why.
            </p>
            <blockquote>
              The best agents aren&apos;t the most creative — they&apos;re the most reliable.
            </blockquote>
            <h3>The three failure modes</h3>
            <ul>
              <li>Hallucinated data fields that pass validation</li>
              <li>Silent retries that cause duplicate side effects</li>
              <li>Prompt drift across model version upgrades</li>
            </ul>
            <p>
              Surgent&apos;s agent runtime enforces typed contracts at every step via{" "}
              <code>zod</code> schemas, making all three failure modes detectable at build time.
            </p>
          </Prose>
        </div>
      </div>
    </div>
  );
}
