# 🏝️ Travel Agent Website Template

Template website modern untuk agen perjalanan/travel agent dengan fitur lengkap dan mudah dikonfigurasi. Dibangun dengan React, Vite, dan Tailwind CSS.

![Bali Travel Preview](https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=400&fit=crop)

## ✨ Fitur Utama

- 🎨 **Fully Configurable** - Semua konten, warna, dan data dikontrol dari satu file `site-config.js`
- 📱 **Responsive Design** - Tampilan optimal di desktop, tablet, dan mobile
- 🎬 **Smooth Animations** - Scroll reveal dan hover effects yang modern
- 💬 **WhatsApp Integration** - Form kontak dan booking langsung ke WhatsApp
- 🎯 **SEO Friendly** - Struktur HTML semantic dan meta tags
- ⚡ **Fast Performance** - Dibangun dengan Vite untuk loading super cepat

## 📄 Halaman yang Tersedia

| Halaman | Deskripsi |
|---------|-----------|
| **Home** | Landing page dengan hero, experiences, stats, testimonials |
| **Tours** | Katalog tour packages dengan filter kategori |
| **Tour Detail** | Detail tour dengan highlights dan WhatsApp booking |
| **Blog** | Artikel travel tips dan guides |
| **Blog Detail** | Full article dengan HTML content support |
| **About** | Company story dan values |
| **Contact** | Form kontak dengan WhatsApp integration |

## 🛠️ Tech Stack

- **Runtime**: [Bun](https://bun.sh/)
- **Framework**: [React](https://react.dev/) 18
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) atau [Node.js](https://nodejs.org/) 18+

### Installation

```bash
# Clone repository
git clone <repository-url>
cd template4

# Install dependencies
bun install
# atau
npm install

# Start development server
bun run dev
# atau
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser.

### Build for Production

```bash
bun run build
# atau
npm run build
```

## ⚙️ Konfigurasi

Semua konten website dikonfigurasi melalui satu file:

```
src/data/site-config.js
```

### Struktur Konfigurasi

```javascript
export const siteConfig = {
  // 🎨 Theme - Warna dan layout
  theme: {
    colors: {
      primary: "#ee8c2b",      // Warna utama
      secondary: "#d62828",    // Warna aksen
      background: "#f8f7f6",   // Background
      text: "#1b140d",         // Text color
    },
    layout: {
      radius: "0.5rem",        // Border radius
    },
  },

  // 🌐 Global - Navbar dan Footer
  global: {
    siteName: "BaliTravel",
    logoIcon: "temple_hindu",  // Material icon
    navbar: { links: [...] },
    footer: { ... },
  },

  // 📄 Pages - Konten tiap halaman
  pages: {
    home: { hero, experiences, stats, ... },
    about: { hero, story, values },
    contact: { whatsapp, address, email, phone },
    blog: { title, subtitle },
  },

  // 🎒 Tours - Data paket wisata
  tours: [
    {
      id: 1,
      slug: "ubud-cultural-immersion",
      title: "Ubud Cultural Immersion",
      price: 150,
      duration: "Full Day",
      category: "Cultural",
      description: "...",
      highlights: ["...", "..."],
      image: "https://...",
    },
    // ... more tours
  ],

  // 📝 Blogs - Artikel blog (HTML format)
  blogs: [
    {
      id: 1,
      slug: "best-time-to-visit-bali",
      title: "Best Time to Visit Bali",
      excerpt: "...",
      content: `<h2>...</h2><p>...</p>`,  // HTML format
      author: "Made Wijaya",
      date: "2024-01-15",
      category: "Travel Tips",
      image: "https://...",
    },
    // ... more blogs
  ],
};
```

## 📁 Struktur Project

```
src/
├── components/         # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── TourCard.jsx
│   ├── BlogCard.jsx
│   ├── IconMapper.jsx
│   └── ScrollToTop.jsx
├── data/
│   └── site-config.js  # 🧠 THE BRAIN - Edit this!
├── hooks/
│   ├── useTheme.js
│   └── useScrollReveal.jsx
├── layouts/
│   └── MainLayout.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Tours.jsx
│   ├── TourDetail.jsx
│   ├── Blog.jsx
│   └── BlogDetail.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Kustomisasi

### Mengubah Warna Theme

Edit `site-config.js`:

```javascript
theme: {
  colors: {
    primary: "#your-color",
    secondary: "#your-color",
    // ...
  }
}
```

### Menambah Tour Baru

```javascript
tours: [
  // ... existing tours
  {
    id: 7,
    slug: "new-tour-slug",
    title: "New Amazing Tour",
    price: 100,
    duration: "Half Day",
    category: "Adventure",
    description: "Tour description...",
    highlights: [
      "Highlight 1",
      "Highlight 2",
    ],
    image: "https://your-image-url.jpg",
  },
]
```

### Menambah Artikel Blog

```javascript
blogs: [
  // ... existing blogs
  {
    id: 6,
    slug: "new-article-slug",
    title: "New Article Title",
    excerpt: "Short description...",
    content: `
      <h2>Section Title</h2>
      <p>Your content with <strong>HTML</strong> formatting.</p>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
    `,
    author: "Author Name",
    date: "2024-01-20",
    category: "Travel Tips",
    image: "https://your-image-url.jpg",
  },
]
```

### Mengubah Nomor WhatsApp

```javascript
pages: {
  contact: {
    whatsapp: "6281234567890",  // Format: country code + number
    // ...
  }
}
```

## 📱 WhatsApp Integration

Template ini memiliki integrasi WhatsApp di:

1. **Navbar** - Tombol WhatsApp di header
2. **Footer** - Tombol "Chat on WhatsApp"
3. **Contact Page** - Form yang redirect ke WhatsApp dengan pesan terformat
4. **Tour Detail** - Tombol booking yang mengirim detail tour ke WhatsApp

## 🌟 Credits

- Design inspired by modern travel websites
- Icons by [Lucide](https://lucide.dev/)
- Fonts: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

## 📄 License

MIT License - Feel free to use for personal or commercial projects.

---

Made with ❤️ for Travel Agents
