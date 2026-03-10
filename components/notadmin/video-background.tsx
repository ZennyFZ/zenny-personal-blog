import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";

interface VideoBackgroundProps {
  src: string;
  isPlaying: boolean;
  onEnded?: () => void;
  className?: string;
  loopFromSeconds?: number;
  loopNearEndSeconds?: number;
  cueAtSeconds?: number;
  onCue?: () => void;
  cueOnce?: boolean;
}

export interface VideoBackgroundRef {
  play: () => Promise<void>;
  pause: () => void;
}

const VideoBackground = forwardRef<VideoBackgroundRef, VideoBackgroundProps>(
  (
    {
      src,
      isPlaying,
      onEnded,
      className = "",
      loopFromSeconds,
      loopNearEndSeconds = 0.35,
      cueAtSeconds,
      onCue,
      cueOnce = true,
    },
    ref,
  ) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const hasTriggeredCueRef = useRef(false);

    useImperativeHandle(ref, () => ({
      play: async () => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          // Start muted to allow autoplay, then unmute
          videoRef.current.muted = true;
          await videoRef.current.play();
          // Unmute after play starts (works because user already interacted)
          videoRef.current.muted = false;
        }
      },
      pause: () => {
        if (videoRef.current) {
          videoRef.current.pause();
        }
      },
    }));

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      if (isPlaying) {
        video.muted = true;
        video
          .play()
          .then(() => {
            video.muted = false;
          })
          .catch(() => {
            // Autoplay blocked - will be handled by tap to start
          });
      } else {
        video.pause();
      }
    }, [isPlaying]);

    useEffect(() => {
      if (!isPlaying) {
        hasTriggeredCueRef.current = false;
      }
    }, [isPlaying, src]);

    const handleTimeUpdate = () => {
      const video = videoRef.current;
      if (!video || !isPlaying) return;

      if (cueAtSeconds !== undefined && onCue) {
        const shouldTrigger = video.currentTime >= cueAtSeconds;
        const canTrigger = cueOnce ? !hasTriggeredCueRef.current : true;

        if (shouldTrigger && canTrigger) {
          hasTriggeredCueRef.current = true;
          onCue();
        }
      }

      if (loopFromSeconds === undefined) return;
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;

      if (video.currentTime >= video.duration - loopNearEndSeconds) {
        video.currentTime = loopFromSeconds;
      }
    };

    return (
      <video
        ref={videoRef}
        src={src}
        className={`absolute inset-0 w-full h-full object-cover ${className}`}
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onEnded={onEnded}
      />
    );
  },
);

VideoBackground.displayName = "VideoBackground";

export default VideoBackground;
