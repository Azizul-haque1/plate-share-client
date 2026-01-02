import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
    {
        name: "Alex Rodriguez",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
        bio: "Passionate about sustainability and community building. Started Plate Share to bridge the gap between abundance and need."
    },
    {
        name: "Marcus Johnson",
        role: "Head of Operations",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop",
        bio: "Logistics expert ensuring food gets from point A to point B safely and efficiently."
    },
    {
        name: "Daniel Kim",
        role: "Community Manager",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1887&auto=format&fit=crop",
        bio: "The voice of our community. Dedicated to supporting our volunteers and partners every step of the way."
    },
    {
        name: "James Wilson",
        role: "Lead Developer",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop",
        bio: "Building the tech that powers our mission. Focused on creating a seamless and accessible user experience."
    }
];

const Team = () => {
    return (
        <div className="py-24 bg-base-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Meet the Team</h2>
                    <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
                        The passionate individuals working behind the scenes to make food rescue a reality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {teamMembers.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="card bg-base-100 shadow-lg border border-base-200/50 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                            whileHover={{ y: -5 }}
                        >
                            <figure className="h-[300px] overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors z-10" />
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end justify-center pb-6">
                                    <div className="flex gap-4">
                                        <button className="btn btn-ghost btn-circle btn-sm text-white hover:bg-white hover:text-black">
                                            <Linkedin size={18} />
                                        </button>
                                        <button className="btn btn-ghost btn-circle btn-sm text-white hover:bg-white hover:text-black">
                                            <Twitter size={18} />
                                        </button>
                                        <button className="btn btn-ghost btn-circle btn-sm text-white hover:bg-white hover:text-black">
                                            <Github size={18} />
                                        </button>
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body items-center text-center p-6 space-y-2">
                                <h3 className="card-title text-xl font-bold text-secondary">{member.name}</h3>
                                <p className="text-primary font-bold text-xs uppercase tracking-widest">{member.role}</p>
                                <p className="text-base-content/70 text-sm leading-relaxed">{member.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
