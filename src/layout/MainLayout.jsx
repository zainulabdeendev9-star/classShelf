import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
    const location = useLocation();

    return (
        <div>
            <Header />
            <main>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -18 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;