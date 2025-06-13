import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/VideoCards.css";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton, Chip } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const VideoCards = ({ type = "video", data, index = 0 }) => {
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
    <motion.div
      className="video-card"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      whileHover={{
        y: -5,
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 17 },
      }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="video-card-top">
        <motion.img
          className="video-card-image"
          src={videoData.thumbnail}
          alt={videoData.title}
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 17 },
          }}
        />

        {/* Category Badge */}
        {videoData.tags && videoData.tags[0] && (
          <motion.div
            className="video-card-category"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {videoData.tags[0]}
          </motion.div>
        )}

        {/* Duration Badge */}
        <motion.div
          className="video-duration"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {videoData.duration}
        </motion.div>

        {/* Favorite Button */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <IconButton
            className="video-card-favorite"
            onClick={() => setIsLiked(!isLiked)}
          >
            <AnimatePresence mode="wait">
              {isLiked ? (
                <motion.div
                  key="liked"
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  exit={{ rotate: 180, scale: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <FavoriteIcon style={{ color: "#FE7743" }} />
                </motion.div>
              ) : (
                <motion.div
                  key="not-liked"
                  initial={{ rotate: 180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  exit={{ rotate: -180, scale: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <FavoriteBorderIcon />
                </motion.div>
              )}
            </AnimatePresence>
          </IconButton>
        </motion.div>

        {/* Play Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="play-icon"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
            >
              {type === "video" ? <PlayArrowIcon /> : <HeadphonesIcon />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>{" "}
      <div className="video-card-information">
        {/* Title */}
        <motion.h3
          className="video-card-title"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          {videoData.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="video-card-description"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {videoData.description}
        </motion.p>

        {/* Creator Info & Stats */}
        <motion.div
          className="video-card-creator-info"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.6 }}
        >
          <div className="video-card-creator">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Avatar
                className="video-card-creator-avatar"
                sx={{ width: 36, height: 36, fontSize: "14px" }}
              >
                {videoData.creatorAvatar}
              </Avatar>
            </motion.div>
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
            <motion.div
              className="video-card-views"
              whileHover={{ scale: 1.05 }}
            >
              <VisibilityIcon style={{ width: "16px", height: "16px" }} />
              <span>{videoData.views}</span>
            </motion.div>
            <motion.div
              className="video-card-rating"
              whileHover={{ scale: 1.05 }}
            >
              ⭐ 4.8
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VideoCards;
