import SectionTitle from "./SectionTitle";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const bullets = [
    "Provided AV setup support including sound system configuration, projector setup, and laptop preparation for meetings and events.",
    "Developed the front-end interface for a web-based Ticketing System, improving operational workflow for IT request handling.",
    "Contributed to the front-end of an Inventory Management System, designing the UI layout and interactive components.",
    "Performed PC troubleshooting and maintenance, resolving hardware and software issues for hospital staff.",
    "Delivered day-to-day IT support and end-user assistance, ensuring smooth operations across hospital departments.",
];

export default function Experience() {
    const { ref, animationClass } = useScrollAnimation('push-in');
    
    return (
        <section id="experience" ref={ref} className={`py-24 bg-transparent dark:bg-transparent light:bg-zinc-50 relative z-10 ${animationClass}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    label="Experience"
                    title="Professional Background"
                    subtitle="Hands-on experience gained through internship and real-world project development."
                />

                <div className="max-w-3xl mx-auto">
                    {/* Timeline container */}
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent hidden sm:block" />

                        <div className="sm:pl-16 relative">
                            {/* Timeline dot */}
                            <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-indigo-500 border-4 border-zinc-950 dark:border-zinc-950 light:border-zinc-50 shadow-lg shadow-indigo-500/20 hidden sm:block animate-pulse" />

                            <div className="bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white backdrop-blur-sm border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 rounded-3xl p-7 shadow-sm hover:shadow-indigo-500/10 hover:shadow-xl hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300 group">
                                {/* Header */}
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                                    <div>
                                        <h3 className="text-lg font-bold text-white dark:text-white light:text-zinc-900 group-hover:text-indigo-400 transition-colors">IT Intern</h3>
                                        <p className="text-indigo-400 font-semibold text-sm mt-0.5">
                                            Novaliches District Hospital
                                        </p>
                                    </div>
                                    <div className="flex flex-col sm:items-end gap-1">
                                        <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-semibold rounded-xl border border-indigo-500/20">
                                            Internship
                                        </span>
                                        <span className="text-xs text-zinc-500 font-medium">Quezon City, PH</span>
                                    </div>
                                </div>

                                {/* Bullets */}
                                <ul className="space-y-3">
                                    {bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                                            <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm leading-relaxed">{bullet}</p>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-200">
                                    {["Front-End Dev", "IT Support", "AV Setup", "Troubleshooting"].map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 text-xs font-medium text-zinc-400 dark:text-zinc-400 light:text-zinc-600 bg-zinc-800/50 dark:bg-zinc-800/50 light:bg-zinc-100 border border-zinc-700 dark:border-zinc-700 light:border-zinc-300 rounded-lg"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
