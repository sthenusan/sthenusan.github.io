import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Heart, Award, Star } from 'lucide-react';

const About: React.FC = () => {
    const features = [
        {
            icon: <Code className="w-6 h-6" />,
            title: 'Software Development',
            description: 'Full-stack development with modern technologies and best practices'
        },
        {
            icon: <User className="w-6 h-6" />,
            title: 'Cloud Engineering',
            description: 'Cloud-native development and deployment automation expertise'
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: 'Open Source',
            description: 'Passionate contributor to open-source projects and communities'
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: 'Academic Excellence',
            description: 'Master\'s degree with distinction and first class honours'
        }
    ];

    return (
        <section id="about" className="section-padding bg-white dark:bg-secondary-900">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
                        Get to know me better and understand what drives my passion for technology
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Profile Picture and Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Profile Picture */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex justify-center lg:justify-start mb-8"
                        >
                            <div className="relative">
                                <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white dark:border-secondary-800 shadow-2xl">
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

                        <div className="space-y-4">
                            <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                                I'm Thenusan Santhirakumar, a recent graduate with a Master's degree in Information Technology from Deakin University (2023-2025). I bring two years of experience as a Software Engineer at WSO2, where I contributed to enterprise identity and integration solutions.
                            </p>
                            <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                                I specialize in cloud-native development, backend engineering, and software development.
                            </p>
                            <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                                I'm a Software geek and curious human besides being an OpenSource enthusiast. I have experience of delivering solutions for interesting problems in industry space. I love to play cricket and listen to music.
                            </p>
                        </div>

                        {/* Key Features */}
                        <div className="grid sm:grid-cols-2 gap-4 pt-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start space-x-3 p-4 rounded-lg bg-secondary-50 dark:bg-secondary-800 hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors duration-200"
                                >
                                    <div className="text-primary-600 dark:text-primary-400 mt-1">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-secondary-900 dark:text-white mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-secondary-600 dark:text-secondary-400">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Stats/Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="text-center p-6 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 text-white"
                            >
                                <div className="text-2xl font-bold mb-2">DISTINCTION</div>
                                <div className="text-yellow-100 text-sm">Master's Degree</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white"
                            >
                                <div className="text-3xl font-bold mb-2">2+</div>
                                <div className="text-primary-100">Years Experience</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="text-center p-6 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white"
                            >
                                <div className="text-3xl font-bold mb-2">3.74</div>
                                <div className="text-green-100">GPA (First Class)</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white"
                            >
                                <div className="text-3xl font-bold mb-2">10+</div>
                                <div className="text-purple-100">Projects Completed</div>
                            </motion.div>
                        </div>

                        {/* Academic Excellence Highlight */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-xl bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900 dark:to-yellow-800 border border-yellow-200 dark:border-yellow-700"
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                                    <Star className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">
                                        Academic Excellence
                                    </h3>
                                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                                        Outstanding performance in higher education
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-yellow-700 dark:text-yellow-300">Master's Degree:</span>
                                    <span className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">DISTINCTION</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-yellow-700 dark:text-yellow-300">Bachelor's Degree:</span>
                                    <span className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">First Class Honours</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-yellow-700 dark:text-yellow-300">Dean's List Awards:</span>
                                    <span className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">2 Semesters</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-xl bg-secondary-50 dark:bg-secondary-800"
                        >
                            <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">
                                Let's Connect
                            </h3>
                            <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                                If you would like to get in touch with me, be it for exploring a technology, a business, or to just say hi, feel free to send me an email.
                            </p>
                            <a
                                href="mailto:thenusan.dev@gmail.com"
                                className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 font-medium"
                            >
                                <span>thenusan.dev@gmail.com</span>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div >
        </section >
    );
};

export default About; 