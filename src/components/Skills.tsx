import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../data/portfolio';

interface SkillsProps {
    skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    const skillCategories = [
        { name: 'Languages', skills: skills.filter(s => s.title === 'Languages') },
        { name: 'Frameworks/Libraries', skills: skills.filter(s => s.title === 'Frameworks/Libraries') },
        { name: 'Backend', skills: skills.filter(s => s.title === 'Backend') },
        { name: 'Clouds', skills: skills.filter(s => s.title === 'Clouds') },
        { name: 'Design', skills: skills.filter(s => s.title === 'Design') },
        { name: 'Version Control', skills: skills.filter(s => s.title === 'Version Control') },
        { name: 'Tools', skills: skills.filter(s => s.title === 'Tools') },
        { name: 'Saas products', skills: skills.filter(s => s.title === 'Saas products') },
        { name: 'Editor', skills: skills.filter(s => s.title === 'Editor') },
    ].filter(category => category.skills.length > 0);

    const getColorClass = (color: string) => {
        const colors: { [key: string]: string } = {
            '1': 'bg-blue-500',
            '2': 'bg-green-500',
            '3': 'bg-purple-500',
            '4': 'bg-yellow-500',
            '5': 'bg-red-500',
            '6': 'bg-indigo-500',
            '7': 'bg-pink-500',
        };
        return colors[color] || 'bg-primary-500';
    };

    return (
        <section id="skills" className="section-padding bg-secondary-50 dark:bg-secondary-800">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
                        Skills & Expertise
                    </h2>
                    <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
                        My technical skills and proficiency levels across various technologies and tools
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-6">
                                {category.name}
                            </h3>

                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.skillName}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                                        viewport={{ once: true }}
                                        className="space-y-2"
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium text-secondary-700 dark:text-secondary-300">
                                                {skill.skillName}
                                            </span>
                                            <span className="text-sm text-secondary-500 dark:text-secondary-400">
                                                {skill.percentage}%
                                            </span>
                                        </div>

                                        <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.percentage}%` }}
                                                transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                                                viewport={{ once: true }}
                                                className={`h-2 rounded-full ${getColorClass(skill.color)}`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-8 text-center">
                        Additional Skills & Tools
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[
                            'Docker', 'Kubernetes', 'AWS', 'Azure', 'Git', 'Jenkins',
                            'MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'REST APIs', 'GraphQL',
                            'Microservices', 'CI/CD', 'Agile', 'Scrum', 'Jira', 'Jmeter'
                        ].map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="p-4 rounded-lg bg-white dark:bg-secondary-700 shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
                            >
                                <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">
                                    {skill}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills; 