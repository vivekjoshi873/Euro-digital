import { motion } from "framer-motion";
import FAQ from "../components/FAQ";
import { getFAQsByServiceId } from "../data/faqData";

function AIAutomatedChatbot() {
  const serviceData = {
    id: "ai-automated-chatbot",
    title: "AI Automated Chatbot",
    description:
      "EuroDigital's AI Voice Agents manage real conversations with customers using natural, human-like speech. These agents can handle calls efficiently while maintaining a professional tone and consistency.",
    image: "/backgroundImages/ai_bussiness.png",
    features: [
      "Inbound customer inquiries",
      "Outbound follow-up and reminder calls",
      "Appointment confirmations",
      "Support and service-related conversations",
    ],
    detailedDescription: "Our AI voice agents help businesses reduce call handling costs while ensuring no customer inquiry goes unanswered.",
    primaryButtonText: "Try For Free",
    secondaryButtonText: "Talk to Sales"
  };

  return (
    <>
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
                  className="rounded-full text-black font-medium px-6 py-2 shadow-lg cursor-pointer"
                  style={{ backgroundColor: 'var(--primary-blue)' }}
                >
                  {serviceData.primaryButtonText}
                </button>
                <button
                  className="rounded-full font-medium px-6 py-2 transition-all hover:bg-gray-100 border-2 border-gray-300 text-gray-500 cursor-pointer"
                  style={{
                    borderWidth: '2px',
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
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/servicesImages/Ai-business-automation1.png"
            alt="AI Automated Chatbot"
            className="w-full h-auto object-cover"
            style={{ maxHeight: '600px' }}
          />
        </div>
      </section>

      {/* Stacking Cards Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              WhatsApp AI Automated Chatbot
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Beautiful analytics that update as your AI agents work
            </p>
          </div>

          <div className="space-y-8">
            {/* Card 1 - WhatsApp AI Automated Chatbot */}
            <div
              className="sticky top-24 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ zIndex: 10 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Side - Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-4xl font-bold text-slate-800 mb-3">
                    WhatsApp AI Automated Chatbot
                  </h3>
                  <p className="text-lg text-slate-600 mb-6">
                    Beautiful analytics that update as your AI agents work
                  </p>

                  <div className="mb-8">
                    <span className="text-6xl md:text-7xl font-bold text-slate-700">$600</span>
                    <div className="text-base text-slate-600 mt-2">
                      • ($29 / Month GHL Subscription)
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">All WhatsApp Business API Automation Included</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Priority Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Monthly Maintenance Included</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Custom WhatsApp Templates</span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="relative h-full min-h-[550px] md:min-h-[650px]">
                  <img
                    src="/backgroundImages/ai_bussiness.png"
                    alt="WhatsApp AI Chatbot"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 2 - Advanced WhatsApp AI */}
            <div
              className="sticky top-32 bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ zIndex: 20 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-4xl font-bold text-slate-800 mb-3">
                    Instagram AI Chatbot
                  </h3>
                  <p className="text-lg text-slate-600 mb-6">
                    For businesses scaling with automation
                  </p>

                  <div className="mb-8">
                    <span className="text-6xl md:text-7xl font-bold text-slate-700">$600</span>
                    <span className="text-xl text-slate-600 ml-3">Per Month</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">All Instagram DM & Comment Automation Included</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Story Mention Auto-Replies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">24/7 Profile Engagement</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Custom Instagram Chat Flows</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Influencer/Creator Dashboard</span>
                    </div>
                  </div>
                </div>

                <div className="relative h-full min-h-[550px] md:min-h-[650px]">
                  <img
                    src="/backgroundImages/ai_agent.png"
                    alt="Instagram AI Chatbot"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 3 - Professional WhatsApp AI */}
            <div
              className="sticky top-40 bg-gradient-to-br from-green-50 to-teal-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ zIndex: 30 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-4xl font-bold text-slate-800 mb-3">
                    Facebook Messenger AI Chatbot
                  </h3>
                  <p className="text-lg text-slate-600 mb-6">
                    For established businesses with high volume
                  </p>

                  <div className="mb-8">
                    <span className="text-6xl md:text-7xl font-bold text-slate-700">$600</span>
                    <span className="text-xl text-slate-600 ml-3">Per Month</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">All Facebook Page DM & Comment Automation Included</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Instant Automated Replies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Lead Generation via Messenger Ads</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Customer Support Ticketing Integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Personalized Customer Journeys</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Performance Analytics Dashboard</span>
                    </div>
                  </div>
                </div>

                <div className="relative h-full min-h-[550px] md:min-h-[650px]">
                  <img
                    src="/backgroundImages/ai_services.png"
                    alt="Facebook Messenger AI Chatbot"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 4 - Enterprise WhatsApp AI */}
            <div
              className="sticky top-48 bg-gradient-to-br from-orange-50 to-amber-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ zIndex: 40 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-4xl font-bold text-slate-800 mb-3">
                    Enterprise level chatbot solution
                  </h3>
                  <p className="text-lg text-slate-600 mb-6">
                    For large enterprises with custom needs
                  </p>

                  <div className="mb-8">
                    <span className="text-6xl md:text-7xl font-bold text-slate-700">Custom</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Everything in Facebook Messenger Plan</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Custom Infrastructure & Scalability</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">On-Premise or Private Cloud Deployment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Enterprise-grade Security & Compliance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Dedicated 24/7 Support & SLA Guarantee</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Custom AI Model Training</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Full White-label & API Access</span>
                    </div>
                  </div>
                </div>

                <div className="relative h-full min-h-[550px] md:min-h-[650px]">
                  <img
                    src="/backgroundImages/agent.png"
                    alt="Enterprise level chatbot solution"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
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
    </>
  );
}

export default AIAutomatedChatbot;

