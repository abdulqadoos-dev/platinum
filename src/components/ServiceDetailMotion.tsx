"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0.7, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0.7, y: 22, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

type MotionProps = {
  children: ReactNode;
  className?: string;
};

export function MotionContainer({ children, className }: MotionProps) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({ children, className }: MotionProps) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

export function MotionImage({ children, className }: MotionProps) {
  return (
    <motion.div className={className} variants={imageVariants}>
      {children}
    </motion.div>
  );
}
