import React from 'react';
import { motion } from 'framer-motion';
import { Education as EducationType } from '../data/portfolio';
import {
    GraduationCap,
    Book,
    Calendar,
    Award,
    Star,
    Trophy,
    Medal
} from 'lucide-react';

interface EducationProps {
    education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
    const getIcon = (iconName: string) => {
        const icons: { [key: string]: React.ReactNode } = {
            'graduation-cap': <GraduationCap className="w-5 h-5" />,
            'book': <Book className="w-5 h-5" />,
        };
        return icons[iconName] || <GraduationCap className="w-5 h-5" />;
    };

    const getAchievementBadge = (edu: EducationType) => {
        if (edu.distinction) {
            return (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center space-x-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full text-xs font-medium"
                >
                    <Star className="w-3 h-3" />
                    <span>DISTINCTION</span>
                </motion.div>
            );
        }
        if (edu.firstClass) {
            return (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center space-x-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-xs font-medium"
                >
                    <Trophy className="w-3 h-3" />
                    <span>FIRST CLASS</span>
                </motion.div>
            );
        }
        if (edu.meritRank) {
            return (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center space-x-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium"
                >
                    <Medal className="w-3 h-3" />
                    <span>MERIT RANK</span>
                </motion.div>
            );
        }
        return null;
    };

    const getCardStyling = (edu: EducationType) => {
        if (edu.distinction) {
            return 'ring-2 ring-yellow-400 dark:ring-yellow-500';
        }
        if (edu.firstClass) {
            return 'ring-2 ring-green-400 dark:ring-green-500';
        }
        if (edu.meritRank) {
            return 'ring-2 ring-blue-400 dark:ring-blue-500';
        }
        return '';
    };

    const getIconStyling = (edu: EducationType) => {
        if (edu.distinction) {
            return 'bg-gradient-to-br from-yellow-500 to-yellow-600';
        }
        if (edu.firstClass) {
            return 'bg-gradient-to-br from-green-500 to-green-600';
        }
        if (edu.meritRank) {
            return 'bg-gradient-to-br from-blue-500 to-blue-600';
        }
        return 'bg-primary-600';
    };

    const getHighlightColor = (detail: string) => {
        if (detail.includes('DISTINCTION') || detail.includes('First Class') || detail.includes('FIRST CLASS')) {
            return 'text-yellow-600 dark:text-yellow-400';
        }
        if (detail.includes('MERIT RANK') || detail.includes('Merit Rank')) {
            return 'text-blue-600 dark:text-blue-400';
        }
        return 'text-primary-600 dark:text-primary-400';
    };

    const getTextStyling = (detail: string) => {
        if (detail.includes('DISTINCTION') || detail.includes('First Class') || detail.includes('FIRST CLASS') || detail.includes('MERIT RANK')) {
            return 'font-semibold';
        }
        return '';
    };

    return (
        <section id="education" className="section-padding bg-white dark:bg-secondary-900">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
                        Education
                    </h2>
                    <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
                        My academic journey and the knowledge I've gained through formal education
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className={`card p-6 h-full hover:shadow-xl transition-shadow duration-300 ${getCardStyling(edu)}`}
                            >
                                {/* Header */}
                                <div className="flex items-start space-x-4 mb-6">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0 ${getIconStyling(edu)}`}>
                                        {getIcon(edu.icon)}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-2 mb-1">
                                            <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                                                {edu.title}
                                            </h3>
                                            {getAchievementBadge(edu)}
                                        </div>
                                        <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                                            {edu.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Duration */}
                                <div className="flex items-center space-x-2 text-sm text-secondary-500 dark:text-secondary-400 mb-4">
                                    <Calendar className="w-4 h-4" />
                                    <span>{edu.duration}</span>
                                </div>

                                {/* Details */}
                                <ul className="space-y-2 mb-6">
                                    {edu.details.map((detail, detailIndex) => (
                                        <li key={detailIndex} className="flex items-start space-x-2">
                                            <span className={`mt-1 ${getHighlightColor(detail)}`}>•</span>
                                            <span className={`text-secondary-700 dark:text-secondary-300 ${getTextStyling(detail)}`}>
                                                {detail}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {edu.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Special Achievement Badge */}
                                {edu.distinction && (
                                    <div className="mt-4 p-3 bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900 dark:to-yellow-800 rounded-lg border border-yellow-200 dark:border-yellow-700">
                                        <div className="flex items-center space-x-2">
                                            <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                                            <div>
                                                <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">
                                                    Outstanding Achievement
                                                </p>
                                                <p className="text-xs text-yellow-700 dark:text-yellow-300">
                                                    Graduated with distinction - exceptional academic performance
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {edu.firstClass && (
                                    <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg border border-green-200 dark:border-green-700">
                                        <div className="flex items-center space-x-2">
                                            <Trophy className="w-5 h-5 text-green-600 dark:text-green-400" />
                                            <div>
                                                <p className="text-sm font-semibold text-green-800 dark:text-green-200">
                                                    Academic Excellence
                                                </p>
                                                <p className="text-xs text-green-700 dark:text-green-300">
                                                    First Class Honours - exceptional undergraduate performance
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {edu.meritRank && (
                                    <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg border border-blue-200 dark:border-blue-700">
                                        <div className="flex items-center space-x-2">
                                            <Medal className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                            <div>
                                                <p className="text-sm font-semibold text-blue-800 dark:text-blue-200">
                                                    National Recognition
                                                </p>
                                                <p className="text-xs text-blue-700 dark:text-blue-300">
                                                    Merit Rank - outstanding performance in national examination
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education; 