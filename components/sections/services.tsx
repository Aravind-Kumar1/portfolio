"use client";

export default function Services() {
    return (
        <section className="relative w-full h-auto lg:h-screen md:h-[80vh] sm:h-[50vh] xs:h-[50vh] overflow-hidden lg:px-0 md:px-10 sm:px-5 xs:px-3">
            {/* Video Background */}
            <div className="relative w-full h-full">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    style={{
                        objectFit: 'cover', // Ensure the video covers the full area
                        objectPosition: 'center center',
                    }}
                >
                    <source src="/sri-sec.wembm" type="video/webm" />
                    <source src="/sri-sec.mp4" type="video/mp4" />
                </video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 z-10" />
            </div>
        </section>
    );
}
