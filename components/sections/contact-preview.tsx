"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ContactPreview() {
    const [showLine, setShowLine] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLine(true)
        }, 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden font-['Poppins',sans-serif]">
            {/* Subtle background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/3 w-32 sm:w-40 h-32 sm:h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-4xl">
                    <h2
                        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-8 sm:mb-10 md:mb-12 tracking-[-0.02em]"
                        style={{
                            color: '#EBD6A4',
                            lineHeight: '1.2'
                        }}
                    >
                        Ready to Build<br />
                        Something<br />
                        <span style={{ color: '#EBD6A4' }}>
                            Unstoppaaaaable?
                        </span>
                    </h2>

                    <Link href="/contact">
                        <Button
                            size="lg"
                            className="inline-flex items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium backdrop-blur-sm border rounded-full transition-all duration-300"
                            style={{
                                color: '#000000',
                                backgroundColor: '#EBD6A4',
                                borderColor: '#EBD6A4',
                                boxShadow: '0 4px 15px rgba(235, 214, 164, 0.3)'
                            }}
                            onMouseEnter={(e) => {
                                const target = e.target as HTMLElement;
                                target.style.backgroundColor = '#D4C291';
                                target.style.borderColor = '#D4C291';
                                target.style.transform = 'translateY(-2px)';
                                target.style.boxShadow = '0 6px 20px rgba(235, 214, 164, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                const target = e.target as HTMLElement;
                                target.style.backgroundColor = '#EBD6A4';
                                target.style.borderColor = '#EBD6A4';
                                target.style.transform = 'translateY(0px)';
                                target.style.boxShadow = '0 4px 15px rgba(235, 214, 164, 0.3)';
                            }}
                        >
                            <Mail className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5" />
                            Start Now
                            <ArrowRight className="ml-2 sm:ml-3 h-4 sm:h-5 w-4 sm:w-5" />
                        </Button>
                    </Link>
                </div>

                {/* Horizontal Line */}
                <div className="mt-12 sm:mt-16 md:mt-20 mb-8 sm:mb-10 md:mb-12">
                    <div
                        className={`transition-all duration-1000 ease-out ${
                            showLine ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                        }`}
                        style={{
                            height: "1px",
                            background: "linear-gradient(to right, transparent, #A7A7A7, #666666, #FFFFFF)",
                            width: "100%",
                            transformOrigin: "left center",
                        }}
                    />
                </div>

                {/* Footer */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-6 sm:pt-8 gap-8 sm:gap-10 lg:gap-8">
                    {/* Left Side - Name */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-medium" style={{ color: '#EBD6A4' }}>
                            Aravind Chamakuri
                        </h3>
                        <p className="text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base lg:text-lg ml-1 sm:ml-0">Full Stack Developer</p>
                    </div>

                    {/* Right Side - Navigation Links */}
                    <div className="flex flex-row justify-center sm:justify-start lg:justify-end gap-12 sm:gap-8 lg:gap-12 lg:mr-8 w-full sm:w-auto">
                        <div className="flex flex-col gap-3 sm:gap-4 text-left">
                            <h4 className="text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-wider">
                                Navigation
                            </h4>
                            <div className="flex flex-col gap-2 sm:gap-3">
                                <Link
                                    href="/"
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/about"
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                                >
                                    About
                                </Link>
                                <Link
                                    href="/projects"
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                                >
                                    Projects
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 sm:gap-4 text-left">
                            <h4 className="text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-wider">
                                Connect
                            </h4>
                            <div className="flex flex-col gap-2 sm:gap-3">
                                <Link
                                    href="https://github.com"
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </Link>
                                <Link
                                    href="https://linkedin.com"
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </Link>
                                <Link
                                    href="https://twitter.com"
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Twitter
                                </Link>
                                <Link
                                    href="mailto:aravind@example.com"
                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                                >
                                    Email
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="mt-12 sm:mt-16 lg:mt-20 mb-6 sm:mb-8">
                    <div
                        style={{
                            height: "0.5px",
                            backgroundColor: "#333333",
                            width: "100%",
                        }}
                    />
                </div>

                {/* Copyright */}
                <div className="pb-4 sm:pb-6">
                    <p className="text-center text-gray-500 text-xs sm:text-sm">
                        © {new Date().getFullYear()} Aravind Chamakuri. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    )
}