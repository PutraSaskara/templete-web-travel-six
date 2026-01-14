import * as LucideIcons from 'lucide-react';

/**
 * Dynamically renders a Lucide icon based on its string name
 * @param {string} name - The name of the Lucide icon (e.g., "Users", "Heart", "Star")
 * @param {object} props - Additional props to pass to the icon component
 */
export function IconMapper({ name, ...props }) {
    const Icon = LucideIcons[name];

    if (!Icon) {
        console.warn(`Icon "${name}" not found in Lucide icons`);
        return null;
    }

    return <Icon {...props} />;
}
