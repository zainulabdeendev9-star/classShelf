import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { LuMenu, LuX } from "react-icons/lu";
import Logo from "../Logo";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", slug: "/" },
        { name: "All Notes", slug: "/notes" },
        { name: "About", slug: "/about" },
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-20">
                
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <motion.div
                        whileHover={{
                            rotate: -5,
                            scale: 1.05,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                        }}
                    >
                        <Logo width="50px" />
                    </motion.div>

                    <h2 className="text-xl font-bold text-slate-800">
                        ClassShelf
                    </h2>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.slug}>
                                <motion.div
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to={item.slug}
                                        className="group relative font-medium text-slate-700 transition-colors hover:text-blue-600"
                                    >
                                        {item.name}

                                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </motion.div>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                    >
                        {isOpen ? <LuX size={26} /> : <LuMenu size={26} />}
                    </motion.div>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden md:hidden"
                    >
                        <ul className="flex flex-col border-t bg-white px-6 py-4">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={item.slug}
                                    initial={{
                                        x: -20,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        x: 0,
                                        opacity: 1,
                                    }}
                                    transition={{
                                        delay: index * 0.08,
                                    }}
                                >
                                    <Link
                                        to={item.slug}
                                        onClick={() =>
                                            setIsOpen(false)
                                        }
                                        className="block rounded-lg  p-3 font-medium text-slate-700 hover:bg-slate-100"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;