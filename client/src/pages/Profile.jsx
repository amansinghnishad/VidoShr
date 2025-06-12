import React from "react";
import { Avatar, Button } from "@mui/material";
import { EditRounded, SettingsRounded } from "@mui/icons-material";
import VideoCards from "../components/VideoCards";

const Profile = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Profile Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "30px",
          padding: "20px",
          backgroundColor: "rgba(255,255,255,0.05)",
          borderRadius: "12px",
        }}
      >
        <Avatar style={{ width: "120px", height: "120px", fontSize: "48px" }}>
          JD
        </Avatar>
        <div style={{ flex: 1 }}>
          <h1 style={{ margin: "0 0 10px 0" }}>John Doe</h1>
          <p style={{ margin: "0 0 15px 0", opacity: 0.7 }}>
            Content creator and video enthusiast. Sharing amazing videos daily!
          </p>
          <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
            <div>
              <div style={{ fontWeight: "bold", fontSize: "18px" }}>124</div>
              <div style={{ fontSize: "14px", opacity: 0.7 }}>Videos</div>
            </div>
            <div>
              <div style={{ fontWeight: "bold", fontSize: "18px" }}>1.2K</div>
              <div style={{ fontSize: "14px", opacity: 0.7 }}>Followers</div>
            </div>
            <div>
              <div style={{ fontWeight: "bold", fontSize: "18px" }}>89</div>
              <div style={{ fontSize: "14px", opacity: 0.7 }}>Following</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              variant="contained"
              startIcon={<EditRounded />}
              style={{ backgroundColor: "#be1adb" }}
            >
              Edit Profile
            </Button>
            <Button variant="outlined" startIcon={<SettingsRounded />}>
              Settings
            </Button>
          </div>
        </div>
      </div>

      {/* User's Videos */}
      <div>
        <h2 style={{ marginBottom: "20px" }}>My Videos</h2>{" "}
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
