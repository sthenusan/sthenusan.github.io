import React from 'react';
import { motion } from 'framer-motion';
import { Experience as ExperienceType } from '../data/portfolio';
import {
    Heart,
    GraduationCap,
    Users,
    Calendar,
    MapPin,
    ExternalLink
} from 'lucide-react';

interface ExperienceProps {
    experience: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
    const getIcon = (iconName: string) => {
        const icons: { [key: string]: React.ReactNode } = {
            'heartbeat': <Heart className="w-5 h-5" />,
            'graduation-cap': <GraduationCap className="w-5 h-5" />,
            'group': <Users className="w-5 h-5" />,
            'qrcode': <GraduationCap className="w-5 h-5" />,
        };
        return icons[iconName] || <Calendar className="w-5 h-5" />;
    };

    return (
        <section id="experience" className="section-padding bg-secondary-50 dark:bg-secondary-800">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
                        Work Experience
                    </h2>
                    <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
                        My professional journey and the valuable experiences I've gained along the way
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-secondary-200 dark:bg-secondary-700"></div>

                    <div className="space-y-12">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-secondary-900 z-10 ${index % 2 === 0 ? 'md:translate-x-2' : 'md:-translate-x-6'
                                    }`}>
                                    <div className="w-full h-full bg-primary-600 rounded-full flex items-center justify-center text-white">
                                        {getIcon(exp.icon)}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                                    }`}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="card p-6 hover:shadow-xl transition-shadow duration-300"
                                    >
                                        {/* Duration */}
                                        <div className="flex items-center space-x-2 text-sm text-secondary-500 dark:text-secondary-400 mb-3">
                                            <Calendar className="w-4 h-4" />
                                            <span>{exp.duration}</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                                            {exp.title}
                                        </h3>

                                        {/* Subtitle */}
                                        <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-4">
                                            {exp.subtitle}
                                        </p>

                                        {/* Details */}
                                        <ul className="space-y-2 mb-4">
                                            {exp.details.map((detail, detailIndex) => (
                                                <li key={detailIndex} className="flex items-start space-x-2">
                                                    <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                                                    <span className="text-secondary-700 dark:text-secondary-300">
                                                        {detail}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience; 