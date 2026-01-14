import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/site-config';

export function Footer() {
    const { global, pages } = siteConfig;
    const { footer } = global;
    const whatsapp = pages.contact.whatsapp;

    return (
        <footer className="bg-accent-black text-white pt-16 pb-8">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-6 lg:col-span-1">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-3xl text-primary">
                                {global.logoIcon}
                            </span>
                            <h2 className="text-2xl font-black">
                                {global.siteName.replace('Travel', '')}<span className="text-primary">Travel</span>
                            </h2>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            {footer.description}
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {footer.socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                                >
                                    <span className="text-xs font-bold">{social.label}</span>
                                </a>
                            ))}
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            href={`https://wa.me/${whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-lg text-sm font-bold transition-colors"
                        >
                            <MessageCircle size={18} />
                            Chat on WhatsApp
                        </a>
                    </div>

                    {/* Discover Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Discover</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            {footer.discoverLinks.map((link) => (
                                <li key={link.label}>
                                    <Link to={link.path} className="hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Support</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            {footer.supportLinks.map((link) => (
                                <li key={link.label}>
                                    <Link to={link.path} className="hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                    <p>{footer.copyright}</p>
                    <div className="flex gap-6">
                        <Link to="/contact" className="hover:text-white transition-colors">Privacy</Link>
                        <Link to="/contact" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
