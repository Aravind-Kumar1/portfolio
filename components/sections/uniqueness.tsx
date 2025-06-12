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
        <section className="py-12 md:py-16 lg:py-24 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left mb-8 md:mb-12 lg:mb-16">
                    <div className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-white/10 rounded-full border border-white/20 mb-4 md:mb-6">
            <span
                className="text-white text-xs sm:text-sm font-medium"
                style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
            >
              Uniqueness
            </span>
                    </div>
                    <h2
                        className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 whitespace-normal md:whitespace-nowrap"
                        style={{ fontFamily: "'Poppins', 'Inter', sans-serif", fontWeight: 550, lineHeight: 1.2 }}
                    >
                        Crafting Innovative Solutions
                        <br />
                        to Elevate Your Digital Presence
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <Card
                                key={index}
                                className="bg-gray-900/80 border-white/20 transition-all duration-500 shadow-2xl rounded-2xl sm:rounded-3xl group hover:bg-gray-800/80"
                            >
                                <CardContent className="p-6 sm:p-8 lg:p-10">
                                    <div className="flex items-center justify-between mb-6 md:mb-8">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black border-2 border-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg group-hover:bg-blue-600 group-hover:border-blue-600">
                                            <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                                        </div>
                                        <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-400 opacity-80 group-hover:opacity-90 transition-opacity duration-500">
                                            {service.number}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-blue-400 transition-colors duration-500">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
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