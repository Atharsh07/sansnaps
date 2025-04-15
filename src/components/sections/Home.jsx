import { motion } from "framer-motion";

export const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
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

    return (
        <motion.section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="text-center z-10 px-4">
                <motion.h1 
                    variants={itemVariants}
                    className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right"
                >
                    Hi, I'm Sanjay
                </motion.h1>

                <motion.p 
                    variants={itemVariants}
                    className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto"
                >
                    I'm a freelance photographer with extensive experience capturing vibrant moments
                    at college and public events, known for creative angles, attention to detail, and
                    storytelling through every frame.
                </motion.p>

                <motion.div 
                    variants={itemVariants}
                    className="flex justify-center space-x-4"
                >
                    <motion.a
                        href="#myworks"
                        className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View My works
                    </motion.a>

                    <motion.a
                        href="#contact"
                        className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Me
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    );
};
