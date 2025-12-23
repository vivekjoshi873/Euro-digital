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


function Sections() {
  return (
    <div className="bg-[#0b1538] text-white">
      {/* Overview / Value prop */}
      <section className="bg-white" style={{ color: 'var(--primary-navy)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6 max-w-xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight" style={{ color: 'var(--text-primary)' }}>
              Everything Your Digital AI Partner Should Do
            </h2>
            <p className="text-base md:text-lg tracking-[0.01em] leading-relaxed text-slate-700">
              At EuroDigital, we help businesses unlock the real potential of AI
              by transforming the way they operate, communicate, and grow. Our
              AI-powered solutions are designed to reduce manual effort, improve
              efficiency, and create smarter customer experiences — all while
              integrating seamlessly with your existing systems.
            </p>
            <div className="flex flex-col gap-3 pt-4 text-[15px]" style={{ color: 'var(--text-tertiary)' }}>
              {[
                "AI Business Automation",
                "AI Business Promotion",
                "AI Agent Talk Time",
                "AI Automated Chatbot",
                "AI add-on Services",
                "Industry Specific AI Use Cases",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 shrink-0"
                    style={{ color: 'var(--primary-green)' }}
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
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/80 grid place-items-center text-white z-10 backdrop-blur-sm"
                  style={{ backgroundColor: 'var(--primary-navy-medium)' }}
                >
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
                  className="w-full h-[550px] rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Secretary grid */}
      <section className="bg-white py-20 md:py-32" style={{ color: 'var(--primary-navy)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-6 text-center mb-14 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold" style={{ color: 'var(--text-primary)' }}>
            Everything Your Personal Secretary Should Do
          </h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Baseten delivers the infrastructure, tooling, and expertise needed
            to bring great AI products to market - fast.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 md:gap-10">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl flex flex-col p-5 md:p-6 hover:shadow-2xl transition-shadow duration-300"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              <div
                className="h-72 md:h-80 w-full bg-center bg-cover rounded-xl shadow-lg"
                style={{ backgroundImage: `url('${card.image}')` }}
              />
              <div className="pt-6 md:pt-8 space-y-4 text-left">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {card.title}
                  </h3>
                  <Link to="/">
                    <button 
                      className="cursor-pointer inline-flex shrink-0 items-center justify-center rounded-lg text-black font-medium px-5 py-2.5 transition-colors whitespace-nowrap text-sm"
                      style={{ backgroundColor: 'var(--primary-blue-light)' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-blue)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-blue-light)'}
                    >
                      Learn More
                    </button>
                  </Link>
                </div>
                <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Executive Assistant timeline */}
      <section className="bg-white py-20 md:py-32" style={{ color: 'var(--primary-navy)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12 md:space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              What Your AI Executive Assistant Can Handle End-to-End
            </h2>
            <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-slate-700">
              Baseten provides the technology, workflows, and AI expertise
              required to launch powerful AI solutions, quickly and reliably.
            </p>
          </div>

          <div className="relative pt-8">
            <div className="grid md:grid-cols-4 gap-12 md:gap-16 text-center relative">
              <div 
                className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 z-0" 
                style={{ backgroundColor: 'var(--primary-blue-light)', opacity: 0.4 }}
              />
              {execSteps.map((item) => (
                <div key={item.step} className="space-y-5 relative z-10">
                  <div className="flex flex-col items-center gap-5">
                    <div 
                      className="w-14 h-14 rounded-full text-white font-semibold text-lg grid place-items-center shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
                      style={{ backgroundColor: 'var(--primary-green-darker)' }}
                    >
                      {item.step}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed max-w-xs mx-auto" style={{ color: 'var(--text-secondary)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry specific AI use cases */}
      <section className="bg-white py-20 md:py-32" style={{ color: 'var(--primary-navy)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-6 text-center mb-14 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold" style={{ color: 'var(--text-primary)' }}>
            Industry Specific AI Use Cases
          </h2>
          <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            We understand that every industry has unique challenges. That&apos;s
            why EuroDigital delivers AI solutions specifically designed for
            different business domains, ensuring practical and measurable
            impact.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8 md:gap-10">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-2xl overflow-hidden shadow-[0_16px_45px_rgba(0,0,0,0.12)] flex flex-col hover:shadow-2xl transition-shadow duration-300"
              style={{ borderWidth: '1px', borderColor: 'rgba(24, 182, 227, 0.2)' }}
            >
              <div
                className="h-72 md:h-80 w-full bg-center bg-cover"
                style={{ backgroundImage: `url('${industry.image}')` }}
              />
              <div 
                className="py-6 px-8 text-center"
                style={{ backgroundColor: 'var(--bg-secondary)' }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
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
