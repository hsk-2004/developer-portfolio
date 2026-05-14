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
        // Always reset to 10 seconds whenever you press play
        audioRef.current.currentTime = 10;
        audioRef.current.play().catch((err) => {
          console.error("Playback failed:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!isPlaying && audioRef.current) {
        audioRef.current.currentTime = 10;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // If it still fails, we just wait for the user to click the player button
        });
      }
      // Remove listeners after first interaction
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("keydown", handleFirstInteraction);
    window.addEventListener("scroll", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
    };
  }, [isPlaying]);

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
