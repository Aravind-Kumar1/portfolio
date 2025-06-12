// "use client"
//
// import React, { useState, useEffect, useRef } from 'react';
//
// const AnimatedTextReveal = () => {
//     const [visibleLines, setVisibleLines] = useState(0);
//     const containerRef = useRef(null);
//
//     useEffect(() => {
//         const handleScroll = () => {
//             if (!containerRef.current) return;
//
//             const containerRect = containerRef.current.getBoundingClientRect();
//             const windowHeight = window.innerHeight;
//
//             // Calculate scroll progress through the container
//             const containerTop = containerRect.top;
//             const containerHeight = containerRect.height;
//
//             if (containerTop < windowHeight && containerTop + containerHeight > 0) {
//                 const scrollProgress = Math.max(0, Math.min(1, (windowHeight - containerTop) / (windowHeight + containerHeight * 0.3)));
//                 const totalLines = 6;
//                 const newVisibleLines = Math.floor(scrollProgress * totalLines * 1.2);
//                 setVisibleLines(Math.min(newVisibleLines, totalLines));
//             }
//         };
//
//         window.addEventListener('scroll', handleScroll);
//         handleScroll();
//
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);
//
//     const lines = [
//         { words: ['Our', 'Journey'] },
//         { words: ['Begins', 'With'] },
//         { words: ['Ideas', 'And', 'Ends'] },
//         { words: ['Where', 'creativity'], hasSpecial: true },
//         { words: ['Meets', 'Functional'] },
//         { words: ['Design.'] }
//     ];
//
//     return (
//         <>
//             <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
//
//             <div className="min-h-[300vh] bg-black">
//                 {/* Spacer */}
//                 <div className="h-screen"></div>
//
//                 {/* Main text container */}
//                 <div
//                     ref={containerRef}
//                     className="min-h-screen flex items-center justify-center px-8"
//                 >
//                     <div className="text-center">
//                         <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
//                             {lines.map((line, lineIndex) => (
//                                 <div
//                                     key={lineIndex}
//                                     className="relative block overflow-hidden mb-2"
//                                 >
//                                     <div className="relative">
//                                         {line.words.map((word, wordIndex) => (
//                                             <span key={wordIndex} className="inline-block mr-6 last:mr-0">
//                         {line.hasSpecial && wordIndex === 1 ? (
//                             <span
//                                 className={`inline-block transform transition-all duration-1000 ease-out ${
//                                     visibleLines > lineIndex
//                                         ? 'translate-y-0 opacity-100'
//                                         : 'translate-y-full opacity-0'
//                                 }`}
//                                 style={{
//                                     transitionDelay: `${wordIndex * 0.15}s`,
//                                     background: 'linear-gradient(270deg, #000000, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #000000)',
//                                     backgroundSize: '400% 400%',
//                                     WebkitBackgroundClip: 'text',
//                                     WebkitTextFillColor: 'transparent',
//                                     backgroundClip: 'text',
//                                     fontFamily: 'Poppins, sans-serif',
//                                     fontWeight: 500,
//                                     animation: visibleLines > lineIndex ? 'wavyGradient 4s ease-in-out infinite' : 'none'
//                                 }}
//                             >
//                             {word}
//                           </span>
//                         ) : (
//                             <span
//                                 className={`inline-block text-white transform transition-all duration-1000 ease-out ${
//                                     visibleLines > lineIndex
//                                         ? 'translate-y-0 opacity-100'
//                                         : 'translate-y-full opacity-0'
//                                 }`}
//                                 style={{
//                                     transitionDelay: `${wordIndex * 0.15}s`,
//                                     fontFamily: 'Poppins, sans-serif',
//                                     fontWeight: 500
//                                 }}
//                             >
//                             {word}
//                           </span>
//                         )}
//                       </span>
//                                         ))}
//                                     </div>
//
//                                     {/* Line mask */}
//                                     <div
//                                         className="absolute top-0 right-0 h-full bg-black transition-all duration-1200 ease-out"
//                                         style={{
//                                             width: visibleLines > lineIndex ? '0%' : '100%',
//                                             transitionDelay: `0.3s`
//                                         }}
//                                     />
//                                 </div>
//                             ))}
//                         </h1>
//                     </div>
//                 </div>
//
//                 {/* Bottom spacer */}
//                 <div className="h-screen"></div>
//             </div>
//
//             <style jsx>{`
//         @keyframes wavyGradient {
//           0% {
//             background-position: 0% 50%;
//           }
//           25% {
//             background-position: 100% 50%;
//           }
//           50% {
//             background-position: 200% 50%;
//           }
//           75% {
//             background-position: 300% 50%;
//           }
//           100% {
//             background-position: 400% 50%;
//           }
//         }
//       `}</style>
//         </>
//     );
// };
//
// export default AnimatedTextReveal;