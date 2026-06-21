import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Header = () => {
    const navItems = [
        { name: 'Home', slug: '/' },
        { name: 'All Notes', slug: '/notes' },
        { name: 'About', slug: '/about' },
    ];



    return (
        <header className="bg-white px-6 py-4 text-black shadow-md md:px-20">
            <div className="flex items-center justify-between">
                <Link className="flex items-center gap-2" to={"/"}>
                    <Logo width="50px" />
                    <h2 className="text-2xl font-bold">ClassShelf</h2>
                </Link>

                <nav>
                    <ul className="flex items-center gap-4">
                        {navItems.map((item) => (
                            <li key={item.slug}>
                                <motion.div whileHover={{ y: -1 }}>
                                    <Link
                                        to={item.slug}
                                        className="relative inline-block font-semibold text-slate-700 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;