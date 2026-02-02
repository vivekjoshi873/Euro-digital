import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { RotateCcw } from "lucide-react";

interface ServiceHeroVideoProps {
    videoUrl: string;
    poster?: string;
    overlayTitle: string;
    ctaLink: string;
}

const ServiceHeroVideo = ({ videoUrl, poster, overlayTitle, ctaLink }: ServiceHeroVideoProps) => {
    const [hasEnded, setHasEnded] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleWatchAgain = () => {
        setHasEnded(false);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <section className="relative w-full max-w-[1425px] mx-auto rounded-3xl overflow-hidden mt-10 shadow-xl group">
            <motion.video
                ref={videoRef}
                src={videoUrl}
                className="w-full h-auto object-cover"
                style={{ maxHeight: '800px', width: '100%' }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                controls
                playsInline
                poster={poster}
                onEnded={() => setHasEnded(true)}
                onError={(e) => {
                    console.error('Video failed to load:', e);
                    setVideoError(true);
                }}
            />

            {videoError && (
                <div className="absolute inset-0 flex items-center justify-center bg-red-100/10 backdrop-blur-sm border-2 border-red-500/50 rounded-3xl">
                    <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                        <p className="text-red-500 font-bold text-xl mb-2">Video Failed to Load</p>
                        <p className="text-white/70 text-sm">Please refresh the page or try again later.</p>
                    </div>
                </div>
            )}

            <AnimatePresence>
                {hasEnded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[4px] z-10"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", damping: 15 }}
                            className="text-center p-8 md:p-12 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl max-w-lg mx-auto"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                                {overlayTitle}
                            </h3>

                            <div className="flex flex-col items-center gap-6">
                                <a
                                    href={ctaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-full bg-[#18b6e3] text-white font-bold px-10 py-4 text-xl shadow-[0_0_20px_rgba(24,182,227,0.4)] transition-all hover:scale-105 hover:bg-[#159fca] hover:shadow-[0_0_30px_rgba(24,182,227,0.6)]"
                                >
                                    Book Demo
                                </a>

                                <button
                                    onClick={handleWatchAgain}
                                    className="group flex items-center gap-2 text-white/80 hover:text-white transition-all cursor-pointer bg-white/5 hover:bg-white/10 px-6 py-2.5 rounded-full border border-white/10 hover:border-white/20"
                                >
                                    <RotateCcw className="w-4 h-4 transition-transform group-hover:rotate-45" />
                                    <span className="text-sm font-semibold tracking-wide">Watch Again</span>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ServiceHeroVideo;
