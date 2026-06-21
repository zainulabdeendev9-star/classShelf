import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../ui';
import { Link } from 'react-router-dom';
import { LuArrowRight, LuSparkles } from 'react-icons/lu';

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-blue-950 to-sky-700 text-white py-24">
            <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_20%)]"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute -bottom-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative container mx-auto px-4 text-center">
                <motion.div
                    className="mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-sky-100 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <LuSparkles size={16} />
                        Study smarter every day
                    </motion.div>
                    <motion.h1
                        className="mt-6 text-5xl font-bold leading-tight sm:text-6xl"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Welcome to <span className="text-sky-200">ClassShelf</span>
                    </motion.h1>
                    <motion.p
                        className="mt-5 text-lg leading-8 text-slate-200"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Organize your ideas, capture key lessons, and keep your learning resources within reach whenever you need them.
                    </motion.p>

                    <motion.div
                        className="mt-8 flex flex-wrap justify-center gap-4"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Button
                            variant="primary"
                            as={Link}
                            to="/notes"
                            className="inline-flex items-center gap-2 bg-white! text-blue-700! hover:bg-slate-100!"
                        >
                            Get Started
                            <LuArrowRight size={18} />
                        </Button>
                        <Button
                            variant="secondary"
                            as={Link}
                            to="/about"
                            className="border-white/30! text-white! hover:bg-white/10! "
                        >
                            Learn More
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;