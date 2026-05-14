import React, { useRef, useState } from "react";
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
      }
      setIsPlaying(!isPlaying);
      setHasInteracted(true);
    }
  };

  return (
    <>
      {/* Floating prompt — only shows before user has interacted */}
      {!hasInteracted && (
        <div className="music-prompt" onClick={togglePlay}>
          <span className="prompt-icon">🎧</span>
          <span className="prompt-text">Click for an immersive experience</span>
        </div>
      )}

      {/* Main player button */}
      <div
        className={`music-player ${isPlaying ? "playing" : ""}`}
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
        <span className="player-text">
          {isPlaying ? "NOW PLAYING" : "PLAY"}
        </span>
      </div>
    </>
  );
};

export default MusicPlayer;
