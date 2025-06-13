import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/Search.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Category } from "../utils/Data.js";
import { DefaultCard } from "../components/DefaultCard.jsx";
import VideoCards from "../components/VideoCards";
import { Link } from "react-router-dom";

const Search = () => {
  const [searched, setSearched] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleChange = async (e) => {
    setSearched(e.target.value);
    if (e.target.value.length > 0) {
      setIsSearching(true);
      setShowResults(false);
      // Simulate search delay
      setTimeout(() => {
        setIsSearching(false);
        setShowResults(true);
      }, 800);
    } else {
      setShowResults(false);
    }
  };

  const handleFilterChange = (filterId) => {
    setSelectedFilter(filterId);
    // If there's an active search, trigger a brief loading animation
    if (searched.length > 0) {
      setIsSearching(true);
      setTimeout(() => {
        setIsSearching(false);
        setShowResults(true);
      }, 300);
    }
  };

  const filters = [
    { id: "all", label: "All Content", icon: "🔍" },
    { id: "videos", label: "Videos", icon: "🎥" },
    { id: "audio", label: "Audio", icon: "🎵" },
    { id: "meditation", label: "Meditation", icon: "🧘" },
    { id: "wellness", label: "Wellness", icon: "🌿" },
  ];

  const trendingSearches = [
    "Morning meditation",
    "Stress relief",
    "Sleep sounds",
    "Mindful breathing",
    "Yoga flow",
    "Nature sounds",
    "Anxiety relief",
    "Self-care routine",
  ];

  const searchResults = [
    {
      title: "Guided Morning Meditation",
      description:
        "Start your day with peaceful awareness and positive intentions. This gentle meditation helps center your mind and set positive intentions for the day ahead.",
      creator: "Mindful Mornings",
      creatorAvatar: "MM",
      views: "24.5K",
      duration: "12:30",
      uploadTime: "1 day ago",
      thumbnail:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center",
      tags: ["Meditation", "Morning", "Mindfulness"],
    },
    {
      title: "Deep Sleep Meditation",
      description:
        "Peaceful journey into restful sleep with calming guidance. Let go of the day's stress and drift into deep, restorative sleep.",
      creator: "Sleep Sanctuary",
      creatorAvatar: "SS",
      views: "89.2K",
      duration: "45:00",
      uploadTime: "3 days ago",
      thumbnail:
        "https://images.unsplash.com/photo-1520716170289-c22b4c9c4bd9?w=400&h=250&fit=crop&crop=center",
      tags: ["Sleep", "Relaxation", "Night"],
    },
    {
      title: "Yoga Flow for Beginners",
      description:
        "Gentle yoga sequence perfect for those new to yoga practice. Build strength, flexibility, and mindfulness in this beginner-friendly flow.",
      creator: "Zen Yoga Studio",
      creatorAvatar: "ZY",
      views: "156.3K",
      duration: "25:15",
      uploadTime: "5 days ago",
      thumbnail:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop&crop=center",
      tags: ["Yoga", "Beginner", "Flexibility"],
    },
    {
      title: "Stress Relief Breathing Techniques",
      description:
        "Quick and effective breathing exercises to manage stress and anxiety. Perfect for busy professionals seeking instant calm.",
      creator: "Breathe Easy",
      creatorAvatar: "BE",
      views: "67.8K",
      duration: "8:30",
      uploadTime: "1 week ago",
      thumbnail:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center",
      tags: ["Breathing", "Stress Relief", "Wellness"],
    },
    {
      title: "Nature Sounds for Focus",
      description:
        "Calming nature soundscape featuring gentle rain, forest sounds, and soft bird songs. Perfect for studying, working, or meditation.",
      creator: "Nature Sounds Co",
      creatorAvatar: "NS",
      views: "203.7K",
      duration: "2:15:30",
      uploadTime: "2 weeks ago",
      thumbnail:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
      tags: ["Nature", "Focus", "Ambient"],
    },
    {
      title: "Mindful Eating Practice",
      description:
        "Transform your relationship with food through mindful eating techniques. Learn to savor each bite and develop a healthier relationship with nutrition.",
      creator: "Mindful Nutrition",
      creatorAvatar: "MN",
      views: "43.2K",
      duration: "18:45",
      uploadTime: "3 weeks ago",
      thumbnail:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop&crop=center",
      tags: ["Mindfulness", "Nutrition", "Health"],
    },
    {
      title: "Evening Wind Down Ritual",
      description:
        "Create a peaceful transition from day to night with this calming evening routine. Perfect for releasing stress and preparing for restful sleep.",
      creator: "Evening Calm",
      creatorAvatar: "EC",
      views: "78.9K",
      duration: "20:15",
      uploadTime: "4 days ago",
      thumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center",
      tags: ["Evening", "Ritual", "Relaxation"],
    },
    {
      title: "Chakra Balancing Meditation",
      description:
        "Align and balance your seven chakras with this comprehensive guided meditation. Restore energy flow and inner harmony.",
      creator: "Chakra Harmony",
      creatorAvatar: "CH",
      views: "92.4K",
      duration: "35:20",
      uploadTime: "6 days ago",
      thumbnail:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=250&fit=crop&crop=center",
      tags: ["Chakra", "Energy", "Meditation"],
    },
  ];
  const getFilteredResults = () => {
    if (selectedFilter === "all") return searchResults;

    const filterMap = {
      videos: ["Yoga", "Meditation", "Mindfulness", "Chakra"],
      audio: ["Nature", "Ambient", "Sleep", "Focus"],
      meditation: ["Meditation", "Mindfulness", "Breathing", "Chakra"],
      wellness: ["Wellness", "Health", "Nutrition", "Stress Relief"],
    };

    const filterTags = filterMap[selectedFilter] || [];
    return searchResults.filter((result) =>
      result.tags.some((tag) => filterTags.includes(tag))
    );
  };

  const filteredResults = getFilteredResults();
  return (
    <motion.div
      className="search-main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="search-header">
        <motion.h1
          className="search-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          🔍 Discover Content
        </motion.h1>
        <motion.p
          className="search-subtitle"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Find videos that nurture your mind and soul
        </motion.p>

        <motion.div
          className="search-bar-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <div className="search-bar-wrapper">
            <motion.div
              className="search-bar"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <SearchOutlinedIcon className="search-icon" />
              <input
                type="text"
                placeholder="Search for mindful videos, meditation, wellness..."
                className="search-input"
                value={searched}
                onChange={(e) => handleChange(e)}
              />
              <AnimatePresence>
                {isSearching && (
                  <motion.div
                    className="search-loading-spinner"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>

            <div className="search-filters">
              {filters.map((filter, index) => (
                <motion.button
                  key={filter.id}
                  className={`filter-chip ${
                    selectedFilter === filter.id ? "active" : ""
                  }`}
                  onClick={() => handleFilterChange(filter.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="filter-icon">{filter.icon}</span>
                  <span className="filter-label">{filter.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {searched === "" && (
            <motion.div
              className="trending-searches"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="trending-header"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <TrendingUpIcon className="trending-icon" />
                <span>Trending searches</span>
              </motion.div>
              <div className="trending-tags">
                {trendingSearches.map((search, index) => (
                  <motion.button
                    key={index}
                    className="trending-tag"
                    onClick={() => {
                      setSearched(search);
                      setIsSearching(true);
                      setShowResults(false);
                      setTimeout(() => {
                        setIsSearching(false);
                        setShowResults(true);
                      }, 600);
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.7 + index * 0.05,
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "var(--primary)",
                      color: "white",
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {search}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>{" "}
      {searched === "" ? (
        <motion.div
          className="search-categories"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.h2
            className="search-heading"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            ✨ Browse Categories
          </motion.h2>
          <div className="search-browse-all">
            {Category.map((category, index) => (
              <Link
                to={`/showvideos/${category.name.toLowerCase()}`}
                key={category.name}
                style={{ textDecoration: "none" }}
              >
                <DefaultCard category={category} index={index} />
              </Link>
            ))}
          </div>
        </motion.div>
      ) : isSearching ? (
        <motion.div
          className="search-results-loading"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          <motion.div
            className="search-results-loading-spinner"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="search-results-loading-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Searching for "{searched}"...
          </motion.div>
        </motion.div>
      ) : showResults ? (
        <motion.div
          className="search-results"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div
            className="search-results-header"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="search-results-title">
              Search results for "{searched}"
            </h2>
            <motion.div
              className="search-results-count"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Found {filteredResults.length} results
            </motion.div>
          </motion.div>

          {filteredResults.length > 0 ? (
            <motion.div
              className="video-cards-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {filteredResults.map((result, index) => (
                <VideoCards key={index} data={result} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="no-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="no-results-icon"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🌸
              </motion.div>
              <h3>No results found</h3>
              <p>Try adjusting your filters or search for something else</p>
              <motion.button
                className="clear-search-btn"
                onClick={() => setSearched("")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Categories
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      ) : null}
    </motion.div>
  );
};

export default Search;
