import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Determine active section
            const sections = navLinks.map((l) => l.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 90) {
                    setActive(`#${sections[i]}`);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setActive(href);
        setMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-zinc-950/80 dark:bg-zinc-950/80 light:bg-white/80 backdrop-blur-lg border-b border-zinc-800 dark:border-zinc-800 light:border-zinc-200 shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Name */}
                    <a
                        href="#home"
                        onClick={() => handleNavClick("#home")}
                        className="font-black text-xl text-white dark:text-white light:text-zinc-900 tracking-tighter hover:text-indigo-400 transition-colors"
                    >
                        JK<span className="text-indigo-500">.</span>Molina
                    </a>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${active === link.href
                                    ? "text-indigo-400 bg-indigo-500/10"
                                    : "text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-900 hover:bg-zinc-800/50 dark:hover:bg-zinc-800/50 light:hover:bg-zinc-100"
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* GitHub Button + Theme Toggle */}
                    <div className="hidden md:flex items-center gap-3">
                        <ThemeToggle />
                        <a
                            href="https://github.com/johnkarlmolina"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-500/20 active:scale-95"
                        >
                            <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                            GitHub
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden p-2 rounded-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:bg-zinc-800 dark:hover:bg-zinc-800 light:hover:bg-zinc-100 transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <FontAwesomeIcon 
                            icon={menuOpen ? faXmark : faBars} 
                            className="w-5 h-5" 
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-zinc-900/95 dark:bg-zinc-900/95 light:bg-white/95 backdrop-blur-md border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-200 px-4 py-6 shadow-2xl">
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className={`px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${active === link.href
                                    ? "text-indigo-400 bg-indigo-500/10"
                                    : "text-zinc-400 dark:text-zinc-400 light:text-zinc-700 hover:bg-zinc-800/50 dark:hover:bg-zinc-800/50 light:hover:bg-zinc-100 hover:text-white dark:hover:text-white light:hover:text-zinc-900"
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="flex items-center gap-3 mt-4">
                            <ThemeToggle />
                            <a
                                href="https://github.com/johnkarlmolina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-indigo-600 text-white text-base font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20"
                            >
                                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
