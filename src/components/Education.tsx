import SectionTitle from "./SectionTitle";

const education = [
    {
        degree: "Bachelor of Science in Information Technology",
        institution: "Quezon City University",
        period: "2022 – Expected 2026",
        status: "In Progress",
        statusColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
        details: "Focused on software development, web technologies, and IT systems. Active in academic projects spanning front-end development and IoT.",
        icon: "🎓",
    },
    {
        degree: "STEM Strand (Science, Technology, Engineering & Mathematics)",
        institution: "STI Novaliches",
        period: "2020 – 2022",
        status: "With Honors",
        statusColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        details: "Graduated from the STEM strand with academic honors, laying a strong foundation in analytical thinking, mathematics, and applied sciences.",
        icon: "🏆",
    },
];

export default function Education() {
    return (
        <section id="education" className="py-24 bg-transparent relative z-10">
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
                            className="group bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-indigo-500/5 hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-5">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                                    {edu.icon}
                                </div>

                                <div className="flex-1">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                        <div>
                                            <h3 className="font-bold text-white text-base leading-snug group-hover:text-indigo-400 transition-colors">
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

                                    <p className="text-sm text-zinc-400 leading-relaxed">{edu.details}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
