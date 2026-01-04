import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users2, Leaf, ArrowRight, ShieldCheck, Globe2 } from 'lucide-react';
import { Link } from 'react-router';

const About = () => {
    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <img 
                    src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop" 
                    alt="Community Food Sharing" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                
                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Sharing Food,<br /> <span className="text-primary">Spreading Hope</span>
                        </h1>
                        <p className="text-lg md:text-2xl font-light text-gray-200 mb-8 max-w-2xl mx-auto">
                            We believe that no meal should go to waste when there are hungry neighbors nearby. Join our mission to connect communities through food.
                        </p>
                        <Link to="/available-foods" className="btn btn-primary btn-lg rounded-full px-8 text-white shadow-lg border-none hover:scale-105 transition-transform">
                            Join the Movement
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-20 px-4 container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-secondary mb-4">Our Core Values</h2>
                    <p className="text-base-content/70 max-w-2xl mx-auto">
                        Built on the foundation of empathy and sustainability, Plate Share is more than just an app—it's a community driven by purpose.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Leaf className="w-10 h-10 text-green-500" />,
                            title: "Sustainability",
                            desc: "Reducing food waste one meal at a time to protect our planet for future generations."
                        },
                        {
                            icon: <Users2 className="w-10 h-10 text-blue-500" />,
                            title: "Community",
                            desc: "Building stronger neighborhoods by connecting donors with those in need locally."
                        },
                        {
                            icon: <Heart className="w-10 h-10 text-red-500" />,
                            title: "Empathy",
                            desc: "Fostering a culture of caring and dignity where asking for help is normalized."
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-base-100 border border-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-base-200/50 w-fit group-hover:bg-primary/10 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-secondary mb-3">{item.title}</h3>
                            <p className="text-base-content/70 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Our Story Section */}
            <div className="bg-base-200/30 py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="lg:w-1/2">
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-3xl z-0"></div>
                                <img 
                                    src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop" 
                                    alt="Volunteers packing food" 
                                    className="relative z-10 rounded-3xl shadow-2xl"
                                />
                            </motion.div>
                        </div>
                        <div className="lg:w-1/2 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-4xl font-bold text-secondary mb-6">Our Story</h2>
                                <p className="text-lg text-base-content/80 leading-relaxed">
                                    It started with a simple observation: restaurants and households throw away perfectly good food while people down the street go hungry.
                                </p>
                                <p className="text-lg text-base-content/80 leading-relaxed">
                                    Plate Share was born out of the desire to bridge this gap. We wanted to create a platform that makes food sharing as easy as a click. Today, we are a growing network of compassionate individuals, local businesses, and volunteers working together to fight hunger and waste.
                                </p>
                                
                                <div className="pt-6 grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="text-primary w-6 h-6" />
                                        <span className="font-semibold text-secondary">Verified Donors</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Globe2 className="text-primary w-6 h-6" />
                                        <span className="font-semibold text-secondary">Hyper-local Reach</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats/Impact Preview */}
            <div className="py-20 bg-primary/5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-secondary mb-12">Making a Real Impact</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "10k+", label: "Meals Saved" },
                            { value: "500+", label: "Active Donors" },
                            { value: "50+", label: "Communities" },
                            { value: "24/7", label: "Support" },
                        ].map((stat, idx) => (
                            <div key={idx} className="p-6">
                                <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{stat.value}</h3>
                                <p className="font-medium text-base-content/60 uppercase tracking-widest text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary-focus z-0" />
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0" />
                
                <div className="container mx-auto relative z-10 text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make a Difference?</h2>
                    <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        Whether you have food to give or need a helping hand, Plate Share is here for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/add-food" className="btn btn-lg bg-white text-secondary hover:bg-gray-100 border-none rounded-full px-8">
                            Donate Food
                        </Link>
                        <Link to="/available-foods" className="btn btn-lg btn-outline text-white border-white hover:bg-white/20 hover:border-white rounded-full px-8">
                            Find Food
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
