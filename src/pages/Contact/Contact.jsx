import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Facebook, Twitter, Instagram, Globe } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-secondary mb-4"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-base-content/70 max-w-2xl mx-auto"
                    >
                        Have questions about donating or finding food? We're here to help you connect with your community.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 bg-base-100 rounded-3xl shadow-2xl overflow-hidden border border-base-200">
                    {/* Contact Info Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:w-2/5 bg-secondary text-white p-10 flex flex-col justify-between relative overflow-hidden"
                    >
                        {/* Decorative Circles */}
                        <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                        <MapPin className="w-5 h-5 text-primary-content" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">Our Office</h4>
                                        <p className="text-white/80 leading-relaxed">123 Charity Lane, Green Valley,<br /> CA 90210, USA</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                        <Mail className="w-5 h-5 text-primary-content" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">Email Us</h4>
                                        <p className="text-white/80">support@plateshare.org</p>
                                        <p className="text-white/80">partnerships@plateshare.org</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                        <Phone className="w-5 h-5 text-primary-content" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                                        <p className="text-white/80">+1 (555) 123-4567</p>
                                        <p className="text-white/60 text-sm">Mon-Fri, 9am - 6pm EST</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12">
                            <h4 className="font-semibold mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                {[Facebook, Twitter, Instagram, Globe].map((Icon, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-secondary transition-all"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:w-3/5 p-10 bg-base-100"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">First Name</span>
                                    </label>
                                    <input type="text" placeholder="John" className="input input-bordered focus:input-primary bg-base-200/50" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Last Name</span>
                                    </label>
                                    <input type="text" placeholder="Doe" className="input input-bordered focus:input-primary bg-base-200/50" />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Email Info</span>
                                    </label>
                                    <input type="email" placeholder="john@example.com" className="input input-bordered focus:input-primary bg-base-200/50" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Phone Number</span>
                                    </label>
                                    <input type="tel" placeholder="+1 (555) 000-0000" className="input input-bordered focus:input-primary bg-base-200/50" />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Subject</span>
                                </label>
                                <div className="join w-full  ">
                                    <select className="select select-bordered z-20 join-item w-full focus:select-primary bg-base-200/50">
                                        <option disabled selected>Select a topic</option>
                                        <option>General Inquiry</option>
                                        <option>Donation Support</option>
                                        <option>Volunteering</option>
                                        <option>Partnership</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid">
                                <label className="label">
                                    <span className="label-text font-semibold">Message</span>
                                </label>

                                <textarea className="textarea textarea-bordered h-32 focus:textarea-primary bg-base-200/50 resize-none" placeholder="How can we help you?"></textarea>
                            </div>

                            <div className="pt-4">
                                <button className="btn btn-primary w-full text-white text-lg rounded-xl shadow-lg hover:shadow-primary/30 normal-case">
                                    Send Message <Send className="w-5 h-5 ml-2" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
