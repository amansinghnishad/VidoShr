import React from "react";
import { NavLink } from "react-router-dom";
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

  const handleMouseEnter = () => {
    setIsHovered(true);
    document.body.classList.add("sidebar-expanded");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    document.body.classList.remove("sidebar-expanded");
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
    if (window.innerWidth <= 768) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`sidebar-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />{" "}
      {/* Sidebar */}
      <aside
        className={`sidebar ${menuOpen ? "open" : ""} ${
          isHovered ? "expanded" : "collapsed"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <PlayArrowRounded className="logo-icon" />
            <span className="logo-text">Vidoshr</span>
          </div>
          <IconButton
            className="sidebar-close-btn"
            onClick={() => setMenuOpen(false)}
          >
            <CloseRounded />
          </IconButton>
        </div>

        {/* Sidebar Content */}
        <div className="sidebar-content">
          {menuItems.map((section) => (
            <div key={section.id} className="sidebar-section">
              <h3 className="sidebar-section-title">{section.title}</h3>
              <nav className="sidebar-nav">
                {section.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `sidebar-nav-item ${isActive ? "active" : ""}`
                    }
                    onClick={handleItemClick}
                  >
                    <span className="nav-item-icon">{item.icon}</span>
                    <span className="nav-item-text">{item.name}</span>
                  </NavLink>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Sidebar Footer */}
        <div className="sidebar-footer">
          <button className="sidebar-logout-btn">
            <LogoutRounded />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
