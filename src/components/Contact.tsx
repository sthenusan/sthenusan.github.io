import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'Email',
            value: 'thenusan.dev@gmail.com',
            link: 'mailto:thenusan.dev@gmail.com'
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'Location',
            value: 'Melbourne, Australia',
            link: null
        },
        {
            icon: <MessageSquare className="w-6 h-6" />,
            title: 'LinkedIn',
            value: 'sthenusan',
            link: 'https://www.linkedin.com/in/sthenusan/'
        }
    ];

    const socialLinks = [
        {
            icon: <Github className="w-6 h-6" />,
            name: 'GitHub',
            url: 'https://github.com/sthenusan',
            color: 'hover:text-gray-800 dark:hover:text-white'
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/sthenusan/',
            color: 'hover:text-blue-600'
        }
    ];

    const handleContactClick = () => {
        const message = "Hi Thenusan, I saw your portfolio and would like to connect regarding an opportunity. I found you through your portfolio website.";
        const encodedMessage = encodeURIComponent(message);
        const linkedInUrl = `https://www.linkedin.com/messaging/compose/?recipient=sthenusan&message=${encodedMessage}`;
        window.open(linkedInUrl, '_blank');
    };

    return (
        <section id="contact" className="section-padding bg-secondary-50 dark:bg-secondary-800">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
                        I'm always interested in hearing about new opportunities and exciting projects.
                        Let's connect on LinkedIn to discuss how we can work together!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-6">
                                Let's Connect
                            </h3>
                            <p className="text-secondary-600 dark:text-secondary-400 mb-8">
                                Ready to discuss opportunities, collaborations, or just want to say hello?
                                Click the button below to send me a message on LinkedIn!
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-4 p-4 rounded-lg bg-white dark:bg-secondary-700 shadow-sm hover:shadow-md transition-shadow duration-200"
                                >
                                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-secondary-900 dark:text-white">
                                            {info.title}
                                        </h4>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-secondary-600 dark:text-secondary-400">
                                                {info.value}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
                                Follow Me
                            </h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 bg-white dark:bg-secondary-700 rounded-lg flex items-center justify-center text-secondary-600 dark:text-secondary-400 shadow-sm hover:shadow-md transition-all duration-200 ${social.color}`}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Button */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center"
                    >
                        <div className="card p-12 text-center max-w-md">
                            <div className="mb-8">
                                <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <MessageSquare className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                                </div>
                                <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
                                    Ready to Connect?
                                </h3>
                                <p className="text-secondary-600 dark:text-secondary-400">
                                    Send me a message on LinkedIn to discuss opportunities, collaborations, or just to say hello!
                                </p>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleContactClick}
                                className="btn-primary flex items-center justify-center space-x-2 py-4 px-8 text-lg w-full"
                            >
                                <Linkedin size={24} />
                                <span>Contact Me on LinkedIn</span>
                            </motion.button>

                            <p className="text-sm text-secondary-500 dark:text-secondary-400 mt-4">
                                Opens LinkedIn with a pre-filled message
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 