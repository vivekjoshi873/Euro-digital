import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  getBunnyStreamEmbedUrl,
  getBunnyStreamMp4Url,
  getBunnyStreamThumbnailUrl,
  buildBunnyEmbedSrc,
} from "../utils/bunnyStream";

interface BunnyStreamPlayerProps {
  sourceUrl: string;
  title?: string;
  className?: string;
  aspectClassName?: string;
    isActive?: boolean;
  onActivate?: () => void;
  onDeactivate?: () => void;
}

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function BunnyStreamPlayer({
  sourceUrl,
  title = "Video",
  className = "",
  aspectClassName = "aspect-video",
  isActive = true,
  onActivate,
  onDeactivate,
}: BunnyStreamPlayerProps) {
  const mp4Url = getBunnyStreamMp4Url(sourceUrl);
  const posterUrl = getBunnyStreamThumbnailUrl(sourceUrl);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const hideControlsTimer = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    if (isActive) return;
    const video = videoRef.current;
    if (video && !video.paused) {
      video.pause();
    }
    setIsPlaying(false);
    setIsBuffering(false);
  }, [isActive]);

  const resetHideTimer = useCallback(() => {
    if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
    setShowControls(true);
    hideControlsTimer.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  }, []);

  useEffect(() => {
    return () => {
      if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
    };
  }, []);

  if (!mp4Url) {
    const embedBase = getBunnyStreamEmbedUrl(sourceUrl);
    if (!embedBase) return null;
    const embedSrc = buildBunnyEmbedSrc(embedBase, { autoplay: false, preload: true });
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`group relative w-full overflow-hidden rounded-2xl bg-black shadow-[0_8px_30px_rgba(0,0,0,0.3)] ${className}`}
      >
        <div className={`relative w-full ${aspectClassName}`}>
          <iframe
            src={embedSrc}
            title={title}
            className="absolute inset-0 z-10 h-full w-full border-0"
            style={{ border: "none" }}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </motion.div>
    );
  }

  const handleResume = () => {
    const video = videoRef.current;
    if (!video) return;
    onActivate?.();
    setIsBuffering(true);
    video.muted = false;
    setIsMuted(false);
    video
      .play()
      .then(() => setIsPlaying(true))
      .catch((error) => {
        console.error("Video playback failed:", error);
        setIsBuffering(false);
      });
  };

  const handlePause = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
    setIsBuffering(false);
    onDeactivate?.();
  };

  const togglePlayPause = () => {
    if (isPlaying) handlePause();
    else handleResume();
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const video = videoRef.current;
    const bar = progressRef.current;
    if (!video || !bar) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    video.currentTime = ratio * video.duration;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`group relative w-full overflow-hidden rounded-2xl bg-black shadow-[0_8px_30px_rgba(0,0,0,0.3)] ${className}`}
      onMouseMove={isPlaying ? resetHideTimer : undefined}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className={`relative w-full ${aspectClassName}`}>
        <video
          ref={videoRef}
          src={mp4Url}
          poster={posterUrl ?? undefined}
          title={title}
          muted
          playsInline
          preload="metadata"
          className="relative z-10 h-full w-full object-cover"
          onClick={togglePlayPause}
          onLoadedMetadata={() => {
            if (videoRef.current) setDuration(videoRef.current.duration);
          }}
          onTimeUpdate={() => {
            const video = videoRef.current;
            if (!video || !video.duration) return;
            setCurrentTime(video.currentTime);
            setProgress((video.currentTime / video.duration) * 100);
          }}
          onCanPlay={() => {
            if (isBuffering) setIsBuffering(false);
          }}
          onPlaying={() => {
            setIsPlaying(true);
            setIsBuffering(false);
          }}
          onWaiting={() => setIsBuffering(true)}
          onStalled={() => setIsBuffering(true)}
          onPause={() => {
            setIsPlaying(false);
            setIsBuffering(false);
          }}
          onEnded={() => {
            setIsPlaying(false);
            setIsBuffering(false);
            setProgress(0);
            onDeactivate?.();
          }}
        />

        {/* Cinematic gradient overlay — always visible at bottom for depth */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-36 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <AnimatePresence mode="wait">
          {!isPlaying && !isBuffering && (
            <motion.button
              key="play-overlay"
              type="button"
              onClick={handleResume}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 z-30 flex cursor-pointer items-center justify-center"
              aria-label={`Play ${title}`}
            >
              <div className="relative flex items-center justify-center">
                {/* Pulse ring */}
                <span className="absolute h-20 w-20 animate-ping rounded-full bg-white/15 md:h-24 md:w-24" />
                <motion.span
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.92 }}
                  className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/15 backdrop-blur-md md:h-20 md:w-20"
                >
                  <Play className="h-7 w-7 fill-white text-white md:h-9 md:w-9" />
                </motion.span>
              </div>
            </motion.button>
          )}

          {isBuffering && (
            <motion.div
              key="buffering"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 z-30 flex items-center justify-center"
            >
              <div className="h-12 w-12 animate-spin rounded-full border-[3px] border-white/20 border-t-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom controls bar — appears on hover during playback */}
        <AnimatePresence>
          {isPlaying && (showControls || !isPlaying) && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 bottom-0 z-30 flex items-center gap-3 px-4 pb-3 pt-8"
            >
              {/* Play / Pause */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); togglePlayPause(); }}
                className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-white transition-transform hover:scale-110"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4 fill-white text-white" />
                ) : (
                  <Play className="h-4 w-4 fill-white text-white" />
                )}
              </button>

              {/* Time */}
              <span className="shrink-0 text-xs font-medium tabular-nums text-white/80">
                {formatTime(currentTime)}
              </span>

              {/* Progress bar */}
              <div
                ref={progressRef}
                onClick={handleProgressClick}
                className="group/bar relative flex h-5 flex-1 cursor-pointer items-center"
              >
                <div className="h-1 w-full overflow-hidden rounded-full bg-white/20 transition-all group-hover/bar:h-1.5">
                  <div
                    className="h-full rounded-full bg-white transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                {/* Scrubber dot */}
                <div
                  className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white opacity-0 shadow-md transition-opacity group-hover/bar:opacity-100"
                  style={{ left: `calc(${progress}% - 6px)` }}
                />
              </div>

              {/* Duration */}
              <span className="shrink-0 text-xs font-medium tabular-nums text-white/80">
                {formatTime(duration)}
              </span>

              {/* Mute toggle */}
              <button
                type="button"
                onClick={toggleMute}
                className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-white transition-transform hover:scale-110"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Thin always-visible progress line at the very bottom when controls are hidden */}
        {isPlaying && !showControls && (
          <div className="absolute inset-x-0 bottom-0 z-30 h-[3px] bg-white/10">
            <div
              className="h-full bg-white/60 transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Hover pause overlay (center icon, only while playing and hovering) */}
        {isPlaying && showControls && (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={togglePlayPause}
            className="absolute inset-0 z-20 cursor-pointer"
            aria-label={`Pause ${title}`}
          />
        )}
      </div>
    </motion.div>
  );
}

export default BunnyStreamPlayer;
