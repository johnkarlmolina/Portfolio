import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

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
    const { ref, animationClass } = useScrollAnimation('push-out');
    
    const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<Errors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const [isValid, setIsValid] = useState(false);
    const [sending, setSending] = useState(false);
    const [sendError, setSendError] = useState<string | null>(null);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setTouched({ name: true, email: true, message: true });
        
        if (!isValid) return;

        setSending(true);
        setSendError(null);

        try {
            // Replace these with your actual EmailJS credentials
            const serviceId = 'service_2wn4q4r';
            const templateId = 'template_lpy015f';
            const publicKey = '5KagbjnSTS6OdbGeC';

            const templateParams = {
                from_name: form.name,
                from_email: form.email,
                message: form.message,
                to_name: 'Florence', // Your name
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            
            // Show success alert
            swal({
                title: "Message Sent!",
                text: "Thanks for reaching out! I'll get back to you as soon as possible.",
                icon: "success",
                buttons: "Close" as any,
            });
            
            setForm({ name: "", email: "", message: "" });
            setTouched({});
        } catch (error) {
            console.error('EmailJS Error:', error);
            
            // Show error alert
            swal({
                title: "Oops!",
                text: "Failed to send message. Please try again or contact me directly at molina.johnkarl.ponteras@gmail.com",
                icon: "error",
                buttons: "Okay" as any,
            });
            
            setSendError('Failed to send message. Please try again or contact me directly.');
        } finally {
            setSending(false);
        }
    };

    const inputClass = (field: keyof Errors) =>
        `w-full px-4 py-3 rounded-2xl border text-sm text-zinc-200 dark:text-zinc-200 light:text-zinc-900 placeholder-zinc-600 dark:placeholder-zinc-600 light:placeholder-zinc-400 bg-zinc-950 dark:bg-zinc-950 light:bg-white transition-all duration-300 outline-none focus:ring-4 ${errors[field]
            ? "border-red-500/50 focus:ring-red-500/10 focus:border-red-500"
            : "border-zinc-800 dark:border-zinc-800 light:border-zinc-300 focus:ring-indigo-500/10 focus:border-indigo-500"
        }`;

    return (
        <section id="contact" ref={ref} className={`py-24 bg-transparent dark:bg-transparent light:bg-white relative z-10 ${animationClass}`}>
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
                            <h3 className="font-bold text-white dark:text-white light:text-zinc-900 text-xl mb-4">Let's work together</h3>
                            <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 text-sm leading-relaxed">
                                I'm open to freelance opportunities, internships, and collaborations.
                                Whether it's a quick question or a detailed project brief, my inbox is always open.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    icon: faEnvelope,
                                    label: "Email",
                                    value: "molina.johnkarl.ponteras@gmail.com",
                                    href: "mailto:molina.johnkarl.ponteras@gmail.com",
                                },
                                {
                                    icon: faPhone,
                                    label: "Phone",
                                    value: "09064049845",
                                    href: "tel:09064049845",
                                },
                                {
                                    icon: faLocationDot,
                                    label: "Location",
                                    value: "Quezon City, Philippines",
                                    href: undefined,
                                },
                            ].map((item) => (
                                <div key={item.label} className="flex items-start gap-4 p-5 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-50 backdrop-blur-sm border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 rounded-3xl group hover:border-indigo-500/30 hover:shadow-lg transition-all duration-300">
                                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <FontAwesomeIcon icon={item.icon} className="text-indigo-400 text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-500 light:text-zinc-400 font-bold uppercase tracking-widest mb-1">{item.label}</p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-sm font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-700 hover:text-indigo-400 transition-colors break-all"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-sm font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-700">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}

                            <a
                                href="https://github.com/johnkarlmolina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-5 bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 text-white dark:text-white light:text-zinc-900 rounded-3xl hover:bg-zinc-800 dark:hover:bg-zinc-800 light:hover:bg-zinc-200 transition-all duration-300 shadow-xl shadow-black/20"
                            >
                                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faGithub} className="text-indigo-400 text-xl" />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-500 light:text-zinc-400 font-bold uppercase tracking-widest">GitHub</p>
                                    <p className="text-sm font-bold">github.com/johnkarlmolina</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div>
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            className="bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-50 backdrop-blur-sm border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 rounded-3xl p-8 shadow-2xl space-y-6"
                        >
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-bold text-zinc-400 dark:text-zinc-400 light:text-zinc-700 mb-2 ml-1">
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
                                    <label className="block text-sm font-bold text-zinc-400 dark:text-zinc-400 light:text-zinc-700 mb-2 ml-1">
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
                                    <label className="block text-sm font-bold text-zinc-400 dark:text-zinc-400 light:text-zinc-700 mb-2 ml-1">
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
                                    disabled={!isValid || sending}
                                    className="w-full py-4 rounded-2xl text-sm font-bold transition-all duration-300 
                    disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed 
                    enabled:bg-indigo-600 enabled:text-white enabled:hover:bg-indigo-500 enabled:shadow-lg enabled:shadow-indigo-500/20 active:scale-[0.98]"
                                >
                                    {sending ? 'Sending...' : 'Send Message'}
                                </button>

                                {sendError && (
                                    <p className="text-center text-sm text-red-500 font-medium">
                                        {sendError}
                                    </p>
                                )}

                                <p className="text-center text-xs text-zinc-500 font-medium">
                                    Direct Message
                                </p>
                            </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
