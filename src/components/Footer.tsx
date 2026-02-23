export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-transparent text-white py-12 border-t border-zinc-800 relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Name/logo */}
                    <div className="text-center md:text-left">
                        <p className="font-black text-xl tracking-tighter">
                            JK<span className="text-indigo-500">.</span>Molina
                        </p>
                        <p className="text-zinc-500 text-sm mt-1">Front-End Developer · Quezon City, PH</p>
                    </div>

                    {/* Nav links */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-zinc-400 text-sm font-semibold">
                        {["home", "about", "experience", "skills", "projects", "education", "contact"].map(
                            (item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    className="capitalize hover:text-white transition-colors"
                                >
                                    {item}
                                </a>
                            )
                        )}
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/johnkarlmolina"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500/30 transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                        </a>
                        <a
                            href="mailto:molina.johnkarl.ponteras@gmail.com"
                            aria-label="Email"
                            className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500/30 transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="border-t border-zinc-900/50 mt-10 pt-8 text-center">
                    <p className="text-zinc-500 text-xs font-medium uppercase tracking-[0.2em]">
                        © {currentYear} John Karl P. Molina. Built for Excellence.
                    </p>
                </div>
            </div>
        </footer>
    );
}
