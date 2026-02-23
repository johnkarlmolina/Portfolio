interface SectionTitleProps {
    label: string;
    title: string;
    subtitle?: string;
}

export default function SectionTitle({ label, title, subtitle }: SectionTitleProps) {
    return (
        <div className="mb-12 text-center relative z-10">
            <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4">
                {label}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
