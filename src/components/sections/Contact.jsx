import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then((result) => {
                alert("Message Sent!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => alert("Oops! Something went wrong. Please try again."));
    };

    return (
        <motion.section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
                <motion.h2 
                    variants={itemVariants}
                    className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
                >
                    Get In Touch
                </motion.h2>
                <motion.form 
                    className="space-y-6" 
                    onSubmit={handleSubmit}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="relative">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="Name..."
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                        />
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="example@gmail.com"
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                        />
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative">
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="Your Message..."
                            onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value })
                            }
                        />
                    </motion.div>

                    <motion.button
                        variants={itemVariants}
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </div>
        </motion.section>
    );
};