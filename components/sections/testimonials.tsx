"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    image: "/placeholder.svg?height=60&width=60",
    content:
        "Working with this developer was a game-changer. The attention to detail and expertise delivered results beyond expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    image: "/placeholder.svg?height=60&width=60",
    content:
        "Clean code, stunning design, and seamless UX. The best choice for any web project, hands down.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Design Director",
    image: "/placeholder.svg?height=60&width=60",
    content:
        "Our website came alive with stunning animations. This team turned our vision into reality.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "CTO at InnovateTech",
    image: "/placeholder.svg?height=60&width=60",
    content:
        "Professional, fast, and flawless execution. Our project was completed ahead of schedule.",
    rating: 5,
  },
  {
    name: "Laura Patel",
    role: "Marketing Lead",
    image: "/placeholder.svg?height=60&width=60",
    content:
        "Creativity and skill elevated our campaign to new heights. Truly top-tier work!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
      <section className="py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-left mb-16">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-6">
            <span
                className="text-white text-sm font-medium"
                style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Client Stories
            </span>
            </div>
            <h2
                className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 900,
                  lineHeight: 1.2,
                }}
            >
              Real Feedback from<br />Transformative Collaborations
            </h2>
          </div>

          <motion.div
              className="flex gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              style={{ willChange: "transform" }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                    key={`testimonial-${index}`}
                    className="min-w-[320px] max-w-[360px] flex-shrink-0"
                    whileHover={{ scale: 1.03, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <Card
                      className="bg-black/80 border-white/10 hover:border-white/30 transition-all duration-300 shadow-2xl"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                                key={i}
                                className="h-5 w-5 text-yellow-400 fill-current transition-transform duration-300 hover:scale-125"
                            />
                        ))}
                      </div>
                      <p
                          className="text-gray-200 mb-6 leading-relaxed italic text-base"
                          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                      >
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={60}
                            height={60}
                            className="w-12 h-12 rounded-full mr-4 border-2 border-white/20"
                        />
                        <div>
                          <h4
                              className="text-white font-semibold"
                              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
                          >
                            {testimonial.name}
                          </h4>
                          <p
                              className="text-gray-400 text-sm"
                              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
                          >
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
}