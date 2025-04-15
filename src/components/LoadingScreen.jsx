import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "San Snaps";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    const getStyledText = () => {
        const momentStart = fullText.indexOf("Sanps");
        const momentEnd = momentStart + "Sanps".length;

        return (
            <>
                {text.slice(0, momentStart)}
                <span className="text-blue-500">{text.slice(momentStart, momentEnd)}</span>
                {text.slice(momentEnd)}
            </>
        );
    };

    return (
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center"
            >
                <motion.div 
                    className="mb-4 text-4xl font-mono font-bold"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    {getStyledText()} <span className="animate-blink ml-1">|</span>
                </motion.div>

                <motion.div 
                    className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div 
                        className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"
                        animate={{ 
                            x: ["0%", "400%"],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
