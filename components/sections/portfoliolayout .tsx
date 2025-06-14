"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, X, ArrowLeft } from 'lucide-react';

interface DecryptTextProps {
    text: string;
    isVisible: boolean;
    hasAnimated: boolean;
    setHasAnimated: (value: boolean) => void;
}

const DecryptText: React.FC<DecryptTextProps> = ({ text, isVisible, hasAnimated, setHasAnimated }) => {
    const [displayText, setDisplayText] = useState<string>('');
    const [isDecrypting, setIsDecrypting] = useState<boolean>(false);

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';

    useEffect(() => {
        if (!isVisible || hasAnimated) {
            setDisplayText(text);
            return;
        }

        setIsDecrypting(true);
        let iteration = 0;

        const interval = setInterval(() => {
            setDisplayText(text.split('').map((char: string, index: number) => {
                if (char === ' ') return ' ';
                if (index < iteration) return text[index];
                return characters[Math.floor(Math.random() * characters.length)];
            }).join(''));

            if (iteration >= text.length) {
                clearInterval(interval);
                setIsDecrypting(false);
                setHasAnimated(true);
            }

            iteration += 1/3;
        }, 30);

        return () => clearInterval(interval);
    }, [text, isVisible, hasAnimated, setHasAnimated]);

    return (
        <span className="text-white" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}>
            {displayText || text}
        </span>
    );
};

interface Project {
    id: number;
    title: string;
    description: string[];
    isLive: boolean;
    image: string;
    screenshots: string[];
    type: 'Internship' | 'Self' | 'Academic';
}

const PremiumPortfolio: React.FC = () => {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [animatedProjects, setAnimatedProjects] = useState<{ [key: number]: boolean }>({});
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const projects: Project[] = [
        {
            id: 1,
            title: "Viral Bug",
            description: [
                "Built and shipped 4 production-grade applications during internship",
                "Targeted microfinance, healthcare, and digital marketing sectors",
                "Achieved 90% Lighthouse performance scores",
                "Converted Figma designs to responsive UIs",
                "Implemented secure form workflows and automated deployments"
            ],
            isLive: true,
            image: "/viral_mock.png",
            screenshots: ["/viral_mock.png", "/hero.png", "/viral_mock.png"],
            type: "Internship"
        },
        {
            id: 2,
            title: "ELIM Church Platform",
            description: [
                "Developed fully responsive church platform",
                "Enabled access to sermons, events, and announcements",
                "Reduced manual follow-ups by 50%",
                "Maintained 99% uptime with lightweight deployment"
            ],
            isLive: true,
            image: "/viral_mock.png",
            screenshots: ["/hero.png", "/viral_mock.png", "/hero.png"],
            type: "Self"
        },
        {
            id: 3,
            title: "The Team Events",
            description: [
                "Engineered interactive event booking platform",
                "Delivered modern UI with responsive performance",
                "Integrated secure Clerk authentication",
                "Implemented event listings and booking logic",
                "Built user dashboards with seamless flows"
            ],
            isLive: true,
            image: "/viral_mock.png",
            screenshots: ["/hero.png", "/viral_mock.png", "/hero.png"],
            type: "Academic"
        },
        {
            id: 4,
            title: "E-Commerce Dashboard",
            description: [
                "Modern admin dashboard for e-commerce",
                "Real-time analytics and reporting",
                "Inventory management system",
                "Multi-vendor support"
            ],
            isLive: true,
            image: "/viral_mock.png",
            screenshots: ["/hero.png", "/viral_mock.png", "/hero.png"],
            type: "Self"
        },
        {
            id: 5,
            title: "Social Media App",
            description: [
                "Full-stack social media platform",
                "Real-time messaging system",
                "Image and video sharing",
                "Advanced user engagement features"
            ],
            isLive: true,
            image: "/viral_mock.png",
            screenshots: ["/hero.png", "/viral_mock.png", "/hero.png"],
            type: "Internship"
        },
        {
            id: 6,
            title: "Fitness Tracker",
            description: [
                "Personal fitness tracking application",
                "Workout planning and scheduling",
                "Progress analytics and insights",
                "Social fitness challenges"
            ],
            isLive: true,
            image: "/viral_mock.png",
            screenshots: ["/hero.png", "/viral_mock.png", "/hero.png"],
            type: "Academic"
        },
    ];

    const handleMouseEnter = (projectId: number) => {
        setHoveredProject(projectId);
        if (!animatedProjects[projectId]) {
            setAnimatedProjects((prev) => ({ ...prev, [projectId]: false }));
        }
    };

    const openQuickView = (project: Project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const closeQuickView = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
            );
        }
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header Section */}
            <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
                <div
                    className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-white/10 rounded-full border border-white/20 mb-3 md:mb-4">
    <span
        className="text-white text-xs sm:text-sm font-medium"
        style={{fontFamily: "'Poppins', 'Inter', 'SF Pro Display', sans-serif"}}
    >
        My Services
    </span>
                </div>

                <h2
                    className="text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 leading-tight sm:leading-normal lg:whitespace-pre-line"
                    style={{fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: 1.2}}
                >
    <span className="block sm:hidden leading-tight">
        Crafting Innovative Solutions<br/>to Elevate Your Digital Presence
    </span>
                    <span className="hidden sm:block lg:hidden">
        Crafting Innovative Solutions<br/>to Elevate Your Digital Presence
    </span>
                    <span className="hidden lg:block">
        Crafting Innovative Solutions<br/>to Elevate Your Digital Presence
    </span>
                </h2>


                {/* Side-by-Side Cards Grid - 1 per row on mobile, 2 on md+ */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative">
                            {/* Card Container */}
                            <div
                                className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden border border-gray-800/50 hover:border-white/30 transition-colors duration-300 cursor-pointer p-0 m-0"
                                onMouseEnter={() => handleMouseEnter(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Buttons - Visible initially on mobile, sliding up on hover for larger screens */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 transform sm:translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                                    <div className="flex flex-row gap-4 sm:gap-6 lg:gap-8 items-start justify-center">
                                        <button
                                            onClick={() => openQuickView(project)}
                                            className="bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-4 sm:px-4 lg:px-6 py-2 sm:py-2 lg:py-3 rounded-xl font-medium text-xs sm:text-sm lg:text-lg transition-colors duration-200 min-w-[120px] sm:min-w-[140px] lg:min-w-[180px]"
                                        >
                                            Quick View
                                        </button>
                                        <button
                                            className="border-2 border-white/80 hover:border-white text-white hover:bg-white/10 px-4 sm:px-4 lg:px-6 py-2 sm:py-2 lg:py-3 rounded-xl font-medium text-xs sm:text-sm lg:text-lg transition-colors duration-200 min-w-[120px] sm:min-w-[140px] lg:min-w-[180px]">
                                            View Detail
                                        </button>
                                    </div>
                                </div>

                            </div>

                            {/* Project Name and Arrow */}
                            <div className="flex items-start justify-between mt-6 relative">
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white flex-1"
                                    style={{fontFamily: "'Poppins', sans-serif"}}>
                                    <DecryptText
                                        text={project.title}
                                        isVisible={hoveredProject === project.id}
                                        hasAnimated={animatedProjects[project.id] || false}
                                        setHasAnimated={(value) => setAnimatedProjects((prev) => ({
                                            ...prev,
                                            [project.id]: value
                                        }))}
                                    />
                                </h3>
                                <button
                                    className="absolute top-0 right-0 hover:text-white transition-colors duration-200 group/arrow">
                                    <ArrowRight
                                        className="w-8 h-8 text-gray-400 group-hover/arrow:text-white group-hover/arrow:translate-x-2 transition-all duration-200 rotate-45"/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="text-center mt-16 sm:mt-20">
                    <button
                        className="border-2 border-gray-700 hover:border-gray-600 text-gray-200 hover:bg-gray-800/30 px-8 py-4 sm:px-12 sm:py-5 rounded-full font-semibold flex items-center gap-3 transition-colors duration-200 bg-gray-900/50 mx-auto"
                        style={{fontFamily: "'Poppins', sans-serif"}}>
                        <span className="text-base sm:text-lg">View All Projects</span>
                        <ArrowRight className="w-5 h-5"/>
                    </button>
                </div>
            </div>

            {/* Quick View Modal - Full Width */}
            {selectedProject && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
                    <div
                        className="bg-gray-900 rounded-2xl w-full max-w-[90vw] max-h-[90vh] overflow-hidden border border-gray-700 shadow-2xl">
                        {/* Modal Header */}
                        <div
                            className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-6 border-b border-gray-700">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                                <span className="text-gray-400 text-sm sm:text-base lg:text-lg"
                                      style={{fontFamily: "'Poppins', sans-serif", fontWeight: 400}}>
                                    {selectedProject.type} Project
                                </span>
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-white" style={{fontFamily: "'Poppins', sans-serif", fontWeight: 400}}>
                                    {selectedProject.title}
                                </h3>
                            </div>
                            <button
                                onClick={closeQuickView}
                                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full"
                            >
                                <X className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-3 sm:p-4 lg:p-8">
                            {/* Image Gallery with Cards */}
                            <div className="relative mb-6 sm:mb-8">
                                <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
                                    {selectedProject.screenshots.map((screenshot, index) => (
                                        <div
                                            key={index}
                                            className={`relative rounded-xl overflow-hidden bg-gray-800 border border-gray-600 transition-all duration-200 max-w-[120px] h-[100px] sm:max-w-[200px] sm:h-[120px] lg:max-w-[400px] lg:h-[320px] mx-auto p-0 m-0 ${
                                                index === currentImageIndex ? 'ring-2 ring-blue-500' : ''
                                            }`}
                                            onClick={() => setCurrentImageIndex(index)}
                                        >
                                            <img
                                                src={screenshot}
                                                alt={`${selectedProject.title} screenshot ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation Arrows */}
                                {selectedProject.screenshots.length > 1 && (
                                    <>
                                        {currentImageIndex > 0 && (
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-1 sm:p-2 lg:p-3 rounded-full transition-colors duration-200 border border-gray-600"
                                            >
                                                <ArrowLeft className="w-3 h-3 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                                            </button>
                                        )}
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-1 sm:p-2 lg:p-3 rounded-full transition-colors duration-200 border border-gray-600"
                                        >
                                            <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Action Buttons */}
                            {/* Action Buttons */}
                            <div className="flex gap-2 sm:gap-3 lg:gap-4 justify-end flex-wrap mt-4 sm:mt-6 md:mt-8 px-2 sm:px-0">
                                <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold text-[10px] sm:text-sm lg:text-base tracking-wide rounded-xl transition-all duration-300 flex items-center justify-center shadow-md py-1.5 px-3 sm:py-2 sm:px-4 lg:py-3 lg:px-6 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] hover:scale-[1.03]">
                                    Get In Touch
                                </button>
                                <button className="border-2 border-gray-600 hover:border-gray-500 text-white hover:bg-gray-800/40 font-semibold text-[10px] sm:text-sm lg:text-base tracking-wide rounded-xl transition-all duration-300 flex items-center justify-center py-1.5 px-3 sm:py-2 sm:px-4 lg:py-3 lg:px-6 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] hover:scale-[1.03]">
                                    Read Full Story
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PremiumPortfolio;