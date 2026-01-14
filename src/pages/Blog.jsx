import { siteConfig } from '../data/site-config';
import { BlogCard } from '../components/BlogCard';
import { ScrollReveal } from '../hooks/useScrollReveal';

export function Blog() {
    const { blogs, pages } = siteConfig;
    const { title, subtitle } = pages.blog;

    return (
        <div className="page-transition">
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-8 bg-accent-black relative">
                <div className="absolute top-0 left-0 right-0 h-4 w-full poleng-pattern" />

                <div className="max-w-4xl mx-auto text-center pt-10">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4 animate-fade-in-up">
                        {title}
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl animate-fade-in-up delay-200">
                        {subtitle}
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-4 w-full poleng-pattern" />
            </section>

            {/* Blog Grid */}
            <section className="py-16 px-4 sm:px-8 bg-background-light">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog, index) => (
                            <ScrollReveal key={blog.id} animation="fade-in-up" delay={index * 100}>
                                <BlogCard blog={blog} />
                            </ScrollReveal>
                        ))}
                    </div>

                    {blogs.length === 0 && (
                        <div className="text-center py-16 animate-fade-in">
                            <p className="text-gray-500 text-lg">
                                No blog posts yet. Check back soon!
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
