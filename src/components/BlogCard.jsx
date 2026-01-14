import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

export function BlogCard({ blog }) {
    return (
        <Link
            to={`/blog/${blog.slug}`}
            className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover-lift h-full"
        >
            {/* Image */}
            <div className="aspect-[16/10] overflow-hidden">
                <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${blog.image}')` }}
                />
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3">
                    {blog.category}
                </span>

                <h3 className="text-xl font-bold text-accent-black mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                </h3>

                <p className="text-gray-600 line-clamp-2 mb-4 text-sm">
                    {blog.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{new Date(blog.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                        })}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
