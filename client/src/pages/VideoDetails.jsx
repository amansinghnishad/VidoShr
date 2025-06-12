import React from "react";
import { useParams } from "react-router-dom";
import { Avatar, IconButton } from "@mui/material";
import {
  FavoriteRounded,
  PlayArrow,
  Pause,
  VolumeUp,
  Fullscreen,
} from "@mui/icons-material";

const VideoDetails = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Video Player */}
      <div
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: "#000",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <PlayArrow style={{ fontSize: "80px", color: "white" }} />
      </div>

      {/* Video Controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <IconButton>
          <PlayArrow />
        </IconButton>
        <IconButton>
          <VolumeUp />
        </IconButton>
        <div
          style={{
            flex: 1,
            height: "4px",
            backgroundColor: "#ccc",
            borderRadius: "2px",
          }}
        >
          <div
            style={{
              width: "30%",
              height: "100%",
              backgroundColor: "#be1adb",
              borderRadius: "2px",
            }}
          ></div>
        </div>
        <IconButton>
          <Fullscreen />
        </IconButton>
      </div>

      {/* Video Info */}
      <div>
        <h1 style={{ marginBottom: "10px" }}>Sample Video Title</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginBottom: "20px",
          }}
        >
          <Avatar>A</Avatar>
          <div>
            <div style={{ fontWeight: "bold" }}>Channel Name</div>
            <div style={{ fontSize: "14px", opacity: 0.7 }}>
              1.2M subscribers
            </div>
          </div>
          <IconButton style={{ marginLeft: "auto" }}>
            <FavoriteRounded />
          </IconButton>
        </div>

        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
            10,234 views • 2 days ago
          </div>
          <p>
            This is a sample video description. In a real application, this
            would contain the actual video description, tags, and other
            metadata. The video player above would be connected to a real video
            streaming service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
