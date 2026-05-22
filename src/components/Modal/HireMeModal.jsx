"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HiX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { sendEmail } from "@/components/EmailService/emailService";
import toast from "react-hot-toast";

const WHATSAPP_NUMBER = "8801721821288";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function HireMeModal({ isOpen, onClose }) {
    const [form, setForm] = useState({ email: "", message: "" });
    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    useEffect(() => {
        const handler = (e) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
            await sendEmail({
                name: "Hire Me",
                email: form.email,
                subject: "Hire Me Request",
                message: form.message,
            });
            setStatus("success");
            setForm({ email: "", message: "" });
            toast.success("Message sent! I'll get back to you soon.");
        } catch (err) {
            console.error("EmailJS Error:", err?.status, err?.text);
            setStatus("error");
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="fixed inset-0 z-[101] flex items-start sm:items-center justify-center p-4 pt-20 sm:pt-4"
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div
                            className="bg-[#0d1b2e] border border-slate-700 rounded-2xl w-full max-w-md shadow-2xl p-6 sm:p-8 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-xl"
                            >
                                <HiX />
                            </button>

                            <h2 className="text-white text-xl sm:text-2xl font-bold mb-1">Hire Me</h2>
                            <p className="text-gray-400 text-sm mb-6">Send me a message and I'll get back to you soon.</p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="you@example.com"
                                        className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        placeholder="Tell me about your project..."
                                        className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg transition-colors disabled:opacity-60"
                                >
                                    {status === "sending" ? "Sending..." : "Send Message"}
                                </button>
                                {status === "success" && <p className="text-green-400 text-sm text-center">Message sent successfully!</p>}
                                {status === "error" && <p className="text-red-400 text-sm text-center">Something went wrong. Try again.</p>}
                            </form>

                            <div className="flex items-center gap-3 my-5">
                                <div className="flex-1 h-px bg-slate-700" />
                                <span className="text-gray-500 text-sm">Or</span>
                                <div className="flex-1 h-px bg-slate-700" />
                            </div>

                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-lg transition-colors"
                            >
                                <FaWhatsapp className="text-xl" />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
