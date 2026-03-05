import SectionTitle from "./SectionTitle";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faTrophy } from '@fortawesome/free-solid-svg-icons';

const education = [
    {
        degree: "Bachelor of Science in Information Technology",
        institution: "Quezon City University",
        period: "2022 – Expected 2026",
        status: "In Progress",
        statusColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
        details: "Focused on software development, web technologies, and IT systems. Active in academic projects spanning front-end development and IoT.",
        icon: faGraduationCap,
    },
    {
        degree: "STEM Strand (Science, Technology, Engineering & Mathematics)",
        institution: "STI Novaliches",
        period: "2020 – 2022",
        status: "With Honors",
        statusColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        details: "Graduated from the STEM strand with academic honors, laying a strong foundation in analytical thinking, mathematics, and applied sciences.",
        icon: faTrophy,
    },
];

export default function Education() {
    const { ref, animationClass } = useScrollAnimation('slide-in');
    
    return (
        <section id="education" ref={ref} className={`py-24 bg-transparent dark:bg-transparent light:bg-zinc-50 relative z-10 ${animationClass}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    label="Education"
                    title="Academic Background"
                    subtitle="The foundation that shaped my technical mindset and professional growth."
                />

                <div className="max-w-3xl mx-auto space-y-6">
                    {education.map((edu) => (
                        <div
                            key={edu.institution}
                            className="group bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white backdrop-blur-sm border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-indigo-500/10 hover:shadow-xl hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-5">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <FontAwesomeIcon icon={edu.icon} className="text-indigo-400 text-2xl" />
                                </div>

                                <div className="flex-1">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                        <div>
                                            <h3 className="font-bold text-white dark:text-white light:text-zinc-900 text-base leading-snug group-hover:text-indigo-400 transition-colors">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-indigo-400 font-semibold text-sm mt-0.5">
                                                {edu.institution}
                                            </p>
                                        </div>
                                        <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                                            <span
                                                className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-xl border ${edu.statusColor}`}
                                            >
                                                {edu.status}
                                            </span>
                                            <span className="text-xs text-zinc-500 font-medium">{edu.period}</span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">{edu.details}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
