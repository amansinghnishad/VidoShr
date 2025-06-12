import {
  PersonRounded,
  Menu as MenuIcon,
  NotificationsRounded,
} from "@mui/icons-material";
import { IconButton, Badge, Avatar } from "@mui/material";
import React from "react";
import "../css/NavBar.css";

const NavBar = ({ menuOpen, setMenuOpen }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return { text: "Good morning", emoji: "🌅" };
    if (hour < 17) return { text: "Good afternoon", emoji: "☀️" };
    return { text: "Good evening", emoji: "🌙" };
  };

  const greeting = getGreeting();

  return (
    <div className="navbar">
      <div className="navbar-left">
        <IconButton
          className="navbar-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MenuIcon />
        </IconButton>

        <div className="navbar-logo-mobile">✨ Vidoshr</div>
      </div>

      <div className="navbar-center">
        <div className="navbar-greeting">
          <span className="greeting-text">{greeting.text}</span>
          <span className="greeting-emoji">{greeting.emoji}</span>
        </div>
      </div>

      <div className="navbar-right">
        <div className="navbar-notifications">
          <Badge badgeContent={3} color="secondary">
            <NotificationsRounded />
          </Badge>
        </div>

        <div className="navbar-button">
          <PersonRounded />
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
