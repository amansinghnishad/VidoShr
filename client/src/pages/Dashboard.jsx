import React from "react";
import { Link } from "react-router-dom";
import "../css/Dashboard.css";
import VideoCards from "../components/VideoCards";

const Dashboard = () => {
  // Sample peaceful/mindful video data
  const mindfulVideos = [
    {
      title: "Morning Meditation for Inner Peace",
      description:
        "Start your day with gentle mindfulness practices designed to center your mind and cultivate inner tranquility.",
      creator: "Peaceful Mind",
      creatorAvatar: "PM",
      views: "45.2K",
      duration: "10:30",
      uploadTime: "3 days ago",
      thumbnail:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center",
      tags: ["Meditation", "Morning Routine", "Mindfulness"],
    },
    {
      title: "Digital Detox: Reclaiming Your Mind",
      description:
        "Learn how to create healthy boundaries with technology and rediscover the joy of present-moment awareness.",
      creator: "Mindful Tech",
      creatorAvatar: "MT",
      views: "28.7K",
      duration: "15:45",
      uploadTime: "1 week ago",
      thumbnail:
        "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=400&h=250&fit=crop&crop=center",
      tags: ["Digital Wellness", "Self-Care", "Balance"],
    },
    {
      title: "Nature Sounds for Deep Relaxation",
      description:
        "Immerse yourself in calming forest sounds and gentle rain to help reduce stress and anxiety naturally.",
      creator: "Nature's Calm",
      creatorAvatar: "NC",
      views: "92.1K",
      duration: "30:00",
      uploadTime: "5 days ago",
      thumbnail:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
      tags: ["Nature", "Relaxation", "Sleep"],
    },
    {
      title: "Gentle Yoga for Stress Relief",
      description:
        "Flowing movements and mindful breathing to release tension and reconnect with your body's natural wisdom.",
      creator: "Yoga Zen",
      creatorAvatar: "YZ",
      views: "67.3K",
      duration: "20:15",
      uploadTime: "2 days ago",
      thumbnail:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop&crop=center",
      tags: ["Yoga", "Wellness", "Mindful Movement"],
    },
  ];

  return (
    <div className="dashboard-main">
      <div className="dashboard-header">
        <h1 className="dashboard-welcome">Welcome back ✨</h1>
        <p className="dashboard-subtitle">
          Discover content that nurtures your mind and soul
        </p>
      </div>

      <div className="dashboard-filter-container">
        <div className="dashboard-topic">
          🌱 Mindful Moments
          <Link to={`/showvideos/mindful`} style={{ textDecoration: "none" }}>
            <span className="dashboard-span">Explore All →</span>
          </Link>
        </div>{" "}
        <div className="video-cards-container">
          {mindfulVideos.map((video, index) => (
            <VideoCards key={index} data={video} />
          ))}
        </div>
      </div>

      <div className="dashboard-filter-container">
        <div className="dashboard-topic">
          🎵 Peaceful Sounds
          <Link to={`/showvideos/peaceful`} style={{ textDecoration: "none" }}>
            <span className="dashboard-span">Listen More →</span>
          </Link>
        </div>
        <div className="video-cards-container">
          <VideoCards
            data={{
              title: "Ocean Waves & Gentle Rain",
              description:
                "Let the rhythmic sounds of ocean waves and soft rainfall wash away your worries and bring deep relaxation.",
              creator: "Ambient Sounds",
              creatorAvatar: "AS",
              views: "156K",
              duration: "60:00",
              uploadTime: "1 day ago",
              thumbnail:
                "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=250&fit=crop&crop=center",
              tags: ["Ocean", "Rain", "Sleep"],
            }}
            type="audio"
          />
          <VideoCards
            data={{
              title: "Forest Birds & Gentle Breeze",
              description:
                "Experience the serenity of a peaceful forest with birdsong and rustling leaves for natural stress relief.",
              creator: "Nature Vibes",
              creatorAvatar: "NV",
              views: "89K",
              duration: "45:30",
              uploadTime: "4 days ago",
              thumbnail:
                "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=250&fit=crop&crop=center",
              tags: ["Forest", "Birds", "Nature"],
            }}
            type="audio"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
