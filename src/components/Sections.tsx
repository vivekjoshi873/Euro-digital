import { Link } from "react-router-dom";

const cards = [
  {
    title: "AI Business Automation",
    desc: "Streamline Operations. Reduce Manual Work. Scale Faster.",
    image: "/backgroundImages/ai_bussiness.png",
  },
  {
    title: "AI Business Promotion",
    desc: "Smarter Marketing Powered by AI.",
    image: "/backgroundImages/ai_promotion.png",
  },
  {
    title: "AI Agent Talk Time",
    desc: "Boost agent productivity with smart co-pilots.",
    image: "/backgroundImages/ai_automation.png",
  },
  {
    title: "AI Automated Chatbot",
    desc: "Always-on support with human-like responses.",
    image: "/backgroundImages/ai_agent.png",
  },
  {
    title: "AI add-on Services",
    desc: "Extend capabilities with modular AI services.",
    image: "/backgroundImages/ai_services.png",
  },
  {
    title: "Industry Specific AI Use Cases",
    desc: "Tailored accelerators for your vertical.",
    image: "/backgroundImages/ai_users.png",
  },
];

const execSteps = [
  {
    step: "1",
    title: "Monitor",
    desc: "Continuously reviews incoming data, messages, and activities in real time to ensure nothing important is missed.",
  },
  {
    step: "2",
    title: "Identify",
    desc: "Analyzes inputs instantly to recognize opportunities, patterns, or actions that require attention.",
  },
  {
    step: "3",
    title: "Notify",
    desc: "Sends timely updates and smart alerts so you’re always informed at the right moment.",
  },
  {
    step: "4",
    title: "Execute",
    desc: "Takes immediate action based on predefined rules—saving time and eliminating manual effort.",
  },
];

const industries = [
  {
    title: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "E-commerce",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Financial Services",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
  },
];

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Yuri Demidov",
    location: "Moscow, Russia",
    image: "/backgroundImages/yuri_image1.jpg",
    featured: true,
    cta: "Play Video",
  },
  {
    name: "Yuri Demidov",
    location: "Moscow, Russia",
    image: "/backgroundImages/yuri_image2.jpg",
    featured: false,
  },
  {
    name: "Yuri Demidov",
    location: "Moscow, Russia",
    image: "/backgroundImages/yuri_image.jpg",
    featured: false,
  },
];

type Testimonial = {
  name: string;
  location: string;
  image: string;
  featured: boolean;
  cta?: string;
};

function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-[1425px] mx-auto px-6 md:px-8 mt-10 md:mt-12 flex gap-5 md:gap-6 items-start">
      {testimonials.map((item: Testimonial, index: number) => (
        <motion.div
          key={`${item.name}-${item.image}`}
          className="flex flex-col items-start text-left group/item"
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          animate={{
            flex: hoveredIndex === null ? 1 : hoveredIndex === index ? 1.5 : 0.75,
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="relative w-full rounded-2xl overflow-hidden border border-[#e5e8ef] shadow-[0_18px_50px_rgba(0,0,0,0.08)] group/card">
            <motion.div
              className="h-135 md:h-145 bg-center bg-cover"
              style={{ backgroundImage: `url('${item.image}')` }}
              animate={{
                filter: hoveredIndex === null ? "blur(0px)" : hoveredIndex === index ? "blur(0px)" : "blur(8px)",
                scale: hoveredIndex === index ? 1.05 : 1,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
       
          </div>
          <div className="mt-3">
            <p className="text-sm font-medium text-[#0f1f38]">{item.name}</p>
            <p className="text-xs text-[#4a5b7b]">{item.location}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function Sections() {
  return (
    <div className="bg-[#0b1538] text-white">
      {/* Overview / Value prop */}
      <section className="bg-white text-[#0f1f38]">
        <div className="max-w-[1325px] mx-auto px-6 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="space-y-3 max-w-xl">
            <p className="text-base font-semibold text-black uppercase tracking-[0.05em]">
              Overview
            </p>
            <h2 className="text-2xl md:text-4xl font-medium leading-tight text-slate-700">
              Everything Your Digital AI Partner Should Do
            </h2>
            <p className="text-base md:text-[16px] text-[#6b7a99] tracking-[0.01em]">
              At EuroDigital, we help businesses unlock the real potential of AI
              by transforming the way they operate, communicate, and grow. Our
              AI-powered solutions are designed to reduce manual effort, improve
              efficiency, and create smarter customer experiences — all while
              integrating seamlessly with your existing systems.
            </p>
            <div className="flex flex-col gap-3 pt-4 text-[15px] text-[#6b7a99]">
              {[
                "AI Business Automation",
                "AI Business Promotion",
                "AI Agent Talk Time",
                "AI Automated Chatbot",
                "AI add-on Services",
                "Industry Specific AI Use Cases",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 mt-2">
                  <svg
                    className="w-5 h-5 shrink-0 text-[#7bc043]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-end">
            <div className="relative w-full md:w-[120%] md:-mr-12 lg:-mr-20">
              <div className="relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#1a1f36]/90 border-2 border-white/80 grid place-items-center text-white z-10 backdrop-blur-sm">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <img
                  src="/backgroundImages/sprint.png"
                  alt="Sprint Dashboard Preview"
                  className="w-full h-[550px] rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Secretary grid */}
      <section className="bg-white text-[#0f1f38] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-600">
            Everything Your Personal Secretary Should Do
          </h2>
          <p className="text-sm md:text-base text-[#4a5b7b] max-w-3xl mx-auto">
            Baseten delivers the infrastructure, tooling, and expertise needed
            to bring great <br /> AI products to market - fast.
          </p>
        </div>

        <div className="max-w-[1325px] mx-auto px-6 md:px-8 mt-10 md:mt-12 grid md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#f5f6f8] rounded-2xl flex flex-col p-4 md:p-3"
            >
              <div
                className="h-72 md:h-80 w-full bg-center bg-cover rounded-xl"
                style={{ backgroundImage: `url('${card.image}')` }}
              />
              <div className="pt-5 md:pt-6 space-y-3 text-left">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-slate-700">
                    {card.title}
                  </h3>
                  <Link to="/">
                    <button className="cursor-pointer inline-flex shrink-0 items-center justify-center rounded-md bg-[#1fb6ff] hover:bg-[#16a0e1] text-black font-medium px-4 py-2 transition-colors whitespace-nowrap text-sm">
                      Learn More
                    </button>
                  </Link>
                </div>
                <p className="text-base text-[#4a5b7b] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Executive Assistant timeline */}
      <section className="bg-white text-[#0f1f38] py-16 md:py-24">
        <div className="max-w-[1325px] mx-auto px-6 md:px-8 space-y-10 md:space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold">
              What Your AI Executive Assistant Can Handle End-to-End
            </h2>
            <p className="text-[#4a5b7b] max-w-3xl mx-auto">
              Baseten provides the technology, workflows, and AI expertise
              required to launch <br /> powerful AI solutions—quickly and reliably.
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-4 gap-10 md:gap-12 text-center relative">
              <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-[#1fb6ff]/40 z-0" />
              {execSteps.map((item) => (
                <div key={item.step} className="space-y-4 relative z-10">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#6aa341] text-white font-semibold grid place-items-center shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#4a5b7b] max-w-xs mx-auto">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry specific AI use cases */}
      <section className="bg-white text-[#0f1f38] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Industry Specific AI Use Cases
          </h2>
          <p className="text-sm md:text-base text-[#4a5b7b] max-w-4xl mx-auto">
            We understand that every industry has unique challenges. That&apos;s
            why EuroDigital delivers AI solutions <br /> specifically designed for
            different business domains, ensuring practical and measurable
            impact.
          </p>
        </div>

        <div className=" mt-10 md:mt-12 grid md:grid-cols-3 gap-4 md:gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="relative rounded-2xl overflow-hidden shadow-[0_16px_45px_rgba(0,0,0,0.12)] border border-[#e9ecf3]"
            >
              <div
                className="h-64 md:h-72 w-full bg-center bg-cover"
                style={{ backgroundImage: `url('${industry.image}')` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-3xl md:text-4xl font-normal drop-shadow-[0_8px_25px_rgba(0,0,0,0.35)]">
                  {industry.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Real journey testimonials */}
      <section className="bg-white text-[#0f1f38] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Real Journey. Real People. Real Success
          </h2>
          <p className="text-sm md:text-base text-slate-700 max-w-3xl mx-auto">
            Baseten delivers the infrastructure, tooling, and expertise needed
            to bring great AI <br /> products to market - fast.
          </p>
        </div>

        <TestimonialsSection testimonials={testimonials} />
      </section>
    </div>
  );
}

export default Sections;
