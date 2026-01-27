import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { useState, useRef } from "react";

const cards = [
  {
    title: "AI Business Automation",
    desc: "Streamline Operations. Reduce Manual Work. Scale Faster. Automate repetitive tasks and optimize workflows to drive efficiency across your entire organization.",
    image: "/videos/irfan1.mp4",
    link: "/services/ai-business-automation",
  },
  {
    title: "AI Business Promotion",
    desc: "Smarter Marketing Powered by AI. Leverage data-driven insights to create personalized campaigns that convert and engage your audience effectively.",
    image: "/backgroundImages/ai_promotion.png",
    link: "/services/ai-business-promotion",
  },
  {
    title: "AI Agent Talk Time",
    desc: "Boost agent productivity with smart co-pilots. Empower your team with real-time assistance and automated tools to handle complex queries with ease.",
    image: "/backgroundImages/ai_automation.png",
    link: "/services/ai-agent-talk-time",
  },
  {
    title: "AI Automated Chatbot",
    desc: "Always-on support with human-like responses. Deliver instant, 24/7 customer service with intelligent chatbots that understand context and intent.",
    image: "/backgroundImages/ai_agent.png",
    link: "/services/ai-automated-chatbot",
  },
  {
    title: "AI add-on Services",
    desc: "Extend capabilities with modular AI services. Integrate powerful AI tools into your existing systems to enhance functionality and performance.",
    image: "/backgroundImages/ai_services.png",
    link: "/services/ai-addon-services",
  },
  {
    title: "Industry Specific AI Use Cases",
    desc: "Tailored accelerators for your vertical. Industry-specific solutions designed to address unique challenges and accelerate growth in your sector.",
    image: "/backgroundImages/ai_users.png",
    link: "/services/industry-specific",
  },
];

// execSteps removed — it was unused and caused a TypeScript compile error

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


function Sections() {
  return (
    <div className="bg-[#0b1538] text-white">
      {/* Overview Section - Kept as is */}
      <section className="bg-white" style={{ color: 'var(--primary-navy)' }}>
        {/* ... (Overview content) */}
      </section>

      {/* Personal Secretary grid - UPDATED FOR CONSISTENCY */}
      <section id="services" className="bg-white py-20 md:py-16 scroll-mt-32" style={{ color: 'var(--primary-navy)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-6 text-center mb-14 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold" style={{ color: 'var(--text-primary)' }}>
            Everything Your Personal Secretary Should Do
          </h2>
          <p className="text-base md:text-[19px] max-w-3xl mx-auto leading-relaxed capitalize" style={{ color: 'var(--text-secondary)' }}>
            Baseten delivers the infrastructure, tooling, and expertise needed
            to bring great AI products to market - fast.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 md:gap-10">
          {cards.map((card) => {
            const videoRef = useRef<HTMLVideoElement>(null);
            const [isPlaying, setIsPlaying] = useState(false);

            const togglePlayback = () => {
              if (videoRef.current) {
                if (videoRef.current.paused) {
                  videoRef.current.play();
                  videoRef.current.muted = false;
                  setIsPlaying(true);
                } else {
                  videoRef.current.pause();
                  setIsPlaying(false);
                }
              }
            };

            return (
              <div
                key={card.title}
                className="group rounded-2xl flex flex-col p-5 md:p-6 hover:shadow-2xl transition-shadow duration-300 h-full"
                style={{ backgroundColor: 'var(--bg-secondary)' }}
              >
                {/* Media Area: Supports both Images and Videos */}
                <div className="relative w-full h-72 md:h-80 rounded-xl shadow-lg shrink-0 overflow-hidden">
                  {card.image.endsWith('.mp4') ? (
                    <>
                      <video
                        ref={videoRef}
                        src={card.image}
                        muted
                        playsInline
                        onEnded={() => setIsPlaying(false)}
                        className="w-full h-full object-cover"
                      />
                      <div
                        onClick={togglePlayback}
                        className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-all duration-300 cursor-pointer"
                      >
                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border border-white/30 transform transition-transform group-hover:scale-110">
                          {isPlaying ? (
                            <div className="flex gap-1.5">
                              <div className="w-2.5 h-10 bg-white rounded-full" />
                              <div className="w-2.5 h-10 bg-white rounded-full" />
                            </div>
                          ) : (
                            <Play
                              className="w-10 h-10 text-white fill-white"
                            />
                          )}

                        </div>
                      </div>
                    </>
                  ) : (
                    <div
                      className="w-full h-full bg-center bg-cover"
                      style={{ backgroundImage: `url('${card.image}')` }}
                    />
                  )}
                </div>

                {/* Content Area: flex-grow ensures this fills space to push buttons down */}
                <div className="pt-6 md:pt-8 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    {/* Fixed Title Height or min-height ensures text levels stay same */}
                    <h3 className="text-2xl md:text-3xl font-semibold leading-tight min-h-[3.5rem] md:min-h-[4.5rem]" style={{ color: 'var(--text-primary)' }}>
                      {card.title}
                    </h3>
                    <Link to={card.link} className="shrink-0">
                      <button
                        className="cursor-pointer inline-flex items-center justify-center rounded-lg text-black font-medium px-5 py-2.5 transition-colors whitespace-nowrap text-sm"
                        style={{ backgroundColor: 'var(--primary-blue-light)' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-blue)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-blue-light)'}
                      >
                        Learn More
                      </button>
                    </Link>
                  </div>

                  {/* Description area */}
                  <p className="text-base md:text-lg leading-relaxed mb-4 capitalize" style={{ color: 'var(--text-secondary)' }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Executive Assistant timeline - Kept as is */}
      <section className="bg-white py-20 md:py-16" style={{ color: 'var(--primary-navy)' }}>
        {/* ... (Timeline content) */}
      </section>

      {/* Industry specific AI use cases - UPDATED FOR CONSISTENCY */}
      <section className="bg-white py-20 md:py-20" style={{ color: 'var(--primary-navy)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-6 text-center mb-14 md:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-6xl font-semibold" style={{ color: 'var(--text-primary)' }}>
            Industry Specific AI Use Cases
          </h2>
          <p className="text-base md:text-[19px] max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Practical and measurable impact across different business domains.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8 md:gap-10">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-2xl overflow-hidden shadow-[0_16px_45px_rgba(0,0,0,0.12)] flex flex-col h-full hover:shadow-2xl transition-shadow duration-300"
              style={{ borderWidth: '1px', borderColor: 'rgba(24, 182, 227, 0.2)' }}
            >
              {/* Fixed Image Height: h-64 md:h-72 ensures level alignment */}
              <div
                className="h-64 md:h-72 w-full bg-center bg-cover shrink-0"
                style={{ backgroundImage: `url('${industry.image}')` }}
              />
              <div
                className="py-6 px-8 text-center flex-grow flex items-center justify-center"
                style={{ backgroundColor: 'var(--bg-secondary)' }}
              >
                <h3 className="text-xl md:text-2xl font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
                  {industry.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Sections;
