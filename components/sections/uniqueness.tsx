"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Code, Users, Rocket } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Service {
    number: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

const services: Service[] = [
    {
        number: "01",
        title: "Tailored Solutions",
        description: "Building apps that align with your business and meet user needs.",
        icon: Target,
    },
    {
        number: "02",
        title: "Cross-Platform Expertise",
        description: "Delivering scalable solutions across web and mobile.",
        icon: Code,
    },
    {
        number: "03",
        title: "Collaborative Development",
        description: "Bringing your vision to life through teamwork and technical expertise.",
        icon: Users,
    },
    {
        number: "04",
        title: "Innovative Tech",
        description: "Utilizing cutting-edge tools for future-ready, reliable applications.",
        icon: Rocket,
    },
];

export default function Uniqueness() {
    return (
        <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left mb-6 sm:mb-8 lg:mb-12">
                    <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 rounded-full border border-white/20 mb-3 sm:mb-4 lg:mb-6">
                        <span
                            className="text-white text-xs sm:text-sm font-medium"
                            style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
                        >
                            Uniqueness
                        </span>
                    </div>
                    <h2
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                        style={{ fontFamily: "'Poppins', 'Inter', sans-serif", fontWeight: 550, lineHeight: 1.1 }}
                    >
                        Crafting Innovative Solutions
                        <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>
                        to Elevate Your Digital Presence
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <Card
                                key={index}
                                className="bg-gray-900/80 border-white/20 transition-all duration-500 shadow-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl group hover:bg-gray-800/80"
                            >
                                <CardContent className="p-4 sm:p-6 lg:p-8">
                                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-black border-2 border-white/20 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg group-hover:bg-blue-600 group-hover:border-blue-600">
                                            <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white transition-all duration-500 group-hover:text-white group-hover:scale-110" />
                                        </div>
                                        <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-400 opacity-80">
                                            {service.number}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-white mb-2 sm:mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}