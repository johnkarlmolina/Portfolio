import SectionTitle from "./SectionTitle";
import { skillGroups } from "../data/skills";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHtml5, 
    faCss3Alt, 
    faBootstrap, 
    faReact, 
    faNodeJs, 
    faFigma 
} from '@fortawesome/free-brands-svg-icons';
import { 
    faMobileScreenButton, 
    faDatabase, 
    faScrewdriverWrench, 
    faDownload, 
    faGears, 
    faHeadset, 
    faVideo, 
    faCode 
} from '@fortawesome/free-solid-svg-icons';

const iconMap: Record<string, any> = {
    'fa-brands fa-html5': faHtml5,
    'fa-brands fa-css3-alt': faCss3Alt,
    'fa-brands fa-bootstrap': faBootstrap,
    'fa-solid fa-mobile-screen-button': faMobileScreenButton,
    'fa-brands fa-react': faReact,
    'fa-brands fa-node-js': faNodeJs,
    'fa-solid fa-database': faDatabase,
    'fa-brands fa-figma': faFigma,
    'fa-solid fa-screwdriver-wrench': faScrewdriverWrench,
    'fa-solid fa-download': faDownload,
    'fa-solid fa-gears': faGears,
    'fa-solid fa-headset': faHeadset,
    'fa-solid fa-video': faVideo,
    'fa-solid fa-code': faCode,
};

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

export default function Skills() {
    const { ref, animationClass } = useScrollAnimation('slide-out');
    
    return (
        <section id="skills" ref={ref} className={`py-24 bg-transparent relative z-10 ${animationClass}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    label="Skills"
                    title="What I Work With"
                    subtitle="Technologies and tools I use to bring ideas to life."
                />

                <div className="space-y-12">
                    {skillGroups.map((group) => (
                        <div key={group.category}>
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <span
                                    className={`w-2 h-2 rounded-full ${categoryDotColors[group.category] ?? "bg-zinc-400"}`}
                                />
                                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">
                                    {group.category}
                                </h3>
                            </div>
                            <div className={`grid gap-6 max-w-5xl mx-auto ${
                                group.skills.length === 1 
                                    ? 'grid-cols-1 max-w-sm' 
                                    : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
                            }`}>
                                {group.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="group/card flex flex-col items-center justify-center p-8 rounded-2xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white backdrop-blur-sm hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                                    >
                                        <div className="w-16 h-16 mb-4 flex items-center justify-center group-hover/card:scale-125 group-hover/card:rotate-12 transition-all duration-300">
                                            <FontAwesomeIcon 
                                                icon={iconMap[skill.icon]} 
                                                className="text-5xl text-indigo-400 group-hover/card:text-indigo-300"
                                            />
                                        </div>
                                        <p className="text-base font-bold text-zinc-200 dark:text-zinc-200 light:text-zinc-900 text-center mb-4 group-hover/card:text-indigo-400 transition-colors">
                                            {skill.name}
                                        </p>
                                        <span
                                            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border ${categoryColors[skill.category] ?? "bg-zinc-800 text-zinc-400 border-zinc-700"
                                                }`}
                                        >
                                            {skill.category}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
