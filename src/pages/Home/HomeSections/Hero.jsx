import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: "https://i.ibb.co.com/LD6NLJXk/delicious-chicken-rolls-stuffed-with-cheese-spinach-wrapped-strips-bacon-top-view-2829-17420.jpg",
        title: "Share the Love, Stop the Waste",
        subtitle: "Connect with your community to share surplus food with those who need it most.",
        cta: "Explore Foods"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop",
        title: "Fresh Food for Everyone",
        subtitle: "Join thousands of donors making a difference in their local neighborhoods.",
        cta: "Join Now"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop",
        title: "Zero Hunger, Zero Waste",
        subtitle: "Together we can build a sustainable future where no meal goes uneaten.",
        cta: "Learn More"
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    // Auto-play logic
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [current]);

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="relative h-[70vh] w-full overflow-hidden bg-black">
            {/* Background Slides */}
            <AnimatePresence mode='wait'>
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <motion.img
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.2 }}
                        transition={{ duration:4, ease: "easeInOut" }}
                        src={slides[current].image}
                        alt="Hero Background"
                        className="h-full w-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>



            {/* Corrected Content Block */}
            <div className="absolute inset-0 z-20 flex items-center justify-center container mx-auto px-4 pointer-events-none">
                <div className="text-center text-white max-w-4xl space-y-8 pointer-events-auto">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-2xl mb-4">
                                {slides[current].title}
                            </h1>
                            <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto font-light drop-shadow-md">
                                {slides[current].subtitle}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link to="/available-foods" className="btn btn-primary btn-lg rounded-full px-8 text-white shadow-lg hover:scale-105 transition-transform border-none">
                            {slides[current].cta} <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-10 left-0 right-0 z-30 container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Indicators */}
                    <div className="flex gap-3">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${current === idx ? "w-8 bg-primary" : "w-4 bg-white/50 hover:bg-white"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Arrows */}
                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="btn btn-circle btn-outline btn-sm sm:btn-md text-white border-white/30 hover:bg-white/20 hover:border-white"
                        >
                            <ChevronLeft />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="btn btn-circle btn-outline btn-sm sm:btn-md text-white border-white/30 hover:bg-white/20 hover:border-white"
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-white/50 hidden md:flex flex-col items-center gap-1"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <ChevronDown />
            </motion.div>
        </div>
    );
};

export default Hero;
