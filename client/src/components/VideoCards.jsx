import React, { useState } from "react";
import "../css/VideoCards.css";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton, Chip } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const VideoCards = ({ type = "video", data }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Sample data if none provided
  const defaultData = {
    title: "Finding Inner Peace Through Digital Minimalism",
    description:
      "Explore the journey of disconnecting from digital noise to reconnect with your authentic self. Learn practical techniques for creating mindful boundaries with technology while maintaining productivity and genuine connections.",
    creator: "Mindful Vibes",
    creatorAvatar: "MV",
    views: "12.4K",
    duration: "8:42",
    uploadTime: "2 days ago",
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center",
    tags: ["Mindfulness", "Self-Care", "Digital Wellness"],
  };

  const videoData = data || defaultData;
  return (
    <div
      className="video-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="video-card-top">
        <img
          className="video-card-image"
          src={videoData.thumbnail}
          alt={videoData.title}
        />

        {/* Category Badge */}
        {videoData.tags && videoData.tags[0] && (
          <div className="video-card-category">{videoData.tags[0]}</div>
        )}

        {/* Duration Badge */}
        <div className="video-duration">{videoData.duration}</div>

        {/* Favorite Button */}
        <IconButton
          className="video-card-favorite"
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked ? (
            <FavoriteIcon style={{ color: "#EC4899" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>

        {/* Play Overlay */}
        <div className="play-icon">
          {type === "video" ? <PlayArrowIcon /> : <HeadphonesIcon />}
        </div>
      </div>

      <div className="video-card-information">
        {/* Title */}
        <h3 className="video-card-title">{videoData.title}</h3>

        {/* Description */}
        <p className="video-card-description">{videoData.description}</p>

        {/* Creator Info & Stats */}
        <div className="video-card-creator-info">
          <div className="video-card-creator">
            <Avatar
              className="video-card-creator-avatar"
              sx={{ width: 36, height: 36, fontSize: "14px" }}
            >
              {videoData.creatorAvatar}
            </Avatar>
            <div className="video-card-creator-details">
              <span className="video-card-creator-name">
                {videoData.creator}
              </span>
              <span className="video-card-upload-time">
                {videoData.uploadTime}
              </span>
            </div>
          </div>

          <div className="video-card-stats">
            <div className="video-card-views">
              <VisibilityIcon style={{ width: "16px", height: "16px" }} />
              <span>{videoData.views}</span>
            </div>
            <div className="video-card-rating">⭐ 4.8</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
