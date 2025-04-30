import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}

export const FadeIn = ({ children, direction = "up", delay = 0, className = "" }: FadeInProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        ...directions[direction]
      }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : directions[direction].y,
        x: inView ? 0 : directions[direction].x,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};