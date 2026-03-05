export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-transparent dark:bg-transparent light:bg-white pt-16 relative z-10"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Availability badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm font-medium text-emerald-400 mb-8 self-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available for opportunities
                </div>

                {/* Name */}
                <h1 className="text-5xl md:text-7xl font-extrabold text-white dark:text-white light:text-zinc-900 mb-4 leading-tight tracking-tight">
                    John Karl P.{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                        Molina
                    </span>
                </h1>

                {/* Role */}
                <p className="text-xl md:text-2xl font-semibold text-zinc-300 dark:text-zinc-300 light:text-zinc-700 mb-6">
                    Front-End Developer &amp; UI Enthusiast
                </p>

                {/* Summary */}
                <p className="text-base md:text-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-10">
                    I craft clean, responsive, and visually engaging web interfaces with a focus on
                    user experience. Passionate about modern web technologies, React, and translating
                    design concepts into pixel-perfect, accessible code.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    <a
                        href="#projects"
                        className="w-full sm:w-auto px-7 py-3.5 bg-indigo-600 text-white font-semibold rounded-2xl hover:bg-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 hover:-translate-y-0.5 text-sm"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="w-full sm:w-auto px-7 py-3.5 bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 text-zinc-100 dark:text-zinc-100 light:text-zinc-900 font-semibold rounded-2xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 hover:border-indigo-500/50 hover:text-indigo-400 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-sm"
                    >
                        Contact Me
                    </a>
                    <a
                        href="https://github.com/johnkarlmolina"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 text-white dark:text-white light:text-zinc-900 font-semibold rounded-2xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 hover:bg-zinc-800 dark:hover:bg-zinc-800 light:hover:bg-zinc-200 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-sm"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        GitHub Profile
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="mt-20 flex flex-col items-center gap-2 text-zinc-500 dark:text-zinc-500 light:text-zinc-400 animate-bounce">
                    <span className="text-xs font-medium tracking-widest uppercase">Scroll down</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
