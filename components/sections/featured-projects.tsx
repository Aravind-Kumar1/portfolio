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
      <section className="min-h-screen mt-2 bg-gradient-to-br from-black via-black to-gray-900 py-16 sm:py-24 lg:py-32 relative overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] bg-gradient-to-r from-white/3 to-white/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

            {/* Left Half - About Me Card */}
            <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl relative overflow-hidden rounded-2xl shadow-xl border-0 min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
              {/* Floating sparkles animation */}
              <div className="absolute inset-0 opacity-20">
                <Sparkles className="absolute top-4 sm:top-6 right-4 sm:right-6 w-3 sm:w-4 h-3 sm:h-4 text-white animate-pulse" />
                <Sparkles className="absolute bottom-8 sm:bottom-12 left-6 sm:left-8 w-2 sm:w-3 h-2 sm:h-3 text-white animate-pulse delay-700" />
                <Sparkles className="absolute top-1/3 left-1/4 w-2 h-2 text-white animate-pulse delay-1000" />
              </div>

              {/* 3D effect shadows */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-600/20 via-gray-500/10 to-gray-600/20 rounded-2xl blur-lg opacity-50"></div>

              <CardContent className="p-6 sm:p-8 lg:p-12 relative z-10 h-full flex flex-col">
                <div className="space-y-6 sm:space-y-8">
                  <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/20 rounded-xl border border-white/30">
                    <span className="text-sm sm:text-base font-medium text-white">About Me</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight text-gray-300">
                    Where Passion Meets
                    <br />
                    <span className="text-gray-300">Precision</span>
                  </h2>

                  <div className="space-y-4 text-gray-300 leading-relaxed text-base sm:text-lg">
                    <p>
                      I'm <span className="font-semibold text-white">Aravind Chamaakuri</span>, a front-end developer who doesn't just build web apps — I craft engaging digital experiences. From elegant UI to scalable systems, I fuse creativity and code to deliver real-world solutions.
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-6 sm:pt-8">
                  <Button
                      size="lg"
                      className="bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white text-black font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/25 group w-full sm:w-auto"
                  >
                    Learn More
                    <ArrowRight className="ml-2 sm:ml-3 w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Right Half - Achievement Cards Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 h-full">
              {achievements.map((achievement, index) => {
                return (
                    <Card
                        key={index}
                        className="relative overflow-hidden flex items-center justify-center h-40 sm:h-48 lg:h-52"
                        style={{
                          background: 'linear-gradient(145deg, #1a73e8, #0d5db8)',
                          borderRadius: '24px',
                          boxShadow: `
                            20px 20px 40px rgba(0,0,0,0.4),
                            -10px -10px 20px rgba(255,255,255,0.05),
                            inset 5px 5px 10px rgba(255,255,255,0.1),
                            inset -5px -5px 10px rgba(0,0,0,0.2)
                          `,
                          animationDelay: `${index * 150}ms`,
                          perspective: '1000px',
                          transformStyle: 'preserve-3d'
                        }}
                    >
                      {/* 3D Inner Card Effect */}
                      <div
                          className="absolute inset-2 rounded-2xl opacity-60"
                          style={{
                            background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                            backdropFilter: 'blur(10px)'
                          }}
                      ></div>

                      <CardContent className="p-4 sm:p-6 text-center relative z-10 w-full h-full flex flex-col justify-center">
                        <div className="space-y-2 sm:space-y-4">
                          {/* Large Number with 3D effect */}
                          <div
                              className="text-[1.75rem] sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white"
                              style={{
                                textShadow: '2px 2px 8px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.2)',
                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                              }}
                          >
                            {achievement.year || achievement.count}
                          </div>

                          {/* Title with enhanced typography */}
                          <h3
                              className="text-white font-semibold text-[0.625rem] sm:text-sm lg:text-base leading-tight"
                              style={{
                                textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
                                letterSpacing: '0.5px'
                              }}
                          >
                            {achievement.title}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                )
              })}
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 640px) {
            .container {
              font-size: 16px;
            }
            h2 {
              font-size: 1.5rem !important;
              line-height: 1.2;
            }
            p {
              font-size: 0.875rem !important;
              line-height: 1.5;
            }
            .text-base {
              font-size: 0.875rem !important;
            }
            .text-lg {
              font-size: 1rem !important;
            }
          }
        `}</style>
      </section>
  )
}