
"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, Github, Code2, Info } from 'lucide-react';

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
        <span className={`transition-all duration-300 ${isDecrypting ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-pulse' : 'text-white drop-shadow-2xl'}`} style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, textShadow: isDecrypting ? '0 0 20px rgba(34, 197, 94, 0.5)' : '0 4px 20px rgba(0, 0, 0, 0.8)' }}>
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
}

const PremiumPortfolio: React.FC = () => {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [animatedProjects, setAnimatedProjects] = useState<{ [key: number]: boolean }>({});

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
            image: "/viral.png",
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
            image: "https://images.unsplash.com/photo-1516321310763-3830f5b37e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        },
    ];

    const handleMouseEnter = (projectId: number) => {
        setHoveredProject(projectId);
        if (!animatedProjects[projectId]) {
            setAnimatedProjects((prev) => ({ ...prev, [projectId]: false }));
        }
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header Section */}
            <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
                <div className="text-left mb-8 md:mb-12 lg:mb-16">
                    <div
                        className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-white/10 rounded-full border border-white/20 mb-4 md:mb-6">
            <span
                className="text-white text-xs sm:text-sm font-medium"
                style={{fontFamily: "'Inter', 'SF Pro Display', sans-serif"}}
            >
              My Projects
            </span>
                    </div>
                    <h2
                        className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 whitespace-normal md:whitespace-nowrap"
                        style={{fontFamily: "'Poppins', 'Inter', sans-serif", fontWeight: 550, lineHeight: 1.2}}
                    >
                        Crafting Innovative Solutions
                        <br/>
                        to Elevate Your Digital Presence
                    </h2>
                </div>


                {/* Grid Layout */}
                <div className="grid gap-6 sm:gap-8">
                    {/* First row - Full width */}
                    <div className="relative">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white"
                            style={{fontFamily: "'Poppins', sans-serif"}}>
                            <DecryptText
                                text={projects[0].title}
                                isVisible={hoveredProject === projects[0].id}
                                hasAnimated={animatedProjects[projects[0].id] || false}
                                setHasAnimated={(value) => setAnimatedProjects((prev) => ({
                                    ...prev,
                                    [projects[0].id]: value
                                }))}
                            />
                        </h3>
                        <div
                            className="group relative w-full h-[300px] sm:h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-gray-800/50 hover:border-white/30 transition-all duration-500 cursor-pointer"
                            onMouseEnter={() => handleMouseEnter(projects[0].id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Water wave effect */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-600/30 animate-pulse"></div>
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400/20 to-transparent animate-bounce"
                                    style={{animationDuration: '3s'}}></div>
                                <div className="absolute inset-0">
                                    <div
                                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                                </div>
                            </div>

                            <img
                                src={projects[0].image}
                                alt={projects[0].title}
                                className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                            />

                            {/* Hover overlay */}
                            <div
                                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-20">
                                <div
                                    className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                    <button
                                        className="bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-6 py-2 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg flex items-center gap-2 sm:gap-3 hover:bg-white/30 transition-all duration-300 mx-auto">
                                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5"/>
                                        View Case Study
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second row - Stacked on mobile, two columns on md and above */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {projects.slice(1, 3).map((project) => (
                            <div key={project.id} className="relative">
                                <h3 className="text-lg sm:text-xl font-bold mb-4 text-white"
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
                                <div
                                    className="group relative w-full h-[300px] sm:h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-gray-800/50 hover:border-white/30 transition-all duration-500 cursor-pointer"
                                    onMouseEnter={() => handleMouseEnter(project.id)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >
                                    {/* Water wave effect */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-600/30 animate-pulse"></div>
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400/20 to-transparent animate-bounce"
                                            style={{animationDuration: '3s'}}></div>
                                        <div className="absolute inset-0">
                                            <div
                                                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                                        </div>
                                    </div>

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                                    />

                                    {/* Hover overlay */}
                                    <div
                                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-20">
                                        <div
                                            className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                            <button
                                                className="bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-sm sm:text-base flex items-center gap-2 hover:bg-white/30 transition-all duration-300">
                                                <Info className="w-4 h-4"/>
                                                View Details
                                                <ArrowRight className="w-4 h-4"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Third row - Full width */}
                    <div className="relative">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white"
                            style={{fontFamily: "'Poppins', sans-serif"}}>
                            <DecryptText
                                text={projects[3].title}
                                isVisible={hoveredProject === projects[3].id}
                                hasAnimated={animatedProjects[projects[3].id] || false}
                                setHasAnimated={(value) => setAnimatedProjects((prev) => ({
                                    ...prev,
                                    [projects[3].id]: value
                                }))}
                            />
                        </h3>
                        <div
                            className="group relative w-full h-[300px] sm:h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-gray-800/50 hover:border-white/30 transition-all duration-500 cursor-pointer"
                            onMouseEnter={() => handleMouseEnter(projects[3].id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Water wave effect */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-600/30 animate-pulse"></div>
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400/20 to-transparent animate-bounce"
                                    style={{animationDuration: '3s'}}></div>
                                <div className="absolute inset-0">
                                    <div
                                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                                </div>
                            </div>

                            <img
                                src={projects[3].image}
                                alt={projects[3].title}
                                className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                            />

                            {/* Hover overlay */}
                            <div
                                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-20">
                                <div
                                    className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                    <button
                                        className="bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-6 py-2 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg flex items-center gap-2 sm:gap-3 hover:bg-white/30 transition-all duration-300 mx-auto">
                                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5"/>
                                        View More
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fourth row - Stacked on mobile, two columns on md and above */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {projects.slice(4, 6).map((project) => (
                            <div key={project.id} className="relative">
                                <h3 className="text-lg sm:text-xl font-bold mb-4 text-white"
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
                                <div
                                    className="group relative w-full h-[300px] sm:h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-gray-800/50 hover:border-white/30 transition-all duration-500 cursor-pointer"
                                    onMouseEnter={() => handleMouseEnter(project.id)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >
                                    {/* Water wave effect */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-600/30 animate-pulse"></div>
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400/20 to-transparent animate-bounce"
                                            style={{animationDuration: '3s'}}></div>
                                        <div className="absolute inset-0">
                                            <div
                                                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                                        </div>
                                    </div>

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                                    />

                                    {/* Hover overlay */}
                                    <div
                                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-20">
                                        <div
                                            className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                            <button
                                                className="bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-sm sm:text-base flex items-center gap-2 hover:bg-white/30 transition-all duration-300">
                                                <Info className="w-4 h-4"/>
                                                Project Details
                                                <ArrowRight className="w-4 h-4"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Projects Button */}
                <div className="text-center mt-12 sm:mt-16">
                    <button
                        className="group/btn relative border-2 border-gray-700 text-gray-200 px-6 py-2 sm:px-10 sm:py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300 bg-gray-900/50 mx-auto"
                        style={{fontFamily: "'Poppins', sans-serif"}}>
                        <span
                            className="absolute inset-0 bg-gray-700/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-full"></span>
                        <span className="relative z-10 text-sm sm:text-base">View All Projects</span>
                        <ArrowRight
                            className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PremiumPortfolio;
