import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLoading } from "../context/LoadingProvider";

gsap.registerPlugin(ScrollTrigger);

const ScrollSequence = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { setIsLoading, setLoading } = useLoading();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const frameCount = 192;
  const currentFrame = (index: number) =>
    `/Frames/frame_${index.toString().padStart(3, "0")}_delay-0.041s.webp`;

  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    if (isMobile) {
      setLoading(100);
      setImagesLoaded(true);
      return;
    }

    let loadedCount = 0;
    const images: HTMLImageElement[] = [];
    console.log(`Starting to preload ${frameCount} images...`);

    // Fallback timer: force load after 10 seconds if stuck
    const fallbackTimer = setTimeout(() => {
      if (loadedCount < frameCount) {
        console.warn("Loading timed out. Forcing completion.");
        setLoading(100);
        setImagesLoaded(true);
      }
    }, 10000);

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        const percent = Math.floor((loadedCount / frameCount) * 100);
        setLoading(percent);

        if (loadedCount % 20 === 0 || loadedCount === frameCount) {
          console.log(`Loading frames: ${percent}% (${loadedCount}/${frameCount})`);
        }

        if (loadedCount === frameCount) {
          console.log("All frames loaded successfully!");
          clearTimeout(fallbackTimer);
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${img.src}`);
        loadedCount++;
        const percent = Math.floor((loadedCount / frameCount) * 100);
        setLoading(percent);
        if (loadedCount === frameCount) {
          clearTimeout(fallbackTimer);
          setImagesLoaded(true);
        }
      }
      images.push(img);
    }
    imagesRef.current = images;
    return () => clearTimeout(fallbackTimer);
  }, [isMobile, setLoading]);

  useGSAP(
    () => {
      if (!imagesLoaded || isMobile) return;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext("2d");
      if (!context) return;

      const airpods = {
        frame: 0,
      };

      const render = () => {
        const img = imagesRef.current[airpods.frame];
        if (!img) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        let drawWidth, drawHeight, drawX, drawY;

        if (canvasRatio > imgRatio) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgRatio;
          drawX = 0;
          drawY = (canvas.height - drawHeight) / 2 + 100;
        } else {
          drawWidth = canvas.height * imgRatio;
          drawHeight = canvas.height;
          drawX = (canvas.width - drawWidth) / 2;
          drawY = 100;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
      };

      render();

      gsap.to(airpods, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: "#smooth-wrapper",
          start: "top top",
          end: "30% bottom",
          scrub: 0.8,
        },
        onUpdate: render,
      });

      const handleResize = () => {
        render();
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    },
    { scope: containerRef, dependencies: [imagesLoaded, isMobile] }
  );

  return (
    <div
      ref={containerRef}
      className="scroll-sequence-container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        backgroundColor: "#000000",
        opacity: imagesLoaded ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      {isMobile ? (
        <img
          src="/images/back.jpeg"
          alt="Mobile Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.8,
          }}
        />
      ) : (
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      )}
    </div>
  );
};

export default ScrollSequence;
