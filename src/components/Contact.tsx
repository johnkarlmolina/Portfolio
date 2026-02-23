import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface Errors {
    name?: string;
    email?: string;
    message?: string;
}

function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
    const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<Errors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [isValid, setIsValid] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const nameOk = form.name.trim().length >= 2;
        const emailOk = validateEmail(form.email);
        const messageOk = form.message.trim().length >= 10;
        setIsValid(nameOk && emailOk && messageOk);

        const newErrors: Errors = {};
        if (touched.name && !nameOk) newErrors.name = "Name must be at least 2 characters.";
        if (touched.email && !validateEmail(form.email)) newErrors.email = "Please enter a valid email address.";
        if (touched.message && !messageOk) newErrors.message = "Message must be at least 10 characters.";
        setErrors(newErrors);
    }, [form, touched]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTouched((prev) => ({ ...prev, [e.target.name]: true }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTouched({ name: true, email: true, message: true });
        if (isValid) {
            setSubmitted(true);
            setForm({ name: "", email: "", message: "" });
            setTouched({});
            setTimeout(() => setSubmitted(false), 5000);
        }
    };

    const inputClass = (field: keyof Errors) =>
        `w-full px-4 py-3 rounded-2xl border text-sm text-zinc-200 placeholder-zinc-600 bg-zinc-950 transition-all duration-300 outline-none focus:ring-4 ${errors[field]
            ? "border-red-500/50 focus:ring-red-500/10 focus:border-red-500"
            : "border-zinc-800 focus:ring-indigo-500/10 focus:border-indigo-500"
        }`;

    return (
        <section id="contact" className="py-24 bg-transparent relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    label="Contact"
                    title="Get In Touch"
                    subtitle="Have a project in mind or just want to connect? Send me a message."
                />

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Left: Info */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-bold text-white text-xl mb-4">Let's work together</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                I'm open to freelance opportunities, internships, and collaborations.
                                Whether it's a quick question or a detailed project brief, my inbox is always open.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    icon: "✉️",
                                    label: "Email",
                                    value: "molina.johnkarl.ponteras@gmail.com",
                                    href: "mailto:molina.johnkarl.ponteras@gmail.com",
                                },
                                {
                                    icon: "📱",
                                    label: "Phone",
                                    value: "09064049845",
                                    href: "tel:09064049845",
                                },
                                {
                                    icon: "📍",
                                    label: "Location",
                                    value: "Quezon City, Philippines",
                                    href: undefined,
                                },
                            ].map((item) => (
                                <div key={item.label} className="flex items-start gap-4 p-5 bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-3xl group hover:border-indigo-500/30 transition-all duration-300">
                                    <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform">{item.icon}</span>
                                    <div>
                                        <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">{item.label}</p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-sm font-semibold text-zinc-200 hover:text-indigo-400 transition-colors break-all"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-sm font-semibold text-zinc-200">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}

                            <a
                                href="https://github.com/johnkarlmolina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-5 bg-zinc-900 border border-zinc-800 text-white rounded-3xl hover:bg-zinc-800 transition-all duration-300 shadow-xl shadow-black/20"
                            >
                                <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                                <div>
                                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">GitHub</p>
                                    <p className="text-sm font-bold">github.com/johnkarlmolina</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div>
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center bg-zinc-900/60 backdrop-blur-md border border-emerald-500/30 rounded-3xl p-10 shadow-2xl">
                                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 text-3xl animate-bounce">
                                    ✅
                                </div>
                                <h3 className="font-bold text-white text-xl mb-3">Message received!</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                    Thanks for reaching out. I'll get back to you as soon as possible.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="px-8 py-3 rounded-2xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20"
                                >
                                    Send another
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                noValidate
                                className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 shadow-2xl space-y-6"
                            >
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-bold text-zinc-400 mb-2 ml-1">
                                        Full Name <span className="text-indigo-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="contact-name"
                                        placeholder="Your full name"
                                        value={form.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={inputClass("name")}
                                    />
                                    {errors.name && (
                                        <p className="mt-2 text-xs text-red-500 font-bold ml-1">{errors.name}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-bold text-zinc-400 mb-2 ml-1">
                                        Email Address <span className="text-indigo-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="contact-email"
                                        placeholder="your@email.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={inputClass("email")}
                                    />
                                    {errors.email && (
                                        <p className="mt-2 text-xs text-red-500 font-bold ml-1">{errors.email}</p>
                                    )}
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-bold text-zinc-400 mb-2 ml-1">
                                        Message <span className="text-indigo-500">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        id="contact-message"
                                        rows={5}
                                        placeholder="What would you like to talk about?"
                                        value={form.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`${inputClass("message")} resize-none`}
                                    />
                                    {errors.message && (
                                        <p className="mt-2 text-xs text-red-500 font-bold ml-1">{errors.message}</p>
                                    )}
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={!isValid}
                                    className="w-full py-4 rounded-2xl text-sm font-bold transition-all duration-300 
                    disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed 
                    enabled:bg-indigo-600 enabled:text-white enabled:hover:bg-indigo-500 enabled:shadow-lg enabled:shadow-indigo-500/20 active:scale-[0.98]"
                                >
                                    Send Message
                                </button>

                                <p className="text-center text-xs text-zinc-500 font-medium">
                                    🔒 Direct and secure communication channel.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
