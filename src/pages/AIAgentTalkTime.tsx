import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import { getFAQsByServiceId } from "../data/faqData";

function AIAgentTalkTime() {
  const serviceData = {
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
    detailedDescription: "This ensures faster response times, improved customer satisfaction, and reduced support workload.",
    primaryButtonText: "Try For Free",
    secondaryButtonText: "Learn More"
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Service Content */}
        <section className="py-16 md:py-24" style={{ background: 'linear-gradient(to right, white 50%, rgba(224, 242, 254, 0.6) 50%)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-semibold" style={{ color: 'var(--primary-navy)' }}>
                  {serviceData.title}
                </h1>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {serviceData.description}
                </p>
                
                {serviceData.features && (
                  <div className="space-y-3 ml-4">
                    <ul className="space-y-2">
                        {serviceData.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>●</span>
                            <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
                {serviceData.detailedDescription && (
                  <p className="text-base leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                    {serviceData.detailedDescription}
                  </p>
                )}
                
                <div className="flex gap-4 pt-4">
                  <button 
                    className="rounded-full text-white font-medium px-6 py-2 shadow-lg transition-all hover:shadow-xl hover:scale-105"
                    style={{ backgroundColor: 'var(--primary-blue)' }}
                  >
                    {serviceData.primaryButtonText}
                  </button>
                  <button 
                    className="rounded-full font-medium px-6 py-2 transition-all hover:bg-gray-100"
                    style={{ 
                      borderWidth: '2px',
                      borderColor: 'var(--primary-navy)',
                      color: 'var(--primary-navy)',
                      backgroundColor: 'transparent'
                    }}
                  >
                    {serviceData.secondaryButtonText}
                  </button>
                </div>
              </div>

              <div className="relative ">
                <motion.img
                  src={serviceData.image}
                  alt={serviceData.title}
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
            alt="AI Agent Talk Time"
            className="w-full h-auto object-cover"
            style={{ maxHeight: '600px' }}
          />
        </section>

        {/* Pricing Section with Scroll Animation */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/30">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Everything Your Personal Secretary Should Do
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                EuroDigital delivers the infrastructure, tooling, and expertise needed to bring great AI products to market - fast.
              </p>
            </motion.div>

            <div className="space-y-8">
              {/* AI Startup Talk Time Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-blue-50/60 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left Side - Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-semibold text-slate-800 mb-3">
                      AI Startup Talk time
                    </h3>
                    <p className="text-slate-600 mb-6">
                      For startups and publishers
                    </p>
                    
                    <div className="mb-6">
                      <span className="text-6xl font-bold text-slate-700">$99</span>
                      <span className="text-xl text-slate-600 ml-2">Per Month</span>
                    </div>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">✓</span>
                        <span className="text-slate-600">1,000 AI Calling Minutes</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">✓</span>
                        <span className="text-slate-600">Basic Voice Customisation</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">✓</span>
                        <span className="text-slate-600">Standard Support</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">✓</span>
                        <span className="text-slate-600">Analytics Dashboard</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className="relative h-full min-h-[400px]">
                    <img 
                      src="/servicesImages/Ai_talk.png" 
                      alt="AI Startup Talk Time"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* AI Business Talk Time Card - Featured */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-3xl border-2 border-blue-400 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-6 left-8 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium z-10">
                  Most Popular
                </div>
                
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left Side - Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-semibold text-slate-800 mb-3 mt-8">
                      AI Business Talk time
                    </h3>
                    <p className="text-slate-600 mb-6">
                      For rapidly scaling startups
                    </p>
                    
                    <div className="mb-6">
                      <span className="text-6xl font-bold text-slate-700">$299</span>
                      <span className="text-xl text-slate-600 ml-2">Per Month</span>
                    </div>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">✓</span>
                        <span className="text-slate-600">5,000 AI Calling Minutes</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">✓</span>
                        <span className="text-slate-600">Advanced Voice Customisation</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">✓</span>
                        <span className="text-slate-600">Priority Support</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">✓</span>
                        <span className="text-slate-600">Advanced Analytics & Reporting</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">✓</span>
                        <span className="text-slate-600">Multi-language Support</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">✓</span>
                        <span className="text-slate-600">CRM Integration</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className="relative h-full min-h-[400px]">
                    <img 
                      src="/servicesImages/Ai_talk1.png" 
                      alt="AI Business Talk Time"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* AI Enterprise Talk Time Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-blue-50/60 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left Side - Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-semibold text-slate-800 mb-3">
                      AI Enterprise Talk time
                    </h3>
                    <p className="text-slate-600 mb-6">
                      For large enterprises
                    </p>
                    
                    <div className="mb-6">
                      <span className="text-6xl font-bold text-slate-700">Custom</span>
                    </div>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">✓</span>
                        <span className="text-slate-600">Unlimited AI Calling Minutes</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">✓</span>
                        <span className="text-slate-600">Custom Voice Personalities</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">✓</span>
                        <span className="text-slate-600">24/7 Dedicated Support</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">✓</span>
                        <span className="text-slate-600">Custom Analytics & APIs</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">✓</span>
                        <span className="text-slate-600">White-label Solutions</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 text-xl">✓</span>
                        <span className="text-slate-600">SLA Guarantee</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className="relative h-full min-h-[400px]">
                    <img 
                      src="/servicesImages/Ai_talk2.png" 
                      alt="AI Enterprise Talk Time"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {getFAQsByServiceId(serviceData.id) && (
          <FAQ
            faqs={getFAQsByServiceId(serviceData.id)!.faqs}
            subtitle={getFAQsByServiceId(serviceData.id)!.subtitle}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default AIAgentTalkTime;

