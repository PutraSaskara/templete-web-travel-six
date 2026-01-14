import { Link } from 'react-router-dom';

export function TourCard({ tour }) {
    return (
        <Link
            to={`/tour/${tour.slug}`}
            className="group relative block h-[420px] rounded-2xl overflow-hidden cursor-pointer shadow-xl card-hover"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${tour.image}')` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-8 w-full">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-primary/80 text-white text-xs font-bold rounded-full mb-3">
                    {tour.category}
                </span>

                <h3 className="text-2xl font-bold text-white mb-2">{tour.title}</h3>

                <p className="text-white/80 line-clamp-2 mb-4 text-sm">
                    {tour.description}
                </p>

                <div className="flex items-center justify-between">
                    <span className="inline-block px-4 py-2 bg-primary text-white font-bold text-sm rounded-lg group-hover:bg-white group-hover:text-accent-black transition-colors">
                        From ${tour.price}
                    </span>
                    <span className="text-white/60 text-sm">{tour.duration}</span>
                </div>
            </div>
        </Link>
    );
}
