import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Check, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/site-config';

export function TourDetail() {
    const { slug } = useParams();
    const { tours, pages } = siteConfig;
    const { whatsapp } = pages.contact;

    // Find tour by slug
    const tour = tours.find((t) => t.slug === slug);

    if (!tour) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-accent-black mb-4">Tour Not Found</h1>
                    <p className="text-gray-600 mb-8">The tour you're looking for doesn't exist.</p>
                    <Link
                        to="/tours"
                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold"
                    >
                        <ArrowLeft size={20} />
                        Back to Tours
                    </Link>
                </div>
            </div>
        );
    }

    const handleBookNow = () => {
        const message = `*Booking Inquiry*%0A%0AHi! I'm interested in booking the *${tour.title}* package.%0A%0ACould you please provide more information about availability and pricing?`;
        window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank');
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-[500px] flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 z-10" />
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${tour.image}')` }}
                    />
                </div>

                <div className="relative z-20 container mx-auto px-4 sm:px-8 py-16">
                    <Link
                        to="/tours"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Back to Tours
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="px-4 py-1 bg-primary text-white text-sm font-bold rounded-full">
                            {tour.category}
                        </span>
                        <span className="flex items-center gap-2 text-white/80 text-sm">
                            <Clock size={16} />
                            {tour.duration}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                        {tour.title}
                    </h1>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-4 w-full poleng-pattern z-30" />
            </section>

            {/* Content Section */}
            <section className="py-16 px-4 sm:px-8 bg-background-light">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Description */}
                            <div>
                                <h2 className="text-2xl font-black text-accent-black mb-4">
                                    About This Tour
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {tour.description}
                                </p>
                            </div>

                            {/* Highlights */}
                            <div>
                                <h2 className="text-2xl font-black text-accent-black mb-6">
                                    Tour Highlights
                                </h2>
                                <div className="space-y-4">
                                    {tour.highlights.map((highlight, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
                                        >
                                            <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                                <Check size={18} />
                                            </div>
                                            <p className="text-gray-700">{highlight}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar - Booking Card */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-8 rounded-2xl shadow-lg sticky top-[140px]">
                                <div className="text-center mb-6">
                                    <span className="text-sm text-gray-500">Starting from</span>
                                    <div className="text-4xl font-black text-primary">
                                        ${tour.price}
                                        <span className="text-lg text-gray-500 font-normal"> / person</span>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between py-3 border-b border-gray-100">
                                        <span className="text-gray-600">Duration</span>
                                        <span className="font-bold text-accent-black">{tour.duration}</span>
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-gray-100">
                                        <span className="text-gray-600">Category</span>
                                        <span className="font-bold text-accent-black">{tour.category}</span>
                                    </div>
                                    <div className="flex justify-between py-3">
                                        <span className="text-gray-600">Group Size</span>
                                        <span className="font-bold text-accent-black">Max 10 people</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleBookNow}
                                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2"
                                >
                                    <MessageCircle size={20} />
                                    Book via WhatsApp
                                </button>

                                <p className="text-center text-sm text-gray-500 mt-4">
                                    Free cancellation up to 24 hours before
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Tours */}
            <section className="py-16 px-4 sm:px-8 bg-white">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="text-2xl font-black text-accent-black mb-8">
                        You Might Also Like
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {tours
                            .filter((t) => t.id !== tour.id)
                            .slice(0, 3)
                            .map((relatedTour) => (
                                <Link
                                    key={relatedTour.id}
                                    to={`/tour/${relatedTour.slug}`}
                                    className="group block bg-background-light rounded-xl overflow-hidden shadow-sm card-hover"
                                >
                                    <div className="aspect-[16/10] overflow-hidden">
                                        <div
                                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url('${relatedTour.image}')` }}
                                        />
                                    </div>
                                    <div className="p-4">
                                        <span className="text-xs text-primary font-bold">{relatedTour.category}</span>
                                        <h3 className="font-bold text-accent-black group-hover:text-primary transition-colors">
                                            {relatedTour.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-1">From ${relatedTour.price}</p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
