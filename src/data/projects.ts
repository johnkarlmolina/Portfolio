export interface Project {
    title: string;
    description: string;
    techStack: string[];
    role?: string;
    liveDemo?: string;
    github?: string;
}

export const projects: Project[] = [
    {
        title: "Ritmo",
        description:
            "An Expo app for daily routine support focused on autism-friendly organization and engagement.",
        techStack: ["TypeScript", "JavaScript"],
        github: "https://github.com/johnkarlmolina/Ritmo",
    },
    {
        title: "Ritmo Landing Page",
        description:
            "A promotional website built to advertise the Ritmo application and guide visitors to the mobile app.",
        techStack: ["TypeScript", "CSS"],
        github: "https://github.com/johnkarlmolina/ritmo-2.0",
    },
    {
        title: "INVENTORY",
        description:
            "An inventory management system for tracking assets, stock levels, and reporting workflows with a browser-based admin interface.",
        techStack: ["EJS", "JavaScript", "CSS"],
        github: "https://github.com/johnkarlmolina/INVENTORY",
    },
    {
        title: "Portfolio",
        description:
            "My personal portfolio site for presenting experience, projects, skills, and contact details.",
        techStack: ["TypeScript", "CSS"],
        github: "https://github.com/johnkarlmolina/Portfolio",
    },
    {
        title: "Help-Desk-System",
        description:
            "A help desk platform for support requests, ticket handling, and administrative tracking.",
        techStack: ["EJS", "JavaScript"],
        github: "https://github.com/johnkarlmolina/Help-Desk-System",
    },
    {
        title: "qcu-grading-calculator",
        description:
            "A grading calculator for QCU-related academic evaluation workflows, built as a TypeScript web app.",
        techStack: ["TypeScript", "CSS", "HTML"],
        github: "https://github.com/johnkarlmolina/qcu-grading-calculator",
    },
];
