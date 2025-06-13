
"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { projects, } from "@/lib/data/project"

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
    position: absolute;
    top: 12px;
    right: 12px;
    font-size: 12px;
    font-weight: 600;
    opacity: 0.6;
}
/* Mobile styles (up to 640px) */
@media (max-width: 640px) {
.scroll-blur-gallery {
        padding-left: 16px;
        padding-right: 16px;
    }
.card-visible {
        padding: 12px;
    }
.card-content {
        padding: 8px;
    }
.project-number {
        font-size: 10px;
        top: 8px;
        right: 8px;
    }
.grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }
.space-y-32 > * + * {
        margin-top: 24px;
}
.space-y-10 > * + * {
        margin-top: 8px;
}
.space-y-4 > * + * {
        margin-top: 6px;
}
    img {
        height: 16rem !important;
    }
}
/* Tablet styles (641px to 1023px) */
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
.grid {
        grid-template-columns: 1fr 1fr;
        gap: 24px;
    }
.space-y-32 > * + * {
        margin-top: 28px;
}
.space-y-10 > * + * {
        margin-top: 10px;
}
    img {
        height: 20rem !important;
    }
}
/* Laptop styles (1024px and above) */
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
.grid {
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
    img {
        height: 28rem !important;
    }
}
`}</style>

            <div className="max-w-7xl mx-auto px-8 py-24">
                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`group relative ${visibleProjects.has(project.id) ? 'card-visible' : 'card-blur'}`}
                            ref={(el: HTMLDivElement | null) => {
                                projectRefs.current[project.id] = el
                            }}
                            data-project-id={project.id}
                        >
                            <div className="project-number" style={{ color: visibleProjects.has(project.id) ? '#666666' : '#ffffff' }}>
                                #{String(index + 1).padStart(2, '0')}
                            </div>
                            <div className="grid lg:grid-cols-2 gap-20 items-center">
                                <div className="card-content space-y-10">
                                    <div className="space-y-2">
                                        <h2 className={`font-medium leading-tight tracking-tight ${visibleProjects.has(project.id) ? 'decrypt-animation' : ''}`} style={{ 
                                            fontSize: 'clamp(28px, 6vw, 48px)', // Increased and fluid
                                            color: visibleProjects.has(project.id) ? '#000000' : '#ffffff' 
                                        }}>
                                            {project.title}
                                        </h2>
                                    </div>

                                    <p className="leading-relaxed font-medium tracking-wide" style={{
                                        fontSize: 'clamp(18px, 4.5vw, 24px)', // Increased and fluid
                                        color: visibleProjects.has(project.id) ? '#333333' : '#d1d5db'
                                    }}>
                                        {project.description}
                                    </p>

                                    <div className="space-y-4">
                                        <span
                                            className="cursor-pointer font-medium tracking-wide underline decoration-2 underline-offset-4 hover:no-underline transition-all duration-300"
                                            style={{
                                                fontSize: 'clamp(16px, 4vw, 22px)', // Increased and fluid
                                                color: visibleProjects.has(project.id) ? '#000000' : '#ffffff'
                                            }}
                                            onClick={() => handleViewDetails(project.slug)}
                                        >
                                            View Details
                                        </span>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.02]">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-96 lg:h-[28rem] object-cover group-hover:scale-105 transition-transform duration-700"
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