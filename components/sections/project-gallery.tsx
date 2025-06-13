"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { projects } from "@/lib/data/project"

export default function ScrollBlurGallery() {
    const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set())
    const projectRefs = useRef<Record<number, HTMLDivElement | null>>({})
    const router = useRouter()

    const handleViewDetails = (slug: string) => {
        router.push(`/projects/${slug}`)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const target = entry.target as HTMLDivElement
                    const projectId = parseInt(target.dataset.projectId as string)
                    setVisibleProjects((prev) => {
                        const newSet = new Set(prev)
                        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                            newSet.add(projectId)
                        } else {
                            newSet.delete(projectId)
                        }
                        return newSet
                    })
                })
            },
            {
                threshold: [0, 0.5, 1.0],
                rootMargin: '-10% 0px -10% 0px'
            }
        )

        Object.values(projectRefs.current).forEach((ref) => {
            if (ref) observer.observe(ref)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <div className="min-h-screen bg-black text-white antialiased scroll-blur-gallery">
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap');

                .scroll-blur-gallery, .scroll-blur-gallery * {
                    font-family: 'League Spartan', sans-serif;
                    font-feature-settings: 'kern' 1, 'liga' 1, 'calt' 1;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }

                .card-blur {
                    filter: blur(8px);
                    opacity: 0.7;
                    transform: scale(0.95) translateY(20px);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                    background-color: transparent;
                }

                .card-visible {
                    filter: blur(0);
                    opacity: 1;
                    transform: scale(1) translateY(0);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                    background-color: rgba(255, 255, 255, 0.95);
                    color: #000000;
                    border-radius: 16px;
                    padding: 16px;
                    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
                }

                .card-content {
                    padding: 12px;
                }

                .card-visible .card-content {
                    color: #000000;
                }

                .card-visible .text-gray-400 {
                    color: #666666 !important;
                }

                .card-visible .text-gray-300 {
                    color: #333333 !important;
                }

                .card-visible .bg-gray-800 {
                    background-color: #f3f4f6 !important;
                    color: #374151 !important;
                    border-color: #d1d5db !important;
                }

                .decrypt-animation {
                    animation: decrypt 2s ease-in-out;
                }

                @keyframes decrypt {
                    0% {
                        content: attr(data-text);
                        filter: blur(2px);
                        opacity: 0.3;
                    }
                    10% { content: "█▓▒░░▒▓█"; }
                    20% { content: "▓▒░██░▒▓"; }
                    30% { content: "▒░███░▒"; }
                    40% { content: "░████░"; }
                    50% { content: "█████"; }
                    60% { content: attr(data-text); opacity: 0.6; }
                    80% { opacity: 0.8; }
                    100% {
                        content: attr(data-text);
                        filter: blur(0);
                        opacity: 1;
                    }
                }

                .project-number {
                    display: none;
                }

                /* Default Grid Layout */
                .project-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    align-items: center;
                }

                .project-text {
                    order: 1;
                }

                .project-image {
                    order: 2;
                }

                /* Image blur effects for all screen sizes */
                .image-blur {
                    filter: blur(8px);
                    opacity: 0.7;
                    transform: scale(0.95);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .image-visible {
                    filter: blur(0);
                    opacity: 1;
                    transform: scale(1);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                /* Mobile Styles (320px - 640px) */
                @media (max-width: 640px) {
                    .scroll-blur-gallery {
                        padding-left: 8px;
                        padding-right: 8px;
                    }

                    /* Remove blur effects for mobile - show cards normally */
                    .card-blur {
                        filter: none;
                        opacity: 1;
                        transform: none;
                        background-color: rgba(255, 255, 255, 0.95);
                        color: #000000;
                        border-radius: 16px;
                        padding: 24px;
                        box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
                    }

                    .card-visible {
                        padding: 24px;
                        margin: 0;
                        width: 100%;
                        max-width: none;
                    }

                    .card-content {
                        padding: 0;
                        width: 100%;
                    }

                    /* Mobile card content styling */
                    .card-blur .card-content {
                        color: #000000;
                    }

                    .card-blur .text-gray-400 {
                        color: #666666 !important;
                    }

                    .card-blur .text-gray-300 {
                        color: #333333 !important;
                    }

                    .project-grid {
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                        align-items: stretch;
                        width: 100%;
                    }

                    .project-text {
                        order: 2;
                        width: 100%;
                        text-align: left;
                        padding: 0;
                    }

                    .project-text h2 {
                        font-size: 28px !important;
                        line-height: 1.3;
                        margin-bottom: 16px;
                        font-weight: 500;
                        color: #000000 !important; /* Always black on mobile */
                    }

                    .project-text p {
                        font-size: 18px !important;
                        line-height: 1.6;
                        margin-bottom: 20px;
                        padding: 0;
                        font-weight: 400;
                        color: #333333 !important; /* Always dark on mobile */
                    }

                    .project-text span {
                        font-size: 16px !important;
                        display: inline-block;
                        margin-top: 0;
                        font-weight: 500;
                        color: #000000 !important; /* Always black on mobile */
                    }

                    .project-text .space-y-4 {
                        text-align: right;
                        width: 100%;
                    }

                    .project-image {
                        order: 1;
                        width: 100%;
                        max-width: none;
                    }

                    .space-y-32 > * + * {
                        margin-top: 40px;
                    }

                    .space-y-10 > * + * {
                        margin-top: 16px;
                    }

                    .space-y-4 > * + * {
                        margin-top: 12px;
                    }

                    .project-image img {
                        height: 16rem !important;
                        border-radius: 16px;
                        width: 100%;
                    }

                    .project-image .relative {
                        border-radius: 16px;
                        width: 100%;
                    }
                }

                /* Tablet Styles (641px - 1023px) */
                @media (min-width: 641px) and (max-width: 1023px) {
                    .scroll-blur-gallery {
                        padding-left: 24px;
                        padding-right: 24px;
                    }

                    .card-visible {
                        padding: 16px;
                    }

                    .card-content {
                        padding: 12px;
                    }

                    .project-number {
                        font-size: 12px;
                    }

                    .project-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 20px;
                        align-items: center;
                    }

                    .project-text {
                        order: 1;
                        text-align: left;
                    }

                    .project-image {
                        order: 2;
                    }

                    .space-y-32 > * + * {
                        margin-top: 28px;
                    }

                    .space-y-10 > * + * {
                        margin-top: 10px;
                    }

                    .project-image img {
                        height: 24rem !important;
                    }
                }

                /* Desktop Styles (1024px and above) */
                @media (min-width: 1024px) {
                    .scroll-blur-gallery {
                        padding-left: 32px;
                        padding-right: 32px;
                    }

                    .card-visible {
                        padding: 24px;
                    }

                    .card-content {
                        padding: 16px;
                    }

                    .project-number {
                        font-size: 14px;
                    }

                    .project-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 20px;
                        align-items: center;
                    }

                    .project-text {
                        order: 1;
                        text-align: left;
                    }

                    .project-image {
                        order: 2;
                    }

                    .project-image img {
                        height: 28rem !important;
                    }
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-2 sm:px-8 py-12 sm:py-24">
                <div className="space-y-12 sm:space-y-32">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`group relative ${visibleProjects.has(project.id) ? 'card-visible' : 'card-blur'}`}
                            ref={(el: HTMLDivElement | null) => {
                                projectRefs.current[project.id] = el
                            }}
                            data-project-id={project.id}
                        >
                            <div
                                className="project-number"
                                style={{
                                    color: visibleProjects.has(project.id) ? '#666666' : '#ffffff',
                                    display: 'none'
                                }}
                            >
                                #{String(index + 1).padStart(2, '0')}
                            </div>

                            <div className="project-grid">
                                {/* Text Content */}
                                <div className="project-text card-content space-y-10">
                                    <div className="space-y-2">
                                        <h2
                                            className={`font-medium leading-tight tracking-tight ${visibleProjects.has(project.id) ? 'decrypt-animation' : ''}`}
                                            style={{
                                                fontSize: 'clamp(28px, 6vw, 48px)',
                                                color: visibleProjects.has(project.id) ? '#000000' : '#ffffff'
                                            }}
                                        >
                                            {project.title}
                                        </h2>
                                    </div>

                                    <p
                                        className="leading-relaxed font-medium tracking-wide"
                                        style={{
                                            fontSize: 'clamp(18px, 4.5vw, 24px)',
                                            color: visibleProjects.has(project.id) ? '#333333' : '#d1d5db'
                                        }}
                                    >
                                        {project.description}
                                    </p>

                                    <div className="space-y-4">
                                        <span
                                            className="cursor-pointer font-medium tracking-wide underline decoration-2 underline-offset-4 hover:no-underline transition-all duration-300"
                                            style={{
                                                fontSize: 'clamp(16px, 4vw, 22px)',
                                                color: visibleProjects.has(project.id) ? '#000000' : '#ffffff'
                                            }}
                                            onClick={() => handleViewDetails(project.slug)}
                                        >
                                            View Details
                                        </span>
                                    </div>
                                </div>

                                {/* Image Content */}
                                <div className="project-image relative">
                                    <div className={`relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.02] ${visibleProjects.has(project.id) ? 'image-visible' : 'image-blur'}`}>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/10 transition-all duration-500"></div>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}