import { Link } from 'react-router-dom';
import { Star, MapPin, Search, Calendar, Users, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/site-config';
import { IconMapper } from '../components/IconMapper';
import { TourCard } from '../components/TourCard';
import { ScrollReveal } from '../hooks/useScrollReveal';

export function Home() {
    const { pages, tours } = siteConfig;
    const { hero, experiencesSection, mapSection, stats, features, testimonials } = pages.home;

    return (
        <div className="page-transition">
            {/* Hero Section */}
            <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-10" />
                    <div
                        className="w-full h-full bg-cover bg-center animate-scale-in"
                        style={{ backgroundImage: `url('${hero.image}')` }}
                    />
                </div>

                <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center gap-8 pt-20 pb-10">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/90 text-white text-xs font-bold uppercase tracking-wider mb-2 animate-fade-in-down">
                        <IconMapper name={hero.badgeIcon} size={16} />
                        {hero.badge}
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] max-w-4xl tracking-tight animate-fade-in-up delay-100">
                        {hero.title.split(' ').slice(0, -1).join(' ')}{' '}
                        <span className="text-primary italic">{hero.title.split(' ').slice(-1)}</span>
                    </h2>

                    <p className="text-white/90 text-lg md:text-xl max-w-2xl font-medium leading-relaxed animate-fade-in-up delay-200">
                        {hero.subtitle}
                    </p>

                    {/* Search Bar */}
                    <div className="w-full max-w-4xl mt-6 p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl animate-fade-in-up delay-300">
                        <div className="bg-background-light rounded-xl p-2 sm:p-3 flex flex-col md:flex-row gap-2">
                            <div className="flex-1 flex items-center gap-3 px-3 h-12 md:h-14 border-b md:border-b-0 md:border-r border-black/10">
                                <MapPin className="text-primary" size={20} />
                                <div className="flex flex-col items-start w-full">
                                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Destination</span>
                                    <input
                                        type="text"
                                        placeholder="Ubud, Kuta, Seminyak..."
                                        className="w-full bg-transparent border-none p-0 text-sm font-bold text-accent-black placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex-1 flex items-center gap-3 px-3 h-12 md:h-14 border-b md:border-b-0 md:border-r border-black/10">
                                <Calendar className="text-primary" size={20} />
                                <div className="flex flex-col items-start w-full">
                                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Dates</span>
                                    <input
                                        type="text"
                                        placeholder="Add dates"
                                        className="w-full bg-transparent border-none p-0 text-sm font-bold text-accent-black placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex-1 flex items-center gap-3 px-3 h-12 md:h-14">
                                <Users className="text-primary" size={20} />
                                <div className="flex flex-col items-start w-full">
                                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Guests</span>
                                    <input
                                        type="text"
                                        placeholder="2 Guests"
                                        className="w-full bg-transparent border-none p-0 text-sm font-bold text-accent-black placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <Link
                                to="/tours"
                                className="bg-primary hover:bg-primary/90 text-white font-bold h-12 md:h-14 px-8 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap btn-bounce"
                            >
                                <Search size={20} />
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Poleng Pattern Bottom Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-4 w-full poleng-pattern" />
            </section>

            {/* Curated Experiences Section */}
            <section className="py-20 px-4 sm:px-8 bg-background-light">
                <div className="max-w-[1440px] mx-auto">
                    <ScrollReveal animation="fade-in-up">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                            <div>
                                <h3 className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">
                                    {experiencesSection.badge}
                                </h3>
                                <h2 className="text-3xl md:text-4xl font-black text-accent-black">
                                    {experiencesSection.title}
                                </h2>
                            </div>
                            <Link
                                to="/tours"
                                className="flex items-center gap-1 font-bold text-primary hover:text-primary/80 transition-colors underline-animation"
                            >
                                View all packages <ArrowRight size={18} />
                            </Link>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {experiencesSection.items.map((item, index) => (
                            <ScrollReveal key={index} animation="fade-in-up" delay={index * 150}>
                                <div className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer shadow-xl hover-lift">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${item.image}')` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-8 w-full">
                                        <div className="size-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 text-white group-hover:bg-primary transition-colors">
                                            <IconMapper name={item.icon} size={24} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-white/80 line-clamp-2 mb-4 text-sm">{item.description}</p>
                                        <Link
                                            to="/tours"
                                            className="inline-block px-4 py-2 bg-primary text-white font-bold text-sm rounded-lg hover:bg-white hover:text-accent-black transition-colors"
                                        >
                                            Explore
                                        </Link>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Map Section */}
            <section className="py-20 px-4 sm:px-8 bg-white">
                <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 items-center">
                    <ScrollReveal animation="fade-in-left" className="flex-1 space-y-8 w-full">
                        <div>
                            <h3 className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">
                                {mapSection.badge}
                            </h3>
                            <h2 className="text-3xl md:text-5xl font-black text-accent-black mb-6">
                                {mapSection.title}
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {mapSection.description}
                            </p>
                        </div>

                        <div className="space-y-4">
                            {mapSection.regions.map((region, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-background-light transition-all cursor-pointer group hover-scale"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="size-12 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <IconMapper name={region.icon} size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">{region.title}</h4>
                                        <p className="text-sm text-gray-500">{region.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Map Image */}
                    <ScrollReveal animation="fade-in-right" className="flex-1 w-full relative">
                        <div className="aspect-[4/3] bg-background-light rounded-3xl p-6 relative overflow-hidden border border-gray-100 shadow-2xl hover-scale">
                            <div
                                className="w-full h-full bg-contain bg-center bg-no-repeat opacity-80"
                                style={{ backgroundImage: `url('${mapSection.mapImage}')` }}
                            />
                            {/* Map Hotspots */}
                            <div className="absolute top-[40%] left-[45%] group/pin cursor-pointer">
                                <div className="size-4 bg-primary rounded-full animate-ping absolute" />
                                <div className="size-4 bg-primary rounded-full relative border-2 border-white shadow-md" />
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-white text-xs font-bold rounded-lg shadow-xl opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">
                                    Ubud
                                </div>
                            </div>
                            <div className="absolute bottom-[25%] left-[40%] group/pin cursor-pointer">
                                <div className="size-4 bg-secondary rounded-full relative border-2 border-white shadow-md hover:scale-125 transition-transform" />
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-white text-xs font-bold rounded-lg shadow-xl opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">
                                    Kuta
                                </div>
                            </div>
                        </div>
                        {/* Poleng Pattern Accent */}
                        <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 opacity-20 poleng-pattern" />
                    </ScrollReveal>
                </div>
            </section>

            {/* Stats / Why Choose Us Section */}
            <section className="py-20 bg-accent-black relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-4 w-full poleng-pattern" />

                <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10 text-center">
                    <ScrollReveal animation="fade-in-up">
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                            {stats.title}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-16">
                            {stats.subtitle}
                        </h2>
                    </ScrollReveal>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {stats.items.map((stat, index) => (
                            <ScrollReveal key={index} animation="scale-in" delay={index * 100}>
                                <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover-lift">
                                    <span className={`text-4xl md:text-5xl font-black mb-2 block ${stat.color === 'primary' ? 'text-primary' :
                                            stat.color === 'secondary' ? 'text-secondary' :
                                                'text-yellow-500'
                                        }`}>
                                        {stat.value}
                                    </span>
                                    <span className="text-white/80 text-sm font-medium">{stat.label}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-4 w-full poleng-pattern" />
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-8 bg-background-light">
                <div className="max-w-[1440px] mx-auto">
                    <ScrollReveal animation="fade-in-up">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-accent-black">
                                {features.title}
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.items.map((feature, index) => (
                            <ScrollReveal key={index} animation="fade-in-up" delay={index * 100}>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover-lift h-full">
                                    <div className="size-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <IconMapper name={feature.icon} size={28} />
                                    </div>
                                    <h3 className="text-lg font-bold text-accent-black mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm">{feature.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Tours Section */}
            <section className="py-20 px-4 sm:px-8 bg-white">
                <div className="max-w-[1440px] mx-auto">
                    <ScrollReveal animation="fade-in-up">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                            <div>
                                <h3 className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">
                                    Popular Packages
                                </h3>
                                <h2 className="text-3xl md:text-4xl font-black text-accent-black">
                                    Featured Tours
                                </h2>
                            </div>
                            <Link
                                to="/tours"
                                className="flex items-center gap-1 font-bold text-primary hover:text-primary/80 transition-colors underline-animation"
                            >
                                View all tours <ArrowRight size={18} />
                            </Link>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tours.slice(0, 3).map((tour, index) => (
                            <ScrollReveal key={tour.id} animation="fade-in-up" delay={index * 150}>
                                <TourCard tour={tour} />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-8 bg-background-light">
                <div className="max-w-[1440px] mx-auto">
                    <ScrollReveal animation="fade-in-up">
                        <div className="text-center mb-16">
                            <h3 className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">
                                {testimonials.badge}
                            </h3>
                            <h2 className="text-3xl md:text-4xl font-black text-accent-black">
                                {testimonials.title}
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.items.map((testimonial, index) => (
                            <ScrollReveal key={index} animation="fade-in-up" delay={index * 150}>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover-lift">
                                    {/* Stars */}
                                    <div className="flex items-center gap-1 text-primary mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={18}
                                                fill={i < Math.floor(testimonial.rating) ? 'currentColor' : 'none'}
                                            />
                                        ))}
                                    </div>

                                    <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                                        "{testimonial.quote}"
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <div className="size-12 rounded-full overflow-hidden">
                                            <div
                                                className="w-full h-full bg-cover bg-center"
                                                style={{ backgroundImage: `url('${testimonial.avatar}')` }}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-accent-black text-sm">{testimonial.author}</h4>
                                            <span className="text-xs text-gray-500">{testimonial.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
