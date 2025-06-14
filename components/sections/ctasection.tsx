"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

// Define the props interface
interface CTASectionProps {
    labelText?: string;
    heroText?: string;
}

export default function CTASection({ labelText, heroText }: CTASectionProps) {
    // Default values for props
    const defaultLabelText = "Digital Innovation Made Simple";
    const defaultHeroText = "I create responsive websites and designs that drive growth, with expertise in mobile apps for seamless experiences";
    const [hoveredButton, setHoveredButton] = useState<string | null>(null);

    return (
        <section className="py-12 sm:py-16 md:py-24 bg-gray-900/30" style={{ fontFamily: "Poppins, sans-serif" }}>
            <div className="container mx-auto px-4 sm:px-6">
                <div className="w-full">
                    <Card className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 border-blue-500/20 shadow-2xl rounded-2xl sm:rounded-3xl">
                        <CardContent
                            className="p-6 sm:p-10 md:p-16 text-left min-h-[320px] sm:min-h-[400px] md:min-h-[630px] flex flex-col justify-center font-light">
                            {/* Label */}
                            <div className="inline-block mb-4 sm:mb-6">
                                <span
                                    className="bg-blue-100/10 text-blue-100 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-light tracking-wide uppercase backdrop-blur-sm border border-blue-400/20">
                                    {labelText || defaultLabelText}
                                </span>
                            </div>

                            {/* Hero Text */}
                            <h2
                                className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mt-4 mb-3 sm:mb-8 md:mb-10 lg:mb-2 leading-[1.6] sm:leading-[1.8] md:leading-[2.25] lg:leading-[2.2] xl:leading-[1.3]"
                            >
                                {heroText || defaultHeroText}
                            </h2>


                            {/* CTA Buttons - Side by Side, Left Aligned */}
                            <div
                                className="flex flex-row gap-3 sm:gap-3 md:gap-4 justify-start mt-4 sm:mt-8 md:mt-12 px-0 sm:px-0">
                                <button
                                    className="group relative px-3 py-2 sm:px-4 sm:py-2.3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-white text-blue-600 font-semibold text-xs sm:text-sm md:text-lg lg:text-xl tracking-wide rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-2xl min-w-[120px] sm:min-w-[140px] md:min-w-[200px] lg:min-w-[240px]"
                                    onMouseEnter={() => setHoveredButton('primary')}
                                    onMouseLeave={() => setHoveredButton(null)}
                                >
                                    <span className="flex items-center">
                                        Start Your Project
                                        <ArrowRight
                                            className="ml-1 sm:ml-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-7 lg:h-7 text-blue-600 group-hover:translate-x-1 transition-transform duration-300"/>
                                    </span>
                                </button>
                                <button
                                    className="px-2.5 py-1.5 sm:px-3.5 sm:py-2 md:px-7 md:py-3.5 lg:px-9 lg:py-4.5 bg-transparent border-2 border-blue-400 text-blue-100 font-semibold text-[0.65rem] sm:text-xs md:text-base lg:text-lg tracking-wide rounded-xl hover:bg-blue-400 hover:text-blue-900 transition-all duration-300 flex items-center justify-center shadow-2xl min-w-[100px] sm:min-w-[120px] md:min-w-[180px] lg:min-w-[220px]"
                                    onMouseEnter={() => setHoveredButton('secondary')}
                                    onMouseLeave={() => setHoveredButton(null)}
                                >
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