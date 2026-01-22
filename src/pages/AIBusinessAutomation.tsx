import { motion } from "framer-motion";
import FAQ from "../components/FAQ";
import { getFAQsByServiceId } from "../data/faqData";

function AIBusinessAutomation() {
  const serviceData = {
    id: "ai-business-automation",
    title: "AI Business Automation",
    description:
      "EuroDigital's AI Business Automation solutions are built to eliminate repetitive tasks and optimize your internal workflows. We analyze your business processes and design automation systems that save time, reduce errors, and allow your team to focus on high-value work.",
    video: "/videos/irfan1.mp4",
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
            className="grid md:grid-cols-[49%_60%] gap-12 items-center"
          >
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-semibold " style={{ color: 'var(--primary-navy)' }}>
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
                        <span className="text-xs mt-1 " style={{ color: 'var(--text-tertiary)' }}>●</span>
                        <span style={{ color: 'var(--text-secondary)', }}>{feature}</span>
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
              <motion.video
                src={serviceData.video}
                className="w-full h-auto rounded-2xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                autoPlay
                loop
                muted
                controls
                playsInline
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Width Video Section */}
      <section className="w-full max-w-[1425px] mx-auto rounded-3xl overflow-hidden mt-10 shadow-xl">
        <img
          src="/servicesImages/Ai-business-automation.png"
          alt="AI Business Automation"
          className="w-full h-auto object-cover"
          style={{ maxHeight: '800px', width: '100%' }}
        />
      </section>

      {/* Pricing Cards Section */}
      <section id="pricing" className="py-16 md:py-16 bg-gradient-to-b from-white to-cyan-50/30 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Heading with Billing Toggle */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 md:mb-20 ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight ">
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
              <div className="space-y-4 mb-8 ">
                <button
                  className="w-full rounded-lg bg-[#40BEF1] hover:bg-cyan-500 text-black font-semibold px-6 py-3 cursor-pointer transition-all hover:shadow-lg"
                >
                  Learn More
                </button>
                <div className="flex items-start gap-3 mt-10 text-center">
                  <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                  <span className="text-gray-600 text-base">Basic dashboard</span>
                </div>
                <div className="flex items-start gap-3 text-center">
                  <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                  <span className="text-gray-600 text-base">Limited API access</span>
                </div>
                <div className="flex items-start gap-3 text-center">
                  <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                  <span className="text-gray-600 text-base">Email Support</span>
                </div>
                <div className="flex items-start gap-3 text-center">
                  <span className="text-[#6FAA2D] text-xl font-bold">✓</span>
                  <span className="text-gray-600 text-base">2 Agents</span>
                </div>
                <div className="flex items-start gap-3 text-center">
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
    </>
  );
}

export default AIBusinessAutomation;

