export interface Skill {
    name: string;
    category: string;
    description: string;
    proficiency: number; // 0–100
    icon: string; // FontAwesome icon name
}

export interface SkillGroup {
    category: string;
    skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
    {
        category: "Web Development",
        skills: [
            {
                name: "HTML5",
                category: "Web Development",
                description: "Proficient in writing clean, semantic HTML5 markup to build well-structured and accessible web pages.",
                proficiency: 90,
                icon: "fa-brands fa-html5",
            },
            {
                name: "CSS3",
                category: "Web Development",
                description: "Strong command of CSS3 including Flexbox, Grid, animations, and custom properties for modern layouts.",
                proficiency: 88,
                icon: "fa-brands fa-css3-alt",
            },
            {
                name: "Bootstrap",
                category: "Web Development",
                description: "Experienced with Bootstrap's component library and grid system for rapid, responsive UI development.",
                proficiency: 80,
                icon: "fa-brands fa-bootstrap",
            },
            {
                name: "Responsive Web Design",
                category: "Web Development",
                description: "Skilled in building mobile-first, fluid layouts that adapt seamlessly across all screen sizes and devices.",
                proficiency: 85,
                icon: "fa-solid fa-mobile-screen-button",
            },
        ],
    },
    {
        category: "Programming & Frameworks",
        skills: [
            {
                name: "React.js",
                category: "Programming & Frameworks",
                description: "Building modern single-page applications using React with hooks, component composition, and state management.",
                proficiency: 80,
                icon: "fa-brands fa-react",
            },
            {
                name: "React Native",
                category: "Programming & Frameworks",
                description: "Developing cross-platform mobile applications using React Native with a shared component architecture.",
                proficiency: 65,
                icon: "fa-brands fa-react",
            },
            {
                name: "Express.js",
                category: "Programming & Frameworks",
                description: "Creating RESTful API endpoints and server-side logic using Express.js for full-stack web applications.",
                proficiency: 70,
                icon: "fa-brands fa-node-js",
            },
        ],
    },
    {
        category: "Database",
        skills: [
            {
                name: "MySQL",
                category: "Database",
                description: "Designing relational database schemas, writing SQL queries, and integrating MySQL with web applications.",
                proficiency: 72,
                icon: "fa-solid fa-database",
            },
        ],
    },
    {
        category: "UI/UX & Tools",
        skills: [
            {
                name: "Figma",
                category: "UI/UX & Tools",
                description: "Designing wireframes, mockups, and prototypes in Figma to communicate UI/UX concepts effectively.",
                proficiency: 75,
                icon: "fa-brands fa-figma",
            },
        ],
    },
    {
        category: "IT Support",
        skills: [
            {
                name: "PC Troubleshooting",
                category: "IT Support",
                description: "Diagnosing and resolving hardware and software issues on desktop and laptop computers efficiently.",
                proficiency: 85,
                icon: "fa-solid fa-screwdriver-wrench",
            },
            {
                name: "Hardware/Software Installation",
                category: "IT Support",
                description: "Installing and configuring operating systems, drivers, and software applications for end users.",
                proficiency: 83,
                icon: "fa-solid fa-download",
            },
            {
                name: "System Configuration",
                category: "IT Support",
                description: "Setting up and configuring network devices, system settings, and IT infrastructure components.",
                proficiency: 78,
                icon: "fa-solid fa-gears",
            },
            {
                name: "End-User Support",
                category: "IT Support",
                description: "Providing responsive technical assistance and training to end users in a professional IT environment.",
                proficiency: 88,
                icon: "fa-solid fa-headset",
            },
            {
                name: "AV Setup",
                category: "IT Support",
                description: "Setting up and managing audio-visual equipment including sound systems, projectors, and presentation tools.",
                proficiency: 80,
                icon: "fa-solid fa-video",
            },
        ],
    },
    {
        category: "Dev Tools",
        skills: [
            {
                name: "Visual Studio Code",
                category: "Dev Tools",
                description: "Power user of VS Code with custom extensions, snippets, and keyboard shortcuts for efficient development.",
                proficiency: 90,
                icon: "fa-solid fa-code",
            },
        ],
    },
];

export const allSkills: Skill[] = skillGroups.flatMap((g) => g.skills);
