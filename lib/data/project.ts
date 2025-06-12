
// Define Contributor and Project interfaces
export interface Contributor {
    name: string;
    avatar: string;
}

export interface Project {
    id: number;
    slug: string;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    fullDescription: string;
    technologies: string[];
    duration: string;
    projectType: string;
    liveUrl?: string;
    githubUrl?: string;
    contributors?: Contributor[];
    features?: string[];
    date?: string;
    category?: string;
    team?: string;
    status?: string;
    role?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        slug: "viral-bug",
        title: "Viral Bug",
        subtitle: "Internship Project",
        description: "Developed a dynamic website for Viral Bug during internship, integrating Spotify API for music features and real-time database functionality.",
        image: "/hero.png",
        fullDescription: "Created a vibrant website for Viral Bug during an internship, leveraging React.js and Firebase for dynamic content delivery. Integrated Spotify API for music streaming features and Firestore for real-time data management. Features include user authentication, music playlist curation, real-time content updates, and responsive design for cross-device compatibility.",
        technologies: ["React.js", "Firebase", "Firestore", "Spotify API"],
        duration: "Feb 2024 – Apr 2024",
        projectType: "Internship Project",
        liveUrl: "https://viralbug.example.com",
        githubUrl: "https://github.com/username/viral-bug",
        contributors: [
            { name: "Chris Taylor", avatar: "https://images.unsplash.com/photo-1502685104226-ee32379f453f?w=100&h=100&fit=crop" }
        ],
        features: [
            "User authentication",
            "Music playlist curation",
            "Real-time content updates",
            "Responsive design"
        ],
        date: "Apr 2024",
        category: "Web Application",
        team: "Viral Bug Team",
        status: "Completed",
        role: "Frontend Developer"
    },
    {
        id: 2,
        slug: "grass-root",
        title: "Grass Root",
        subtitle: "Microfinance Platform",
        description: "Created a comprehensive website for Grass Root, a microfinance company, with features for loan management and user authentication.",
        image: "/hero.png",
        fullDescription: "Developed a robust website for Grass Root, a microfinance company, using React.js and Next.js. Implemented secure user authentication and loan management systems, ensuring seamless user experience and data integrity. Features include loan application tracking, user dashboard, payment scheduling, secure authentication, and responsive design for accessibility across devices.",
        technologies: ["React.js", "Next.js", "Tailwind CSS"],
        duration: "Mar 2024 – May 2024",
        projectType: "Client Project",
        liveUrl: "https://grassroot.example.com",
        githubUrl: "https://github.com/username/grass-root",
        contributors: [
            { name: "Laura Adams", avatar: "/hero.png" }
        ],
        features: [
            "Loan application tracking",
            "User dashboard",
            "Payment scheduling",
            "Secure authentication"
        ],
        date: "May 2024",
        category: "Web Application",
        team: "Grass Root Devs",
        status: "Completed",
        role: "Full Stack Developer"
    },
    {
        id: 3,
        slug: "elim",
        title: "ELIM",
        subtitle: "Emmanuel Living Impact Mission",
        description: "A transformative digital sanctuary that bridges faith and technology, serving the community with seamless access to sermons, events, and announcements.",
        image: "/hero.png",
        fullDescription: "Built a fully responsive church platform with React.js and CSS Modules, allowing seamless access to sermons, events, and announcements across all devices. Integrated a dynamic contact form via EmailJS, reducing manual follow-ups by 50% and maintaining 99% uptime with lightweight deployment. Features include real-time sermon streaming, event management system, automated email notifications, and mobile-first responsive design that adapts to all screen sizes.",
        technologies: ["React", "CSS Modules", "EmailJS"],
        duration: "Sept 2024 – Nov 2024",
        projectType: "Community Contribution Project",
        liveUrl: "https://elim.example.com",
        githubUrl: "https://github.com/username/elim",
        contributors: [
            { name: "John Doe", avatar: "/hero.png" },
            { name: "Jane Smith", avatar: "/hero.png" }
        ],
        features: [
            "Real-time sermon streaming",
            "Event management system",
            "Automated email notifications",
            "Mobile-first responsive design"
        ],
        date: "Nov 2024",
        category: "Web Application",
        team: "FaithTech Crew",
        status: "Completed",
        role: "Frontend Developer"
    },
    {
        id: 4,
        slug: "team-events",
        title: "The Team Events",
        description: "An enterprise-grade event management ecosystem with secure authentication and real-time booking capabilities for seamless event experiences.",
        image: "/hero.png",
        fullDescription: "Engineered an interactive event booking platform using React and ShadCN, delivering a sleek, modern UI with fast, responsive performance across all devices. Integrated secure Clerk authentication and implemented event listings, booking logic, and user dashboards with seamless sign-up and access flows. Features include real-time event updates, advanced filtering system, user role management, payment integration, and comprehensive analytics dashboard for event organizers.",
        technologies: ["React", "ShadCN", "CSS", "Clerk"],
        duration: "June 2024 – Aug 2024",
        projectType: "Volunteer Project",
        liveUrl: "https://teamevents.example.com",
        githubUrl: "https://github.com/username/team-events",
        contributors: [
            { name: "Alice Brown", avatar: "/hero.png" },
            { name: "Bob Wilson", avatar: "/hero.png" }
        ],
        features: [
            "Real-time event updates",
            "Advanced filtering system",
            "User role management",
            "Payment integration",
            "Analytics dashboard"
        ],
        date: "Aug 2024",
        category: "Event Management",
        team: "EventSync Team",
        status: "Completed",
        role: "Full Stack Developer"
    },
    {
        id: 5,
        slug: "smart-read",
        title: "Smart Read",
        description: "A comprehensive reading ecosystem with audiobook integration and AI-powered recommendations creating an immersive reading experience.",
        image: "/hero.png",
        fullDescription: "Developed a comprehensive reading platform using React.js and Firebase Firestore, enabling users to read books, take notes, and maintain a personalized library with seamless synchronization. Integrated Spotify Embedded API for audiobook functionality and implemented user authentication, wishlist management, and note-taking features, enhancing user engagement by 40%. Features include cloud synchronization, collaborative reading groups, progress tracking, intelligent bookmarking, and cross-platform accessibility.",
        technologies: ["React.js", "Firebase", "Firestore", "Spotify API"],
        duration: "Nov 2023 – Jan 2024",
        projectType: "Personal Project",
        liveUrl: "https://smartread.example.com",
        githubUrl: "https://github.com/username/smart-read",
        contributors: [
            { name: "Emma Davis", avatar: "/hero.png" }
        ],
        features: [
            "Cloud synchronization",
            "Collaborative reading groups",
            "Progress tracking",
            "Intelligent bookmarking",
            "Cross-platform accessibility"
        ],
        date: "Jan 2024",
        category: "Reading Platform",
        team: "Solo Project",
        status: "Completed",
        role: "Lead Developer"
    },
    {
        id: 6,
        slug: "campusbuzz",
        title: "CampusBuzz",
        description: "A cross-platform mobile app connecting students with campus events through intelligent recommendations and seamless event discovery.",
        image: "/hero.png",
        fullDescription: "Built a cross-platform mobile app using Flutter and Firebase to centralize college events, enabling easy access and registration for students. Implemented a location-based event recommendation system and developed a complementary website using Flutter Web with GetX for state management. Features include geolocation-based event discovery, push notifications, social integration, event calendar synchronization, user preferences learning, and offline event caching for seamless user experience.",
        technologies: ["Flutter", "Firebase", "Figma", "Dart", "EmailJS", "Bootstrap"],
        duration: "May 2023 – July 2023",
        projectType: "Academic Project",
        liveUrl: "https://campusbuzz.example.com",
        githubUrl: "https://github.com/username/campusbuzz",
        contributors: [
            { name: "Michael Lee", avatar: "/hero.png" },
            { name: "Sarah Johnson", avatar: "/hero.png" },
            { name: "David Kim", avatar: "/hero.png"}
        ],
        features: [
            "Geolocation-based event discovery",
            "Push notifications",
            "Social integration",
            "Event calendar synchronization",
            "Offline event caching"
        ],
        date: "July 2023",
        category: "Mobile Application",
        team: "CampusBuzz Crew",
        status: "Completed",
        role: "Mobile Developer"
    },

//     {
//         id: 7,
//         slug: "live-hospitals",
//         title: "Live Hospitals",
//         subtitle: "Healthcare Solution",
//         description: "Built a hospital management website with patient registration, appointment scheduling, and admin dashboard features.",
//         image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
//         fullDescription: "Developed a comprehensive hospital management system using React.js and Node.js, with MongoDB for efficient data storage. Implemented features for patient registration, appointment scheduling, and a robust admin dashboard for hospital staff. Features include patient profile management, appointment booking system, admin dashboard with analytics, secure data handling, and multi-device compatibility.",
//         technologies: ["React.js", "Node.js", "MongoDB"],
//         duration: "Jan 2024 – Mar 2024",
//         projectType: "Client Project",
//         liveUrl: "https://livehospitals.example.com",
//         githubUrl: "https://github.com/username/live-hospitals",
//         contributors: [
//             { name: "Mark Wilson", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" }
//         ],
//         features: [
//             "Patient profile management",
//             "Appointment booking system",
//             "Admin dashboard with analytics",
//             "Secure data handling"
//         ],
//         date: "Mar 2024",
//         category: "Healthcare Platform",
//         team: "HealthTech Crew",
//         status: "Completed",
//         role: "Full Stack Developer"
//     }
 ]
