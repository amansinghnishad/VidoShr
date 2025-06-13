import React from "react";
import { useParams, Link } from "react-router-dom";
import VideoCards from "../components/VideoCards";
import "../css/DisplayVideo.css";

const DisplayVideo = () => {
  const { category } = useParams();

  return (
    <div className="display-video-main">
      <div className="display-video-header">
        <div className="display-video-breadcrumb">
          <Link to="/">Home</Link>
          <span>•</span>
          <span>
            {category
              ? category.charAt(0).toUpperCase() + category.slice(1)
              : "Videos"}
          </span>
        </div>

        <h1 className="display-video-title">
          {category
            ? category.charAt(0).toUpperCase() + category.slice(1)
            : "All Videos"}
        </h1>

        <p className="display-video-subtitle">
          Discover amazing {category || "videos"} content curated just for you
        </p>

        <div className="display-video-stats">
          <div className="display-video-stat">
            <div className="display-video-stat-number">24</div>
            <div className="display-video-stat-label">Videos</div>
          </div>
          <div className="display-video-stat">
            <div className="display-video-stat-number">12K</div>
            <div className="display-video-stat-label">Views</div>
          </div>
          <div className="display-video-stat">
            <div className="display-video-stat-number">4.8</div>
            <div className="display-video-stat-label">Rating</div>
          </div>
        </div>
      </div>

      <div className="display-video-content">
        {" "}
        <div className="video-cards-container">
          <VideoCards />
          <VideoCards />
          <VideoCards />
          <VideoCards />
        </div>
      </div>
    </div>
  );
};

export default DisplayVideo;
