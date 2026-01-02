import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Smartphone, Truck } from 'lucide-react';

const HowItWorks = () => {
    return (
        <div className="py-24 container mx-auto px-4">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">How It Works</h2>
                <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
                    Making a difference is easier than you think. Join the movement in three simple steps.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative max-w-6xl mx-auto">
                {/* Connecting Line (Desktop Only) */}
                <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-1 bg-gradient-to-r from-base-200 via-primary/20 to-base-200 -z-10" />

                {[
                    {
                        icon: Utensils,
                        title: "1. Post Food",
                        desc: "Donors list surplus food with photos and pickup details in seconds.",
                        color: "text-primary",
                        bg: "bg-primary/10"
                    },
                    {
                        icon: Smartphone,
                        title: "2. Claim It",
                        desc: "Community members browse and reserve available items instantly.",
                        color: "text-secondary",
                        bg: "bg-secondary/10"
                    },
                    {
                        icon: Truck,
                        title: "3. Pickup",
                        desc: "Coordinate a quick pickup and enjoy fresh, free food.",
                        color: "text-accent",
                        bg: "bg-accent/10"
                    }
                ].map((step, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="relative bg-base-100 p-8 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 text-center group border border-base-200 hover:-translate-y-2 h-full"
                    >
                        <div className={`w-24 h-24 mx-auto ${step.bg} rounded-3xl rotate-3 group-hover:rotate-6 transition-transform duration-300 flex items-center justify-center mb-8 shadow-sm`}>
                            <step.icon className={`w-10 h-10 ${step.color}`} />
                        </div>
                        <h3 className="text-2xl font-bold text-secondary mb-4">{step.title}</h3>
                        <p className="text-base-content/70 leading-relaxed font-medium">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
