import React from "react";
import VideoCards from "../components/VideoCards";
import "../css/Favorites.css";

const Favorites = () => {
  // Sample favorite videos data
  const favoriteVideos = [
    {
      title: "Daily Gratitude Practice",
      description:
        "Transform your mindset with this simple yet powerful gratitude meditation that takes just 5 minutes of your day.",
      creator: "Grateful Heart",
      creatorAvatar: "GH",
      views: "34.8K",
      duration: "5:20",
      uploadTime: "1 week ago",
      thumbnail:
        "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=250&fit=crop&crop=center",
      tags: ["Gratitude", "Daily Practice", "Mindfulness"],
    },
    {
      title: "Breathing Techniques for Anxiety",
      description:
        "Learn evidence-based breathing exercises that can help calm your nervous system and reduce anxiety in just minutes.",
      creator: "Calm Breath",
      creatorAvatar: "CB",
      views: "78.2K",
      duration: "12:15",
      uploadTime: "4 days ago",
      thumbnail:
        "https://images.unsplash.com/photo-1515942661900-82b16a3ba71c?w=400&h=250&fit=crop&crop=center",
      tags: ["Breathing", "Anxiety Relief", "Wellness"],
    },
    {
      title: "Mindful Walking in Nature",
      description:
        "Discover how to turn a simple walk into a moving meditation that connects you deeply with the natural world.",
      creator: "Nature Walker",
      creatorAvatar: "NW",
      views: "52.6K",
      duration: "18:30",
      uploadTime: "6 days ago",
      thumbnail:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop&crop=center",
      tags: ["Walking", "Nature", "Meditation"],
    },
    {
      title: "Evening Wind-Down Ritual",
      description:
        "Create a peaceful transition from day to night with this gentle routine designed to promote restful sleep.",
      creator: "Sleep Sanctuary",
      creatorAvatar: "SS",
      views: "41.9K",
      duration: "25:45",
      uploadTime: "2 days ago",
      thumbnail:
        "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400&h=250&fit=crop&crop=center",
      tags: ["Sleep", "Evening Routine", "Relaxation"],
    },
  ];

  return (
    <div className="favorites-container">
      <div className="favorites-header">
        <div className="favorites-topic">💝 Your Favorites</div>
        <p className="favorites-subtitle">
          Your curated collection of peaceful content
        </p>
      </div>{" "}
      <div className="video-cards-container">
        {favoriteVideos.map((video, index) => (
          <VideoCards key={index} data={video} />
        ))}
      </div>
      {favoriteVideos.length === 0 && (
        <div className="empty-favorites">
          <div className="empty-icon">💫</div>
          <h3>No favorites yet</h3>
          <p>
            Start adding videos to your favorites by clicking the heart icon
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
