import React, { useRef, useState, useEffect } from "react";
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

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!isPlaying && audioRef.current && !hasInteracted) {
        audioRef.current.currentTime = 10;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        }).catch(() => {
          // Fallback to manual click
        });
      }
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("wheel", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("scroll", handleFirstInteraction);
    window.addEventListener("wheel", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("wheel", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [isPlaying, hasInteracted]);

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
          {isPlaying ? "NOW PLAYING" : hasInteracted ? "PAUSED" : "CLICK FOR IMMERSIVE EXPERIENCE"}
        </span>
      </div>

      {!hasInteracted && <span className="prompt-icon">🎧</span>}
    </div>
  );
};

export default MusicPlayer;
