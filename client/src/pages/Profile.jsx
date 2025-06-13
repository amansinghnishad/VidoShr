import React from "react";
import { Avatar, Button } from "@mui/material";
import { EditRounded, SettingsRounded } from "@mui/icons-material";
import VideoCards from "../components/VideoCards";
import "../css/Profile.css";

const Profile = () => {
  return (
    <div className="profile-main">
      {/* Profile Header */}
      <div className="profile-header">
        <Avatar className="profile-avatar">JD</Avatar>
        <div className="profile-info">
          <h1 className="profile-name">John Doe</h1>
          <p className="profile-bio">
            Content creator and video enthusiast. Sharing amazing videos daily!
          </p>
          <div className="profile-stats">
            <div className="profile-stat">
              <div className="profile-stat-number">124</div>
              <div className="profile-stat-label">Videos</div>
            </div>
            <div className="profile-stat">
              <div className="profile-stat-number">1.2K</div>
              <div className="profile-stat-label">Followers</div>
            </div>
            <div className="profile-stat">
              <div className="profile-stat-number">89</div>
              <div className="profile-stat-label">Following</div>
            </div>{" "}
          </div>
          <div className="profile-actions">
            <button className="profile-btn primary">
              <EditRounded />
              <span>Edit Profile</span>
            </button>
            <button className="profile-btn">
              <SettingsRounded />
              <span>Settings</span>
            </button>
          </div>
        </div>
      </div>

      {/* User's Videos */}
      <div className="profile-content">
        <h2 className="profile-section-title">My Videos</h2>{" "}
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

export default Profile;
