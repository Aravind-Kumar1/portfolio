"use client";

import { projects } from "@/lib/data/project";
import { notFound } from "next/navigation";
import { ExternalLink, Calendar, Tag, Users, Code, Github, Globe, Clock, CheckCircle2, PlayCircle, Download, Share2, BookOpen, Target, Layers, ArrowRight, Eye, Lightbulb, Zap, Heart } from "lucide-react";
import Link from "next/link";
import { use } from "react";

interface Props {
    params: Promise<{ slug: string }>;
}

export default function ProjectDetail({ params }: Props) {
    const { slug } = use(params);
    const project = projects.find((p) => p.slug === slug);

    if (!project) return notFound();

    // Black color for all tags
    const getTagColor = () => {
        return "bg-black text-white border-gray-600";
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Hero Section with New Layout */}
            <section className="pt-32 pb-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* My Work Label */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm font-semibold text-blue-300 mb-6">
                            <Eye className="w-4 h-4" />
                            MY WORK
                        </div>

                        {/* Project Name */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
                            {project.title}
                        </h1>

                        {project.subtitle && (
                            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                                {project.subtitle}
                            </p>
                        )}

                        {/* Tags */}
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {project.category && (
                                <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getTagColor()}`}>
                                    {project.category}
                                </span>
                            )}
                            {project.projectType && (
                                <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getTagColor()}`}>
                                    {project.projectType}
                                </span>
                            )}
                            {project.status && (
                                <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getTagColor()}`}>
                                    {project.status}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Full Width Hero Image */}
                    <div className="relative mb-16">
                        <div className="overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                        </div>

                        {/* Floating Action Buttons */}
                        <div className="absolute bottom-6 left-6 flex gap-3">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-blue-600/90 hover:bg-blue-500 backdrop-blur-sm px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105"
                                >
                                    <PlayCircle className="w-4 h-4" />
                                    Live Demo
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-gray-800/90 hover:bg-gray-700 backdrop-blur-sm border border-gray-600/50 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105"
                                >
                                    <Github className="w-4 h-4" />
                                    Code
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Tech Stack and Contributors Section */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-20">
                        {/* Tech Stack */}
                        {project.technologies && (
                            <div>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                                        <Layers className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">Technology Stack</h2>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {project.technologies.map((tech, index) => (
                                        <div key={index} className="group">
                                            <div className="p-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:border-blue-500/30">
                                                <span className="text-gray-300 font-medium text-sm">{tech}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Contributors */}
                        {project.contributors && (
                            <div>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center">
                                        <Users className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">Contributors</h2>
                                </div>
                                <div className="flex flex-wrap gap-6">
                                    {project.contributors.map((contributor, index) => (
                                        <div key={index} className="text-center group relative">
                                            <div className="relative mb-3">
                                                <img
                                                    src={contributor.avatar}
                                                    alt={contributor.name}
                                                    className="w-16 h-16 rounded-full border-2 border-gray-600 group-hover:border-purple-500 object-cover transition-all duration-300 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                            <div className="text-sm text-gray-300 font-medium">{contributor.name}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Content Sections with Side-by-Side Images */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

                    {/* Introduction Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                                    <BookOpen className="w-6 h-6 text-blue-400" />
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-white">Introduction</h2>
                            </div>
                            <div className="text-gray-300 space-y-6 leading-relaxed text-xl">
                                {project.fullDescription?.split('\n').slice(0, 1).map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-3 pt-6">
                                {project.technologies?.slice(0, 3).map((tech, index) => (
                                    <span key={index} className="px-4 py-2 bg-gray-800/50 text-gray-300 border border-gray-700/50 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 group">
                            <img
                                src={project.image}
                                alt="Project preview"
                                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>

                    {/* Purpose Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative overflow-hidden rounded-2xl border border-gray-700/50 group">
                            <img
                                src={project.image}
                                alt="Purpose illustration"
                                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                                    <Target className="w-6 h-6 text-purple-400" />
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-white">Purpose</h2>
                            </div>
                            <div className="text-gray-300 space-y-6 leading-relaxed text-xl">
                                <p>This project was designed to address specific challenges in {project.category?.toLowerCase()} by providing innovative solutions that enhance user experience and streamline processes.</p>
                                <p>The main goal was to create a platform that not only meets current needs but also scales for future requirements, ensuring long-term value and sustainability.</p>
                            </div>
                            {project.duration && (
                                <div className="flex items-center gap-2 text-gray-400 pt-4">
                                    <Clock className="w-5 h-5" />
                                    <span className="text-lg">Development Period: {project.duration}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Why This Project Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                                    <Lightbulb className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-white">Why This Project</h2>
                            </div>
                            <div className="text-gray-300 space-y-6 leading-relaxed text-xl">
                                <p>The inspiration behind this project came from recognizing gaps in existing solutions and the opportunity to create something more intuitive and powerful.</p>
                                <p>By leveraging modern technologies and focusing on user-centric design, this project demonstrates my ability to transform ideas into functional, scalable applications.</p>
                            </div>
                            {project.features && (
                                <div className="grid grid-cols-1 gap-4 pt-6">
                                    {project.features?.slice(0, 3).map((feature, index) => (
                                        <div key={index} className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                            <span className="text-gray-300 text-lg">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 group">
                            <img
                                src={project.image}
                                alt="Project impact"
                                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>

                    {/* Impact & Results Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative overflow-hidden rounded-2xl border border-gray-700/50 group">
                            <img
                                src={project.image}
                                alt="Results showcase"
                                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-orange-400" />
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-white">Impact & Results</h2>
                            </div>
                            <div className="text-gray-300 space-y-6 leading-relaxed text-xl">
                                <p>This project successfully delivered measurable improvements in user engagement and operational efficiency, showcasing the power of thoughtful design and robust development.</p>
                                <p>The implementation resulted in enhanced user satisfaction and provided valuable insights for future development projects.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-6 pt-6">
                                <div className="text-center p-6 bg-gray-800/30 rounded-lg border border-gray-700/30">
                                    <div className="text-3xl font-bold text-white mb-2">99%</div>
                                    <div className="text-sm text-gray-400">Uptime</div>
                                </div>
                                <div className="text-center p-6 bg-gray-800/30 rounded-lg border border-gray-700/30">
                                    <div className="text-3xl font-bold text-white mb-2">40%</div>
                                    <div className="text-sm text-gray-400">Engagement</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Empty Section for Your Component */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* This is where you can place your component */}
                    <div className="text-center text-gray-400">
                        {/* Your custom component will go here */}
                    </div>
                </div>
            </section>
        </div>
    );
}