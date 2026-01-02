import React from 'react';
import { motion } from 'framer-motion';
import { Heart, CheckCircle } from 'lucide-react';

const OurMission = () => {
    return (
        <div className="bg-base-200/30 py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative w-full max-w-xl lg:max-w-none"
                    >
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10" />

                        <div className="relative">
                            <div className="absolute inset-0 bg-secondary rounded-[2.5rem] rotate-6 opacity-10" />
                            <img
                                src="https://i.ibb.co.com/DHXjfdXt/man-holds-donation-bag-ready-to-be-handed-out-donation-bag-contains-food-cleaning-supplies-delivery.webp"
                                alt="Donation"
                                className="rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/3] border-4 border-base-100"
                            />

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="absolute -bottom-6 -right-6 bg-base-100 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-base-200"
                            >
                                <div className="bg-red-100 p-2 rounded-full text-red-500">
                                    <Heart className="fill-current w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-base-content/60 font-semibold uppercase">Community</p>
                                    <p className="font-bold text-lg">Driven</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 space-y-8"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-6">
                                <Heart className="w-4 h-4 fill-current" /> Our Mission
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-secondary text-left leading-tight">
                                Bridging the Gap Between <br />
                                <span className="text-primary">Abundance</span> & Need
                            </h2>
                        </div>

                        <p className="text-lg text-base-content/70 leading-relaxed">
                            We believe that no good food should go to waste while people go hungry.
                            Our platform connects generous donors with community members, creating a sustainable
                            cycle of sharing.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Reduce environmental impact of food waste",
                                "Support local families with fresh meals",
                                "Build a stronger, more connected community"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle className="text-secondary w-6 h-6 flex-shrink-0" />
                                    <span className="text-base-content/80 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-6">
                            <div className="text-center p-6 bg-base-100 rounded-2xl shadow-sm border border-base-200">
                                <span className="block text-4xl font-black text-primary mb-1">1k+</span>
                                <span className="text-sm font-medium text-base-content/60">Meals Saved</span>
                            </div>
                            <div className="text-center p-6 bg-base-100 rounded-2xl shadow-sm border border-base-200">
                                <span className="block text-4xl font-black text-secondary mb-1">500+</span>
                                <span className="text-sm font-medium text-base-content/60">Happy Families</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;
