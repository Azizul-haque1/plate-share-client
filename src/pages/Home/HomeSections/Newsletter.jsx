import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter = () => {
    return (
        <div className="relative py-24 overflow-hidden">
            {/* Background with stylized gradient */}
            <div className="absolute inset-0 bg-base-100 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-base-100 to-base-100" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-base-100 rounded-[3rem] shadow-2xl overflow-hidden border border-base-200/60 max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-0">
                        {/* Content Side */}
                        <div className="p-10 md:p-16 flex flex-col justify-center space-y-6 relative">
                            {/* Decorative dot pattern */}
                            <div className="absolute top-10 right-10 w-20 h-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary font-bold text-sm mb-6">
                                    <Mail size={16} /> Stay Connected
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 leading-tight">
                                    Join Our Food Rescue <span className="text-primary">Movement</span>
                                </h2>
                                <p className="text-lg text-base-content/70 mb-8 leading-relaxed">
                                    Get the latest updates on food waste reduction tips, community stories, and new features directly to your inbox.
                                </p>

                                <form className="flex flex-col sm:flex-row gap-3 relative" onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="input input-lg input-bordered w-full rounded-full focus:input-primary bg-base-200/30 focus:bg-base-100 transition-all pl-6"
                                    />
                                    <button className="btn btn-primary btn-lg rounded-full text-white px-8 hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
                                        Subscribe <ArrowRight size={20} className="ml-1" />
                                    </button>
                                </form>
                                <p className="text-xs text-base-content/40 mt-6 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    We care about your data. Unsubscribe at any time.
                                </p>
                            </motion.div>
                        </div>

                        {/* Image Side */}
                        <div className="relative h-80 lg:h-auto overflow-hidden group">
                            <motion.img
                                initial={{ scale: 1.1 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5 }}
                                src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop"
                                alt="Community Food Sharing"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-base-100 via-transparent to-transparent lg:bg-gradient-to-t lg:from-base-100 lg:via-transparent lg:to-transparent opacity-80" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
