import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/userAxios';
import FoodCard from '../../components/FoodCard/FoodCard';
import Loader from '../../components/Loader/Loader';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const AvailableFoods = () => {
    const axiosInstance = useAxios();
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance('/foods')
            .then(data => {
                setLoading(false);
                setFoods(data.data);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, [axiosInstance]);

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header Section */}
                <div className="text-center space-y-4">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold text-secondary tracking-tight"
                    >
                        Available <span className="text-primary">Foods</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-base-content/70 max-w-2xl mx-auto"
                    >
                        Browse freshly shared meals from our community. Reserve your meal today and help reduce food waste.
                    </motion.p>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full opacity-80"></div>
                </div>

                {/* Grid Section */}
                {foods.length > 0 ? (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
                    >
                        {foods.map((food) => (
                            <motion.div key={food._id} variants={itemVariants}>
                                <FoodCard food={food} />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 bg-base-200/50 rounded-3xl"
                    >
                        <p className="text-2xl font-semibold text-base-content/60">No food items available at the moment.</p>
                        <p className="text-base-content/50 mt-2">Check back later for new contributions.</p>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default AvailableFoods;