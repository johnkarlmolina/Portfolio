import SectionTitle from "./SectionTitle";
import { projects } from "../data/projects";

const techColors: Record<string, string> = {
    HTML: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    CSS: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    JavaScript: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Bootstrap: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    React: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    "Tailwind CSS": "bg-teal-500/10 text-teal-400 border-teal-500/20",
    "Express.js": "bg-zinc-800 text-zinc-300 border-zinc-700",
    jQuery: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    Arduino: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    "IR Sensor": "bg-lime-500/10 text-lime-400 border-lime-500/20",
    "Servo Motor": "bg-pink-500/10 text-pink-400 border-pink-500/20",
    LCD: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    Buzzer: "bg-red-500/10 text-red-400 border-red-500/20",
};

const defaultColor = "bg-zinc-800 text-zinc-400 border-zinc-700";

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-transparent relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    label="Projects"
                    title="Things I've Built"
                    subtitle="A selection of projects I've worked on — from web apps to IoT systems."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-indigo-500/10 hover:shadow-2xl hover:border-indigo-500/30 hover:-translate-y-2 transition-all duration-500 flex flex-col"
                        >
                            {/* Card header accent */}
                            <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 to-violet-500 opacity-80 group-hover:opacity-100 transition-opacity" />

                            <div className="p-6 flex flex-col flex-1">
                                {/* Title + role */}
                                <div className="mb-3">
                                    <h3 className="font-bold text-white text-base leading-snug group-hover:text-indigo-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    {project.role && (
                                        <span className="text-xs text-indigo-400 font-semibold mt-0.5 block">
                                            {project.role}
                                        </span>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="text-sm text-zinc-400 leading-relaxed mb-5 flex-1">
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-lg border ${techColors[tech] ?? defaultColor
                                                }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action buttons */}
                                <div className="flex gap-2 mt-auto pt-4 border-t border-zinc-800">
                                    <a
                                        href={project.liveDemo ?? "#"}
                                        className="flex-1 text-center py-2 px-3 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-all duration-200"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.github ?? "#"}
                                        className="flex-1 text-center py-2 px-3 rounded-xl border border-zinc-800 text-zinc-300 text-xs font-semibold hover:border-zinc-600 hover:text-white transition-all duration-200 flex items-center justify-center gap-1.5"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                        </svg>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
