import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "Is the food safe to eat?",
        answer: "Absolutely. All food donors are required to follow strict food safety guidelines. We also vett all partners to ensure compliance with local health regulations and provide handling instructions."
    },
    {
        question: "Who can donate food?",
        answer: "Restaurants, grocery stores, caterers, farms, and even individuals with surplus items (following safety checks) can sign up to donate. If it's fresh and edible, it shouldn't go to waste!"
    },
    {
        question: "Does it cost anything to use Plate Share?",
        answer: "No! Our platform is free for both donors and recipients. We are a non-profit organization supported by grants and community donations to keep the service accessible to all."
    },
    {
        question: "How do I pick up the food?",
        answer: "Once you claim an item on the 'Available Foods' page, you'll receive a digital token and the exact pickup location/instructions. Just show the token to the donor to collect your item."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="py-24 bg-base-200/30">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                        <HelpCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-base-content/60">Common questions about joining our community.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`border transition-all duration-300 rounded-2xl overflow-hidden ${activeIndex === idx ? 'bg-white shadow-lg border-primary/20' : 'bg-white/50 border-transparent hover:bg-white'}`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`text-lg font-bold transition-colors ${activeIndex === idx ? 'text-primary' : 'text-secondary'}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-primary text-white rotate-180' : 'bg-base-200 text-base-content/50'}`}>
                                    {activeIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {activeIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-8 pt-0 text-base-content/70 leading-relaxed text-lg border-t border-base-100/50 mt-2">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
