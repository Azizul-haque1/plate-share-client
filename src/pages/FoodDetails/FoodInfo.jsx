import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, AlertCircle } from "lucide-react";
import DonorInfo from "./DonorInfo";

const FoodInfo = ({ foodData, onRequest }) => {
    const {
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
    } = foodData;

    const isAvailable = food_status === "available";

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Image */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-[300px] lg:h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl group"
            >
                <img
                    src={food_image}
                    alt={food_name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span
                        className={`badge badge-lg border-0 text-white font-bold shadow-lg ${isAvailable ? "bg-green-500" : "bg-red-500"
                            }`}
                    >
                        {food_status}
                    </span>
                </div>
            </motion.div>

            {/* Right Column: Details */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col justify-center space-y-6"
            >
                <div>
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-secondary mb-2">
                        {food_name}
                    </h1>
                    <div className="flex items-center gap-2 text-base-content/70">
                        <span className="badge badge-outline p-3 font-semibold">
                            Serves {food_quantity} people
                        </span>
                    </div>
                </div>

                <DonorInfo
                    donatorName={donator_name}
                    donatorEmail={donator_email}
                    donatorImage={donator_image}
                />

                <div className="space-y-4 bg-base-100 p-6 rounded-2xl shadow-lg border border-base-200">
                    <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-1" />
                        <div>
                            <p className="font-semibold text-base-content">Pickup Location</p>
                            <p className="text-base-content/70">{pickup_location}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <div>
                            <p className="font-semibold text-base-content">Expires On</p>
                            <p className="text-base-content/70">{expire_date}</p>
                        </div>
                    </div>

                    {additional_notes && (
                        <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-primary mt-1" />
                            <div>
                                <p className="font-semibold text-base-content">Notes</p>
                                <p className="text-base-content/70">{additional_notes}</p>
                            </div>
                        </div>
                    )}
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onRequest}
                    className="btn btn-primary btn-lg w-full shadow-xl shadow-primary/30 text-white text-lg rounded-xl"
                >
                    Request Format
                </motion.button>
            </motion.div>
        </div>
    );
};

export default FoodInfo;
