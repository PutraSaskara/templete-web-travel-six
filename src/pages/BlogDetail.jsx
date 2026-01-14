import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { siteConfig } from '../data/site-config';
import { BlogCard } from '../components/BlogCard';

export function BlogDetail() {
    const { slug } = useParams();
    const { blogs } = siteConfig;

    // Find blog by slug
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-accent-black mb-4">Article Not Found</h1>
                    <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold"
                    >
                        <ArrowLeft size={20} />
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    // Estimate reading time (roughly 200 words per minute)
    const wordCount = blog.content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-[400px] flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 z-10" />
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${blog.image}')` }}
                    />
                </div>

                <div className="relative z-20 container mx-auto px-4 sm:px-8 py-16 max-w-4xl">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Back to Blog
                    </Link>

                    <span className="inline-block px-4 py-1 bg-primary text-white text-sm font-bold rounded-full mb-4">
                        {blog.category}
                    </span>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                        {blog.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
                        <div className="flex items-center gap-2">
                            <User size={16} />
                            <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{new Date(blog.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{readingTime} min read</span>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-4 w-full poleng-pattern z-30" />
            </section>

            {/* Article Content */}
            <section className="py-16 px-4 sm:px-8 bg-background-light">
                <div className="max-w-3xl mx-auto">
                    <article className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
                        {/* Render HTML content from site-config */}
                        <div
                            className="article-content"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </article>

                    {/* Author Card */}
                    <div className="mt-12 bg-white p-6 rounded-2xl shadow-lg flex items-center gap-6">
                        <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <User size={32} className="text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-accent-black text-lg">{blog.author}</h3>
                            <p className="text-gray-600 text-sm">
                                Local guide and travel writer with a passion for sharing Bali's hidden treasures.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            <section className="py-16 px-4 sm:px-8 bg-white">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-2xl font-black text-accent-black mb-8">
                        More Articles You Might Like
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blogs
                            .filter((b) => b.id !== blog.id)
                            .slice(0, 3)
                            .map((relatedBlog) => (
                                <BlogCard key={relatedBlog.id} blog={relatedBlog} />
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
