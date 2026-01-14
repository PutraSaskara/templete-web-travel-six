import { useState } from 'react';
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/site-config';
import { ScrollReveal } from '../hooks/useScrollReveal';

export function Contact() {
    const { pages } = siteConfig;
    const { title, subtitle, whatsapp, address, email, phone } = pages.contact;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format message for WhatsApp
        const message = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:*%0A${formData.message}`;

        // Redirect to WhatsApp
        window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank');
    };

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

            {/* Contact Content */}
            <section className="py-20 px-4 sm:px-8 bg-background-light">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <ScrollReveal animation="fade-in-left" className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-black text-accent-black mb-6">
                                    Contact Information
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    Reach out to us through any of these channels. We typically respond within 24 hours.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover-lift">
                                    <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-accent-black mb-1">Address</h3>
                                        <p className="text-gray-600 text-sm">{address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover-lift">
                                    <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-accent-black mb-1">Email</h3>
                                        <a href={`mailto:${email}`} className="text-primary text-sm hover:underline">
                                            {email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover-lift">
                                    <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-accent-black mb-1">Phone</h3>
                                        <a href={`tel:${phone}`} className="text-primary text-sm hover:underline">
                                            {phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl shadow-sm border border-green-100 hover-lift">
                                    <div className="size-12 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 animate-pulse">
                                        <MessageCircle size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-accent-black mb-1">WhatsApp</h3>
                                        <a
                                            href={`https://wa.me/${whatsapp}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-green-600 text-sm hover:underline"
                                        >
                                            Chat with us on WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Contact Form */}
                        <ScrollReveal animation="fade-in-right">
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover-scale">
                                <h2 className="text-2xl font-black text-accent-black mb-6">
                                    Send Us a Message
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                                            placeholder="Tell us about your travel plans..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 btn-bounce"
                                    >
                                        <MessageCircle size={20} />
                                        Send via WhatsApp
                                    </button>

                                    <p className="text-center text-sm text-gray-500">
                                        Your message will be sent directly to our WhatsApp for faster response.
                                    </p>
                                </form>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
