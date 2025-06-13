import React from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  DashboardRounded,
  SearchRounded,
  FavoriteRounded,
  PersonRounded,
  PlayArrowRounded,
  VideoLibraryRounded,
  TrendingUpRounded,
  HistoryRounded,
  SettingsRounded,
  LogoutRounded,
  CloseRounded,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "../css/Sidebar.css";

const Sidebar = ({ menuOpen, setMenuOpen, darkMode, setDarkMode }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
      document.body.classList.add("sidebar-expanded");
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
      document.body.classList.remove("sidebar-expanded");
    }
  };

  const menuItems = [
    {
      id: "main",
      title: "Main",
      items: [
        {
          name: "Dashboard",
          icon: <DashboardRounded />,
          path: "/",
        },
        {
          name: "Search",
          icon: <SearchRounded />,
          path: "/search",
        },
        {
          name: "Favorites",
          icon: <FavoriteRounded />,
          path: "/favorites",
        },
      ],
    },
    {
      id: "library",
      title: "Library",
      items: [
        {
          name: "Recently Played",
          icon: <HistoryRounded />,
          path: "/recent",
        },
        {
          name: "Trending",
          icon: <TrendingUpRounded />,
          path: "/trending",
        },
        {
          name: "Video Library",
          icon: <VideoLibraryRounded />,
          path: "/library",
        },
      ],
    },
    {
      id: "account",
      title: "Account",
      items: [
        {
          name: "Profile",
          icon: <PersonRounded />,
          path: "/profile",
        },
        {
          name: "Settings",
          icon: <SettingsRounded />,
          path: "/settings",
        },
      ],
    },
  ];
  const handleItemClick = () => {
    // Close sidebar on mobile when item is clicked
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="sidebar-overlay active"
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>{" "}
      {/* Sidebar */}
      <motion.aside
        className={`sidebar ${menuOpen ? "open" : ""} ${
          isHovered ? "expanded" : "collapsed"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ x: isMobile ? -320 : 0 }}
        animate={{
          x: isMobile ? (menuOpen ? 0 : -320) : 0, // Always visible on desktop
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      >
        {" "}
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <motion.div
            className="sidebar-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <PlayArrowRounded className="logo-icon" />
            </motion.div>
            <span className="logo-text">Vidoshr</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <IconButton
              className="sidebar-close-btn"
              onClick={() => setMenuOpen(false)}
            >
              <CloseRounded />
            </IconButton>
          </motion.div>
        </div>
        {/* Sidebar Content */}
        <div className="sidebar-content">
          {menuItems.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              className="sidebar-section"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: sectionIndex * 0.1,
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
            >
              <h3 className="sidebar-section-title">{section.title}</h3>
              <nav className="sidebar-nav">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: sectionIndex * 0.1 + itemIndex * 0.05,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{
                      x: 5,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      },
                    }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `sidebar-nav-item ${isActive ? "active" : ""}`
                      }
                      onClick={handleItemClick}
                    >
                      <motion.span
                        className="nav-item-icon"
                        whileHover={{
                          scale: 1.2,
                          rotate: 5,
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          },
                        }}
                      >
                        {item.icon}
                      </motion.span>
                      <AnimatePresence>
                        {(isHovered || isMobile) && (
                          <motion.span
                            className="nav-item-text"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          ))}
        </div>{" "}
        {/* Sidebar Footer */}
        <motion.div
          className="sidebar-footer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="sidebar-logout-btn"
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 17 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <LogoutRounded />
            </motion.div>
            <AnimatePresence>
              {(isHovered || isMobile) && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  Logout
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
