"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

const achievements = [
    {
        year: "2021",
        title: "Started Dev Journey"
    },
    {
        count: "6+",
        title: "Real-World Projects"
    },
    {
        count: "1",
        title: "Internship Completed"
    },
    {
        count: "3",
        title: "Hackathon Awards"
    }
]

export default function CreativeAboutSection() {
    return (
        <section className="min-h-[70vh] mt-4 bg-black py-6 sm:py-12 lg:py-16 relative overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-32 sm:w-64 lg:w-96 h-32 sm:h-64 lg:h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-64 lg:w-96 h-32 sm:h-64 lg:h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-[400px] lg:w-[600px] h-48 sm:h-[400px] lg:h-[600px] bg-gradient-to-r from-white/3 to-white/3 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-stretch">
                    {/* Left Half - About Me Card */}
                    <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl relative overflow-hidden rounded-2xl shadow-xl border-0 min-h-[320px] sm:min-h-[400px] lg:min-h-[450px]">
                        {/* Floating sparkles animation */}
                        <div className="absolute inset-0 opacity-20">
                            <Sparkles className="absolute top-4 sm:top-6 right-4 sm:right-6 w-3 sm:w-4 h-3 sm:h-4 text-white animate-pulse" />
                            <Sparkles className="absolute bottom-8 sm:bottom-12 left-6 sm:left-8 w-2 sm:w-3 h-2 sm:h-3 text-white animate-pulse delay-700" />
                            <Sparkles className="absolute top-1/3 left-1/4 w-2 sm:w-2 h-2 sm:h-2 text-white animate-pulse delay-1000" />
                        </div>

                        {/* 3D effect shadows */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-gray-600/20 via-gray-500/10 to-gray-600/20 rounded-2xl blur-lg opacity-50"></div>

                        <CardContent className="p-4 sm:p-8 lg:p-12 relative z-10 h-full flex flex-col">
                            <div className="space-y-4 sm:space-y-6">
                                <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 rounded-xl border border-white/30">
                                    <span className="text-sm sm:text-base font-medium text-white">About Me</span>
                                </div>

                                <h2 className="text-lg sm:text-2xl lg:text-4xl font-semibold leading-tight text-gray-300">
                                    Where Passion Meets
                                    <br />
                                    <span className="text-gray-300">Precision</span>
                                </h2>

                                <div className="space-y-3 text-gray-300 leading-relaxed text-sm sm:text-base">
                                    <p>
                                        I'm <span className="font-semibold text-white">Aravind Chamaakuri</span>, a front-end developer who doesn't just build web apps — I craft engaging digital experiences. From elegant UI to scalable systems, I fuse creativity and code to deliver real-world solutions.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-auto pt-4 sm:pt-6">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/25 group w-full sm:w-auto"
                                >
                                    Learn More
                                    <ArrowRight className="ml-2 w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Right Half - Achievement Cards Grid */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 h-full pt-4 sm:pt-6 lg:pt-8">
                        {achievements.map((achievement, index) => (
                            <Card
                                key={index}
                                className="relative overflow-hidden flex items-center justify-center h-28 sm:h-36 lg:h-48 mobile-achievement-card"
                                style={{
                                    background: 'linear-gradient(145deg, #1a73e8, #0d5db8)',
                                    borderRadius: '12px',
                                    boxShadow: `
                    10px 10px 20px rgba(0,0,0,0.3),
                    -4px -4px 10px rgba(255,255,255,0.05),
                    inset 2px 2px 4px rgba(255,255,255,0.1),
                    inset -2px -2px 4px rgba(0,0,0,0.2)
                  `,
                                    animationDelay: `${index * 150}ms`,
                                    perspective: '1000px',
                                    transformStyle: 'preserve-3d'
                                }}
                            >
                                {/* 3D Inner Card Effect */}
                                <div
                                    className="absolute inset-1 rounded-lg opacity-60"
                                    style={{
                                        background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                                        backdropFilter: 'blur(8px)'
                                    }}
                                ></div>

                                <CardContent className="p-3 sm:p-4 text-center relative z-10 w-full h-full flex flex-col justify-center">
                                    <div className="space-y-1 sm:space-y-2">
                                        {/* Large Number with League Spartan font */}
                                        <div
                                            className="text-xl sm:text-3xl lg:text-5xl font-bold text-white"
                                            style={{
                                                fontFamily: "'League Spartan', sans-serif",
                                                textShadow: '1px 1px 4px rgba(0,0,0,0.4), 0 0 10px rgba(255,255,255,0.2)',
                                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                                            }}
                                        >
                                            {achievement.year || achievement.count}
                                        </div>

                                        {/* Title with enhanced typography */}
                                        <h3
                                            className="text-white font-semibold text-xs sm:text-sm lg:text-base leading-tight"
                                            style={{
                                                textShadow: '0.5px 0.5px 2px rgba(0,0,1,0.3)',
                                                letterSpacing: '0.2px'
                                            }}
                                        >
                                            {achievement.title}
                                        </h3>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 360px) {
                    .container {
                        padding-left: 16px !important;
                        padding-right: 16px !important;
                    }
                    h2 {
                        font-size: 1.25rem !important;
                        line-height: 1.4 !important;
                    }
                    p {
                        font-size: 0.875rem !important;
                        line-height: 1.5 !important;
                    }
                    .text-sm {
                        font-size: 0.875rem !important;
                    }
                    ag            .grid-cols-2 {
                        gap: 12px !important; /* Increased vertical gap */
                    }
                    .mobile-achievement-card {
                        max-width: 90% !important; /* Reduced width */
                        margin-left: auto !important;
                        margin-right: auto !important;
                        height: 100px !important;
                    }
                    .text-xl {
                        font-size: 1.5rem !important;
                    }
                    .text-xs {
                        font-size: 0.75rem !important;
                    }
                    .rounded-2xl {
                        border-radius: 8px !important;
                    }
                    .rounded-xl {
                        border-radius: 6px !important;
                    }
                    .p-3 {
                        padding: 12px !important;
                    }
                }
                @media (min-width: 360px) and (max-width: 640px) {
                    .container {
                        padding-left: 16px !important;
                        padding-right: 16px !important;
                    }
                    h2 {
                        font-size: 1.5rem !important;
                        line-height: 1.4 !important;
                    }
                    p {
                        font-size: 0.875rem !important;
                        line-height: 1.5 !important;
                    }
                    .text-sm {
                        font-size: 0.875rem !important;
                    }
                    .grid-cols-2 {
                        gap: 16px !important; /* Increased vertical gap */
                    }
                    .mobile-achievement-card {
                        max-width: 90% !important; /* Reduced width */
                        margin-left: auto !important;
                        margin-right: auto !important;
                        height: 120px !important;
                    }
                    .text-xl {
                        font-size: 1.75rem !important;
                    }
                    .text-xs {
                        font-size: 0.875rem !important;
                    }
                    .p-3 {
                        padding: 16px !important;
                    }
                }
                @media (max-width: 640px) {
                    .lg\\:grid-cols-2 {
                        grid-template-columns: 1fr !important;
                    }
                    .min-h-[320px] {
                    min-height: 360px !important;
                }
                }
                @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap');
            `}</style>
        </section>
    )
}