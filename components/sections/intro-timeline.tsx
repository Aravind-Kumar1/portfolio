"use client";

import {
  GraduationCap,
  Smartphone,
  BookOpen,
  Globe,
  Shield,
  Briefcase,
  Trophy,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Timeline data (corrected and complete)
const timelineEvents = [
  {
    year: "2021",
    title: "B.Tech in Computer Science",
    description: "Started my journey at St. Peter's Engineering College, mastering coding with a CGPA of 8.43.",
    icon: GraduationCap,
    category: "Education",
    avatar: "🎓",
    stats: "CGPA: 8.43/10",
  },
  {
    year: "2023",
    title: "CampusBuzz",
    description: "Built a cross-platform mobile application with Flutter and Firebase, streamlining college events with smart recommendations.",
    icon: Smartphone,
    category: "Project",
    avatar: "📱",
    stats: "Flutter • Firebase",
  },
  {
    year: "2023",
    title: "Smart Read",
    description: "Crafted a reading platform with React.js and Spotify API, boosting user engagement by 40%.",
    icon: BookOpen,
    category: "Project",
    avatar: "📚",
    stats: "React.js • Spotify API",
  },
  {
    year: "2024",
    title: "The Team Events",
    description: "Developed an event booking platform with React, ShadCN, and Clerk for a sleek, secure interface.",
    icon: Globe,
    category: "Project",
    avatar: "🎯",
    stats: "React • ShadCN • Clerk",
  },
  {
    year: "2024",
    title: "Emmanuel Living Impact Mission",
    description: "Created a church platform with React and EmailJS, reducing administrative follow-ups by 50%.",
    icon: Shield,
    category: "Project",
    avatar: "⛪",
    stats: "React • EmailJS",
  },
  {
    year: "2025",
    title: "Frontend Intern at Viral Bug",
    description: "Shipped 4 production-grade apps with Next.js, achieving 90% Lighthouse performance scores.",
    icon: Briefcase,
    category: "Experience",
    avatar: "💼",
    stats: "Next.js • 4 Apps • 90% Score",
  },
  {
    year: "2025",
    title: "Hackathon Champion",
    description: "Won 1st in Hacktopia, 2nd in Specathon, and represented Telangana in Cesto Ball.",
    icon: Trophy,
    category: "Achievement",
    avatar: "🏆",
    stats: "1st Place • 2nd Place",
  },
];

export default function IntroTimeline() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Calculate container height for the animated line
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  // Scroll progress for the animated line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
      <>
        <section className="py-12 xs:py-16 sm:py-20 min-h-screen bg-black" ref={containerRef}>
          <div className="container mx-auto px-2 xs:px-3 sm:px-4 max-w-4xl sm:max-w-5xl md:max-w-6xl 2xl:max-w-7xl">
            {/* Header */}
            <motion.div
                className="text-left mb-6 xs:mb-8 md:mb-12 lg:mb-16"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-2 xs:px-3 sm:px-4 py-1 sm:py-2 bg-white/10 rounded-full border border-white/20 mb-3 xs:mb-4 md:mb-6">
              <span
                  className="text-white text-[10px] xs:text-xs sm:text-sm font-medium"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                MY JOURNEY
              </span>
              </div>
              <h2
                  className="text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-3 xs:mb-4 md:mb-6 text-white whitespace-normal"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 550, lineHeight: 1.2 }}
              >
                From Dreamer to Developer
              </h2>
              <p
                  className="text-gray-400 text-xs xs:text-sm sm:text-base md:text-base max-w-xs sm:max-w-sm md:max-w-md 2xl:max-w-lg"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                A passionate journey through code, innovation, and continuous learning
              </p>
            </motion.div>

            {/* Timeline */}
            <div ref={ref} className="relative pb-12 xs:pb-16 md:pb-20">
              {timelineEvents.map((event, index) => (
                  <div key={index} className="flex justify-start pt-6 xs:pt-8 md:pt-40 md:gap-10">
                    {/* Sticky Year Section */}
                    <div className="flex flex-col md:flex-row z-40 items-center top-20 xs:top-24 sm:top-28 md:sticky md:top-40 self-start max-w-[100px] xs:max-w-[120px] sm:max-w-xs lg:max-w-sm md:w-full">
                      <div className="h-8 xs:h-9 sm:h-10 absolute left-3 w-8 xs:w-9 sm:w-10 rounded-full bg-black flex items-center justify-center">
                        <div className="h-3 xs:h-3.5 sm:h-4 w-3 xs:w-3.5 sm:w-4 rounded-full bg-blue-400 border border-white/20 p-1.5 xs:p-2" />
                      </div>
                      <h3
                          className="hidden md:block text-lg xs:text-xl md:pl-20 md:text-5xl font-bold text-gray-400"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {event.year}
                      </h3>
                    </div>

                    {/* Content Section */}
                    <div className="relative pl-12 xs:pl-16 sm:pl-20 pr-2 xs:pr-3 sm:pr-4 md:pl-4 w-full">
                      <h3
                          className="md:hidden block text-lg xs:text-xl sm:text-2xl mb-3 xs:mb-4 text-left font-bold text-gray-400"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {event.year}
                      </h3>
                      <div className="flex items-start gap-4 xs:gap-5 sm:gap-6">
                        {/* Avatar/Image */}
                        <div className="w-12 xs:w-14 sm:w-16 h-12 xs:h-14 sm:h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xl xs:text-2xl shrink-0">
                          {event.avatar}
                        </div>
                        {/* Text Content */}
                        <div>
                      <span
                          className="inline-block px-2 xs:px-3 sm:px-3 py-0.5 xs:py-1 bg-blue-400/20 text-white text-[10px] xs:text-xs sm:text-xs font-semibold uppercase tracking-wider rounded-full border border-blue-400/30 mb-3 xs:mb-4"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {event.category}
                      </span>
                          <h3
                              className="text-base xs:text-lg sm:text-xl font-bold text-white mb-2 xs:mb-3"
                              style={{ fontFamily: "'Poppins', sans-serif" }}
                          >
                            {event.title}
                          </h3>
                          <p
                              className="text-gray-300 text-xs xs:text-sm sm:text-sm leading-relaxed mb-3 xs:mb-4 max-w-[280px] xs:max-w-xs sm:max-w-md md:max-w-md 2xl:max-w-lg"
                              style={{ fontFamily: "'Poppins', sans-serif" }}
                          >
                            {event.description}
                          </p>
                          <span
                              className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-1 xs:py-2 bg-white/5 rounded-full text-white text-[10px] xs:text-xs sm:text-xs font-medium border border-white/10"
                              style={{ fontFamily: "'Poppins', sans-serif" }}
                          >
                        {event.stats}
                      </span>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}

              {/* Animated Vertical Line */}
              <div
                  style={{ height: height + "px" }}
                  className="absolute left-6 xs:left-7 sm:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white/20 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
              >
                <motion.div
                    style={{
                      height: heightTransform,
                      opacity: opacityTransform,
                    }}
                    className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-400 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                />
              </div>
            </div>

            {/* Technical Skills */}
            <motion.div
                className="mt-16 xs:mt-20 sm:mt-24 md:mt-32"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
              <div className="text-left mb-6 xs:mb-8 md:mb-12 lg:mb-16">
                <div className="inline-block px-2 xs:px-3 sm:px-4 py-1 sm:py-2 bg-white/10 rounded-full border border-white/20 mb-3 xs:mb-4 md:mb-6">
                <span
                    className="text-white text-[10px] xs:text-xs sm:text-sm font-medium"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  TECH STACK
                </span>
                </div>
                <h3
                    className="text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white mb-3 xs:mb-4 md:mb-6"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 550, lineHeight: 1.2 }}
                >
                  Technologies and Tools
                </h3>
                <p
                    className="text-gray-400 text-xs xs:text-sm sm:text-base md:text-base max-w-xs sm:max-w-sm md:max-w-md 2xl:max-w-lg"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  The tools I use to build innovative solutions
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 gap-3 xs:gap-4 sm:gap-4">
                {[
                  "JavaScript, TypeScript, Java",
                  "React, Redux, Next.js",
                  "Tailwind CSS, ShadCN",
                  "Firebase, Firestore",
                  "Git, GitHub, GitLab",
                  "Vercel, Netlify",
                  "Figma, Postman",
                  "Jest, Cypress",
                ].map((skill, index) => (
                    <motion.div
                        key={index}
                        className="p-4 xs:p-5 sm:p-6 bg-white/5 rounded-lg border border-white/10 text-white text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    >
                      <div
                          className="text-xs xs:text-sm sm:text-sm font-medium"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {skill}
                      </div>
                    </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
                className="mt-16 xs:mt-20 sm:mt-24 md:mt-32"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
              <div className="text-left mb-6 xs:mb-8 md:mb-12 lg:mb-16">
                <div className="inline-block px-2 xs:px-3 sm:px-4 py-1 sm:py-2 bg-white/10 rounded-full border border-white/20 mb-3 xs:mb-4 md:mb-6">
                <span
                    className="text-white text-[10px] xs:text-xs sm:text-sm font-medium"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  CERTIFICATIONS
                </span>
                </div>
                <h3
                    className="text-lg xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white mb-3 xs:mb-4 md:mb-6"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 550, lineHeight: 1.2 }}
                >
                  Professional Credentials
                </h3>
                <p
                    className="text-gray-400 text-xs xs:text-sm sm:text-base md:text-base max-w-xs sm:max-w-sm md:max-w-md 2xl:max-w-lg"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Achievements that validate my expertise
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 xs:gap-5 sm:gap-6">
                {[
                  { cert: "Google Cloud Computing Foundations", provider: "Google Cloud", avatar: "☁️" },
                  { cert: "Full-Stack Web Development", provider: "Udemy", avatar: "🌐" },
                  { cert: "Problem-Solving Certification", provider: "Coursera", avatar: "🧠" },
                  { cert: "Responsive Web Design", provider: "Coursera", avatar: "📱" },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex items-start gap-3 xs:gap-4 sm:gap-4"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    >
                      <div className="w-10 xs:w-11 sm:w-12 h-10 xs:h-11 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-lg xs:text-xl sm:text-xl shrink-0">
                        {item.avatar}
                      </div>
                      <div className="flex-1">
                        <h4
                            className="text-white text-sm xs:text-base sm:text-base font-semibold mb-1"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {item.cert}
                        </h4>
                        <p
                            className="text-gray-400 text-xs xs:text-sm sm:text-sm"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {item.provider}
                        </p>
                      </div>
                    </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Custom styles for fine-tuned responsiveness */}
        <style jsx>{`
        @media (max-width: 639px) {
          .sticky {
            position: static !important;
          }
          .absolute.left-6 {
            left: 1.5rem;
          }
        }
        @media (min-width: 1536px) {
          .container {
            max-width: 80rem;
          }
        }
      `}</style>
      </>
  );
}