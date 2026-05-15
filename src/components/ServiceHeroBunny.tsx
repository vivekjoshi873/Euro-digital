import { motion } from "framer-motion";
import BunnyStreamPlayer from "./BunnyStreamPlayer";

interface ServiceHeroBunnyProps {
  videoUrl: string;
  overlayTitle: string;
  ctaLink: string;
}

function ServiceHeroBunny({ videoUrl, overlayTitle, ctaLink }: ServiceHeroBunnyProps) {
  return (
    <section className="relative mx-auto mt-10 w-full max-w-[1425px] space-y-6 overflow-hidden rounded-3xl shadow-xl">
      <BunnyStreamPlayer
        sourceUrl={videoUrl}
        title={overlayTitle}
        className="rounded-3xl"
        aspectClassName="aspect-video min-h-[280px] md:min-h-[420px]"
      />
      {/* <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.15 }}
        className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm md:px-10"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
          Service Overview
        </p>
        <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">{overlayTitle}</h3>
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[#18b6e3] px-10 py-4 text-lg font-bold text-white shadow-[0_0_20px_rgba(24,182,227,0.35)] transition-all hover:scale-105 hover:bg-[#159fca]"
        >
          Book Demo
        </a>
      </motion.div> */}
    </section>
  );
}

export default ServiceHeroBunny;
