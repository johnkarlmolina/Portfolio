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
        title: "Resort Booking & Management System",
        description:
            "A full-featured web application for managing resort reservations, guest information, and room availability with an intuitive admin dashboard.",
        techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        liveDemo: "#",
        github: "#",
    },
    {
        title: "Ritmo Landing Page",
        description:
            "A modern, visually engaging landing page for a music-themed brand built with React and Tailwind CSS, featuring smooth animations and a responsive layout.",
        techStack: ["React", "Tailwind CSS"],
        liveDemo: "#",
        github: "https://github.com/johnkarlmolina/ritmo-2.0.git",
    },
    {
        title: "Ticketing System",
        description:
            "A web-based IT ticketing platform that allows end users to submit support requests and track their status. Led all front-end development for the project.",
        techStack: ["Express.js", "jQuery", "Tailwind CSS"],
        role: "Front-End Developer",
        liveDemo: "#",
        github: "hhttps://github.com/tianmrpg/Ticketing-System-NDH.git",
    },
    {
        title: "Inventory System",
        description:
            "A streamlined inventory management system for tracking assets and stock levels. Contributed extensively to the front-end interface and UX flow.",
        techStack: ["Express.js", "jQuery", "Tailwind CSS"],
        role: "Front-End Developer",
        liveDemo: "#",
        github: "https://github.com/johnkarlmolina/INVENTORY.git",
    },
    {
        title: "IoT Parking Diorama",
        description:
            "A physical prototype of a smart parking system using Arduino, IR sensors, servo motors, LCD display, and a buzzer to simulate automated parking slot detection.",
        techStack: ["Arduino", "IR Sensor", "Servo Motor", "LCD", "Buzzer"],
        liveDemo: "#",
    },
];
