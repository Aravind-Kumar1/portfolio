"use client";

import { projects } from "@/lib/data/project";
import { notFound } from "next/navigation";
import { ExternalLink, Calendar, Tag, Users, Code, Github, Globe, Clock, CheckCircle2, PlayCircle, Download, Share2, BookOpen, Target, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Props {
    params: { slug: string };
}

export default function ProjectDetail({ params }: Props) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) return notFound();

    return (
        <div className="min-h-screen bg-gray-900 text-white font-['Inter']">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        {/* Project Category Badge */}
                        {project.category && (
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-600 rounded-full text-sm font-medium text-gray-300">
                                <Tag className="w-4 h-4 text-blue-400" />
                                {project.category}
                            </div>
                        )}

                        {/* Project Title */}
                        <div className="space-y-4">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{project.title}</h1>
                            {project.subtitle && (
                                <p className="text-lg text-gray-400 leading-relaxed">{project.subtitle}</p>
                            )}
                        </div>

                        {/* Project Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {project.date && (
                                <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                                    <Calendar className="w-5 h-5 mx-auto mb-2 text-blue-400" />
                                    <div className="text-xs text-gray-400 mb-1">Date</div>
                                    <div className="font-semibold text-sm text-white">{project.date}</div>
                                </div>
                            )}
                            {project.status && (
                                <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                                    <CheckCircle2 className="w-5 h-5 mx-auto mb-2 text-green-400" />
                                    <div className="text-xs text-gray-400 mb-1">Status</div>
                                    <div className="font-semibold text-sm text-white">{project.status}</div>
                                </div>
                            )}
                            {project.contributors && (
                                <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                                    <Users className="w-5 h-5 mx-auto mb-2 text-purple-400" />
                                    <div className="text-xs text-gray-400 mb-1">Team</div>
                                    <div className="font-semibold text-sm text-white">{project.contributors.length}</div>
                                </div>
                            )}
                            {project.duration && (
                                <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                                    <Clock className="w-5 h-5 mx-auto mb-2 text-orange-400" />
                                    <div className="text-xs text-gray-400 mb-1">Duration</div>
                                    <div className="font-semibold text-sm text-white">{project.duration}</div>
                                </div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-200"
                                >
                                    <PlayCircle className="w-5 h-5" />
                                    Launch Project
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 border border-gray-600 px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-200"
                                >
                                    <Github className="w-5 h-5" />
                                    Source Code
                                </a>
                            )}
                            <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 border border-gray-600 px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-200">
                                <Download className="w-5 h-5" />
                                Download
                            </button>
                            <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 border border-gray-600 px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-200">
                                <Share2 className="w-5 h-5" />
                                Share
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Visual */}
                    <div className="relative">
                        <div className="overflow-hidden rounded-lg border border-gray-700 bg-gray-800">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[300px] sm:h-[400px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contributors Showcase */}
            {project.contributors && (
                <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-800">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-white">Project Team</h2>
                            <p className="text-gray-400 text-sm">The talented individuals behind this project</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            {project.contributors.map((contributor, index) => (
                                <div key={index} className="text-center">
                                    <img
                                        src={contributor.avatar}
                                        alt={contributor.name}
                                        className="w-16 h-16 rounded-full border-2 border-gray-700 object-cover"
                                    />
                                    <p className="mt-2 text-sm text-white font-medium">{contributor.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Content Grid */}
            <section className="px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
                    {/* Main Content Column */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Project Story */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <BookOpen className="w-6 h-6 text-blue-400" />
                                <h2 className="text-2xl font-bold text-white">Project Story</h2>
                            </div>
                            <div className="text-gray-400 space-y-4">
                                {project.fullDescription?.split('\n').map((paragraph, index) => (
                                    <p key={index} className="text-base leading-relaxed">{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        {/* Key Features */}
                        {project.features && (
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Target className="w-6 h-6 text-emerald-400" />
                                    <h3 className="text-2xl font-bold text-white">Key Features</h3>
                                </div>
                                <div className="space-y-4">
                                    {project.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="p-4 bg-gray-800 rounded-lg border border-gray-700"
                                        >
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1" />
                                                <p className="text-gray-300 text-base">{feature}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Tech Stack */}
                        {project.technologies && (
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <Layers className="w-6 h-6 text-orange-400" />
                                    <h3 className="text-2xl font-bold text-white">Technology Stack</h3>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {project.technologies.map((tech, index) => (
                                        <div
                                            key={index}
                                            className="p-4 bg-gray-800 rounded-lg border border-gray-700 text-center"
                                        >
                                            <Code className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                                            <span className="text-sm text-gray-300">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="sticky top-20 bg-gray-800 border border-gray-700 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-white mb-6">Project Details</h3>
                            <div className="space-y-4">
                                {project.role && (
                                    <div className="space-y-1">
                                        <dt className="text-sm text-gray-400 flex items-center gap-2">
                                            <Users className="w-4 h-4" />
                                            Role
                                        </dt>
                                        <dd className="text-base text-white font-semibold">{project.role}</dd>
                                    </div>
                                )}
                                {project.status && (
                                    <div className="space-y-1">
                                        <dt className="text-sm text-gray-400 flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4" />
                                            Status
                                        </dt>
                                        <dd>
                                            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${
                                                project.status === 'Completed'
                                                    ? 'bg-green-500/10 text-green-300 border-green-500/20'
                                                    : 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20'
                                            }`}>
                                                <div className={`w-2 h-2 rounded-full ${
                                                    project.status === 'Completed' ? 'bg-green-400' : 'bg-yellow-400'
                                                }`}></div>
                                                {project.status}
                                            </span>
                                        </dd>
                                    </div>
                                )}
                                {project.duration && (
                                    <div className="space-y-1">
                                        <dt className="text-sm text-gray-400 flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            Duration
                                        </dt>
                                        <dd className="text-base text-white font-semibold">{project.duration}</dd>
                                    </div>
                                )}
                            </div>
                            <div className="space-y-3 pt-6 border-t border-gray-700">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200"
                                    >
                                        <Globe className="w-4 h-4" />
                                        View Live
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 border border-gray-600 px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200"
                                    >
                                        <Github className="w-4 h-4" />
                                        Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-800">
                <div className="max-w-6xl mx-auto text-center space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to Build Something Amazing?</h2>
                    <p className="text-base text-gray-400 max-w-2xl mx-auto">
                        Let's collaborate on your next innovative project and create something impactful.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold text-sm transition-colors duration-200"
                        >
                            Start a Project
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/projects"
                            className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 border border-gray-600 px-6 py-2 rounded-lg font-semibold text-sm transition-colors duration-200"
                        >
                            <Layers className="w-5 h-5" />
                            Explore More Projects
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}