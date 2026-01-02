import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { MapPin, Users, Calendar, Clock } from 'lucide-react';

const FoodCard = ({ food }) => {
    const {
        _id,
        food_name,
        food_image,
        food_quantity,
        pickup_location,
        expire_date,
        additional_notes,
        donator_name,
        donator_email,
        donator_image,
        food_status,
        created_at
    } = food || {};

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            className="card bg-base-100 w-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-200 group/card"
        >
            <figure className="relative h-56 w-full overflow-hidden">
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={food_image}
                    alt={food_name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 z-10">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className={`badge ${food_status === 'Available' ? 'badge-success text-white' : 'badge-neutral'} gap-1 shadow-md font-medium border-none`}
                    >
                        {food_status}
                    </motion.span>
                </div>
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </figure>

            <div className="card-body p-5 gap-3">
                {/* Header & Donator */}
                <div className="space-y-3">
                    <h2 className="card-title text-primary text-xl font-bold line-clamp-1" title={food_name}>
                        {food_name}
                    </h2>

                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="w-8 h-8 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-1">
                                <img
                                    src={donator_image || "https://i.ibb.co.com/NgX6sdH9/images.png"}
                                    alt={donator_name}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-base-content/60 font-medium">Donated by</span>
                            <span className="text-sm font-semibold text-secondary line-clamp-1">{donator_name}</span>
                        </div>
                    </div>
                </div>

                <div className="divider my-1"></div>

                {/* Details */}
                <div className="space-y-2.5 text-sm text-base-content/80">
                    <div className="flex items-center gap-2.5">
                        <div className="p-1.5 bg-primary/10 rounded-lg text-primary">
                            <MapPin size={16} />
                        </div>
                        <span className="truncate font-medium flex-1">{pickup_location}</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                            <div className="p-1.5 bg-secondary/10 rounded-lg text-secondary">
                                <Users size={16} />
                            </div>
                            <span className="font-medium">Serves {food_quantity}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2.5 bg-base-200/50 p-2 rounded-lg border border-base-200">
                        <Clock size={16} className="text-error" />
                        <span className="text-xs font-semibold text-base-content/70">Expires:</span>
                        <span className="text-xs font-bold text-error ml-auto">{expire_date}</span>
                    </div>
                </div>

                {/* Action */}
                <div className="card-actions justify-end mt-2">
                    <Link to={`/foods/${_id}`} className="w-full">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary w-full text-white shadow-primary/20 shadow-lg"
                        >
                            View Details
                        </motion.button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default FoodCard;