import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { skillGroups, type Skill } from "../data/skills";

const categoryColors: Record<string, string> = {
    "Web Development": "bg-sky-500/10 text-sky-400 border-sky-500/20",
    "Programming & Frameworks": "bg-violet-500/10 text-violet-400 border-violet-500/20",
    Database: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "UI/UX & Tools": "bg-pink-500/10 text-pink-400 border-pink-500/20",
    "IT Support": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    "Dev Tools": "bg-zinc-800 text-zinc-400 border-zinc-700",
};

const categoryDotColors: Record<string, string> = {
    "Web Development": "bg-sky-500",
    "Programming & Frameworks": "bg-violet-500",
    Database: "bg-amber-500",
    "UI/UX & Tools": "bg-pink-500",
    "IT Support": "bg-emerald-500",
    "Dev Tools": "bg-zinc-500",
};

const categoryBarColors: Record<string, string> = {
    "Web Development": "bg-sky-500",
    "Programming & Frameworks": "bg-violet-500",
    Database: "bg-amber-500",
    "UI/UX & Tools": "bg-pink-500",
    "IT Support": "bg-emerald-500",
    "Dev Tools": "bg-zinc-500",
};

export default function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

    const activeSkill = selectedSkill ?? hoveredSkill;

    const handleSelect = (skill: Skill) => {
        setSelectedSkill((prev) => (prev?.name === skill.name ? null : skill));
    };

    return (
        <section id="skills" className="py-24 bg-transparent relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    label="Skills"
                    title="What I Work With"
                    subtitle="Hover or click a skill card to see more details."
                />

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Left: Skill cards grouped by category */}
                    <div className="lg:col-span-2 space-y-8">
                        {skillGroups.map((group) => (
                            <div key={group.category}>
                                <div className="flex items-center gap-2 mb-4">
                                    <span
                                        className={`w-2 h-2 rounded-full ${categoryDotColors[group.category] ?? "bg-zinc-400"}`}
                                    />
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                                        {group.category}
                                    </h3>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {group.skills.map((skill) => {
                                        const isSelected = selectedSkill?.name === skill.name;
                                        const isActive = activeSkill?.name === skill.name;
                                        return (
                                            <button
                                                key={skill.name}
                                                onMouseEnter={() => setHoveredSkill(skill)}
                                                onMouseLeave={() => setHoveredSkill(null)}
                                                onClick={() => handleSelect(skill)}
                                                className={`group relative text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer
                          ${isActive
                                                        ? "border-indigo-500/50 bg-indigo-500/10 shadow-lg shadow-indigo-500/5 -translate-y-1"
                                                        : isSelected
                                                            ? "border-indigo-500/30 bg-indigo-500/5"
                                                            : "border-zinc-800 bg-zinc-900/40 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-indigo-500/5"
                                                    }
                        `}
                                            >
                                                {isSelected && (
                                                    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                                                )}
                                                <p
                                                    className={`text-sm font-semibold leading-tight ${isActive ? "text-indigo-300" : "text-zinc-200"
                                                        }`}
                                                >
                                                    {skill.name}
                                                </p>
                                                <span
                                                    className={`inline-block mt-1.5 px-2 py-0.5 text-[10px] font-semibold rounded-md border ${categoryColors[skill.category] ?? "bg-zinc-800 text-zinc-400 border-zinc-700"
                                                        }`}
                                                >
                                                    {skill.category}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Skill Details Panel */}
                    <div className="lg:sticky lg:top-24">
                        <div
                            className={`rounded-3xl border p-6 min-h-[280px] transition-all duration-300 ${activeSkill
                                ? "border-indigo-500/30 bg-zinc-900/60 shadow-2xl shadow-indigo-500/5 backdrop-blur-md"
                                : "border-zinc-800 bg-zinc-900/40"
                                }`}
                        >
                            {activeSkill ? (
                                <div className="space-y-5">
                                    {/* Header */}
                                    <div>
                                        <span
                                            className={`inline-block px-2.5 py-1 text-[11px] font-semibold rounded-lg border mb-3 ${categoryColors[activeSkill.category] ?? "bg-zinc-800 text-zinc-400 border-zinc-700"
                                                }`}
                                        >
                                            {activeSkill.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-white">{activeSkill.name}</h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-zinc-400 leading-relaxed">{activeSkill.description}</p>

                                    {/* Proficiency Bar */}
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                                                Proficiency
                                            </span>
                                            <span className="text-sm font-bold text-indigo-400">{activeSkill.proficiency}%</span>
                                        </div>
                                        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                            <div
                                                key={activeSkill.name}
                                                className={`h-full rounded-full proficiency-bar ${categoryBarColors[activeSkill.category] ?? "bg-indigo-500"
                                                    }`}
                                                style={
                                                    { "--target-width": `${activeSkill.proficiency}%` } as React.CSSProperties
                                                }
                                            />
                                        </div>
                                    </div>

                                    {/* Selected indicator */}
                                    {selectedSkill?.name === activeSkill.name && (
                                        <div className="pt-2 border-t border-zinc-800">
                                            <button
                                                onClick={() => setSelectedSkill(null)}
                                                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                                            >
                                                ✕ Clear selection
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-3">
                                        <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
                                        </svg>
                                    </div>
                                    <p className="text-sm font-medium text-zinc-400">
                                        Hover or click a skill card
                                    </p>
                                    <p className="text-xs text-zinc-500 mt-1">to see details here</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
