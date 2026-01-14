import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/site-config';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { global, pages } = siteConfig;
    const whatsapp = pages.contact.whatsapp;

    return (
        <header className="sticky top-0 z-50 bg-background-light/95 backdrop-blur-sm border-b border-[#e7dbcf]">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-4">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 sm:gap-4">
                        <div className="size-8 sm:size-10 text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined text-3xl sm:text-4xl">
                                {global.logoIcon}
                            </span>
                        </div>
                        <h1 className="text-xl sm:text-2xl font-black tracking-tight text-accent-black">
                            {global.siteName.replace('Travel', '')}<span className="text-primary">Travel</span>
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {global.navbar.links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === link.path ? 'font-bold text-primary' : ''
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        <a
                            href={`https://wa.me/${whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all active:scale-95 shadow-lg shadow-green-500/20 flex items-center gap-2"
                        >
                            <MessageCircle size={18} />
                            <span className="hidden sm:inline">WhatsApp</span>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden size-10 flex items-center justify-center rounded-lg hover:bg-black/5"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <nav className="lg:hidden mt-4 pb-4 border-t border-[#e7dbcf] pt-4">
                        <div className="flex flex-col gap-4">
                            {global.navbar.links.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === link.path ? 'font-bold text-primary' : ''
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </div>

            {/* Google Material Icons CDN */}
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />
        </header>
    );
}
