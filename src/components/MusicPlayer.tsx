import React, { useRef, useState, useEffect } from "react";
import { smoother } from "./Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/MusicPlayer.css";

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        gsap.killTweensOf(smoother); // Stop auto-scroll if paused
      } else {
        audioRef.current.currentTime = 10;
        audioRef.current.play().catch((err) => {
          console.error("Playback failed:", err);
        });

        // Ensure smoother is active
        if (smoother) {
          smoother.paused(false);
          ScrollTrigger.refresh(); // Sync all pinned offsets
          
          gsap.to(smoother, {
            scrollTop: smoother.offset("#contact", "top top"),
            duration: 45, // Balanced speed for stability
            ease: "power1.inOut",
            overwrite: true,
            onComplete: () => setHasInteracted(true)
          });
          
          // Stop auto-scroll if user interacts
          const stopAutoScroll = () => {
            gsap.killTweensOf(smoother);
            window.removeEventListener("wheel", stopAutoScroll);
            window.removeEventListener("touchmove", stopAutoScroll);
            window.removeEventListener("mousedown", stopAutoScroll);
          };

          window.addEventListener("wheel", stopAutoScroll, { passive: true });
          window.addEventListener("touchmove", stopAutoScroll, { passive: true });
          window.addEventListener("mousedown", stopAutoScroll);
        }
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
          if (smoother) smoother.paused(false);
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
          {isPlaying ? "NOW PLAYING" : "CLICK FOR IMMERSIVE EXPERIENCE"}
        </span>
      </div>

      {!hasInteracted && <span className="prompt-icon">🎧</span>}
    </div>
  );
};

export default MusicPlayer;
