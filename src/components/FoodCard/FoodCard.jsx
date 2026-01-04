import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { MapPin, Users, Calendar, ArrowRight } from 'lucide-react';

const FoodCard = ({ food }) => {
    const {
        _id,
        food_name,
        food_image,
        food_quantity,
        pickup_location,
        expire_date,
        donator_name,
        donator_image,
        food_status,
    } = food || {};

    const isAvailable = food_status === 'Available';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
            className="group relative bg-base-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-base-200 flex flex-col h-full"
        >
            {/* Image Section */}
            <div className="relative h-60 overflow-hidden">
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={food_image}
                    alt={food_name}
                    className="w-full h-full object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                    <span
                        className={`badge border-0 font-bold px-3 py-3 shadow-sm backdrop-blur-md ${isAvailable
                            ? 'bg-green-500/90 text-white'
                            : 'bg-neutral/90 text-neutral-content'
                            }`}
                    >
                        {food_status}
                    </span>
                </div>

                {/* Donator Tag (Overlay) */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="avatar ring-2 ring-white/50 rounded-full">
                        <div className="w-8 h-8 rounded-full">
                            <img src={donator_image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt={donator_name} />
                        </div>
                    </div>
                    <span className="text-white text-sm font-medium drop-shadow-md truncate max-w-[150px]">
                        {donator_name}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-secondary mb-3 line-clamp-1 group-hover:text-primary transition-colors">
                    {food_name}
                </h2>

                <div className="space-y-3 mb-6 flex-1">
                    <div className="flex items-center gap-2 text-base-content/70 text-sm">
                        <MapPin className="w-4 h-4 text-primary shrink-0" />
                        <span className="truncate">{pickup_location}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-base-content/70">
                            <Users className="w-4 h-4 text-secondary shrink-0" />
                            <span>Serves {food_quantity}</span>
                        </div>
                        <div className="flex items-center gap-2 text-base-content/70">
                            <Calendar className="w-4 h-4 text-warning shrink-0" />
                            <span>{expire_date}</span>
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <Link to={`/foods/${_id}`} className="mt-auto">
                    <button className="btn btn-primary w-full rounded-xl text-white group-hover:bg-primary-focus transition-all flex items-center justify-center gap-2">
                        View Details
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </Link>
            </div>
        </motion.div>
    );
};

export default FoodCard;