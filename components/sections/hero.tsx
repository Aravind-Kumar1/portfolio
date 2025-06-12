"use client"

import { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

export default function HeroSection() {
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);

    return (
        <div className="mt-20 sm:mt-24 md:mt-12 bg-black text-white min-h-fit md:min-h-[100vh] relative overflow-hidden" style={{ fontFamily: 'Poppins, system-ui, -apple-system, sans-serif' }}>
            {/* Hero Section */}
            <div className="min-h-fit md:min-h-[100vh] flex items-center justify-center relative z-10 py-8 sm:py-10 md:pt-10">
                <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
                    {/* Top Label */}
                    <div className="flex items-center justify-center mb-4 sm:mb-6 md:mb-4">
                        <div className="bg-black border-2 border-blue-500 px-4 py-1.5 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-[15px]">
                            <span className="text-white text-xs sm:text-sm md:text-sm tracking-wider">
                                Craft, Code, Create
                            </span>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="space-y-6 sm:space-y-8 md:space-y-12">
                        {/* Hero Text */}
                        <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 mt-3 sm:mt-4 md:mt-6">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white leading-tight mb-4 sm:mb-5 md:mb-7">
                                Transforming Ideas
                                <br/>
                                <span className="text-white block mt-1 sm:mt-1.5 md:mt-2">
                                    into Digital Masterpieces
                                </span>
                            </h1>
                            <p className="text-white leading-relaxed font-light max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-4 md:px-0 text-sm sm:text-base md:text-lg lg:text-xl"
                               style={{fontSize: 'clamp(0.875rem, 2vw, 1.395rem)'}}>
                                Delivering modern, high-quality web solutions that drive user engagement.
                            </p>
                        </div>

                        {/* CTA Buttons - Side by Side for All Screens */}
                        <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 justify-center mt-6 sm:mt-8 md:mt-12 px-2 sm:px-0">
                            <button
                                className="group relative px-3 py-2 sm:px-4 sm:py-2.5 md:px-8 md:py-4 bg-blue-600 text-white font-semibold text-xs sm:text-sm md:text-base tracking-wide rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center justify-center shadow-2xl flex-1 sm:flex-1 md:min-w-[180px] md:flex-none transform hover:scale-105"
                                onMouseEnter={() => setHoveredButton('primary')}
                                onMouseLeave={() => setHoveredButton(null)}
                            >
                                <span className="flex items-center">
                                  View My Work
                                  <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                                </span>
                            </button>
                            <button
                                className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-8 md:py-4 border-2 border-white text-white font-semibold text-xs sm:text-sm md:text-base tracking-wide rounded-xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center flex-1 sm:flex-1 md:min-w-[180px] md:flex-none transform hover:scale-105"
                                onMouseEnter={() => setHoveredButton('secondary')}
                                onMouseLeave={() => setHoveredButton(null)}
                            >
                                Let's Collaborate
                            </button>
                        </div>

                        {/* Social Links - Better Mobile Spacing */}
                        <div className="flex justify-center items-center mt-8 sm:mt-10 md:mt-2 mb-6 sm:mb-8 md:mb-4">
                            <div className="flex flex-col items-center gap-2 sm:gap-2.5 md:gap-2">
                                <div className="w-px h-4 sm:h-5 md:h-6 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                                <p className="text-white/70 text-xs sm:text-xs md:text-sm font-medium tracking-wider uppercase">
                                    Connect
                                </p>
                                <div className="flex gap-3 sm:gap-3.5 md:gap-3">
                                    {[
                                        {Icon: Github, label: 'GitHub', href: '#'},
                                        {Icon: Linkedin, label: 'LinkedIn', href: '#'},
                                        {Icon: Mail, label: 'Email', href: '#'},
                                        {Icon: Download, label: 'Download CV', href: '#'},
                                    ].map(({Icon, label, href}, index) => (
                                        <a
                                            key={index}
                                            href={href}
                                            className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl border border-white/20 hover:border-white/60 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center group transform hover:scale-110"
                                            title={label}
                                        >
                                            <Icon size={14}
                                                  className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px] text-white/80 group-hover:text-white transition-all duration-300"/>
                                        </a>
                                    ))}
                                </div>
                                <div className="w-px h-3 sm:h-3 md:h-3 bg-gradient-to-b from-white/30 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}