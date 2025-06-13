import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./css/App.css";

// Components
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

// Pages
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import DisplayVideo from "./pages/DisplayVideo";
import VideoDetails from "./pages/VideoDetails";

// Theme utilities
import { darkTheme, lightTheme } from "./utils/Themes";
import { useTheme } from "./hooks/useTheme";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  // Create MUI theme based on our custom theme
  const muiTheme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: isDarkMode ? darkTheme.primary : lightTheme.primary,
      },
      background: {
        default: isDarkMode ? darkTheme.bg : lightTheme.bg,
        paper: isDarkMode ? darkTheme.bgLight : lightTheme.bgLight,
      },
      text: {
        primary: isDarkMode ? darkTheme.text_primary : lightTheme.text_primary,
        secondary: isDarkMode
          ? darkTheme.text_secondary
          : lightTheme.text_secondary,
      },
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Router>
        <div
          className={`app-container ${
            isDarkMode ? "dark-theme" : "light-theme"
          } ${!menuOpen ? "sidebar-closed" : ""}`}
        >
          <Sidebar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            darkMode={isDarkMode}
            setDarkMode={toggleTheme}
          />
          <div className="app-frame">
            <NavBar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              darkMode={isDarkMode}
              toggleTheme={toggleTheme}
            />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/search" element={<Search />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/showvideos/:category" element={<DisplayVideo />} />
              <Route path="/video/:id" element={<VideoDetails />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
