import SectionTitle from "./SectionTitle";
import { projects } from "../data/projects";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
    const { ref, animationClass } = useScrollAnimation('push-in');
    
    return (
        <section id="projects" ref={ref} className={`py-24 bg-transparent dark:bg-transparent light:bg-white relative z-10 ${animationClass}`}>
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
                            className="group bg-zinc-900/50 dark:bg-zinc-900/50 light:bg-white backdrop-blur-sm border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-indigo-500/10 hover:shadow-2xl hover:border-indigo-500/30 hover:-translate-y-2 transition-all duration-500 flex flex-col"
                        >
                            {/* Card header accent */}
                            <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 to-violet-500 opacity-80 group-hover:opacity-100 transition-opacity" />

                            <div className="p-6 flex flex-col flex-1">
                                {/* Title + role */}
                                <div className="mb-3">
                                    <h3 className="font-bold text-white dark:text-white light:text-zinc-900 text-base leading-snug group-hover:text-indigo-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    {project.role && (
                                        <span className="text-xs text-indigo-400 font-semibold mt-0.5 block">
                                            {project.role}
                                        </span>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed mb-5 flex-1">
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
                                <div className="mt-auto pt-4 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-200">
                                    <a
                                        href={project.github ?? "#"}
                                        className="w-full text-center py-3 px-4 rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 text-sm font-semibold hover:border-indigo-500 hover:text-indigo-400 transition-all duration-200 flex items-center justify-center gap-2"
                                    >
                                        <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
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
