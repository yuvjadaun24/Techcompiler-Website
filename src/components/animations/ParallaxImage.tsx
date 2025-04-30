import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  className?: string;
}

export const ParallaxImage = ({ src, className = "" }: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className="w-full h-full bg-cover bg-center"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="w-full h-full bg-cover bg-center transform scale-110"
          style={{ backgroundImage: `url(${src})` }}
        />
      </motion.div>
    </div>
  );
};