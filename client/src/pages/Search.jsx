import React, { useState } from "react";
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
    <div className="search-main">
      <div className="search-header">
        <h1 className="search-title">🔍 Discover Content</h1>
        <p className="search-subtitle">
          Find videos that nurture your mind and soul
        </p>

        <div className="search-bar-container">
          <div className="search-bar-wrapper">
            <div className="search-bar">
              <SearchOutlinedIcon className="search-icon" />
              <input
                type="text"
                placeholder="Search for mindful videos, meditation, wellness..."
                className="search-input"
                value={searched}
                onChange={(e) => handleChange(e)}
              />
              {isSearching && <div className="search-loading-spinner"></div>}
            </div>

            <div className="search-filters">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className={`filter-chip ${
                    selectedFilter === filter.id ? "active" : ""
                  }`}
                  onClick={() => handleFilterChange(filter.id)}
                >
                  <span className="filter-icon">{filter.icon}</span>
                  <span className="filter-label">{filter.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {searched === "" && (
          <div className="trending-searches">
            <div className="trending-header">
              <TrendingUpIcon className="trending-icon" />
              <span>Trending searches</span>
            </div>
            <div className="trending-tags">
              {trendingSearches.map((search, index) => (
                <button
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
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>{" "}
      {searched === "" ? (
        <div className="search-categories">
          <h2 className="search-heading">✨ Browse Categories</h2>
          <div className="search-browse-all">
            {Category.map((category) => (
              <Link
                to={`/showvideos/${category.name.toLowerCase()}`}
                key={category.name}
                style={{ textDecoration: "none" }}
              >
                <DefaultCard category={category} />
              </Link>
            ))}
          </div>
        </div>
      ) : isSearching ? (
        <div className="search-results-loading">
          <div className="search-results-loading-spinner"></div>
          <div className="search-results-loading-text">
            Searching for "{searched}"...
          </div>
        </div>
      ) : showResults ? (
        <div className="search-results">
          <div className="search-results-header">
            <h2 className="search-results-title">
              Search results for "{searched}"
            </h2>
            <div className="search-results-count">
              Found {filteredResults.length} results
            </div>
          </div>

          {filteredResults.length > 0 ? (
            <div className="video-cards-container">
              {filteredResults.map((result, index) => (
                <VideoCards key={index} data={result} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🌸</div>
              <h3>No results found</h3>
              <p>Try adjusting your filters or search for something else</p>
              <button
                className="clear-search-btn"
                onClick={() => setSearched("")}
              >
                Browse Categories
              </button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
