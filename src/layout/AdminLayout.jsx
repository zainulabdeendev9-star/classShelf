import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AdminHeader from "../components/admin/AdminHeader"
import Sidebar from "../components/admin/Sidebar";

const AdminLayout = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex flex-1">
                <Sidebar />

                <div className="flex flex-col flex-1">
                    <AdminHeader />
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;