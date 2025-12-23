import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import { getFAQsByServiceId } from "../data/faqData";

const services = [
  {
    id: "ai-business-automation",
    title: "AI Business Automation",
    description:
      "EuroDigital's AI Business Automation solutions are built to eliminate repetitive tasks and optimize your internal workflows. We analyze your business processes and design automation systems that save time, reduce errors, and allow your team to focus on high-value work.",
    image: "/servicesImages/Ai-business-automation.png",
    features: [
      "Lead capture, routing, and automated follow-ups",
      "CRM automation and third-party tool integrations",
      "Internal workflow automation",
      "Data processing and reporting",
      "Task management and operational optimisation",
      "Industry Specific AI Use Cases"
    ],
    detailedDescription: "Each automation is customised to your business needs, ensuring efficiency without disrupting your current operations."
  },
  {
    id: "ai-business-promotion",
    title: "AI Business Promotion",
    description:
      "Our AI Business Promotion solutions help you reach the right audience at the right time with personalized, data-driven strategies. By leveraging AI, we improve engagement, increase conversions, and make your marketing efforts more efficient.",
    image: "/backgroundImages/ai_promotion.png",
    features: [
      "Automated marketing workflows",
      "Personalised customer communication",
      "Intelligent campaign optimisation",
      "AI-driven content distribution",
      "Performance tracking and insights"
    ],
    detailedDescription: "EuroDigital enables businesses to scale their marketing efforts while maintaining consistency and quality across all channels."
  },
  {
    id: "ai-agent-talk-time",
    title: "AI Agent Talk Time",
    description:
      "Our AI-powered chatbots are designed to handle customer interactions accurately and professionally, around the clock. These chatbots are trained using your business data, ensuring responses remain relevant, reliable, and aligned with your brand voice.",
    image: "/backgroundImages/ai_agent.png",
    features: [
      "Website, WhatsApp, and platform-based chatbots",
      "Customer support automation",
      "Lead qualification and nurturing",
      "Appointment scheduling and follow-ups",
      "FAQ and knowledge base handling"
    ],
    detailedDescription: "This ensures faster response times, improved customer satisfaction, and reduced support workload."
  },
  {
    id: "ai-automated-chatbot",
    title: "AI Automated Chatbot",
    description:
      "EuroDigital's AI Voice Agents manage real conversations with customers using natural, human-like speech. These agents can handle calls efficiently while maintaining a professional tone and consistency.",
    image: "/backgroundImages/ai_bussiness.png",
    features: [
      "Inbound customer inquiries",
      "Outbound follow-up and reminder calls",
      "Appointment confirmations",
      "Support and service-related conversations"
    ],
    detailedDescription: "Our AI voice agents help businesses reduce call handling costs while ensuring no customer inquiry goes unanswered."
  },
  {
    id: "ai-addon-services",
    title: "AI add-on Services",
    description:
      "Our AI Add-on Services allow businesses to enhance their existing tools and platforms with advanced AI features. These add-ons are flexible, scalable, and designed to evolve with your business.",
    image: "/backgroundImages/ai_services.png",
    features: [
      "Custom AI integrations",
      "Speech-to-text and text-to-speech solutions",
      "Advanced analytics and reporting",
      "API-based AI enhancements",
      "Workflow and system optimisation"
    ],
    detailedDescription: "EuroDigital ensures every add-on integrates smoothly into your current ecosystem."
  },
  {
    id: "industry-specific",
    title: "Industry Specific AI Use Cases",
    description:
      "Industry Specific AI Use Cases.",
    image: "/backgroundImages/ai_users.png",
    features: [
      "Healthcare: Patient management and diagnostic assistance systems",
      "Retail: Inventory optimization and personalized shopping experiences",
      "Finance: Fraud detection and risk assessment solutions",
      "Manufacturing: Predictive maintenance and quality control",
      "Education: Personalized learning and student performance tracking",
      "Hospitality: Guest experience management and booking automation"
    ],
    detailedDescription: "We understand that every industry has unique challenges. That’s why EuroDigital delivers AI solutions specifically designed for different business domains, ensuring practical and measurable impact."
  },
];

function Services() {
  const [activeService, setActiveService] = useState(1);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-[72px]">
        {/* Service Navigation - Interactive */}
        <section style={{ background: 'linear-gradient(to right, rgba(24, 182, 227, 0.08), rgba(34, 211, 238, 0.08))' }}>
          <div className="max-w-[1425px] mx-auto px-6 md:px-12 py-6 md:py-8">
            <div className="flex flex-wrap justify-center items-center gap-2">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`px-4 md:px-6 py-3 md:py-3.5 whitespace-nowrap text-sm md:text-base font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                    activeService === index 
                      ? 'bg-cyan-400 text-slate-800 shadow-lg' 
                      : 'bg-transparent text-blue-500 hover:bg-white/50'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Service Content */}
        <section className="py-20 md:py-32" style={{ background: 'linear-gradient(to right, white 50%, rgba(224, 242, 254, 0.6) 50%)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
            >
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-800 leading-tight">
                  {services[activeService].title}
                </h1>
                <p className="text-base md:text-lg leading-relaxed text-slate-600">
                  {services[activeService].description}
                </p>
                
                {services[activeService].features && (
                  <div className="space-y-3 pt-2">
                    <ul className="space-y-3">
                        {services[activeService].features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-base mt-0.5 text-cyan-500 font-bold">●</span>
                            <span className="text-slate-600 text-base leading-relaxed">{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
                {services[activeService].detailedDescription && (
                  <p className="text-base md:text-lg leading-relaxed text-slate-500 pt-2">
                    {services[activeService].detailedDescription}
                  </p>
                )}
                
                <div className="flex gap-5 pt-6">
                  <button 
                    className="rounded-full bg-[#40BEF1] hover:bg-cyan-500 cursor-pointer text-black font-semibold px-8 py-3 shadow-lg transition-all hover:shadow-xl"
                  >
                    Try For Free
                  </button>
                </div>
              </div>

              <div className="relative">
                <motion.img
                  key={services[activeService].image}
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-[500px] md:h-[600px] object-cover rounded-2xl shadow-2xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Full Width Image Section */}
        <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/servicesImages/Ai-business-automation1.png"
              alt="AI Business Automation"
              className="w-full h-auto object-cover"
              style={{ maxHeight: '600px' }}
            />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-cyan-50/30">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* Heading with Billing Toggle */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 md:mb-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Pay only for what you use
              </h1>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              {/* AI Startup Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-100 rounded-2xl p-8 md:p-10 min-h-[700px] hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-5xl font-bold mb-4 text-slate-800 whitespace-nowrap">
                  AI Startup
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-6">
                  For startups and publishers
                </p>
                <p className="text-sm font-semibold mb-6 text-slate-800">
                  <span className="text-5xl md:text-6xl text-slate-500">$399</span> <span className="text-lg">Per Month</span>
                </p>
                <div className="space-y-4 mb-8">
                  <button 
                    className="w-full rounded-lg bg-[#40BEF1] hover:bg-cyan-500 text-black font-semibold px-6 py-3 cursor-pointer transition-all hover:shadow-lg"
                  >
                    Learn More
                  </button>
                  <div className="flex items-start gap-3 mt-10">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Basic dashboard</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Limited API access</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Email Support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">2 Agents</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Basic analytics</span>
                  </div>
                </div>
              </motion.div>

              {/* AI Business Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-100 rounded-2xl p-8 md:p-10 min-h-[700px] border-2 border-cyan-400 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-5xl font-bold mb-4 text-slate-800 whitespace-nowrap">
                  AI Business
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-6">
                  For rapidly scaling startups and publishers
                </p>
                <p className="text-sm font-semibold mb-6 text-slate-800">
                  <span className="text-5xl md:text-6xl text-slate-500">$699</span> <span className="text-lg">Per Month</span>
                </p>
                <div className="space-y-4 mb-8">
                  <button 
                    className="w-full rounded-lg bg-[#40BEF1] hover:bg-cyan-500 text-black font-semibold px-6 py-3 transition-all hover:shadow-lg cursor-pointer"
                  >
                    Learn More
                  </button>
                  <div className="flex items-start gap-3 mt-10">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Advanced dashboard</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Priority API access</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Live chat support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">5 Agents</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Advanced analytics</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Custom branding</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Call recording</span>
                  </div>
                </div>
              </motion.div>

              {/* AI Enterprise Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-100 rounded-2xl p-8 md:p-10 min-h-[700px] hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-5xl font-bold mb-4 text-slate-800 whitespace-nowrap">
                  AI Enterprise
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-6">
                  Advanced solutions for large enterprises with custom needs
                </p>
                <p className="text-sm font-semibold mb-6 text-slate-800">
                  <span className="text-5xl md:text-6xl text-slate-500">Custom</span>
                </p>
                <div className="space-y-4 mb-8">
                  <button 
                    className="w-full rounded-lg bg-[#40BEF1] hover:bg-cyan-500 text-black font-semibold px-6 py-3 transition-all hover:shadow-lg cursor-pointer"
                  >
                    Learn More
                  </button>
                  <div className="flex items-start gap-3 mt-10">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Full-featured dashboard</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Unlimited API calls</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">24/7 dedicated support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">5+ Customisation agents</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Advanced analytics</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Custom AI models</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">SLA guarantee</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                    <span className="text-gray-600 text-base">Priority processing</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Service Specific */}
        {getFAQsByServiceId(services[activeService].id) && (
          <FAQ
            faqs={getFAQsByServiceId(services[activeService].id)!.faqs}
            subtitle={getFAQsByServiceId(services[activeService].id)!.subtitle}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Services;

