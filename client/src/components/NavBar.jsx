import {
  PersonRounded,
  Menu as MenuIcon,
  NotificationsRounded,
  LightMode,
  DarkMode,
} from "@mui/icons-material";
import { IconButton, Badge, Avatar } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import "../css/NavBar.css";

const NavBar = ({ menuOpen, setMenuOpen, darkMode, toggleTheme }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return { text: "Good morning", emoji: "🌅" };
    if (hour < 17) return { text: "Good afternoon", emoji: "☀️" };
    return { text: "Good evening", emoji: "🌙" };
  };

  const greeting = getGreeting();
  return (
    <motion.div
      className="navbar"
      initial={{ y: -72 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      <div className="navbar-left">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <IconButton
            className="navbar-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon />
          </IconButton>
        </motion.div>

        <motion.div
          className="navbar-logo-mobile"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          ✨ Vidoshr
        </motion.div>
      </div>

      <div className="navbar-center">
        <motion.div
          className="navbar-greeting"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="greeting-text">{greeting.text}</span>
          <motion.span
            className="greeting-emoji"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            {greeting.emoji}
          </motion.span>
        </motion.div>
      </div>

      <div className="navbar-right">
        <motion.div
          className="navbar-theme-toggle"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <IconButton onClick={toggleTheme} className="theme-toggle-btn">
            <motion.div
              key={darkMode ? "dark" : "light"}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
            >
              {darkMode ? <LightMode /> : <DarkMode />}
            </motion.div>
          </IconButton>
        </motion.div>

        <motion.div
          className="navbar-notifications"
          whileHover={{
            scale: 1.05,
            rotate: [0, -10, 10, -5, 5, 0],
          }}
          transition={{ duration: 0.5 }}
        >
          <Badge badgeContent={3} color="primary">
            <NotificationsRounded />
          </Badge>
        </motion.div>

        <motion.div
          className="navbar-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <PersonRounded />
          <span>Profile</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NavBar;
