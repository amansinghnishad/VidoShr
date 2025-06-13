import React from "react";
import { motion } from "framer-motion";
import "../css/DefaultCard.css";

export const DefaultCard = ({ category, index = 0 }) => {
  return (
    <motion.div
      className="default-card"
      style={{ backgroundColor: category.color }}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 17 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="default-card-text"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 + 0.2 }}
        whileHover={{
          scale: 1.05,
          transition: { type: "spring", stiffness: 400, damping: 17 },
        }}
      >
        {category.name}
      </motion.div>
      <motion.img
        className="default-card-img"
        src={category.img}
        alt={`${category.name} content`}
        initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{
          delay: index * 0.1 + 0.3,
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
        whileHover={{
          rotate: 5,
          scale: 1.1,
          transition: { type: "spring", stiffness: 400, damping: 17 },
        }}
      />
    </motion.div>
  );
};
