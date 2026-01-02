import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';



import useAxios from '../../../hooks/userAxios';
import FoodCard from '../../../components/FoodCard/FoodCard';
import Loader from '../../../components/Loader/Loader';

const FeaturedFoods = () => {
    const axiosInstance = useAxios();
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance('/featured-foods')
            .then(data => {
                setLoading(false);
                setFoods(data.data);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [axiosInstance]);

    if (loading) return <Loader />;

    return (
        <div className="py-24 container mx-auto px-4">
            <div className="text-center mb-16 space-y-3">
                <h2 className="text-4xl md:text-5xl font-bold text-secondary">
                    Featured <span className="text-primary">Foods</span>
                </h2>
                <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
                    Freshly cooked meals and groceries available for pickup right now.
                </p>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {foods.map((food, index) => (
                    <motion.div
                        key={food._id}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <FoodCard food={food} />
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
                <Link to="/available-foods" className="btn btn-outline btn-secondary rounded-full px-10">
                    View All Listings
                </Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;
