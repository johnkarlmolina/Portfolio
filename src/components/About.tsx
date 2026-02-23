import SectionTitle from "./SectionTitle";

export default function About() {
    const stats = [
        { value: "1+", label: "Year of Internship" },
        { value: "5+", label: "Projects Built" },
        { value: "10+", label: "Technologies" },
        { value: "2026", label: "Expected Graduate" },
    ];

    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    label="About Me"
                    title="Passionate about great user experiences"
                    subtitle="A glimpse into who I am and what drives me to build for the web."
                />

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text content */}
                    <div>
                        <div className="space-y-4 text-zinc-600 text-base md:text-lg leading-relaxed">
                            <p>
                                Hi, I'm <span className="font-semibold text-zinc-900">John Karl P. Molina</span>, an
                                aspiring Front-End Developer based in <span className="font-medium text-zinc-800">Quezon City, Philippines</span>.
                                I'm currently pursuing a BS in Information Technology at Quezon City University,
                                expected to graduate in 2026.
                            </p>
                            <p>
                                My passion lies in building <span className="font-medium text-indigo-600">clean,
                                    responsive, and intuitive web interfaces</span> that deliver meaningful experiences
                                to users. I take pride in writing structured, maintainable code and translating
                                design concepts into accessible, pixel-perfect realities using modern tools like
                                React and Tailwind CSS.
                            </p>
                            <p>
                                Through my internship at <span className="font-medium text-zinc-800">Novaliches District Hospital</span>,
                                I gained hands-on experience in front-end development and IT support — bridging
                                technical problem-solving with real-world user needs. I'm continually growing my
                                skills in UI/UX design with Figma and expanding into full-stack development.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-8">
                            {["Front-End Dev", "UI/UX", "React", "Responsive Design", "IT Support"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1.5 text-sm font-medium text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-xl"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Stats + Info */}
                    <div className="space-y-6">
                        {/* Stats grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="p-5 bg-zinc-50 border border-zinc-200 rounded-3xl text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                                >
                                    <p className="text-3xl font-extrabold text-indigo-600 mb-1">{stat.value}</p>
                                    <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Contact info card */}
                        <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-3xl space-y-3">
                            <h3 className="font-semibold text-zinc-800 text-sm uppercase tracking-wider mb-4">Quick Info</h3>
                            {[
                                { icon: "📍", label: "Location", value: "Quezon City, Philippines" },
                                { icon: "✉️", label: "Email", value: "molina.johnkarl.ponteras@gmail.com" },
                                { icon: "📱", label: "Phone", value: "09064049845" },
                            ].map((info) => (
                                <div key={info.label} className="flex items-start gap-3">
                                    <span className="text-lg mt-0.5">{info.icon}</span>
                                    <div>
                                        <p className="text-xs text-zinc-400 font-medium uppercase tracking-wide">{info.label}</p>
                                        <p className="text-sm text-zinc-700 font-medium break-all">{info.value}</p>
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
