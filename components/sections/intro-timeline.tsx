"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Timeline data (Hackathon event removed)
const timelineEvents = [
  {
    year: "2021",
    title: "B.Tech in Computer Science",
    description: "Started my journey at St. Peter's Engineering College, mastering coding with a CGPA of 8.43.",
    category: "Education",
    avatar: "🎓",
    stats: "CGPA: 8.43/10",
  },
  {
    year: "2023",
    title: "CampusBuzz",
    description: "Built a cross-platform mobile application with Flutter and Firebase, streamlining college events with smart recommendations.",
    category: "Project",
    avatar: "📱",
    stats: "Flutter • Firebase",
  },
  {
    year: "2023",
    title: "Smart Read",
    description: "Crafted a reading platform with React.js and Spotify API, boosting user engagement by 40%.",
    category: "Project",
    avatar: "📚",
    stats: "React.js • Spotify API",
  },
  {
    year: "2024",
    title: "The Team Events",
    description: "Developed an event booking platform with React, ShadCN, and Clerk for a sleek, secure interface.",
    category: "Project",
    avatar: "🎯",
    stats: "React • ShadCN • Clerk",
  },
  {
    year: "2024",
    title: "Emmanuel Living Impact Mission",
    description: "Created a church platform with React and EmailJS, reducing administrative follow-ups by 50%.",
    category: "Project",
    avatar: "⛪",
    stats: "React • EmailJS",
  },
  {
    year: "2025",
    title: "Frontend Intern at Viral Bug",
    description: "Shipped 4 production-grade apps with Next.js, achieving 90% Lighthouse performance scores.",
    category: "Experience",
    avatar: "💼",
    stats: "Next.js • 4 Apps • 90% Score",
  },
];

// Technology data with multiple images per technology group
const technologies = [
  {
    name: "JavaScript, TypeScript, Java",
    images: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    ]
  },
  {
    name: "React, Redux, Next.js",
    images: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    ]
  },
  {
    name: "Tailwind CSS, ShadCN",
    images: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      "https://ui.shadcn.com/favicon.ico"
    ]
  },
  {
    name: "Firebase, Firestore",
    images: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
    ]
  },
  {
    name: "Git, GitHub, GitLab",
    images: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
    ]
  },
  {
    name: "Vercel, Netlify",
    images: [
      "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg"
    ]
  },
  {
    name: "Figma, Postman",
    images: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
    ]
  },
  {
    name: "Jest, Cypress",
    images: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg"
    ]
  },
];

// Certifications data with images
const certifications = [
  {
    cert: "Google Cloud Computing Foundations",
    provider: "Google Cloud",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
  },
  {
    cert: "Full-Stack Web Development",
    provider: "Udemy",
    image: "https://logoeps.com/wp-content/uploads/2013/03/udemy-vector-logo.png"
  },
  {
    cert: "Problem-Solving Certification",
    provider: "Coursera",
    image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/e8/7cc8d09d3f11e698dfff46d35f2da1/coursera_logo_square.png"
  },
  {
    cert: "Responsive Web Design",
    provider: "Coursera",
    image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/e8/7cc8d09d3f11e698dfff46d35f2da1/coursera_logo_square.png"
  },
];

export default function IntroTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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
    offset: ["start 10%", "end 85%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
      <div className="w-full overflow-x-hidden">
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 min-h-screen bg-black" ref={containerRef}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Header */}
            <motion.div
                className="text-left mb-8 sm:mb-12 lg:mb-16"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block px-3 py-1.5 bg-white/10 rounded-full border border-white/20 mb-4">
              <span
                  className="text-white text-xs sm:text-sm font-medium"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                MY JOURNEY
              </span>
              </div>
              <h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: 1.2 }}
              >
                From Dreamer to Developer
              </h2>
              <p
                  className="text-gray-400 text-sm sm:text-base max-w-md lg:max-w-lg"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                A passionate journey through code, innovation, and continuous learning
              </p>
            </motion.div>

            {/* Timeline */}
            <div ref={ref} className="relative pb-12 sm:pb-16 lg:pb-20">
              {timelineEvents.map((event, index) => (
                  <motion.div
                      key={index}
                      className="flex justify-start pt-6 sm:pt-8 md:pt-12 lg:pt-16 gap-3 sm:gap-6 md:gap-8"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true, margin: "-100px" }}
                  >
                    {/* Sticky Year Section */}
                    <div className="flex flex-col md:flex-row z-40 items-center top-16 sm:top-20 md:sticky md:top-24 self-start max-w-[70px] sm:max-w-[90px] md:max-w-[120px]">
                      <div className="h-7 sm:h-8 md:h-10 absolute left-2.5 sm:left-3 md:left-4 w-7 sm:w-8 md:w-10 rounded-full bg-black flex items-center justify-center">
                        <motion.div
                            className="h-3 sm:h-3.5 md:h-4 w-3 sm:w-3.5 md:w-4 rounded-full bg-blue-400 border border-white/20"
                            whileInView={{ scale: [0, 1.2, 1] }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        />
                      </div>
                      <h3
                          className="hidden md:block text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-400 pl-0 md:pl-12 lg:pl-16"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {event.year}
                      </h3>
                    </div>

                    {/* Content Section */}
                    <div className="relative pl-10 sm:pl-12 md:pl-0 flex-1 max-w-full">
                      <h3
                          className="md:hidden text-lg sm:text-xl mb-2 sm:mb-3 font-bold text-gray-400"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {event.year}
                      </h3>
                      <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                        {/* Avatar/Image */}
                        <motion.div
                            className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-lg sm:text-xl md:text-2xl shrink-0"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                          {event.avatar}
                        </motion.div>
                        {/* Text Content */}
                        <div className="flex-1 min-w-0">
                      <span
                          className="inline-block px-2.5 sm:px-3 py-1 bg-blue-400/20 text-white text-xs font-semibold uppercase rounded-full border border-blue-400/30 mb-2 sm:mb-3"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {event.category}
                      </span>
                          <h3
                              className="text-base sm:text-lg md:text-xl font-bold text-white mb-2"
                              style={{ fontFamily: "'Poppins', sans-serif" }}
                          >
                            {event.title}
                          </h3>
                          <p
                              className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 break-words"
                              style={{ fontFamily: "'Poppins', sans-serif" }}
                          >
                            {event.description}
                          </p>
                          <span
                              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-white/5 rounded-full text-white text-xs font-medium border border-white/10"
                              style={{ fontFamily: "'Poppins', sans-serif" }}
                          >
                        {event.stats}
                      </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
              ))}

              {/* Animated Vertical Line */}
              <div
                  style={{ height: height + "px" }}
                  className="absolute left-5 sm:left-6 md:left-8 top-0 w-[2px] bg-[linear-gradient(to_bottom,transparent,white/20,transparent)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
              >
                <motion.div
                    style={{ height: heightTransform, opacity: opacityTransform }}
                    className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-400 via-blue-500 to-transparent rounded-full"
                />
              </div>
            </div>

            {/* Technical Skills */}
            <motion.div
                className="mt-16 sm:mt-20 lg:mt-24 xl:mt-32"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
              <div className="text-left mb-8 sm:mb-12 lg:mb-16">
                <div className="inline-block px-3 py-1.5 bg-white/10 rounded-full border border-white/20 mb-4">
                <span
                    className="text-white text-xs sm:text-sm font-medium"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  TECH STACK
                </span>
                </div>
                <h3
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: 1.2 }}
                >
                  Technologies and Tools
                </h3>
                <p
                    className="text-gray-400 text-sm sm:text-base max-w-md lg:max-w-lg"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  The tools I use to build innovative solutions
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {technologies.map((tech, index) => (
                    <motion.div
                        key={index}
                        className="p-4 sm:p-5 bg-white/5 rounded-lg border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1,
                          ease: "easeOut"
                        }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-2 sm:gap-3 mb-3">
                        {tech.images.map((image, imgIndex) => (
                            <img
                                key={imgIndex}
                                src={image}
                                alt={`${tech.name} icon ${imgIndex + 1}`}
                                className="w-5 sm:w-6 h-5 sm:h-6 object-contain"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                }}
                            />
                        ))}
                      </div>
                      <span
                          className="text-sm sm:text-base font-medium block"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                    {tech.name}
                  </span>
                    </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
                className="mt-16 sm:mt-20 lg:mt-24 xl:mt-32 pb-8 sm:pb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
              <div className="text-left mb-8 sm:mb-12 lg:mb-16">
                <div className="inline-block px-3 py-1.5 bg-white/10 rounded-full border border-white/20 mb-4">
                <span
                    className="text-white text-xs sm:text-sm font-medium"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  CERTIFICATIONS
                </span>
                </div>
                <h3
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: 1.2 }}
                >
                  Professional Credentials
                </h3>
                <p
                    className="text-gray-400 text-sm sm:text-base max-w-md lg:max-w-lg"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Achievements that validate my expertise
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {certifications.map((item, index) => (
                    <motion.div
                        key={index}
                        className="p-4 sm:p-5 bg-white/5 rounded-lg border border-white/10 flex items-start gap-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1,
                          ease: "easeOut"
                        }}
                        whileHover={{ scale: 1.02, y: -3 }}
                        viewport={{ once: true }}
                    >
                      <img
                          src={item.image}
                          alt={`${item.cert} icon`}
                          className="w-8 sm:w-10 h-8 sm:h-10 object-contain shrink-0"
                          onError={(e) => {
                            e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkM8L3RleHQ+Cjwvc3ZnPgo=";
                          }}
                      />
                      <div className="flex-1 min-w-0">
                        <h4
                            className="text-white text-sm sm:text-base font-semibold mb-1 break-words"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          {item.cert}
                        </h4>
                        <p
                            className="text-gray-400 text-xs sm:text-sm"
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
      </div>
  );
}