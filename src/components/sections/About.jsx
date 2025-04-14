import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaInstagram } from "react-icons/fa";

export const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const photoSkills = [
        "Event Photography",
        "Portraits",
        "Photo Editing",
        "Lightroom",
        "Photoshop",
        "Candid Shots",
        "Street Photography",
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1,
            y: 0,
            transition: { 
                duration: 0.5,
                staggerChildren: 0.2 
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.section
            ref={ref}
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className="max-w-3xl mx-auto px-4">
                <motion.h2 
                    variants={itemVariants}
                    className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
                >
                    About Me
                </motion.h2>

                <motion.div 
                    variants={itemVariants}
                    className="rounded-xl p-8 border-[rgba(255,255,255,0.1)] border bg-[#1a1a1a]"
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                    <motion.p 
                        variants={itemVariants}
                        className="text-[#d1d5db] mb-6 text-center"
                    >
                        I'm a passionate professional photographer capturing vibrant moments at college and public events, delivering memories with creativity and precision.
                    </motion.p>

                    <div className="flex flex-col-reverse md:flex-row gap-6 items-center md:items-start justify-between">
                        <motion.div 
                            variants={itemVariants}
                            className="rounded-xl p-6 transition-all w-full md:w-1/2"
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        >
                            <h3 className="text-xl font-bold mb-4 text-[#f3f4f6]">Photography Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {photoSkills.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        variants={itemVariants}
                                        className="bg-[rgba(59,130,246,0.1)] text-[#60a5fa] py-1 px-3 rounded-full text-sm"
                                        whileHover={{ 
                                            scale: 1.05,
                                            backgroundColor: "rgba(59, 130, 246, 0.2)"
                                        }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div 
                            variants={itemVariants}
                            className="rounded-xl p-6 transition-all flex flex-col items-center w-full md:w-1/2"
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        >
                            <motion.img
                                variants={itemVariants}
                                src="/sanjay.jpg"
                                alt="My portrait"
                                className="w-60 h-60 rounded-full object-cover border border-[rgba(255,255,255,0.2)] shadow-lg mb-4"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.a
                                href="https://www.instagram.com/its_sxnjxy._/#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-[#E1306C] hover:text-[#F77737] transition-colors mt-2"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaInstagram className="text-2xl" />
                                <span className="font-medium">Follow on Instagram</span>
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};
