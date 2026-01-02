import React, { useEffect, useState } from 'react';
import FoodCard from '../../components/FoodCard/FoodCard';
import useAxios from '../../hooks/userAxios';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import Loader from '../../components/Loader/Loader';
import { Utensils, Smartphone, Truck, Heart, ArrowRight } from 'lucide-react';

const Home = () => {
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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full bg-base-100"
        >
            {/* Hero Section */}
            <div className="relative h-[85vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    className="h-full w-full object-cover"
                    src="https://i.ibb.co.com/LD6NLJXk/delicious-chicken-rolls-stuffed-with-cheese-spinach-wrapped-strips-bacon-top-view-2829-17420.jpg"

                    alt="Delicious Food"
                />

                <div className="absolute inset-0 z-20 flex items-center justify-center container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center text-white max-w-4xl space-y-6 bg-black/20 p-8 rounded-3xl backdrop-blur-sm border border-white/10"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            Share the <span className="text-primary">Love</span>,<br />
                            Stop the <span className="text-secondary">Waste</span>.
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
                            Connect with your community to share surplus food with those who need it most.
                        </p>
                        <div className="pt-4">
                            <Link to="/available-foods" className="btn btn-primary btn-lg rounded-full px-8 text-white shadow-lg hover:scale-105 transition-transform">
                                Explore Foods <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Featured Foods Section */}
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

            {/* Why Join / Mission Section */}
            <div className="bg-base-200/50 py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 relative"
                        >
                            <div className="absolute -inset-4 bg-primary/20 rounded-3xl -rotate-3 -z-10" />
                            <div className="absolute -inset-4 bg-secondary/20 rounded-3xl rotate-3 -z-10" />
                            <img
                                src="https://i.ibb.co.com/DHXjfdXt/man-holds-donation-bag-ready-to-be-handed-out-donation-bag-contains-food-cleaning-supplies-delivery.webp"
                                alt="Donation"
                                className="rounded-2xl shadow-2xl w-full object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
                                <Heart className="w-4 h-4 fill-current" /> Our Mission
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-secondary text-left">
                                Bridging the Gap Between Abundance & Need
                            </h2>
                            <p className="text-lg text-base-content/70 leading-relaxed text-justify">
                                We believe that no good food should go to waste while people go hungry.
                                Our platform connects generous donors with community members, creating a sustainable
                                cycle of sharing. By rescuing surplus food, we not only feed our neighbors but also
                                reduce environmental impact.
                            </p>
                            <div className="grid grid-cols-2 gap-6 pt-4">
                                <div className="text-center p-4 bg-base-100 rounded-xl shadow-sm">
                                    <span className="block text-3xl font-bold text-primary">1k+</span>
                                    <span className="text-sm text-base-content/60">Meals Saved</span>
                                </div>
                                <div className="text-center p-4 bg-base-100 rounded-xl shadow-sm">
                                    <span className="block text-3xl font-bold text-secondary">500+</span>
                                    <span className="text-sm text-base-content/60">Happy Families</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="py-24 container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">How It Works</h2>
                    <p className="text-lg text-base-content/60">Three simple steps to make a difference</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 border-t-2 border-dashed border-base-300 -z-10" />

                    {[
                        {
                            icon: Utensils,
                            title: "Donors Post Food",
                            desc: "Restaurants and locals post surplus food in less than a minute.",
                            color: "text-primary"
                        },
                        {
                            icon: Smartphone,
                            title: "Claim Donation",
                            desc: "Community members find and reserve available food nearby instantly.",
                            color: "text-secondary"
                        },
                        {
                            icon: Truck,
                            title: "Pickup & Enjoy",
                            desc: "Quick and easy pickup arrangements to get fresh food to your table.",
                            color: "text-accent"
                        }
                    ].map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-base-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center group border border-base-200"
                        >
                            <div className={`w-20 h-20 mx-auto bg-base-200 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <step.icon className={`w-10 h-10 ${step.color}`} />
                            </div>
                            <h3 className="text-2xl font-bold text-secondary mb-3">{step.title}</h3>
                            <p className="text-base-content/70 leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Home;