import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900">
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-40 left-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center max-w-4xl mx-auto px-4">
                    {/* Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-8 flex justify-center"
                    >
                        <div className="relative">
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-secondary-800 shadow-2xl">
                                <img
                                    src="/images/logo.png"
                                    alt="Thenusan Santhirakumar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative ring */}
                            <div className="absolute inset-0 rounded-full border-4 border-primary-200 dark:border-primary-700 animate-pulse"></div>
                        </div>
                    </motion.div>

                    {/* Greeting */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-6"
                    >
                        <span className="text-primary-600 dark:text-primary-400 font-medium text-lg">
                            Hello, I'm
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold text-secondary-900 dark:text-white mb-6"
                    >
                        Thenusan{' '}
                        <span className="text-primary-600 dark:text-primary-400">
                            Santhirakumar
                        </span>
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-2xl md:text-3xl text-secondary-600 dark:text-secondary-300 mb-8"
                    >
                        Software Engineer & Cloud Developer
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-lg text-secondary-600 dark:text-secondary-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        I specialize in cloud-native development, backend engineering, and software development.
                        Passionate about creating innovative solutions and contributing to open-source projects and complex problems.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('#contact')}
                            className="btn-primary flex items-center space-x-2 px-8 py-3 text-lg"
                        >
                            <Mail size={20} />
                            <span>Get In Touch</span>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('#projects')}
                            className="btn-secondary flex items-center space-x-2 px-8 py-3 text-lg"
                        >
                            <span>View My Work</span>
                        </motion.button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    >
                        <motion.button
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            onClick={() => scrollToSection('#about')}
                            className="text-secondary-400 dark:text-secondary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                        >
                            <ArrowDown size={24} />
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 