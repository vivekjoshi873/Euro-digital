import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  /** When false, playback is paused (e.g. another player became active). Defaults to true. */
  isActive?: boolean;
  onActivate?: () => void;
  onDeactivate?: () => void;
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);

  useEffect(() => {
    if (isActive) return;
    const video = videoRef.current;
    if (video && !video.paused) {
      video.pause();
    }
    setIsPlaying(false);
    setIsBuffering(false);
  }, [isActive]);

  if (!mp4Url) {
    const embedBase = getBunnyStreamEmbedUrl(sourceUrl);
    if (!embedBase) return null;
    const embedSrc = buildBunnyEmbedSrc(embedBase, { autoplay: false, preload: true });
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className={`group relative w-full overflow-hidden bg-black ${className}`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`relative w-full ${aspectClassName}`}
        >
          <iframe
            src={embedSrc}
            title={title}
            className="absolute inset-0 z-10 h-full w-full border-0"
            style={{ border: "none" }}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    );
  }

  const handleResume = () => {
    const video = videoRef.current;
    if (!video) return;

    onActivate?.();
    setIsBuffering(true);
    video.muted = false;
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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`group relative w-full overflow-hidden bg-black ${className}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`relative w-full ${aspectClassName}`}
      >
        <video
          ref={videoRef}
          src={mp4Url}
          poster={posterUrl ?? undefined}
          title={title}
          muted
          playsInline
          preload="metadata"
          className="relative z-10 h-full w-full object-cover"
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
            onDeactivate?.();
          }}
        />

        {!isPlaying && (
          <button
            type="button"
            onClick={handleResume}
            className="absolute inset-0 z-20 flex cursor-pointer items-center justify-center bg-black/10 transition-colors group-hover:bg-black/30"
            aria-label={`Resume ${title}`}
          >
            {isBuffering ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-10 w-10 rounded-full border-4 border-white/35 border-t-white animate-spin"
              />
            ) : (
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-white/20 p-4 backdrop-blur-sm"
              >
                <Play className="h-10 w-10 fill-white text-white" />
              </motion.span>
            )}
          </button>
        )}

        {isPlaying && (
          <button
            type="button"
            onClick={handlePause}
            className="absolute inset-0 z-20 flex cursor-pointer items-center justify-center bg-black/10 opacity-0 transition-opacity group-hover:opacity-100"
            aria-label={`Pause ${title}`}
          >
            <span className="flex gap-1.5 rounded-full bg-white/20 px-5 py-4 backdrop-blur-sm">
              <span className="h-8 w-2 rounded-full bg-white md:h-10" />
              <span className="h-8 w-2 rounded-full bg-white md:h-10" />
            </span>
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}

export default BunnyStreamPlayer;
