"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Smartphone, LucideIcon } from "lucide-react";

interface Service {
    title: string;
    icon: LucideIcon;
    image: string;
    description: string;
}

const services: Service[] = [
    {
        title: "Web Design",
        icon: Palette,
        image: "/design.jpg",
        description: "Beautiful, user-centered designs that convert",
    },
    {
        title: "Web Development",
        icon: Code,
        image: "/dev.jpg",
        description: "Custom web applications built with modern technologies",
    },

    {
        title: "App Development",
        icon: Smartphone,
        image: "/app.jpeg",
        description: "Native and cross-platform mobile applications",
    },
];

export default function MyServices() {
    return (
        <section className="py-12 md:py-16 lg:py-24 bg-gray-900/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left mb-8 md:mb-12 lg:mb-16">
                    <div className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-white/10 rounded-full border border-white/20 mb-4 md:mb-6">
            <span
                className="text-white text-xs sm:text-sm font-medium"
                style={{ fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}
            >
              My Projects
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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 max-w-7xl mx-auto">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <Card
                                key={index}
                                className="bg-black/40 border-white/10 hover:border-blue-400/30 transition-all duration-500 group overflow-hidden relative h-[400px] sm:h-[450px] md:h-[500px] rounded-xl sm:rounded-2xl w-full"
                            >
                                <CardContent className="p-0 h-full relative">
                                    {/* Image Section */}
                                    <div className="relative h-full overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                        {/* Service Title Label - Normal State */}
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:opacity-0 group-hover:scale-95">
                                            <div className="bg-black/70 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/20">
                                                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white whitespace-nowrap">
                                                    {service.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Expanded Label with Description - Hover State */}
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100">
                                            <div className="bg-black/90 backdrop-blur-sm px-6 sm:px-8 py-4 sm:py-6 rounded-xl sm:rounded-2xl border border-blue-400/30 min-w-[280px] sm:min-w-[320px] text-center">
                                                <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 mx-auto mb-2 sm:mb-3" />
                                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3">
                                                    {service.title}
                                                </h3>
                                                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
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