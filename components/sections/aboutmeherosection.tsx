import React from 'react';
import Image from 'next/image';

const AboutMeHeroSection: React.FC = () => {
    return (
        <section className="bg-black text-white min-h-screen flex items-center justify-center">
            <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left Side - Image and Badge */}
                    <div className="flex flex-col items-center lg:items-start space-y-3 sm:space-y-4 md:space-y-6 order-1 lg:order-1 -mt-2 sm:-mt-4 md:-mt-8 lg:-mt-20">
                        <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                            <span className="text-white text-xs sm:text-sm md:text-base font-semibold font-['Poppins'] tracking-wide text-center">
                                The Face Behind the Code
                            </span>
                        </div>

                        <div className="group cursor-pointer">
                            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.15)]">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                                <Image
                                    src="/hero.png"
                                    alt="Aravind Chamaakuri"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-6 order-2 lg:order-2 text-center lg:text-left">
                        <div className="space-y-2 sm:space-y-3 md:space-y-4">
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-['Poppins'] text-white leading-relaxed">
                                Hey there! 👋
                            </p>

                            <p className="text-sm sm:text-base md:text-lg font-['Poppins'] text-gray-300 leading-relaxed max-w-full lg:max-w-lg mx-auto lg:mx-0">
                                CS Engineering student passionate about building scalable web applications. I've shipped 4 production-grade apps and won hackathons, specializing in React, TypeScript, and modern frontend technologies.
                            </p>

                            <p className="text-xs sm:text-sm md:text-base font-['Poppins'] text-gray-400 leading-relaxed max-w-full lg:max-w-lg mx-auto lg:mx-0">
                                When I'm not coding, you'll find me solving problems, exploring new tech, or thinking about the next big idea. I believe great software comes from understanding people, not just technology.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                            <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 rounded-lg border border-white/10">
                                <span className="text-xs sm:text-sm font-medium text-gray-300 font-['Poppins']">React & TypeScript</span>
                            </div>
                            <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 rounded-lg border border-white/10">
                                <span className="text-xs sm:text-sm font-medium text-gray-300 font-['Poppins']">Hackathon Winner</span>
                            </div>
                            <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 rounded-lg border border-white/10">
                                <span className="text-xs sm:text-sm font-medium text-gray-300 font-['Poppins']">Frontend</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeHeroSection;