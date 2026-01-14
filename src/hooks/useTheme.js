import { useEffect } from 'react';
import { siteConfig } from '../data/site-config';

export function useTheme() {
    useEffect(() => {
        const { colors, layout } = siteConfig.theme;
        const root = document.documentElement;

        // Inject color CSS variables
        root.style.setProperty('--color-primary', colors.primary);
        root.style.setProperty('--color-secondary', colors.secondary);
        root.style.setProperty('--color-background', colors.background);
        root.style.setProperty('--color-text', colors.text);

        // Inject layout CSS variables
        root.style.setProperty('--radius', layout.radius);
    }, []);
}
