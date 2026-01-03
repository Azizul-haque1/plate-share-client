import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Community Donor",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
        text: "Plate Share has made it incredibly easy for my restaurant to donate surplus food. It feels great to know good food isn't going to waste."
    },
    {
        id: 2,
        name: "David Chen",
        role: "Local Volunteer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
        text: "The platform is seamless. I love being able to see exactly what's available nearby and help distribute it to families in need."
    },
    {
        id: 3,
        name: "Maria Garcia",
        role: "Food Bank Coordinator",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
        text: "We've seen a significant increase in donations since we started using this app. It's a game-changer for our community efforts."
    }
];

const CommunityTestimonials = () => {
    return (
        <div className="bg-base-100 py-24 border-t border-base-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Community Voices</h2>
                    <p className="text-lg text-base-content/60">Hear from the heroes making a difference</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-base-100 p-8 rounded-[2rem] relative shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-200/50"
                        >
                            <div className="absolute top-8 right-8 text-primary/10">
                                <Quote size={60} />
                            </div>

                            <div className="flex gap-1 mb-6 text-orange-400">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>

                            <p className="text-lg text-base-content/80 mb-8 leading-relaxed italic relative z-10">
                                "{item.text}"
                            </p>
                        
                            <div className="flex items-center gap-4 border-t border-base-200 pt-6">
                                <div className="avatar">
                                    <div className="w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary text-lg">{item.name}</h4>
                                    <p className="text-sm text-base-content/60 font-medium">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CommunityTestimonials;
