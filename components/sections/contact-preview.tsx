"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactPreview() {
    return (
        <section className="py-20 bg-black relative overflow-hidden font-['Poppins',sans-serif]">
            {/* Subtle background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <h2
                        className="text-6xl md:text-7xl font-medium mb-12 tracking-[-0.02em]"
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
                            className="inline-flex items-center px-8 py-4 text-lg font-medium backdrop-blur-sm border rounded-full transition-all duration-300"
                            style={{ color: '#000000', backgroundColor: 'rgba(235, 214, 164, 0.1)', borderColor: 'rgba(235, 214, 164, 0.2)' }}
                            onMouseEnter={(e) => {
                                const target = e.target as HTMLElement;
                                target.style.backgroundColor = 'rgba(235, 214, 164, 0.15)';
                                target.style.borderColor = 'rgba(235, 214, 164, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                const target = e.target as HTMLElement;
                                target.style.backgroundColor = 'rgba(235, 214, 164, 0.1)';
                                target.style.borderColor = 'rgba(235, 214, 164, 0.2)';
                            }}
                        >
                            <Mail className="mr-3 h-5 w-5" />
                            Start Now
                            <ArrowRight className="ml-3 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}