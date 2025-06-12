"use client"

import { useState, useEffect, useRef } from "react"

// Define the Project interface for TypeScript
interface Project {
  id: number
  title: string
  subtitle?: string
  description: string
  image: string
  fullDescription: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "ELIM",
    subtitle: "Emmanuel Living Impact Mission",
    description: "A transformative digital sanctuary that bridges faith and technology, serving the community with seamless access to sermons, events, and announcements.",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&h=400&fit=crop",
    fullDescription: "Built a fully responsive church platform with React.js and CSS Modules, allowing seamless access to sermons, events, and announcements across all devices. Integrated a dynamic contact form via EmailJS, reducing manual follow-ups by 50% and maintaining 99% uptime with lightweight deployment. Features include real-time sermon streaming, event management system, automated email notifications, and mobile-first responsive design that adapts to all screen sizes."
  },
  {
    id: 2,
    title: "The Team Events",
    description: "An enterprise-grade event management ecosystem with secure authentication and real-time booking capabilities for seamless event experiences.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
    fullDescription: "Engineered an interactive event booking platform using React and ShadCN, delivering a sleek, modern UI with fast, responsive performance across all devices. Integrated secure Clerk authentication and implemented event listings, booking logic, and user dashboards with seamless sign-up and access flows. Features include real-time event updates, advanced filtering system, user role management, payment integration, and comprehensive analytics dashboard for event organizers."
  },
  {
    id: 3,
    title: "Smart Read",
    description: "A comprehensive reading ecosystem with audiobook integration and AI-powered recommendations creating an immersive reading experience.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
    fullDescription: "Developed a comprehensive reading platform using React.js and Firebase Firestore, enabling users to read books, take notes, and maintain a personalized library with seamless synchronization. Integrated Spotify Embedded API for audiobook functionality and implemented user authentication, wishlist management, and note-taking features, enhancing user engagement by 40%. Features include cloud synchronization, collaborative reading groups, progress tracking, intelligent bookmarking, and cross-platform accessibility."
  },
  {
    id: 4,
    title: "CampusBuzz",
    description: "A cross-platform mobile app connecting students with campus events through intelligent recommendations and seamless event discovery.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
    fullDescription: "Built a cross-platform mobile app using Flutter and Firebase to centralize college events, enabling easy access and registration for students. Implemented a location-based event recommendation system and developed a complementary website using Flutter Web with GetX for state management. Features include geolocation-based event discovery, push notifications, social integration, event calendar synchronization, user preferences learning, and offline event caching for seamless user experience."
  }
]

export default function ScrollBlurGallery() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set())
  const projectRefs = useRef<Record<number, HTMLDivElement | null>>({})

  const toggleExpanded = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
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

                      <button
                          className="bg-black border border-gray-700 text-white px-8 py-3 rounded-lg font-medium tracking-wide hover:bg-gray-900 hover:border-gray-600 transition-all duration-300"
                          style={{ fontSize: '20px' }}
                          onClick={() => toggleExpanded(project.id)}
                      >
                        {expandedProject === project.id ? 'Hide Details' : 'View Details'}
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

                  {expandedProject === project.id && (
                      <div className="mt-16 border-t border-gray-800 pt-12 animate-in slide-in-from-top duration-500 card-content">
                        <div className="max-w-5xl">
                          <h3 className="text-2xl font-semibold text-white mb-8 tracking-wide">Project Deep Dive</h3>
                          <p className="text-gray-300 leading-relaxed text-lg font-light tracking-wide">
                            {project.fullDescription}
                          </p>
                        </div>
                      </div>
                  )}
                </div>
            ))}
          </div>
        </div>
      </div>
  )
}