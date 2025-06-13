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
        <span className="text-white" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900 }}>
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
            image: "/hero.png",
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
            image: "/hero.png",
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
            image: "/hero.png",
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
            image: "/hero.png",
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
            image: "/hero.png",
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
            <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
                <div className="text-left mb-6 sm:mb-8 lg:mb-12">
                    <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 rounded-full border border-white/20 mb-3 sm:mb-4 lg:mb-6">
                        <span className="text-white text-xs sm:text-sm font-medium" style={{fontFamily: "'Inter', 'SF Pro Display', sans-serif"}}>
                            My Projects
                        </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300" style={{fontFamily: "'Poppins', 'Inter', sans-serif", fontWeight: 550, lineHeight: 1.1}}>
                        Crafting Innovative Solutions
                        <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>
                        to Elevate Your Digital Presence
                    </h2>
                </div>

                {/* Cards Grid - 1 per row on mobile, 2 per row on larger screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative">
                            {/* Card Container */}
                            <div
                                className="relative w-full h-[250px] sm:h-[280px] lg:h-[400px] overflow-hidden border border-gray-800/50 hover:border-white/30 transition-colors duration-300 cursor-pointer"
                                onMouseEnter={() => handleMouseEnter(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-center"
                                />

                                {/* Buttons - Always visible on mobile, slide up on desktop */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-3 sm:p-4 lg:p-6 lg:transform lg:translate-y-full lg:group-hover:translate-y-0 lg:transition-transform lg:duration-500 lg:ease-out z-20">
                                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 items-center justify-center">
                                        <button
                                            onClick={() => openQuickView(project)}
                                            className="bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2 lg:py-2.5 rounded-md sm:rounded-lg lg:rounded-xl font-medium text-xs sm:text-sm lg:text-sm transition-colors duration-200 min-w-[100px] sm:min-w-[110px] lg:min-w-[120px]"
                                        >
                                            Quick View
                                        </button>
                                        <button className="border border-white/80 hover:border-white text-white hover:bg-white/10 px-4 sm:px-5 lg:px-6 py-2 sm:py-2 lg:py-2.5 rounded-md sm:rounded-lg lg:rounded-xl font-medium text-xs sm:text-sm lg:text-sm transition-colors duration-200 min-w-[100px] sm:min-w-[110px] lg:min-w-[120px]">
                                            View Detail
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Project Name and Arrow */}
                            <div className="flex items-center justify-between mt-2 sm:mt-4 lg:mt-6">
                                <h3 className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold text-white flex-1 pr-2" style={{fontFamily: "'Poppins', sans-serif"}}>
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
                                <button className="hover:text-white transition-colors duration-200 group/arrow">
                                    <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-gray-400 group-hover/arrow:text-white transition-transform duration-200 group-hover/arrow:-rotate-90"/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="text-center mt-8 sm:mt-12 lg:mt-16">
                    <button className="border-2 border-gray-700 hover:border-gray-600 text-gray-200 hover:bg-gray-800/30 px-6 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-5 rounded-full font-semibold flex items-center gap-2 lg:gap-3 transition-colors duration-200 bg-gray-900/50 mx-auto text-sm sm:text-base lg:text-lg" style={{fontFamily: "'Poppins', sans-serif"}}>
                        <span>View All Projects</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5"/>
                    </button>
                </div>
            </div>

            {/* Quick View Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
                    <div className="bg-gray-900 rounded-xl sm:rounded-2xl w-full max-w-[95vw] sm:max-w-[90vw] max-h-[95vh] sm:max-h-[90vh] overflow-hidden border border-gray-700 shadow-2xl">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-3 sm:p-4 lg:p-6 border-b border-gray-700">
                            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                                <span className="text-gray-400 text-xs sm:text-sm lg:text-lg" style={{fontFamily: "'Poppins', sans-serif", fontWeight: 400}}>
                                    {selectedProject.type} Project
                                </span>
                                <h3 className="text-lg sm:text-xl lg:text-3xl font-medium text-white" style={{fontFamily: "'Poppins', sans-serif", fontWeight: 400}}>
                                    {selectedProject.title}
                                </h3>
                            </div>
                            <button
                                onClick={closeQuickView}
                                className="text-gray-400 hover:text-white transition-colors duration-200 p-1 sm:p-2 hover:bg-gray-800 rounded-full"
                            >
                                <X className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-4 sm:p-6 lg:p-8">
                            {/* Image Gallery with Cards */}
                            <div className="relative mb-6 sm:mb-8 lg:mb-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-6">
                                    {selectedProject.screenshots.map((screenshot, index) => (
                                        <div
                                            key={index}
                                            className={`relative rounded-lg sm:rounded-xl overflow-hidden bg-gray-800 border border-gray-600 transition-all duration-200 cursor-pointer ${
                                                index === currentImageIndex ? 'ring-2 ring-blue-500' : ''
                                            }`}
                                            style={{ width: '100%', height: '200px', maxHeight: '250px' }}
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
                                                className="absolute left-4 sm:left-6 lg:left-6 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 sm:p-3 rounded-full transition-colors duration-200 border border-gray-600"
                                            >
                                                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6" />
                                            </button>
                                        )}
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 sm:right-6 lg:right-6 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 sm:p-3 rounded-full transition-colors duration-200 border border-gray-600"
                                        >
                                            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6" />
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end">
                                <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base min-w-[120px] sm:min-w-[140px]">
                                    Get In Touch
                                </button>
                                <button className="border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:bg-gray-800/50 py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-colors duration-200 text-sm sm:text-base min-w-[120px] sm:min-w-[140px]">
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