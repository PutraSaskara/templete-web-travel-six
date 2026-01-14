import { siteConfig } from '../data/site-config';
import { IconMapper } from '../components/IconMapper';
import { ScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

export function About() {
    const { pages } = siteConfig;
    const { hero, story, values } = pages.about;

    return (
        <div className="page-transition">
            {/* Hero Section */}
            <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30 z-10" />
                    <div
                        className="w-full h-full bg-cover bg-center animate-scale-in"
                        style={{ backgroundImage: `url('${hero.image}')` }}
                    />
                </div>

                <div className="relative z-20 container mx-auto px-4 text-center py-20">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4 animate-fade-in-up">
                        {hero.title}
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up delay-200">
                        {hero.subtitle}
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-4 w-full poleng-pattern" />
            </section>

            {/* Story Section */}
            <section className="py-20 px-4 sm:px-8 bg-background-light">
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal animation="fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-black text-accent-black mb-8">
                            {story.title}
                        </h2>
                    </ScrollReveal>
                    <div className="prose prose-lg text-gray-600">
                        {story.content.split('\n\n').map((paragraph, index) => (
                            <ScrollReveal key={index} animation="fade-in-up" delay={index * 100}>
                                <p className="mb-6 leading-relaxed">
                                    {paragraph}
                                </p>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-4 sm:px-8 bg-white">
                <div className="max-w-[1440px] mx-auto">
                    <ScrollReveal animation="fade-in-up">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-black text-accent-black">
                                Our Values
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <ScrollReveal key={index} animation="fade-in-up" delay={index * 150}>
                                <div className="bg-background-light p-8 rounded-2xl text-center hover-lift h-full">
                                    <div className="size-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                                        <IconMapper name={value.icon} size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-accent-black mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {value.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-accent-black relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-4 w-full poleng-pattern" />

                <ScrollReveal animation="fade-in-up">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                            Ready to Experience Bali?
                        </h2>
                        <p className="text-white/80 text-lg mb-8">
                            Let us create an unforgettable journey tailored just for you.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg btn-bounce"
                        >
                            Contact Us Today
                        </Link>
                    </div>
                </ScrollReveal>

                <div className="absolute bottom-0 left-0 right-0 h-4 w-full poleng-pattern" />
            </section>
        </div>
    );
}
