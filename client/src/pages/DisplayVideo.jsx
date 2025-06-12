import React from "react";
import { useParams } from "react-router-dom";
import VideoCards from "../components/VideoCards";
import "../css/Dashboard.css";

const DisplayVideo = () => {
  const { category } = useParams();

  return (
    <div className="dashboard-main">
      <div className="dashboard-filter-container">
        <div className="dashboard-topic">
          {category
            ? category.charAt(0).toUpperCase() + category.slice(1)
            : "Videos"}
        </div>{" "}
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
