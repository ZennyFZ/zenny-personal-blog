"use client";
import { useState, useRef, useEffect } from "react";
import VideoBackground, {
  VideoBackgroundRef,
} from "@/components/notadmin/video-background";
import LoginCard from "@/components/notadmin/login-card";
import TapToStart from "@/components/notadmin/tap-to-start";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type LoginState = "WAITING" | "INTRO" | "OUTRO" | "REDIRECT";

const Login = () => {
  const navigation = useRouter();
  const [state, setState] = useState<LoginState>("WAITING");
  const [showTapToStart, setShowTapToStart] = useState(false);
  const introVideoRef = useRef<VideoBackgroundRef>(null);
  const outroVideoRef = useRef<VideoBackgroundRef>(null);

  // Try autoplay on mount
  useEffect(() => {
    const attemptAutoplay = async () => {
      try {
        if (introVideoRef.current) {
          await introVideoRef.current.play();
          setState("INTRO");
        }
      } catch {
        // Autoplay blocked, show tap to start
        setShowTapToStart(true);
      }
    };

    // Small delay to ensure video is ready
    const timer = setTimeout(attemptAutoplay, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleTapToStart = async () => {
    setShowTapToStart(false);
    if (introVideoRef.current) {
      await introVideoRef.current.play();
      setState("INTRO");
    }
  };

  const handleLoginSuccess = async () => {
    setState("OUTRO");
    if (outroVideoRef.current) {
      await outroVideoRef.current.play();
    }

    toast.success(
      "Oh please! The landing page doesn't have admin route. Thank you for wasting your time!!",
      { duration: 6000 },
    );
  };

  const handleOutroEnded = () => {
    setState("REDIRECT");
    navigation.replace("/");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[hsl(280_50%_4%)] text-[hsl(330_30%_95%)]">
      {/* Intro Video (always mounted, visibility controlled) */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          state === "OUTRO" || state === "REDIRECT"
            ? "opacity-0"
            : "opacity-100"
        }`}
      >
        <VideoBackground
          ref={introVideoRef}
          src="/notadmin/intro.mp4"
          isPlaying={state === "INTRO"}
          loopFromSeconds={13.8}
        />
      </div>

      {/* Outro Video */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          state === "OUTRO" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <VideoBackground
          ref={outroVideoRef}
          src="/notadmin/outro.mp4"
          isPlaying={state === "OUTRO"}
          onEnded={handleOutroEnded}
        />
      </div>

      {/* Gradient Overlay for better contrast */}
      <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      {/* Tap to Start Overlay */}
      {showTapToStart && <TapToStart onTap={handleTapToStart} />}

      {/* Login Form Container */}
      <div
        className={`absolute inset-0 flex items-center justify-center p-4 z-20 transition-all duration-500 ${
          state === "OUTRO" || state === "REDIRECT"
            ? "opacity-0 scale-95 pointer-events-none"
            : "opacity-100 scale-100"
        }`}
      >
        <LoginCard
          onLoginSuccess={handleLoginSuccess}
          isVisible={state !== "OUTRO" && state !== "REDIRECT"}
        />
      </div>
    </div>
  );
};

export default Login;
