import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Moon, Sun } from 'lucide-react';

interface HeaderProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        {
            icon: <Github className="w-5 h-5" />,
            href: 'https://github.com/sthenusan',
            label: 'GitHub'
        },
        {
            icon: <Linkedin className="w-5 h-5" />,
            href: 'https://www.linkedin.com/in/sthenusan/',
            label: 'LinkedIn'
        }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-secondary-900/80 backdrop-blur-md border-b border-secondary-200 dark:border-secondary-700">
            <div className="container-custom">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-3"
                    >
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-secondary-800 shadow-lg">
                                <img
                                    src="/images/logo.png"
                                    alt="Thenusan"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <span className="font-bold text-lg text-secondary-900 dark:text-white">
                            Thenusan
                        </span>
                    </motion.div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links & Theme Toggle */}
                    <div className="flex items-center space-x-4">
                        {/* Social Links */}
                        <div className="hidden sm:flex items-center space-x-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-secondary-100 dark:bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>

                        {/* Theme Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleDarkMode}
                            className="w-8 h-8 bg-secondary-100 dark:bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </motion.button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header; 