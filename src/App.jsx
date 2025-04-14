import { useState } from "react";
import { LazyMotion, domAnimation, motion, AnimatePresence } from "framer-motion";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { MobileMenu } from "./components/MobileMenu";
import { Navbar } from "./components/Navbar";
import "./index.css";
import { Home } from "./components/sections/Home.jsx";
import { About } from "./components/sections/About.jsx";
import MyWork from "./components/sections/Mywork.jsx";
import { Contact } from "./components/sections/Contact.jsx";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <LazyMotion features={domAnimation}>
            <AnimatePresence mode="sync">
                {!isLoaded ? (
                    <LoadingScreen key="loading" onComplete={() => setIsLoaded(true)} />
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className="min-h-screen bg-[#000000] text-[#f3f4f6]"
                    >
                        <motion.div
                            initial={false}
                            animate={{ 
                                backgroundColor: menuOpen ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                            
                            <main>
                                <Home />
                                <About />
                                <MyWork />
                                <Contact />
                            </main>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </LazyMotion>
    );
}

export default App;