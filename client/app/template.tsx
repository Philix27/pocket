"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Template(props: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0.5 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      {props.children}
    </motion.div>
  );
}
