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
      <section className="bg-white py-20 md:py-16" style={{ color: 'var(--primary-navy)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-6 text-center mb-14 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold" style={{ color: 'var(--text-primary)' }}>
            Everything Your Personal Secretary Should Do
          </h2>
          <p className="text-base md:text-[19px] max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Baseten delivers the infrastructure, tooling, and expertise needed
            to bring great AI products to market - fast.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 md:gap-10">
          {cards.map((card) => {
            // We removed the conditional logic that made one card taller than others
            // to ensure a perfectly level grid.
            return (
              <div
                key={card.title}
                className="rounded-2xl flex flex-col p-5 md:p-6 hover:shadow-2xl transition-shadow duration-300 h-full"
                style={{ backgroundColor: 'var(--bg-secondary)' }}
              >
                {/* Fixed Image Height: h-72 md:h-80 for ALL cards */}
                <div
                  className="w-full h-72 md:h-80 bg-center bg-cover rounded-xl shadow-lg shrink-0"
                  style={{ backgroundImage: `url('${card.image}')` }}
                />
                
                {/* Content Area: flex-grow ensures this fills space to push buttons down */}
                <div className="pt-6 md:pt-8 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    {/* Fixed Title Height or min-height ensures text levels stay same */}
                    <h3 className="text-2xl md:text-3xl font-semibold leading-tight min-h-[3.5rem] md:min-h-[4.5rem]" style={{ color: 'var(--text-primary)' }}>
                      {card.title}
                    </h3>
                    <Link to="/" className="shrink-0">
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
                  <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
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
