export interface Skill {
    title: string;
    skillName: string;
    color: string;
    percentage: number;
}

export interface Project {
    projectName: string;
    image: string;
    summary: string;
    preview: string;
    techStack: string[];
}

export interface Experience {
    title: string;
    duration: string;
    subtitle: string;
    details: string[];
    tags: string[];
    icon: string;
}

export interface Education {
    title: string;
    duration: string;
    subtitle: string;
    details: string[];
    tags: string[];
    icon: string;
    distinction?: boolean;
    firstClass?: boolean;
    meritRank?: boolean;
}

export interface AcademicAchievement {
    title: string;
    description: string;
    year: string;
    institution: string;
    icon: string;
}

export interface FooterLink {
    text: string;
    link?: string;
    func?: string;
}

export interface FooterSection {
    label: string;
    data: FooterLink[];
}

export interface PortfolioData {
    bio: {
        about: {
            text: string[];
        };
        contact: {
            text: string[];
        };
    };
    skills: Skill[];
    projects: {
        web: Project[];
        software: Project[];
        android: Project[];
        freelance: Project[];
    };
    experience: Experience[];
    education: Education[];
    academicAchievements: AcademicAchievement[];
    footer: FooterSection[];
}

export const portfolioData: PortfolioData = {
    bio: {
        about: {
            text: [
                "Hi 👋",
                "I'm Thenusan Santhirakumar, a recent graduate with a Master's degree in Information Technology from Deakin University (2023-2025). I bring two years of experience as a Software Engineer at WSO2, where I contributed to enterprise identity and integration solutions.",
                "I specialize in cloud-native development, backend engineering, and software development. My recent academic and project work includes building a barter trading system using EJS, Node JS, and MongoDB, and developing a healthcare appointment booking system using Spring Boot and MongoDB.",
                "I'm a Software Engineer, geek and curious human besides being an OpenSource enthusiast. I have experience of delivering solutions for interesting problems in industry space. I love to play cricket and listen to music.",
            ],
        },
        contact: {
            text: [
                "If you would like to get in touch with me, be it for exploring a technology, a business, or to just say hi, feel free to send me an email. My email address is: thenusan.dev@gmail.com",
            ],
        },
    },
    skills: [
        {
            title: "Languages",
            skillName: "Java",
            color: "1",
            percentage: 70,
        },
        {
            title: "Languages",
            skillName: "Python",
            color: "6",
            percentage: 60,
        },
        {
            title: "Languages",
            skillName: "JavaScript",
            color: "5",
            percentage: 60,
        },
        {
            title: "Languages",
            skillName: "PHP",
            color: "2",
            percentage: 40,
        },
        {
            title: "Languages",
            skillName: "Ballerina",
            color: "2",
            percentage: 30,
        },
        {
            title: "Cloud & DevOps",
            skillName: "AWS",
            color: "3",
            percentage: 50,
        },
        {
            title: "Cloud & DevOps",
            skillName: "WSO2 APIM, IS, MI",
            color: "3",
            percentage: 40,
        },
        {
            title: "Frontend",
            skillName: "React",
            color: "4",
            percentage: 50,
        },
        {
            title: "Frontend",
            skillName: "HTML, Bootstrap, CSS",
            color: "4",
            percentage: 40,
        },
        {
            title: "Version Control",
            skillName: "GitHub",
            color: "7",
            percentage: 70,
        },
        {
            title: "Tools",
            skillName: "Relational Databases",
            color: "3",
            percentage: 70,
        },
        {
            title: "Tools",
            skillName: "Postman",
            color: "4",
            percentage: 60,
        },
        {
            title: "NoSQL Databases",
            skillName: "MongoDB, Redis",
            color: "5",
            percentage: 50,
        },
        {
            title: "Editor",
            skillName: "VS Code",
            color: "6",
            percentage: 70,
        },
    ],
    projects: {
        web: [
            {
                projectName: "Barter System",
                image: "/images/baterSystem.png",
                summary:
                    "Developed a barter trading system that enables users to exchange items and services. Implemented features include user authentication, item listing, search functionality, and real-time messaging between users. Built as part of my Master's degree project at Deakin University.",
                preview: "https://github.com/sthenusan/TradeSystem",
                techStack: [
                    "Node JS",
                    "EJS",
                    "Mongo DB",
                    "JavaScript",
                    "HTML",
                    "CSS"
                ],
            },
            {
                projectName: "Healthcare Appointment Booking System",
                image: "/images/healthcare.png",
                summary:
                    "Built a comprehensive healthcare appointment management system that allows patients to book, reschedule, and manage their medical appointments. Features include doctor availability management, appointment scheduling, and automated notifications. Developed as part of my Master's degree project at Deakin University.",
                preview: "https://github.com/sthenusan/sit-727-hd",
                techStack: [
                    "Spring Boot",
                    "Thymeleaf",
                    "Mongo DB",
                    "Docker",
                    "Kubernetes"
                ],
            },
            {
                projectName: "InstaMovies",
                image: "/images/movie.png",
                summary:
                    "Developed a full stack web application to provide movie ticket booking related services with ticket exchange facility, As a part of Semester three OOSD Project, Group Project",
                preview: "https://github.com/sthenusan/InstaMovies",
                techStack: [
                    "PHP",
                    "MySQL",
                    "Bootstrap",
                    "JavaScript",
                    "HTML",
                    "CSS"
                ],
            },
            {
                projectName: "HR Management Solution",
                image: "/images/hrm.png",
                summary:
                    "Human Resource Management Application, As a part of Semester four Database Project, Group Project",
                preview: "https://github.com/sthenusan/HR-management",
                techStack: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
            },
        ],
        software: [
            {
                projectName: "WSO2 Session DataStore in Redis",
                image: "/images/redis.png",
                summary:
                    "WSO2 IS Session data store in REDIS in Memory database, Internship Project",
                preview:
                    "https://github.com/sthenusan/identity-session-data-store-redis",
                techStack: ["Java", "Redis", "Jmeter", "WSO2 IS", "Relational Databases"],
            },
            {
                projectName: "Process Scheduling Algorithm - Simulation",
                image: "/images/srtf.png",
                summary:
                    "SRTF process scheduling algorithm simulation for the Operating Systems module.",
                preview:
                    "https://github.com/sthenusan/identity-session-data-store-redis",
                techStack: ["Java", "SRTF Algorithm"],
            },
        ],
        android: [
            {
                projectName: "Alarm Me",
                image: "/images/alarm.png",
                summary:
                    "Location based Alarm Application. As a part of Semester four Software Engineering Project, Group Project",
                preview: "https://github.com/sthenusan/AlarmMe",
                techStack: ["Flutter", "MySQL", "Google Map API"],
            },
            {
                projectName: "Sieve Mobile Application",
                image: "/images/sieve.jpg",
                summary:
                    "A Application to display privacy policies of different applications in the market.",
                preview: "https://github.com/sthenusan/Sieve_Backend",
                techStack: ["Flutter", "MySQL", "Adobe XD"],
            },
        ],
        freelance: [
            {
                projectName: "Construction Company Website",
                image: "/images/cybex.png",
                summary:
                    "Developed a professional website for a construction company with modern design and functionality. Implemented contact forms with email integration for client inquiries and project requests. Created a responsive design showcasing the company's services, portfolio, and contact information.",
                preview: "https://github.com/sthenusan/cybex",
                techStack: [
                    "EJS",
                    "Node.js",
                    "Express.js",
                    "Email Integration",
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Responsive Design"
                ],
            },
        ],
    },
    experience: [
        {
            title: "WSO2 LLC",
            duration: "May 2022 - October 2023",
            subtitle: "Software Engineer",
            details: [
                "Implemented Healthcare Ballerina Packages.",
                "DICOM feature support for WSO2 OH Solution.",
                "Asgardeo & APIM Integration Research.",
                "Research on Asgardeo & Choreo Access tokens.",
            ],
            tags: [
                "Java",
                "Dicom",
                "Asgardeo",
                "Choreo",
                "Ballerina",
                "FHIR",
            ],
            icon: "heartbeat",
        },
        {
            title: "Computer Science & Engineering, UOM",
            duration: "February 2022 - April 2022",
            subtitle: "Visiting Instructor",
            details: [
                "Explain database concepts to students and helped in their project works.",
                "Graded multiple assignments, quizzes, ER Diagrams and etc.",
                "Helping Students in Practical Assessments in Database Module.",
            ],
            tags: ["Database", "SQL", "NOSQL", "Python", "SQL Server"],
            icon: "qrcode",
        },
        {
            title: "WSO2 LLC",
            duration: "October 2020 - April 2021",
            subtitle: "Software Engineering Intern",
            details: [
                "Implemented WSO2 IS Session Data Store in Redis.",
                "Improved the design of WSO2 IS Session Data Store.",
                "Performance Testing on Session Data Store Implementations.",
                "Performing User Testing in Asgardeo use cases.",
            ],
            tags: [
                "Java",
                "Redis",
                "WSO2 Identity Server",
                "Github",
                "Jmeter",
                "Dbeaver",
                "Relational Databases",
                "NoSQL Databases",
            ],
            icon: "group",
        },
    ],
    education: [
        {
            title: "Master of Information Technology",
            duration: "October 2023 - June 2025",
            subtitle: "Deakin University, Australia",
            details: [
                "Graduated with DISTINCTION - Outstanding Academic Performance",
                "Specializing in Cloud Computing and Software Development",
                "Relevant Coursework: Cloud Architecture, Advanced Software Engineering, Data Analytics",
                "Project: Developed a barter trading system using EJS, Node JS, and MongoDB",
                "Project: Built a healthcare appointment booking system using Spring Boot and MongoDB"
            ],
            tags: [
                "Cloud Computing",
                "Software Development",
                "Data Analytics",
                "Node.js",
                "MongoDB",
                "Spring Boot",
                "DevOps",
                "Microservices",
                "API Development"
            ],
            icon: "graduation-cap",
            distinction: true
        },
        {
            title: "B.S.c in Engineering in Computer Science and Engineering",
            duration: "January 2018 - June 2022",
            subtitle: "University of Moratuwa, Sri Lanka",
            details: [
                "Graduated with FIRST CLASS HONOURS - Exceptional Academic Performance",
                "CGPA 3.745 / 4.2 - Outstanding Academic Record",
                "Dean List awards in semester 7 & 8 - Consistent Excellence",
                "Specialized in Software Engineering and Computer Science",
            ],
            tags: [
                "Data Structures & Algorithms",
                "Operating Systems",
                "Database Management System",
                "Object Oriented Programming",
                "Object Oriented Software Design",
                "Software Engineering",
                "Quality Engineering",
                "Software Architecture",
                "Software Process and Management",
                "Data Science",
                "Cloud Computing",
                "Machine Learning",
                "BioInformatics",
                "Advanced Algorithms",
            ],
            icon: "graduation-cap",
            firstClass: true
        },
        {
            title: "GCE Advanced Level",
            duration: "August 2014 - August 2016",
            subtitle: "Vavuniya Tamil Madya Maha Vidyalayam, Vavuniya",
            details: [
                "Achieved MERIT RANK - Outstanding Performance in National Examination",
                "District Rank: 3, Island Rank: 327 - Top Tier Academic Standing",
                "Z-Score: 2.1485 - Exceptional Academic Achievement",
                "Best physical science student awards in 2015 & 2016 - Consistent Excellence",
                "All high distinction level passes with general knowledge 78 out of 100",
            ],
            tags: ["Physics", "Chemistry", "Combined Mathematics"],
            icon: "book",
            meritRank: true
        },
    ],
    academicAchievements: [
        {
            title: "Master's Degree with Distinction",
            description: "Graduated with distinction from Deakin University, Australia",
            year: "2025",
            institution: "Deakin University",
            icon: "award"
        },
        {
            title: "First Class Honours",
            description: "Achieved first class honours in Computer Science and Engineering",
            year: "2022",
            institution: "University of Moratuwa",
            icon: "award"
        },
        {
            title: "Dean's List Awards",
            description: "Received Dean's List awards in semesters 7 & 8",
            year: "2021-2022",
            institution: "University of Moratuwa",
            icon: "award"
        },
        {
            title: "Best Physical Science Student",
            description: "Awarded best physical science student in 2015 & 2016",
            year: "2015-2016",
            institution: "Vavuniya Tamil Madya Maha Vidyalayam",
            icon: "award"
        },
        {
            title: "High Academic Ranking",
            description: "District Rank: 3, Island Rank: 327 in GCE Advanced Level",
            year: "2016",
            institution: "National Level",
            icon: "award"
        }
    ],
    footer: [
        {
            label: "Dev Profiles",
            data: [
                {
                    text: "Stackoverflow",
                    link: "https://stackoverflow.com/users/9118100/thenusan-santhirakumar",
                },
                {
                    text: "GitHub",
                    link: "https://github.com/sthenusan",
                },
                {
                    text: "LeetCode",
                    link: "https://leetcode.com/thenusan97/",
                },
            ],
        },
        {
            label: "Resources",
            data: [
                {
                    text: "Enable Dark/Light Mode",
                    func: "enableDarkMode()",
                },
                {
                    text: "Print this page",
                    func: "window.print()",
                },
            ],
        },
        {
            label: "Social Profiles",
            data: [
                {
                    text: "LinkedIn",
                    link: "https://www.linkedin.com/in/sthenusan/",
                },
            ],
        },
    ],
}; 