"use client";

import { Card, CardContent } from "@/components/ui/card";

// Define the props interface
interface CTASectionProps {
    labelText?: string;
    heroText?: string;
}

export default function CTASection({ labelText, heroText }: CTASectionProps) {
    // Default values for props
    const defaultLabelText = "Digital Innovation Made Simple";
    const defaultHeroText = "I create responsive websites and designs that drive growth, with expertise in mobile apps for seamless experiences";

    return (
        <section className="py-12 sm:py-16 md:py-24 bg-gray-900/30" style={{ fontFamily: "Poppins, sans-serif" }}>
            <div className="container mx-auto px-4 sm:px-6">
                <div className="w-full">
                    <Card className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 border-blue-500/20 shadow-2xl rounded-2xl sm:rounded-3xl">
                        <CardContent className="p-6 sm:p-10 md:p-16 text-left min-h-[320px] sm:min-h-[400px] md:min-h-[630px] flex flex-col justify-center font-light">
                            {/* Label */}
                            <div className="inline-block mb-4 sm:mb-6">
                                <span className="bg-blue-100/10 text-blue-100 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-light tracking-wide uppercase backdrop-blur-sm border border-blue-400/20">
                                    {labelText || defaultLabelText}
                                </span>
                            </div>

                            {/* Hero Text */}
                            <h2 className="text-lg sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mt-4 mb-4 sm:mb-8 md:mb-10 lg:mb-6  leading-[1.8] sm:leading-[1.6] md:leading-[2.2]">
                                {heroText || defaultHeroText}
                            </h2>

                            {/* Buttons */}
                            <div className="flex flex-row gap-4 sm:gap-6 lg:gap-8 items-start mt-4 sm:mt-6 md:mt-10">
                                <button className="bg-white text-blue-700 px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-lg sm:rounded-xl font-light text-[10px] sm:text-xs lg:text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[120px] sm:min-w-[140px] lg:min-w-[220px]">
                                    Start Your Project
                                </button>
                                <button className="bg-transparent border-2 border-white text-white px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-lg sm:rounded-xl font-light text-[10px] sm:text-xs lg:text-lg hover:bg-white hover:text-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[120px] sm:min-w-[140px] lg:min-w-[220px]">
                                    See My Work
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}