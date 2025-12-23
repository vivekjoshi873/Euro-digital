import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import { getFAQsByServiceId } from "../data/faqData";

function AIAutomatedChatbot() {
  const serviceData = {
    id: "ai-automated-chatbot",
    title: "AI Automated Chatbot",
    description:
      "EuroDigital’s AI Voice Agents manage real conversations with customers using natural, human-like speech. These agents can handle calls efficiently while maintaining a professional tone and consistency.",
    image: "/backgroundImages/ai_bussiness.png",
    features: [
      "Inbound customer inquiries",
      "Outbound follow-up and reminder calls",
      "Appointment confirmations",
      "Support and service-related conversations",
    ],
    detailedDescription: "Our AI voice agents help businesses reduce call handling costs while ensuring no customer inquiry goes unanswered.",
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
            alt="AI Automated Chatbot"
            className="w-full h-auto object-cover"
            style={{ maxHeight: '600px' }}
          />
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

export default AIAutomatedChatbot;

