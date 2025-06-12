"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { projects, type Project } from "@/lib/data/project"

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
          threshold: [0, 0.5, 1.0], // Simplified thresholds for smoother transitions
          rootMargin: '-10% 0px -10% 0px' // Adjusted for better visibility detection
        }
    )

    Object.values(projectRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
      <div className="min-h-screen bg-black text-white font-['Poppins'] antialiased">
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
          * {
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
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
            background-color: rgba(20, 20, 20, 0.9);
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Subtle shadow for depth */
          }
          .card-content {
            padding: 16px;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="space-y-32">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className={`group ${visibleProjects.has(project.id) ? 'card-visible' : 'card-blur'}`}
                    ref={(el: HTMLDivElement | null) => {
                      projectRefs.current[project.id] = el
                    }}
                    data-project-id={project.id}
                >
                  <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="card-content space-y-10">
                      <div className="space-y-2">
                        <h2 className="font-medium text-white leading-tight tracking-tight" style={{ fontSize: '48px' }}>
                          {project.title}
                        </h2>
                        {project.subtitle && (
                            <p className="font-light text-gray-400 leading-relaxed" style={{ fontSize: '18px' }}>
                              {project.subtitle}
                            </p>
                        )}
                      </div>

                      <p className="text-gray-300 leading-relaxed font-medium tracking-wide" style={{ fontSize: '20px' }}>
                        {project.description}
                      </p>

                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                              <span
                                  key={index}
                                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-700"
                              >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                          <span className="font-medium">{project.projectType}</span>
                          <span>•</span>
                          <span>{project.duration}</span>
                        </div>
                      </div>

                      <button
                          className="bg-black border border-gray-700 text-white px-8 py-3 rounded-lg font-medium tracking-wide hover:bg-gray-900 hover:border-gray-600 transition-all duration-300"
                          style={{ fontSize: '20px' }}
                          onClick={() => handleViewDetails(project.slug)}
                      >
                        View Details
                      </button>
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