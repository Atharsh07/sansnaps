import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { celebrityEvents } from "../../assests/data.js";
import { ImageViewer } from "../ImageViewer";

const MyWork = () => {
    const [selectedImages, setSelectedImages] = useState(null);
    const [selectedName, setSelectedName] = useState("");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 }); // Reduced threshold

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0 },
        visible: {
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
                className="relative min-h-screen py-12 sm:py-20 bg-[#111111] w-full overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-3 sm:px-4">
                    <motion.h2 
                        variants={cardVariants}
                        className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
                    >
                        My Works
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {celebrityEvents.map((celebrity, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="p-3 sm:p-4 md:p-6 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#1a1a1a] flex flex-col"
                                whileHover={{ 
                                    y: -4,
                                    borderColor: "rgba(59, 130, 246, 0.3)",
                                    boxShadow: "0 4px 20px rgba(59, 130, 246, 0.2)"
                                }}
                            >
                                <motion.div 
                                    className="aspect-square mb-3 sm:mb-4 overflow-hidden rounded-lg"
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
                                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#f3f4f6] mb-2 sm:mb-3 text-center">
                                        {celebrity.name}
                                    </h3>
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-3 sm:mb-4">
                                        {celebrity.events.map((event, eventIndex) => (
                                            <motion.span
                                                key={eventIndex}
                                                className="bg-[rgba(59,130,246,0.1)] text-[#60a5fa] py-0.5 sm:py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm"
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
                                    className="w-full py-1.5 sm:py-2 px-4 rounded-lg bg-[rgba(59,130,246,0.1)] text-[#60a5fa] hover:bg-[rgba(59,130,246,0.2)] transition-colors mt-2 sm:mt-4 text-sm sm:text-base cursor-pointer"
                                    whileHover={{ scale: 1.02 }}
                                    type="button"
                                >
                                    View Gallery →
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
            
            <AnimatePresence mode="wait">
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
