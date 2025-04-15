import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { FullImageViewer } from "./FullImageViewer";

export const ImageViewer = ({ images, isOpen, onClose, name }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    if (!isOpen) return null;

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    className="bg-[#1a1a1a] p-6 rounded-xl max-w-[90vw] w-full max-h-[90vh] overflow-y-auto relative"
                    onClick={e => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
                    >
                        <IoClose size={24} />
                    </button>
                    <h3 className="text-2xl font-bold mb-6 text-[#f3f4f6] pr-8">{name}'s Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="aspect-square relative group cursor-pointer"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={img}
                                    alt={`${name} photo ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {selectedImage && (
                    <FullImageViewer
                        image={selectedImage}
                        onClose={() => setSelectedImage(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};