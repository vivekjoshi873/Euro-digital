import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import { getFAQsByServiceId } from "../data/faqData";

function AIBusinessAutomation() {
  const serviceData = {
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
    detailedDescription: "Each automation is customised to your business needs, ensuring efficiency without disrupting your current operations.",
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
            alt="AI Business Automation"
            className="w-full h-auto object-cover"
            style={{ maxHeight: '600px' }}
          />
        </section>

        {/* Comparison Table Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[1325px] mx-auto px-6 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: 'var(--primary-navy)' }}>
              Compare plans
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-3 text-lg font-semibold" style={{ color: 'var(--primary-navy)' }}>Features</th>
                    <th className="text-left py-4 px-8  text-lg font-semibold" style={{ color: 'var(--primary-navy)' }}>Starter</th>
                    <th className="text-left py-4 px-8 text-lg font-semibold" style={{ color: 'var(--primary-navy)' }}>Professional</th>
                    <th className="text-left py-4 px-8 text-lg font-semibold" style={{ color: 'var(--primary-navy)' }}>Growing</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Basic Dashboard */}
                  <tr className="border-b border-gray-200">
                    <td className="py-6 px-4 text-black">Basic Dashboard</td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                  </tr>

                  {/* Advanced dashboard */}
                  <tr className="border-b border-gray-200">
                    <td className="py-6 px-4 text-black">Advanced dashboard</td>
                    <td className="py-6 px-4">
                      <span className="text-black font-semibold ">—</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                  </tr>

                  {/* Full-featured dashboard */}
                  <tr className="border-b border-gray-200">
                    <td className="py-6 px-4 text-black">Full-featured dashboard</td>
                    <td className="py-6 px-4">
                      <span className="text-black font-semibold ">—</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-gray-400">—</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                  </tr>

                  {/* Limited API access */}
                  <tr className="border-b border-gray-200">
                    <td className="py-6 px-4 text-black">Limited API access</td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-black font-semibold ">—</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-black font-semibold ">—</span>
                    </td>
                  </tr>

                  {/* Priority API access */}
                  <tr className="border-b border-gray-200">
                    <td className="py-6 px-4 text-black">Priority API access</td>
                    <td className="py-6 px-4">
                      <span className="text-black font-semibold ">—</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                  </tr>

                  {/* Unlimited API calls */}
                  <tr className="border-b border-gray-200">
                    <td className="py-6 px-4 text-black">Unlimited API calls</td>
                    <td className="py-6 px-4">
                        <span className="text-black font-semibold ">—</span>
                    </td>
                    <td className="py-6 px-4">
                        <span className="text-black font-semibold ">—</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                  </tr>

                  {/* Email support */}
                  <tr className="border-b border-gray-200">
                    <td className="py-6 px-4 text-black">Email support</td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-6 px-4 text-black">Live chat support</td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-6 px-4 text-black">24/7 dedicated support</td>
                    <td className="py-6 px-4">
                        <span className="text-black font-semibold ">—</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">—</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-6 px-4 text-black">Agents</td>
                    <td className="py-6 px-4">
                      <span className="text-black text-md">2 Agents</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-black text-md">5 Agents</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-black text-md">5 + Customisation agents</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-6 px-4 text-black">Basic analytics</td>
                    <td className="py-6 px-4">
                          <span className="text-black font-semibold ">—</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-6 px-4 text-black">Advanced analytics</td>
                    <td className="py-6 px-4">
                      <span className="text-black text-md">—</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-6 px-4 text-black">Custom branding</td>
                    <td className="py-6 px-4">
                            <span className="text-black font-semibold ">—</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-6 px-4 text-black">Custom AI models</td>
                    <td className="py-6 px-4">
                          <span className="text-black font-semibold ">—</span>
                    </td>
                    <td className="py-6 px-4">
                          <span className="text-black font-semibold ">—</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-6 px-4 text-black">Call recording</td>
                    <td className="py-6 px-4">
                          <span className="text-black font-semibold ">—</span>
                    </td>
                    <td className="py-6 px-4">
                          <span className="text-black font-semibold ">—</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-6 px-4 text-black">SLA guarantee</td>
                    <td className="py-6 px-4">
                      <span className="text-black font-semibold ">—</span>
                    </td>
                    <td className="py-6 px-4">
                          <span className="text-black font-semibold ">—</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-6 px-4 text-black">Priority processing</td>
                    <td className="py-6 px-4">
                            <span className="text-black font-semibold ">—</span>
                    </td>
                    <td className="py-6 px-4">
                          <span className="text-black font-semibold ">—</span>
                    </td>
                    <td className="py-6 px-4">
                      <span className="text-[#6FAA2D] text-2xl">✓</span>
                    </td>
                  </tr>
                </tbody>
              </table>
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

export default AIBusinessAutomation;

