import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { celebrityEvents } from "../../assests/data.js";
import { ImageViewer } from "../ImageViewer";

const MyWork = () => {
    const [selectedImages, setSelectedImages] = useState(null);
    const [selectedName, setSelectedName] = useState("");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.3 }
        }
    };

    const handleViewClick = (celebrity) => {
        setSelectedName(celebrity.name);
        setSelectedImages(celebrity.gallery);
    };

    return (
        <>
            <motion.section
                ref={ref}
                id="myworks"
                className="min-h-screen py-20 bg-[#111111]"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2 
                        variants={cardVariants}
                        className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
                    >
                        My Works
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {celebrityEvents.map((celebrity, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="p-4 md:p-6 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#1a1a1a] flex flex-col"
                                whileHover={{ 
                                    y: -4,
                                    borderColor: "rgba(59, 130, 246, 0.3)",
                                    boxShadow: "0 4px 20px rgba(59, 130, 246, 0.2)"
                                }}
                            >
                                <motion.div 
                                    className="aspect-square mb-4 overflow-hidden rounded-lg"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img
                                        src={celebrity.image}
                                        alt={celebrity.name}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </motion.div>
                                <div className="flex-grow">
                                    <h3 className="text-lg md:text-xl font-semibold text-[#f3f4f6] mb-3 text-center">
                                        {celebrity.name}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                                        {celebrity.events.map((event, eventIndex) => (
                                            <motion.span
                                                key={eventIndex}
                                                className="bg-[rgba(59,130,246,0.1)] text-[#60a5fa] py-1 px-3 rounded-full text-sm"
                                                whileHover={{ 
                                                    scale: 1.05,
                                                    backgroundColor: "rgba(59, 130, 246, 0.2)"
                                                }}
                                            >
                                                {event}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                                <motion.button 
                                    onClick={() => handleViewClick(celebrity)}
                                    className="w-full py-2 px-4 rounded-lg bg-[rgba(59,130,246,0.1)] text-[#60a5fa] hover:bg-[rgba(59,130,246,0.2)] transition-colors mt-4"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    View Gallery →
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
            
            <AnimatePresence>
                {selectedImages && (
                    <ImageViewer
                        images={selectedImages}
                        isOpen={!!selectedImages}
                        onClose={() => {
                            setSelectedImages(null);
                            setSelectedName("");
                        }}
                        name={selectedName}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default MyWork;
