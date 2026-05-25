import SectionTitle from "./SectionTitle";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    const { ref, animationClass } = useScrollAnimation('slide-in');
    
    const stats = [
        { value: "1+", label: "Year of Internship" },
        { value: "5+", label: "Projects Built" },
        { value: "10+", label: "Technologies" },
        { value: "2026", label: "Expected Graduate" },
    ];

    return (
        <section
            id="about"
            ref={ref}
            className={`py-16 sm:py-20 lg:py-24 bg-zinc-950 light:bg-zinc-50 relative overflow-hidden ${animationClass}`}
        >
            <div className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTitle
                    label="About Me"
                    title="Passionate about great user experiences"
                    subtitle="A glimpse into who I am and what drives me to build for the web."
                />

                <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-start">
                    {/* Text content */}
                    <div>
                        <div className="space-y-5 text-zinc-300 light:text-zinc-700 text-base md:text-lg leading-relaxed text-justify">
                            <p>
                                Hi, I'm <span className="font-semibold text-white light:text-zinc-900">John Karl P. Molina</span>, an
                                aspiring Front-End Developer based in <span className="font-medium text-zinc-200 light:text-zinc-800">Quezon City, Philippines</span>.
                                I'm currently pursuing a BS in Information Technology at Quezon City University,
                                expected to graduate in 2026.
                            </p>
                            <p>
                                My passion lies in building <span className="font-medium text-indigo-300 light:text-indigo-600">clean,
                                    responsive, and intuitive web interfaces</span> that deliver meaningful experiences
                                to users. I take pride in writing structured, maintainable code and translating
                                design concepts into accessible, pixel-perfect realities using modern tools like
                                React and Tailwind CSS.
                            </p>
                            <p>
                                Through my internship at <span className="font-medium text-zinc-100 light:text-zinc-800">Novaliches District Hospital</span>,
                                I gained hands-on experience in front-end development and IT support — bridging
                                technical problem-solving with real-world user needs. I'm continually growing my
                                skills in UI/UX design with Figma and expanding into full-stack development.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-8">
                            {["Front-End Dev", "UI/UX", "React", "Responsive Design", "IT Support"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1.5 text-sm font-medium text-indigo-200 light:text-indigo-700 bg-indigo-500/10 light:bg-indigo-50 border border-indigo-500/20 light:border-indigo-100 rounded-xl"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Stats + Info */}
                    <div className="space-y-6">
                        {/* Stats grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="p-5 bg-zinc-900/60 light:bg-white border border-zinc-800/80 light:border-zinc-200 rounded-3xl text-center shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 transition-all duration-200"
                                >
                                    <p className="text-2xl sm:text-3xl font-extrabold text-indigo-300 light:text-indigo-600 mb-1">{stat.value}</p>
                                    <p className="text-xs font-medium text-zinc-400 light:text-zinc-500 uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Contact info card */}
                        <div className="p-6 bg-zinc-900/60 light:bg-white border border-zinc-800/80 light:border-zinc-200 rounded-3xl space-y-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                            <h3 className="font-semibold text-zinc-200 light:text-zinc-800 text-sm uppercase tracking-wider mb-4">Quick Info</h3>
                            {[
                                { icon: faLocationDot, label: "Location", value: "Quezon City, Philippines" },
                                { icon: faEnvelope, label: "Email", value: "molina.johnkarl.ponteras@gmail.com" },
                                { icon: faPhone, label: "Phone", value: "09064049845" },
                            ].map((info) => (
                                <div key={info.label} className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-indigo-500/15 light:bg-indigo-100 flex items-center justify-center">
                                        <FontAwesomeIcon icon={info.icon} className="text-indigo-300 light:text-indigo-600 text-sm" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">{info.label}</p>
                                        <p className="text-sm text-zinc-200 light:text-zinc-700 font-medium break-words">{info.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
