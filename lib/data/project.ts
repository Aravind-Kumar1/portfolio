interface Contributor {
    name: string;
    avatar: string;
    role?: string;
}

interface Project {
    id: number;
    slug: string;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    fullDescription?: string;
    technologies: string[];
    duration: string;
    projectType: string;
    liveUrl?: string;
    githubUrl?: string;
    contributors: Contributor[];
    features: string[];
    date: string;
    category: string;
    team: string;
    status: string;
    role: string;
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
            {
                name: "Chris Taylor",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
                role: "Lead Developer"
            },
            {
                name: "Sarah Chen",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b96e0e60?w=100&h=100&fit=crop&crop=face",
                role: "UI/UX Designer"
            }
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
            {
                name: "Laura Adams",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
                role: "Full Stack Developer"
            },
            {
                name: "Marcus Johnson",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                role: "Backend Engineer"
            }
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
        slug: "aditude-creative-solutions",
        title: "Aditude Creative Solutions",
        description: "Helped IT companies hire faster, smarter, and with confidence through a comprehensive website with sections for services, talent discovery, and contact information.",
        image: "/hero.png",
        fullDescription: "Developed a dynamic website for Aditude Creative Solutions to facilitate faster and smarter hiring processes for IT companies. Designed intuitive sections for home, about, services, contact, and talent discovery, ensuring seamless navigation and user engagement. Features include job listing integration, candidate profiles, client testimonials, and a responsive design for optimal viewing on all devices.",
        technologies: ["React.js", "Tailwind CSS"],
        duration: "Jan 2025 – Mar 2025",
        projectType: "Client Project",
        liveUrl: "https://aditude.example.com",
        githubUrl: "https://github.com/username/aditude-creative-solutions",
        contributors: [
            {
                name: "Emily White",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
                role: "Frontend Developer"
            },
            {
                name: "Jack Smith",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
                role: "Project Manager"
            },
            {
                name: "Diana Rodriguez",
                avatar: "https://images.unsplash.com/photo-1502685104226-ee32379f453f?w=100&h=100&fit=crop&crop=face",
                role: "UI Designer"
            }
        ],
        features: [
            "Job listing integration",
            "Candidate profiles",
            "Client testimonials",
            "Responsive design"
        ],
        date: "Mar 2025",
        category: "Web Application",
        team: "Aditude Team",
        status: "Completed",
        role: "Frontend Developer"
    },
    {
        id: 4,
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
            {
                name: "John Doe",
                avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
                role: "Lead Developer"
            },
            {
                name: "Jane Smith",
                avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
                role: "Community Manager"
            },
            {
                name: "Pastor Michael",
                avatar: "https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?w=100&h=100&fit=crop&crop=face",
                role: "Content Advisor"
            }
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
        id: 5,
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
            {
                name: "Alice Brown",
                avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
                role: "Full Stack Developer"
            },
            {
                name: "Bob Wilson",
                avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
                role: "Event Coordinator"
            },
            {
                name: "Anna Martinez",
                avatar: "https://images.unsplash.com/photo-1539571696847-e8b18ba22de9?w=100&h=100&fit=crop&crop=face",
                role: "UX Designer"
            }
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
        id: 6,
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
            {
                name: "Emma Davis",
                avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
                role: "Solo Developer"
            }
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
        id: 7,
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
            {
                name: "Michael Lee",
                avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
                role: "Mobile Developer"
            },
            {
                name: "Sarah Johnson",
                avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face",
                role: "Backend Developer"
            },
            {
                name: "David Kim",
                avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
                role: "Product Designer"
            },
            {
                name: "Lisa Wang",
                avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=face",
                role: "QA Engineer"
            }
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
]