"use client";
import React, { useRef, useEffect, useState } from "react";

export const TextHoverEffect = ({
                                    text = "ARAVIND CHAMAAKURI",
                                    duration = 0.2,
                                }: {
    text?: string;
    duration?: number;
}) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);
    const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

    useEffect(() => {
        if (svgRef.current && cursor.x !== null && cursor.y !== null) {
            const svgRect = svgRef.current.getBoundingClientRect();
            const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
            const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
            setMaskPosition({
                cx: `${cxPercentage}%`,
                cy: `${cyPercentage}%`,
            });
        }
    }, [cursor]);

    return (
        <div className="flex items-center justify-center">
            <svg
                ref={svgRef}
                width="100%"
                height="100%"
                viewBox="0 0 500 100"
                xmlns="http://www.w3.org/2000/svg"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
                className="select-none"
            >
                <defs>
                    <linearGradient
                        id="textGradient"
                        gradientUnits="userSpaceOnUse"
                        cx="50%"
                        cy="50%"
                        r="25%"
                    >
                        {hovered && (
                            <>
                                <stop offset="0%" stopColor="#eab308" />
                                <stop offset="50%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#8b5cf6" />
                            </>
                        )}
                    </linearGradient>

                    <radialGradient
                        id="revealMask"
                        gradientUnits="userSpaceOnUse"
                        cx={maskPosition.cx}
                        cy={maskPosition.cy}
                        r="20%"
                    >
                        <stop offset="0%" stopColor="white" />
                        <stop offset="100%" stopColor="black" />
                    </radialGradient>

                    <mask id="textMask">
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
                    </mask>
                </defs>

                {/* Base text: Always visible in black */}
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="black"
                    strokeWidth="0.2"
                    className="font-poppins text-4xl sm:text-5xl md:text-6xl font-bold"
                >
                    {text}
                </text>

                {/* Hover text: Gradient with mask, visible only on hover */}
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    stroke="url(#textGradient)"
                    strokeWidth="0.2"
                    mask="url(#textMask)"
                    fill="transparent"
                    className="font-poppins text-4xl sm:text-5xl md:text-6xl font-bold"
                    style={{ opacity: hovered ? 1 : 0, transition: `opacity ${duration}s ease` }}
                >
                    {text}
                </text>
            </svg>
        </div>
    );
};