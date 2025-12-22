import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  {
    id: "ai-business-automation",
    title: "AI Business Automation",
    description:
      "EuroDigital's AI Business Automation solutions are built to eliminate repetitive tasks and optimize your internal workflows. We analyze your business processes and design automation systems that save time, reduce errors, and allow your team to focus on high-value work.",
    image: "/backgroundImages/ai_automation.png",
  },
  {
    id: "ai-business-promotion",
    title: "AI Business Promotion",
    description:
      "Our AI Business Promotion solutions help you reach the right audience at the right time with personalized, data-driven strategies. By leveraging AI, we improve engagement, increase conversions, and make your marketing efforts more efficient.",
    image: "/backgroundImages/ai_promotion.png",
  },
  {
    id: "ai-agent-talk-time",
    title: "AI Agent Talk Time",
    description:
      "Our AI-powered chatbots are designed to handle customer interactions accurately and professionally, around the clock. These chatbots are trained using your business data, ensuring responses remain relevant, reliable, and aligned with your brand voice.",
    image: "/backgroundImages/ai_agent.png",
  },
  {
    id: "ai-automated-chatbot",
    title: "AI Automated Chatbot",
    description:
      "EuroDigital's AI Voice Agents manage real conversations with customers using natural, human-like speech. These agents can handle calls efficiently while maintaining a professional tone and consistency.",
    image: "/backgroundImages/ai_bussiness.png",
  },
  {
    id: "ai-addon-services",
    title: "AI add-on Services",
    description:
      "Our AI Add-on Services allow businesses to enhance their existing tools and platforms with advanced AI features. These add-ons are flexible, scalable, and designed to evolve with your business.",
    image: "/backgroundImages/ai_services.png",
  },
  {
    id: "industry-specific",
    title: "Industry Specific AI Use Cases",
    description:
      "We understand that every industry has unique challenges. That's why EuroDigital delivers AI solutions specifically designed for different business domains, ensuring practical and measurable impact.",
    image: "/backgroundImages/ai_users.png",
  },
];

function Services() {
  const [activeService, setActiveService] = useState(1);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Service Navigation - Interactive */}
        <section className="bg-linear-to-r from-cyan-50/60 to-blue-50/60 sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex justify-center items-center gap-0 py-3">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`px-6 py-3 whitespace-nowrap text-sm font-medium border-r border-white/40 last:border-r-0 transition-all duration-300 cursor-pointer ${
                    activeService === index
                      ? "bg-cyan-400/90 text-gray-800"
                      : "text-cyan-600 hover:bg-white/50"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Service Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
                  {services[activeService].title}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {services[activeService].description}
                </p>
                <div className="flex gap-4">
                  <button className="rounded-full bg-[#86c440] hover:bg-[#76b43a] text-white font-semibold px-8 py-3 shadow-lg transition-colors">
                    Get Started
                  </button>
                  <button className="rounded-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-3 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="relative">
                <motion.img
                  key={services[activeService].image}
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Services;

