import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: <Github className="w-5 h-5" />,
            name: 'GitHub',
            url: 'https://github.com/sthenusan',
            color: 'hover:text-gray-800 dark:hover:text-white'
        },
        {
            icon: <Linkedin className="w-5 h-5" />,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/sthenusan/',
            color: 'hover:text-blue-600'
        }
    ];

    return (
        <footer className="bg-secondary-900 dark:bg-black text-white">
            <div className="container-custom">
                <div className="py-12">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Brand Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">T</span>
                                </div>
                                <span className="font-bold text-xl">Thenusan</span>
                            </div>
                            <p className="text-secondary-300 max-w-sm">
                                Software Engineer & Cloud Developer passionate about creating innovative solutions
                                and contributing to open-source projects.
                            </p>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h3 className="text-lg font-semibold">Quick Links</h3>
                            <ul className="space-y-2">
                                {['About', 'Experience', 'Education', 'Skills', 'Projects', 'Contact'].map((link) => (
                                    <li key={link}>
                                        <a
                                            href={`#${link.toLowerCase()}`}
                                            className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h3 className="text-lg font-semibold">Connect</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-300 transition-all duration-200 ${social.color}`}
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                            <div className="pt-4">
                                <a
                                    href="mailto:thenusan.dev@gmail.com"
                                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                                >
                                    thenusan.dev@gmail.com
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="border-t border-secondary-800 pt-8 mt-8"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <p className="text-secondary-400 text-sm">
                                © {currentYear} Thenusan Santhirakumar. All rights reserved.
                            </p>
                            <p className="text-secondary-400 text-sm flex items-center space-x-1">
                                <span>Made with</span>
                                <Heart className="w-4 h-4 text-red-500" />
                                <span>using React & Tailwind CSS</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 