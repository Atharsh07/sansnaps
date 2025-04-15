import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

export const FullImageViewer = ({ image, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-2"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
            >
                <IoClose size={28} />
            </button>
            <img
                src={image}
                alt="Full size"
                className="max-w-full max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
            />
        </motion.div>
    );
};