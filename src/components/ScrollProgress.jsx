import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />;
}

export default ScrollProgress;
