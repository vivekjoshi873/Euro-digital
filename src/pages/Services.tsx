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
      
      <main className="pt-20">
        {/* Service Navigation - Interactive */}
        <section style={{ background: 'linear-gradient(to right, rgba(24, 182, 227, 0.08), rgba(34, 211, 238, 0.08))' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex justify-center items-center gap-0 py-3">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`px-6 py-3 whitespace-nowrap text-sm font-medium border-r border-white/40 last:border-r-0 transition-all duration-300 cursor-pointer ${
                    activeService === index 
                      ? 'bg-cyan-400 text-slate-800' 
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
        <section className="py-16 md:py-24" style={{ background: 'linear-gradient(to right, white 50%, rgba(224, 242, 254, 0.6) 50%)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-semibold text-slate-800">
                  {services[activeService].title}
                </h1>
                <p className="text-lg leading-relaxed text-slate-600">
                  {services[activeService].description}
                </p>
                
                {services[activeService].features && (
                  <div className="space-y-3 ml-4">
                    <ul className="space-y-2">
                        {services[activeService].features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-xs mt-1 text-slate-500">●</span>
                            <span className="text-slate-600">{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
                {services[activeService].detailedDescription && (
                  <p className="text-base leading-relaxed text-slate-500">
                    {services[activeService].detailedDescription}
                  </p>
                )}
                
                <div className="flex gap-4 pt-4">
                  <button 
                    className="rounded-full bg-[#40BEF1] cursor-pointer text-black font-medium px-6 py-2 shadow-lg transition-all   "
                  >
                    Try For Free
                  </button>
                 
                </div>
              </div>

              <div className="relative ">
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

        {/* Full Width Image Section */}
        <section className="w-full max-w-[1425px] mx-auto rounded-3xl overflow-hidden mt-10">
          <img
            src="/servicesImages/Ai-business-automation1.png"
            alt="AI Business Automation"
            className="w-full h-auto object-cover"
            style={{ maxHeight: '600px' }}
          />
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-cyan-50/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            {/* Heading with Billing Toggle */}
            <div className="flex justify-between items-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
                Pay only for what you use
              </h1>
              
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-200 bg-gray-200"></div>
                  <span className="text-lg font-medium text-gray-600">Yearly</span>
                </div>
                <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="w-6 h-6 rounded-full border-2 border-cyan-400 bg-cyan-400 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <span className="text-lg font-medium text-slate-800">Monthly</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* AI Startup Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-100 rounded-2xl p-8 min-h-[700px]"
              >
                <h3 className="text-4xl font-bold mb-4 text-slate-800">
                  AI Startup
                </h3>
                <p className="text-gray-600 mb-6">
                For startups and publishers
                </p>
                <p className="text-sm font-semibold mb-4 text-slate-800">
                  <span className="text-5xl text-slate-500">$399</span> Per Month
                </p>
                <div className="space-y-4 mb-8">
                <button 
                    className="w-34 rounded-md bg-[#40BEF1] text-black font-medium px-6 py-3 mt-5 cursor-pointer transition-all hover:shadow-lg "
                  >
                   Learn More
                  </button>
                  <div className="flex items-start gap-2 mt-10">
                    <span className="text-[#6FAA2D] text-xl">✓</span>
                    <span className="text-gray-500">Basic dashboard</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6FAA2D] text-xl">✓</span>
                    <span className="text-gray-500">Limited API access</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6FAA2D] text-xl">✓</span>
                    <span className="text-gray-500">Email Support</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6FAA2D] text-xl">✓</span>
                    <span className="text-gray-500">2 Agents</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6FAA2D] text-xl">✓</span>
                    <span className="text-gray-500">Basic analytics</span>
                  </div>
                </div>
              </motion.div>

              {/* AI Business Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-100 rounded-2xl p-8 min-h-[700px] border-2 border-cyan-400"
              >
                <h3 className="text-4xl font-bold mb-4 text-slate-800">
                  AI Business
                </h3>
                <p className="text-gray-600 mb-6">
                For rapidly scaling startups and publishers
                </p>
                <p className="text-sm font-semibold mb-4 text-slate-800">
                  <span className="text-5xl text-slate-500">$699</span> Per Month
                </p>
                <div className="space-y-4 mb-8">
                <button 
                      className="w-34 rounded-md bg-[#40BEF1] text-black font-medium px-6 py-3 mt-5 transition-all hover:shadow-lg cursor-pointer"
                  >
                    Learn More
                  </button>
                  <div className="flex items-start gap-2 mt-10">
                    <span className="text-[#6FAA2D] text-xl">✓</span>
                    <span className="text-gray-500">Advanced dashboard</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6FAA2D] text-xl">✓</span>
                    <span className="text-gray-500">Priority API access</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6FAA2D] text-xl">✓</span>
                    <span className="text-gray-500">Live chat support</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6FAA2D] text-xl">✓</span>
                    <span className="text-gray-500">5 Agents</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6FAA2D] text-xl">✓</span>
                    <span className="text-gray-500">Advanced analytics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6FAA2D] text-xl">✓</span>
                    <span className="text-gray-500">Custom branding</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6FAA2D] text-xl">✓</span>
                    <span className="text-gray-500">Call recording</span>
                  </div>
                </div>
              </motion.div>

              {/* AI Enterprise Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-100 rounded-2xl p-8 min-h-[700px]"
              >
                <h3 className="text-4xl font-bold mb-4 text-slate-800">
                  AI Enterprise
                </h3>
                <p className="text-gray-600 mb-6">
                  Advanced solutions for large enterprises with custom needs
                </p>
                <p className="text-sm font-semibold mb-4 text-slate-800">
                  <span className="text-5xl text-slate-500">$Custom</span> 
                </p>
                <div className="space-y-4 mb-8">
                <button 
                    className="w-34 rounded-md bg-[#40BEF1] text-black font-medium px-6 py-3 mt-5 transition-all hover:shadow-lg cursor-pointer"
                  >
                    Learn More
                  </button>
                  <div className="flex items-start gap-2 mt-10">
                    <span className="text-[#6FAA2D] text-xl">✓</span>
                    <span className="text-gray-500">Full-featured dashboard</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6FAA2D] text-xl">✓</span>
                    <span className="text-gray-500">Unlimited API calls</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6FAA2D] text-xl">✓</span>
                    <span className="text-gray-500">24/7 dedicated support</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6FAA2D] text-xl">✓</span>
                    <span className="text-gray-500">5 + Customisation agents</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6FAA2D] text-xl">✓</span>
                    <span className="text-gray-500">Advanced analytics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6FAA2D] text-xl">✓</span>
                    <span className="text-gray-500">Custom AI models</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6FAA2D] text-xl">✓</span>
                    <span className="text-gray-500">SLA guarantee</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#6FAA2D] text-xl">✓</span>
                    <span className="text-gray-500">Priority processing</span>
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

