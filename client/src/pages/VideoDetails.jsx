import React from "react";
import { useParams } from "react-router-dom";
import { Avatar, IconButton } from "@mui/material";
import {
  FavoriteRounded,
  PlayArrow,
  Pause,
  VolumeUp,
  Fullscreen,
  ThumbUpRounded,
  ShareRounded,
} from "@mui/icons-material";
import "../css/VideoDetails.css";

const VideoDetails = () => {
  const { id } = useParams();

  return (
    <div className="video-details-main">
      {/* Video Player */}
      <div className="video-player-container">
        <PlayArrow className="video-play-button" />
      </div>
      {/* Video Controls */}
      <div className="video-controls">
        <IconButton>
          <PlayArrow />
        </IconButton>
        <IconButton>
          <VolumeUp />
        </IconButton>
        <div className="video-progress-bar">
          <div className="video-progress-fill"></div>
        </div>
        <IconButton>
          <Fullscreen />
        </IconButton>
      </div>{" "}
      {/* Video Info */}
      <div className="video-info">
        <h1 className="video-title">Sample Video Title</h1>
        <div className="video-meta">
          <div className="video-creator">
            <Avatar className="video-creator-avatar">A</Avatar>
            <div className="video-creator-info">
              <h3>Channel Name</h3>
              <p>1.2M subscribers</p>
            </div>
          </div>
          <div className="video-stats">
            <span>1.5M views</span>
            <span>•</span>
            <span>2 days ago</span>
          </div>
        </div>

        <p className="video-description">
          This is a sample video description that explains what the video is
          about. It provides context and additional information for viewers to
          understand the content better. In a real application, this would
          contain the actual video description, tags, and other metadata.
        </p>

        <div className="video-actions">
          <button className="video-action-btn">
            <ThumbUpRounded />
            <span>Like</span>
          </button>
          <button className="video-action-btn">
            <ShareRounded />
            <span>Share</span>
          </button>
          <button className="video-action-btn">
            <FavoriteRounded />
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
