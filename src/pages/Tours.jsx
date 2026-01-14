import { useState } from 'react';
import { siteConfig } from '../data/site-config';
import { TourCard } from '../components/TourCard';
import { ScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

export function Tours() {
    const { tours } = siteConfig;
    const [activeCategory, setActiveCategory] = useState('All');

    // Get unique categories
    const categories = ['All', ...new Set(tours.map((tour) => tour.category))];

    // Filter tours by category
    const filteredTours = activeCategory === 'All'
        ? tours
        : tours.filter((tour) => tour.category === activeCategory);

    return (
        <div className="page-transition">
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-8 bg-accent-black relative">
                <div className="absolute top-0 left-0 right-0 h-4 w-full poleng-pattern" />

                <div className="max-w-4xl mx-auto text-center pt-10">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4 animate-fade-in-up">
                        Our Tour Packages
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl animate-fade-in-up delay-200">
                        Discover our carefully curated experiences across the Island of the Gods
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-4 w-full poleng-pattern" />
            </section>

            {/* Filter Bar */}
            <section className="py-8 px-4 sm:px-8 bg-white border-b border-gray-100 sticky top-[73px] z-40">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category, index) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-full font-bold text-sm transition-all hover-scale ${activeCategory === category
                                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tours Grid */}
            <section className="py-16 px-4 sm:px-8 bg-background-light">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredTours.map((tour, index) => (
                            <ScrollReveal key={tour.id} animation="fade-in-up" delay={index * 100}>
                                <TourCard tour={tour} />
                            </ScrollReveal>
                        ))}
                    </div>

                    {filteredTours.length === 0 && (
                        <div className="text-center py-16 animate-fade-in">
                            <p className="text-gray-500 text-lg">
                                No tours found in this category.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-8 bg-white">
                <ScrollReveal animation="fade-in-up">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-black text-accent-black mb-4">
                            Can't Find What You're Looking For?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            We specialize in custom tours tailored to your interests. Contact us for a personalized itinerary.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg btn-bounce"
                        >
                            Request Custom Tour
                        </Link>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
