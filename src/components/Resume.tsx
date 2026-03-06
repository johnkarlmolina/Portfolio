import SectionTitle from "./SectionTitle";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload, faEye, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function Resume() {
    const { ref, animationClass } = useScrollAnimation('slide-in');

    const handleDownload = () => {
        // Download the resume
        const link = document.createElement('a');
        link.href = '/Molina_Resume.pdf';
        link.download = 'John_Karl_Molina_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleView = () => {
        // Open resume in new tab
        window.open('/Molina_Resume.pdf', '_blank');
    };

    const highlights = [
        "Professional experience in web development",
        "Strong foundation in React, TypeScript, and modern frameworks",
        "Proven track record in full-stack projects",
        "Academic excellence with hands-on technical skills",
    ];

    return (
        <section 
            id="resume" 
            ref={ref} 
            className={`py-24 bg-transparent dark:bg-transparent light:bg-white relative z-10 ${animationClass}`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    label="Resume"
                    title="Download My CV"
                    subtitle="Get a comprehensive overview of my skills, experience, and education."
                />

                <div className="max-w-3xl mx-auto">
                    {/* Main Resume Card */}
                    <div className="bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-50 backdrop-blur-sm border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 rounded-3xl p-8 md:p-12 shadow-2xl">
                        
                        {/* Resume Icon/Visual */}
                        <div className="flex flex-col items-center text-center mb-8">
                            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20">
                                <FontAwesomeIcon icon={faFileDownload} className="text-indigo-400 text-4xl" />
                            </div>
                            <h3 className="font-bold text-white dark:text-white light:text-zinc-900 text-2xl mb-2">
                                John Karl Molina
                            </h3>
                            <p className="text-indigo-400 font-semibold text-base mb-1">
                                Front-End Developer
                            </p>
                            <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm">
                                Information Technology Student
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="mb-8">
                            <h4 className="text-sm font-bold text-zinc-400 dark:text-zinc-400 light:text-zinc-700 uppercase tracking-widest mb-4">
                                Resume Highlights
                            </h4>
                            <div className="grid gap-3">
                                {highlights.map((highlight, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-start gap-3 p-4 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-white border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 rounded-2xl"
                                    >
                                        <div className="w-5 h-5 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-400 text-xs" />
                                        </div>
                                        <p className="text-sm text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed">
                                            {highlight}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleDownload}
                                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-sm transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <FontAwesomeIcon icon={faFileDownload} className="text-lg" />
                                Download Resume
                            </button>
                            <button
                                onClick={handleView}
                                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200 hover:bg-zinc-700 dark:hover:bg-zinc-700 light:hover:bg-zinc-300 text-white dark:text-white light:text-zinc-900 rounded-2xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <FontAwesomeIcon icon={faEye} className="text-lg" />
                                View Online
                            </button>
                        </div>

                        {/* Format Info */}
                        <p className="text-center text-xs text-zinc-500 dark:text-zinc-500 light:text-zinc-400 mt-6">
                            PDF Format • Last Updated: March 2026
                        </p>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
                            Need a different format or have questions?{' '}
                            <a 
                                href="#contact" 
                                className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
                            >
                                Contact me
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
