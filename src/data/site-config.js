export const siteConfig = {
    // ======================
    // THEME CONFIGURATION
    // ======================
    theme: {
        colors: {
            primary: "#ee8c2b",      // Warm orange - Bali sunset
            secondary: "#d62828",    // Vibrant red - Festival theme
            background: "#f8f7f6",   // Warm off-white
            text: "#1b140d",         // Dark accent
        },
        layout: {
            radius: "0.5rem",
        },
    },

    // ======================
    // GLOBAL CONFIGURATION
    // ======================
    global: {
        siteName: "BaliTravel",
        logoIcon: "temple_hindu", // Material icon name
        favicon: "/favicon.svg", // Path to favicon (supports .svg, .png, .ico)
        navbar: {
            links: [
                { label: "Home", path: "/" },
                { label: "Experiences", path: "/tours" },
                { label: "Blog", path: "/blog" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
            ],
        },
        footer: {
            description: "Connecting you with the spiritual heart and adventurous soul of Bali. Authentic experiences, unforgettable memories.",
            discoverLinks: [
                { label: "Home", path: "/" },
                { label: "Experiences", path: "/tours" },
                { label: "Travel Blog", path: "/blog" },
                { label: "About Us", path: "/about" },
            ],
            supportLinks: [
                { label: "Contact Us", path: "/contact" },
                { label: "Our Tours", path: "/tours" },
                { label: "Latest Articles", path: "/blog" },
            ],
            socialLinks: [
                { label: "IG", url: "#" },
                { label: "FB", url: "#" },
                { label: "TW", url: "#" },
            ],
            copyright: "© 2024 Bali Travel Agency. All rights reserved.",
        },
    },

    // ======================
    // PAGES CONFIGURATION
    // ======================
    pages: {
        home: {
            hero: {
                badge: "Galungan Festival Season",
                badgeIcon: "Sparkles",
                title: "Experience the Spirit of the Gods",
                subtitle: "From the majestic cliffs of Uluwatu to the sacred purification springs of Tirta Empul. Immerse yourself in the island of a thousand temples.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJOtAIVu9HyLR6l5Jm2kv7cgYgfHrOqqXc8wAaF1hLNjwj2iFLeDbHdm4zhs4PP_oT2Ng5EVNAmzsr6BPKbq1EWXEmxQUuH4PbM-KBtdm0s2fM12bfpfOWpUY85d6eeCVVwfi-GJdgvrKVHRnxYHBKsSpBtvSNM7lHTSpb6WZb2Sk7eT_YEIxQQbqdeS4wqtv1gdMLBFt9iIwnwZk08A-Eiuptwu1Xs7xlS6ZhwOewp9expuU4TDj8TPBe4UCuVnlkjpq6cIXW8rDZ",
            },
            experiencesSection: {
                badge: "Discover Bali",
                title: "Curated Experiences",
                items: [
                    {
                        title: "Spiritual Retreats",
                        description: "Yoga, Meditation, and sacred Temple Cleansing rituals in Ubud.",
                        icon: "Heart",
                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgAirggpb-yljo-bVF88EUCQViqqLBul-Jz8BGqgzQ13ony5bCf_RTzxuVjFm5IO2mBhsBbHBN36mAmjVfZEPkoLEF_yzxGy7faMpIRfciveZEGChy8QmhawmcGcwdiJI3ue_NgoOEmCFmHMUq2BOmIiWss1gCh599-NKT382c1q5B6Oe5jiJlYa-AkDicv9A3qrHA45IQyiNFh_8cT9Y6-mAERzN8rdcHNOjM9Fncaj79djyeuLfNA8V2dGJuY1vpWUVyS1p1RpY7",
                    },
                    {
                        title: "Adventure",
                        description: "Surfing world-class waves, volcano trekking at sunrise, and diving.",
                        icon: "Waves",
                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOPisQUrVCcelPr_EsOscAY0RfiiV8E0Sz7tqmqrA3v_WLFOqxChtjxOnpoq7clMb1S7WMZ7XOdWOPAHGSpVfAJK7VztJgAWCSlMoFL3XMzjZYLvutKE-ulw4-zB8V9vThlWGO1HmPj2M512zjABi3d5nEy3BN-gKeRfEys4pB0gpNy3J2yFWNMECqgRGR3sXltgAHDLnDLhOL3FgU8QGev6bTVEh7J_ZLPPU9Ak-jw6ZrszGDGXYFmrHdY1YGpEj1MSClwcdOXCYz",
                    },
                    {
                        title: "Heritage Sites",
                        description: "Visit ancient temples, royal palaces, and traditional villages.",
                        icon: "Building",
                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcxHehaDeXWKF84K0MKUIujRh-xN1b2YBDp5N-H4W5qeRR-aEm3u7U0bvWNpO9lxCJLTt4aYrxRNfi-M-hNfUK-zjG1Qy5W2kimUzMc6JBLxVipUCmeUL7fDO_1GPUHIdihjr685JmEx-7smnuwF4TvBH_r6DSupbl1CqICawcni_WKBPRrB6Tmc4P6eK_gyjo8vHY4UacQvQd59U-EiIxQWCIYMj8Pb8JRwofxVOTeAHola3qEej1R4i5jzjnu0DPD_De_Wo50rCd",
                    },
                ],
            },
            mapSection: {
                badge: "Island Guide",
                title: "Explore the Island",
                description: "Bali is an island of many faces. Hover over the regions to discover the unique spirit of each area, from the artistic highlands of Ubud to the laid-back beaches of Canggu.",
                mapImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCG3l8h2l2yBraYuP-0gzr9PQN2F03kpk1i-gUEAUSaYzUQ8zDxZUTjuyS64ed7jYWX7k3JXn2aU6qRuZYepgZHimj-o2J4SYS8vHgrEgYkcmMB6CrydO_7fbB8Nt11IL3RyqWjZgWel-FrAfXE1QKrit-UjDl_c-eG2oSDMYpBuz0HDNysB3Hg27AyWoN6E09QDyQHUOErXv1iGMA0l6GqFDSqRA4MI7O18NpM1WmfPNCqLbU7npedjYvoTfaurvw89NOXGq0maRX4",
                regions: [
                    { title: "Ubud & Central Bali", description: "The cultural heart. Rice terraces, monkey forest, and artisan markets.", icon: "Trees" },
                    { title: "Seminyak & South", description: "Upscale beach clubs, vibrant nightlife, and luxury shopping.", icon: "Umbrella" },
                    { title: "North & East Coast", description: "Black sand beaches, diving spots, and majestic volcanoes.", icon: "Mountain" },
                ],
            },
            stats: {
                title: "Why Choose Us",
                subtitle: "Authentic Balinese Hospitality",
                items: [
                    { value: "5k+", label: "Happy Travelers", color: "primary" },
                    { value: "120+", label: "Sacred Temples", color: "secondary" },
                    { value: "50+", label: "Local Guides", color: "yellow" },
                    { value: "4.9", label: "Average Rating", color: "primary" },
                ],
            },
            features: {
                title: "Why Travel With Us",
                items: [
                    { title: "Expert Local Guides", description: "Our guides are born and raised in Bali, speaking fluent English.", icon: "Users" },
                    { title: "24/7 Support", description: "We're available around the clock to assist you during your journey.", icon: "Headphones" },
                    { title: "Best Price Guarantee", description: "Find a lower price? We'll match it with no questions asked.", icon: "CreditCard" },
                    { title: "Flexible Booking", description: "Plans change. Cancel or modify up to 24 hours before.", icon: "Calendar" },
                ],
            },
            testimonials: {
                badge: "Traveler Stories",
                title: "Memories Made in Paradise",
                items: [
                    {
                        quote: "The spiritual cleansing ceremony was unlike anything I've ever experienced. The local guide was incredibly knowledgeable and respectful. Highly recommend!",
                        author: "Sarah Jenkins",
                        location: "Australia",
                        rating: 5,
                        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBR4pTM_6tDl3vqx_CfhtaAF3yCFeDOAmDQYz5Y3hEXZf_gR094bjaHgnqVz49ToR2mBd2DfjI8TEQE22VchXoJZDi9EsP_EDvkzwpxRYntcCSg4LJNwwuUUm9pCffYb1ihhEXesIDv6FBskCSwhWLs_pLNv8aJGmOnwK1_x5Fg-g-VZaRV48sfMdJ5BvEe3VaA4wGLsPHPoQzMJfvLZhnRNFTse_8lUwzLcGgxM_HnB7m6Gz67Ql7k9eYROGHfw7kL4hcf0Tqvsqp1",
                    },
                    {
                        quote: "We booked the adventure package and it was perfectly organized. From the volcano trek to the surfing lessons, everything was seamless.",
                        author: "Marcus Chen",
                        location: "Singapore",
                        rating: 5,
                        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW47c_4kPtF0pMt7SEzJHeWa1pgHYGEJKCxXMenQznZ4RCs4jiT1tlEVNrGBBpNHvTsHUHs5rFYLoVlCUjxp_d13zR10yruMaz2tHdMoAb3ogdJJkG6YvxZszFWTm5_tcrtu2dGcpvtGBMNJYZCZhB4in6Gyu7g759FCzqLeLKExWww-eZJXI7sFA2DitYNUAWAzRKAFsZ14G1waZ1ZFpsG44zWnwIHZCorIJu32s-OvljXQyQc1oSQAZC5r_jRs13HU9o9XJCm9rA",
                    },
                    {
                        quote: "The Galungan festival tour gave us such a deep insight into Balinese culture. The colors, the music, the food - unforgettable.",
                        author: "Emma Wilson",
                        location: "United Kingdom",
                        rating: 4.5,
                        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCavmtkuxD7OOLt2L8UbrexGP7QZJkBbogMMJywHGu-axrNqaJLKV0He0OUrufPLDp0FCsx4l2mYm_JNR3vPylg1yRPEjZydQfCbrZ3Mp-zcEa1oNVkZKvd3QPkf9Wr1cNV8V5p9WA0sFyoGVxLwJpWxOTEXfmXqFgzAtSSZmHFitTjPhtnSguTIGQZ-qhdP0PCj7jpF2t9l0OE3zvo4wAzsX0cVJCndd5c8rglYNnLFzbySxCAjBybXgEn6h0uOIiCBtgtWPUIc02U",
                    },
                ],
            },
        },
        about: {
            hero: {
                title: "About BaliTravel",
                subtitle: "Your Gateway to Authentic Balinese Experiences",
                image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200",
            },
            story: {
                title: "Our Story",
                content: "Founded in 2015 by a group of passionate Balinese locals and travel enthusiasts, BaliTravel was born from a simple dream: to share the true spirit of Bali with the world. We believe that travel should be more than just sightseeing—it should be a transformative experience that connects you with the culture, people, and soul of a place.\n\nOver the years, we've grown from a small team of guides to a full-service travel agency, but our core values remain the same. We prioritize sustainable tourism, support local communities, and create personalized experiences that go beyond the typical tourist trail.",
            },
            values: [
                { title: "Authenticity", description: "We showcase the real Bali, not just the tourist spots.", icon: "Heart" },
                { title: "Sustainability", description: "We're committed to eco-friendly practices and supporting local communities.", icon: "Leaf" },
                { title: "Excellence", description: "Every detail of your trip is carefully planned for perfection.", icon: "Award" },
            ],
        },
        contact: {
            title: "Get in Touch",
            subtitle: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
            whatsapp: "6281234567890",
            address: "Jl. Raya Ubud No. 88, Ubud, Bali 80571, Indonesia",
            email: "hello@balitravel.com",
            phone: "+62 812 3456 7890",
        },
        blog: {
            title: "Travel Blog",
            subtitle: "Stories, tips, and insights from the Island of the Gods",
        },
    },

    // ======================
    // TOURS CONFIGURATION
    // ======================
    tours: [
        {
            id: 1,
            slug: "ubud-cultural-immersion",
            title: "Ubud Cultural Immersion",
            price: 150,
            duration: "Full Day",
            category: "Cultural",
            description: "Dive deep into the heart of Balinese culture with this full-day tour of Ubud. Visit sacred temples, explore traditional art villages, and experience a spiritual cleansing ceremony.",
            highlights: [
                "Visit Tirta Empul Temple for a purification ritual",
                "Explore Tegallalang Rice Terraces",
                "Traditional Balinese lunch included",
                "Wood carving and batik village visits",
                "Monkey Forest sanctuary tour",
            ],
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
        },
        {
            id: 2,
            slug: "mount-batur-sunrise-trek",
            title: "Mount Batur Sunrise Trek",
            price: 85,
            duration: "6 Hours",
            category: "Adventure",
            description: "Experience the magic of watching the sunrise from the summit of an active volcano. This early morning trek rewards you with breathtaking views and a unique breakfast cooked by volcanic steam.",
            highlights: [
                "2AM hotel pickup for the adventure",
                "Professional local guide and trekking gear",
                "Breakfast cooked by volcanic steam",
                "Stunning sunrise panorama",
                "Visit natural hot springs after the trek",
            ],
            image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
        },
        {
            id: 3,
            slug: "uluwatu-temple-kecak-dance",
            title: "Uluwatu Temple & Kecak Dance",
            price: 75,
            duration: "Half Day",
            category: "Cultural",
            description: "Perched dramatically on a cliff edge, Uluwatu Temple offers spectacular sunset views. Stay for the mesmerizing Kecak fire dance performance as the sun sets over the Indian Ocean.",
            highlights: [
                "Visit the cliffside Uluwatu Temple",
                "Watch the famous Kecak fire dance",
                "Spectacular sunset views",
                "Seafood dinner at Jimbaran Bay",
                "Beware of the mischievous monkeys!",
            ],
            image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800",
        },
        {
            id: 4,
            slug: "nusa-penida-island-hopping",
            title: "Nusa Penida Island Hopping",
            price: 120,
            duration: "Full Day",
            category: "Adventure",
            description: "Escape to the pristine waters and dramatic cliffs of Nusa Penida. Visit the famous Kelingking Beach, swim in crystal clear waters, and snorkel with manta rays.",
            highlights: [
                "Fast boat transfer to Nusa Penida",
                "Visit iconic Kelingking Beach viewpoint",
                "Swim at Angel's Billabong natural infinity pool",
                "Snorkeling at Crystal Bay",
                "Chance to see manta rays",
            ],
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
        },
        {
            id: 5,
            slug: "bali-cooking-class",
            title: "Traditional Balinese Cooking Class",
            price: 65,
            duration: "5 Hours",
            category: "Culinary",
            description: "Learn the secrets of Balinese cuisine in this hands-on cooking class. Start with a market tour, then prepare and enjoy a feast of traditional dishes.",
            highlights: [
                "Morning market tour with the chef",
                "Hands-on cooking of 5+ dishes",
                "Learn about local spices and ingredients",
                "Take home recipe booklet",
                "Vegetarian options available",
            ],
            image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800",
        },
        {
            id: 6,
            slug: "luxury-spa-wellness-retreat",
            title: "Luxury Spa & Wellness Retreat",
            price: 200,
            duration: "Full Day",
            category: "Wellness",
            description: "Indulge in a day of pure relaxation at Bali's finest wellness resort. Experience traditional healing treatments, yoga sessions, and healthy organic cuisine.",
            highlights: [
                "Private yoga session with a master",
                "Traditional Balinese massage",
                "Flower bath ritual",
                "Organic farm-to-table lunch",
                "Meditation and sound healing",
            ],
            image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
        },
    ],

    // ======================
    // BLOGS CONFIGURATION
    // Content uses HTML format for easy configuration
    // ======================
    blogs: [
        {
            id: 1,
            slug: "best-time-to-visit-bali",
            title: "Best Time to Visit Bali: A Complete Seasonal Guide",
            excerpt: "Planning your Bali trip? Discover the best months to visit based on weather, festivals, and crowd levels.",
            content: `
                <p>Bali is a year-round destination, but timing your visit can make a significant difference in your experience. Here's everything you need to know about Bali's seasons.</p>
                
                <h2>Dry Season (April - October)</h2>
                <p>This is Bali's peak tourist season, and for good reason. The weather is warm and sunny with minimal rainfall. July and August see the highest number of visitors, so book accommodations early.</p>
                
                <h2>Wet Season (November - March)</h2>
                <p>Don't let the name scare you! The wet season brings short afternoon showers, but mornings are often clear and beautiful. You'll find fewer crowds and better prices.</p>
                
                <h2>Festival Season</h2>
                <p>Bali's ceremonial calendar is based on the lunar cycle. Major festivals like <strong>Galungan</strong>, <strong>Kuningan</strong>, and <strong>Nyepi</strong> offer incredible cultural experiences. Check the Balinese calendar when planning your trip.</p>
                
                <h3>Pro Tips:</h3>
                <ul>
                    <li>Shoulder seasons (April-May and September-October) offer the best balance of weather and crowds</li>
                    <li>Nyepi (Day of Silence) is unique but means complete lockdown on the island</li>
                    <li>Surfing conditions vary by coast and season</li>
                </ul>
            `,
            author: "Made Wijaya",
            date: "2024-01-15",
            category: "Travel Tips",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
        },
        {
            id: 2,
            slug: "hidden-temples-of-bali",
            title: "10 Hidden Temples in Bali That Tourists Don't Know About",
            excerpt: "Escape the crowds and discover Bali's most sacred and serene temples that remain off the typical tourist trail.",
            content: `
                <p>While everyone flocks to Tanah Lot and Uluwatu, Bali has thousands of temples waiting to be discovered. Here are our favorite hidden gems.</p>
                
                <h2>1. Pura Lempuyang Luhur</h2>
                <p>Known as the <em>"Gateway to Heaven,"</em> this temple complex requires climbing over 1,700 steps. The journey is challenging but spiritually rewarding.</p>
                
                <h2>2. Pura Gunung Kawi Sebatu</h2>
                <p>A peaceful water temple surrounded by rice fields, perfect for those seeking tranquility away from tourist crowds.</p>
                
                <h2>3. Pura Beji Sangsit</h2>
                <p>In northern Bali, this 15th-century temple features unique pink sandstone carvings and is rarely visited by tourists.</p>
                
                <h2>4. Pura Kehen</h2>
                <p>Tabanan's royal temple is often called "mini Besakih" with its impressive terraced structure and peaceful atmosphere.</p>
                
                <h3>Visiting Tips:</h3>
                <ul>
                    <li>Always wear a sarong and sash (usually available for rent)</li>
                    <li>Dress modestly with covered shoulders</li>
                    <li>Women should not enter temples during menstruation</li>
                    <li>Be respectful and quiet during ceremonies</li>
                </ul>
                
                <blockquote>
                    <p>"The temple is not just a building, it's a living connection to the divine." — Local Pemangku (Priest)</p>
                </blockquote>
            `,
            author: "Ketut Dharma",
            date: "2024-01-08",
            category: "Culture",
            image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800",
        },
        {
            id: 3,
            slug: "balinese-food-guide",
            title: "The Ultimate Guide to Balinese Food: What to Eat and Where",
            excerpt: "From babi guling to lawar, discover the rich flavors of authentic Balinese cuisine and the best warungs to try them.",
            content: `
                <p>Balinese cuisine is distinct from general Indonesian food, with unique spices, preparation methods, and ceremonial significance.</p>
                
                <h2>Must-Try Dishes</h2>
                
                <h3>Babi Guling (Suckling Pig)</h3>
                <p>The quintessential Balinese dish. The whole pig is stuffed with spices and slow-roasted until the skin is crispy. Best at <strong>Ibu Oka in Ubud</strong>.</p>
                
                <h3>Bebek Betutu</h3>
                <p>Duck stuffed with spices, wrapped in banana leaves, and slow-cooked for hours. A ceremonial dish that's worth the wait.</p>
                
                <h3>Lawar</h3>
                <p>A traditional mix of minced meat, vegetables, grated coconut, and rich spices. The green version uses young jackfruit.</p>
                
                <h3>Sate Lilit</h3>
                <p>Unlike regular satay, sate lilit has the ground meat wrapped around lemongrass stalks instead of bamboo skewers.</p>
                
                <h2>Where to Eat</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Restaurant</th>
                            <th>Specialty</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Warung Babi Guling Pak Malen</td>
                            <td>Best babi guling</td>
                            <td>Seminyak</td>
                        </tr>
                        <tr>
                            <td>Bebek Tepi Sawah</td>
                            <td>Duck dishes with rice field views</td>
                            <td>Ubud</td>
                        </tr>
                        <tr>
                            <td>Pasar Sindhu Night Market</td>
                            <td>Street food paradise</td>
                            <td>Sanur</td>
                        </tr>
                    </tbody>
                </table>
                
                <h2>Vegetarian Options</h2>
                <p>Bali is very vegetarian-friendly. Look for <strong>gado-gado</strong>, tempeh dishes, and the many organic cafes in Ubud.</p>
            `,
            author: "Wayan Kusuma",
            date: "2023-12-20",
            category: "Culinary",
            image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800",
        },
        {
            id: 4,
            slug: "sustainable-travel-bali",
            title: "How to Travel Sustainably in Bali: A Responsible Tourism Guide",
            excerpt: "Learn how to minimize your environmental impact and support local communities during your Bali adventure.",
            content: `
                <p>Tourism has brought prosperity to Bali, but also environmental challenges. Here's how you can be part of the solution.</p>
                
                <h2>Reduce Plastic Waste</h2>
                <p>Bali has a serious plastic problem. Bring your own reusable water bottle, shopping bag, and say no to plastic straws. Many cafes now offer water refill stations.</p>
                
                <h2>Support Local Businesses</h2>
                <p>Choose locally-owned accommodations and restaurants over international chains. Hire local guides and buy from village artisans directly.</p>
                
                <h2>Respect Water Resources</h2>
                <p>Bali faces water scarcity issues. Take shorter showers, reuse towels, and be mindful of pool water consumption at hotels.</p>
                
                <h2>Volunteer Responsibly</h2>
                <p>If you want to give back, research organizations thoroughly. Avoid voluntourism that might harm local communities or wildlife.</p>
                
                <h2>Choose Ethical Animal Experiences</h2>
                <ul>
                    <li><span style="color: #d62828;">✗</span> Skip elephant rides and dolphin shows</li>
                    <li><span style="color: #22c55e;">✓</span> Visit elephant sanctuaries instead</li>
                    <li><span style="color: #22c55e;">✓</span> Choose ethical turtle conservation programs</li>
                    <li><span style="color: #d62828;">✗</span> Avoid photos with drugged animals</li>
                </ul>
                
                <h2>Sustainable Stays</h2>
                <ol>
                    <li><strong>COMO Uma Ubud</strong> — sustainable luxury</li>
                    <li><strong>Bambu Indah</strong> — eco-resort</li>
                    <li><strong>Desa Visesa Ubud</strong> — village-style sustainable resort</li>
                </ol>
            `,
            author: "Putu Eco",
            date: "2023-12-10",
            category: "Sustainability",
            image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800",
        },
        {
            id: 5,
            slug: "bali-surfing-beginners-guide",
            title: "Beginner's Guide to Surfing in Bali: Best Spots and Tips",
            excerpt: "Ready to catch your first wave? Here's everything you need to know about learning to surf in Bali.",
            content: `
                <p>Bali is a world-class surfing destination with waves for every skill level. Here's how to start your surfing journey.</p>
                
                <h2>Best Beginner Beaches</h2>
                
                <h3>🏖️ Kuta Beach</h3>
                <p>The classic learning spot with gentle, rolling waves and soft sandy bottom. Countless surf schools line the beach.</p>
                
                <h3>🏖️ Seminyak Beach</h3>
                <p>Similar to Kuta but less crowded. Good for beginners during low tide.</p>
                
                <h3>🏖️ Sanur Beach</h3>
                <p>Protected by reef, offering calm morning sessions perfect for first-timers.</p>
                
                <h2>What to Expect in Surf Lessons</h2>
                <ul>
                    <li>2-hour sessions typically <strong>$25-35 USD</strong></li>
                    <li>Board and rash guard included</li>
                    <li>One instructor per 2-3 students</li>
                    <li>You'll be standing by the end of your first lesson!</li>
                </ul>
                
                <h2>Surf Etiquette</h2>
                <ol>
                    <li>The surfer closest to the peak has right of way</li>
                    <li>Don't drop in on someone else's wave</li>
                    <li>Help other surfers if they're in trouble</li>
                    <li>Respect local surfers</li>
                </ol>
                
                <h2>Best Time to Surf</h2>
                <p>Dry season <strong>(April-October)</strong> offers consistent swells. Morning sessions have less wind. Always check surf forecasts daily!</p>
                
                <div style="background: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                    <strong>💡 Pro Tip:</strong> Rent a board for the week instead of per session — you'll save money and can practice anytime!
                </div>
            `,
            author: "Nyoman Surf",
            date: "2023-11-25",
            category: "Adventure",
            image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800",
        },
    ],
};
