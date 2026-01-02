import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Save } from 'lucide-react';

const stats = [
    {
        icon: Globe,
        value: "1.3B",
        label: "Tons of Food Wasted Locally",
        desc: "Each year, roughly one-third of the food produced for human consumption gets lost or wasted."
    },
    {
        icon: TrendingUp,
        value: "40%",
        label: "Reduction in Local Waste",
        desc: "Our community has successfully diverted 40% of potential food waste from landfills this year."
    },
    {
        icon: Save,
        value: "$12M",
        label: "Value of Food Rescued",
        desc: "We've recovered millions of dollars worth of perfectly good produce and meals."
    }
];

const ImpactStats = () => {
    return (
        <div className="py-24 bg-secondary text-secondary-content relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Impact</h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto">
                        See the tangible difference we are making together in the fight against hunger and climate change.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.5 }}
                            className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300"
                        >
                            <div className="inline-flex p-4 rounded-full bg-primary/20 text-primary mb-6">
                                <stat.icon size={32} />
                            </div>
                            <h3 className="text-5xl font-bold mb-2 text-white">{stat.value}</h3>
                            <h4 className="text-xl font-semibold mb-3 text-white/90">{stat.label}</h4>
                            <p className="text-white/60 leading-relaxed text-sm">
                                {stat.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImpactStats;
