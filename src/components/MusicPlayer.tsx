import React, { useRef, useState } from "react";
import { smoother } from "./Navbar";
import "./styles/MusicPlayer.css";

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.currentTime = 10;
        audioRef.current.play().catch((err) => {
          console.error("Playback failed:", err);
        });
        // Ensure scroll is unpaused if it was stuck
        if (smoother) smoother.paused(false);
      }
      setIsPlaying(!isPlaying);
      setHasInteracted(true);
    }
  };

  return (
    <div
      className={`music-player ${isPlaying ? "playing" : ""} ${!hasInteracted ? "waiting" : ""}`}
      onClick={togglePlay}
    >
      <audio ref={audioRef} src="/nonstop.mp3" loop />
      <div className="player-glow"></div>
      
      <div className="sound-bars">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="player-content">
        <span className="player-text">
          {isPlaying ? "NOW PLAYING" : "CLICK FOR IMMERSIVE EXPERIENCE"}
        </span>
      </div>

      {!hasInteracted && <span className="prompt-icon">🎧</span>}
    </div>
  );
};

export default MusicPlayer;
