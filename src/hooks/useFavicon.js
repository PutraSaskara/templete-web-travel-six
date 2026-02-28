import { useEffect } from 'react';
import { siteConfig } from '../data/site-config';

/**
 * Hook to dynamically set the favicon from site-config.js
 * Supports: SVG, PNG, ICO, or any image URL
 */
export function useFavicon() {
    useEffect(() => {
        const favicon = siteConfig.global.favicon;
        if (!favicon) return;

        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }

        // Detect type from extension
        if (favicon.endsWith('.svg')) {
            link.type = 'image/svg+xml';
        } else if (favicon.endsWith('.png')) {
            link.type = 'image/png';
        } else if (favicon.endsWith('.ico')) {
            link.type = 'image/x-icon';
        }

        link.href = favicon;
    }, []);
}
