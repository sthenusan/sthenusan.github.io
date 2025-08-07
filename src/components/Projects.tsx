import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Project } from '../data/portfolio';

interface ProjectsProps {
    projects: {
        web: Project[];
        software: Project[];
        android: Project[];
        freelance: Project[];
    };
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    const [activeFilter, setActiveFilter] = useState('all');

    const allProjects = [
        ...projects.web.map(p => ({ ...p, category: 'web' })),
        ...projects.software.map(p => ({ ...p, category: 'software' })),
        ...projects.android.map(p => ({ ...p, category: 'android' })),
        ...projects.freelance.map(p => ({ ...p, category: 'freelance' })),
    ];

    const filteredProjects = activeFilter === 'all'
        ? allProjects
        : allProjects.filter(project => project.category === activeFilter);

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'web', label: 'Web Development' },
        { id: 'software', label: 'Software Engineering' },
        { id: 'android', label: 'Mobile Development' },
        { id: 'freelance', label: 'Freelance' },
    ];

    return (
        <section id="projects" className="section-padding bg-white dark:bg-secondary-900">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
                        My Projects
                    </h2>
                    <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
                        A showcase of my recent work and projects across different technologies and domains
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {filters.map((filter) => (
                        <motion.button
                            key={filter.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${activeFilter === filter.id
                                    ? 'bg-primary-600 text-white shadow-lg'
                                    : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700'
                                }`}
                        >
                            {filter.label}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.projectName}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card group overflow-hidden"
                            >
                                {/* Project Image */}
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={project.image}
                                        alt={project.projectName}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                        <motion.a
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            href={project.preview}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white rounded-full text-secondary-900 hover:bg-primary-600 hover:text-white transition-colors duration-200"
                                        >
                                            <ExternalLink size={20} />
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            href={project.preview}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white rounded-full text-secondary-900 hover:bg-primary-600 hover:text-white transition-colors duration-200"
                                        >
                                            <Github size={20} />
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                                        {project.projectName}
                                    </h3>

                                    <p className="text-secondary-600 dark:text-secondary-400 mb-4 line-clamp-3">
                                        {project.summary}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Category Badge */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-medium text-secondary-500 dark:text-secondary-400 uppercase tracking-wide">
                                            {project.category}
                                        </span>
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.preview}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm flex items-center space-x-1 transition-colors duration-200"
                                        >
                                            <span>View Project</span>
                                            <ExternalLink size={16} />
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <div className="text-secondary-400 dark:text-secondary-500 mb-4">
                            <Filter size={48} className="mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold text-secondary-700 dark:text-secondary-300 mb-2">
                            No projects found
                        </h3>
                        <p className="text-secondary-500 dark:text-secondary-400">
                            No projects match the selected filter. Try selecting a different category.
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects; 