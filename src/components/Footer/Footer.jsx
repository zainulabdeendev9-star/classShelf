import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", slug: "/" },
        { name: "Notes", slug: "/notes" },
        { name: "About", slug: "/about" },
    ];

    const policyLinks = [
        { name: "Privacy Policy", slug: "/privacy" },
        { name: "Terms of Service", slug: "/terms" }
    ];

    const contactInfo = [
        { name: "Email", value: "zainulabdeendev9@gmail.com" },
        { name: "Phone", value: "03269652538" }
    ];

    const socialLinks = [
        { icon:FaGithub, link: "https://github.com/zainulabdeendev9-star"},
        { icon:FaLinkedin, link: "https://www.linkedin.com/in/m-zain-ul-abdeen-dev/"}


    ]

    return (
        <footer className="mt-12 bg-gray-800 py-8 text-white">
            <div className="container mx-auto px-4">
                <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="mb-4 text-lg font-bold">About Us</h3>
                        <p className="text-gray-400">A simple and reliable hub for students to find and download academic notes and learning resources.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.slug}>
                                    <motion.button
                                        whileHover={{ x: 4 }}
                                        type="button"
                                        onClick={() => navigate(link.slug)}
                                        className="text-gray-400 hover:text-white"
                                    >
                                        {link.name}
                                    </motion.button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        <h3 className="mb-4 text-lg font-bold">Contact</h3>
                        {contactInfo.map((item) => (
                            <p key={item.name} className="text-gray-400">
                                <span className="font-semibold text-white">{item.name}:</span> {item.value}
                            </p>
                        ))}
                        <div className="flex gap-2 mt-5">

                        {socialLinks.map((item,index)=>{
                            const Icon = item.icon;
                            return (
                                <a href={item.link} key={index} className="text-gray-400 hover:text-white hover:scale-120 transition duration-200"><Icon size={24}/></a>
                            )
                        })}
                        </div>

                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="flex flex-col items-start justify-between gap-4 border-t border-gray-700 pt-8 md:flex-row md:items-center"
                >
                    <p className="text-gray-400">&copy; {currentYear} ClassShelf. All rights reserved.</p>
                    <div className="flex flex-wrap gap-4">
                        {policyLinks.map((policy) => (
                            <motion.button
                                key={policy.slug}
                                whileHover={{ y: -1 }}
                                type="button"
                                onClick={() => navigate(policy.slug)}
                                className="text-gray-400 hover:text-white"
                            >
                                {policy.name}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
