import React from 'react';
import { motion } from 'framer-motion';
import { HandHeart, Truck, ArrowRight } from 'lucide-react';

const VolunteerCTA = () => {
    return (
        <div className="py-24 container mx-auto px-4">
            <div className="bg-gradient-to-br from-base-200 to-base-300 rounded-[3rem] overflow-hidden shadow-2xl relative">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-0">
                        <motion.img
                            initial={{ scale: 1.1 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 1.5 }}
                            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop"
                            alt="Volunteers packing food"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
                        <div className="absolute bottom-6 left-6 lg:hidden text-white font-medium z-10">
                            Join 500+ Local Heroes
                        </div>
                    </div>

                    <div className="lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-6 w-fit">
                                <HandHeart size={18} /> Join the Cause
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
                                Become a Food <br />Rescue Hero
                            </h2>
                            <p className="text-lg text-base-content/70 mb-10 leading-relaxed">
                                You don't need a cape to save the day. Whether you can drive, sort, or coordinate, your time can turn potential waste into a warm meal for someone in need.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="btn btn-primary btn-lg rounded-full text-white px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                                    Volunteer Now <ArrowRight className="w-5 h-5 ml-1" />
                                </button>
                                <button className="btn btn-outline btn-secondary btn-lg rounded-full px-8 hover:bg-secondary hover:text-white transition-colors">
                                    Partner as Business <Truck className="ml-2 w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerCTA;
