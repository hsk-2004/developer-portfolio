import React, { useEffect, useRef, useState } from "react";
import "./styles/MusicPlayer.css";

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
          console.error("Playback failed:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={`music-player ${isPlaying ? "playing" : ""}`} onClick={togglePlay}>
      <audio ref={audioRef} src="/nonstop.mp3" loop />
      <div className="sound-bars">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <span className="player-text">{isPlaying ? "NOW PLAYING: NONSTOP" : "CLICK TO VIBE"}</span>
    </div>
  );
};

export default MusicPlayer;
