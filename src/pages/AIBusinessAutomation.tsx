import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import FAQ from "../components/FAQ";
import { getFAQsByServiceId } from "../data/faqData";

function AIBusinessAutomation() {
  const serviceData = {
    id: "ai-business-automation",
    title: "AI Business Automation",
    description:
      "EuroDigital's AI Business Automation solutions are built to eliminate repetitive tasks and optimize your internal workflows. We analyze your business processes and design automation systems that save time, reduce errors, and allow your team to focus on high-value work.",
    video: "https://48yfcqwona.ucarecd.net/fa36c224-8dc7-4a7c-b9ee-dea56a9ddb94/irfan1.mp4",
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

  const [hasEnded, setHasEnded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <>
      {/* Service Content */}
      <section className="relative w-full max-w-[1425px] mx-auto rounded-3xl overflow-hidden mt-10 shadow-xl group">
        <motion.video
          src={serviceData.video}
          className="w-full h-auto object-cover"
          style={{ maxHeight: '800px', width: '100%' }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          muted
          controls
          playsInline
          onEnded={() => setHasEnded(true)}
          onError={(e) => {
            console.error('Video failed to load:', e);
            console.error('Video URL:', serviceData.video);
            setVideoError(true);
          }}
          onLoadStart={() => console.log('Video loading started...')}
          onLoadedData={() => console.log('Video loaded successfully!')}
        />

        {videoError && (
          <div className="absolute inset-0 flex items-center justify-center bg-red-100 border-2 border-red-500">
            <div className="text-center p-8">
              <p className="text-red-800 font-bold text-xl mb-2">Video Failed to Load</p>
              <p className="text-red-600 text-sm">Please check console for details</p>
              <p className="text-red-600 text-xs mt-2 break-all">{serviceData.video}</p>
            </div>
          </div>
        )}

        <AnimatePresence>
          {hasEnded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] z-10"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 15 }}
                className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Automate Your Business?</h3>
                <a
                  href="https://link.quickadpro.com/widget/booking/56bGknArJkPUj93VXRrj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#18b6e3] text-white font-bold px-10 py-4 text-xl shadow-[0_0_20px_rgba(24,182,227,0.4)] transition-all hover:scale-105 hover:bg-[#159fca] hover:shadow-[0_0_30px_rgba(24,182,227,0.6)]"
                >
                  Book Demo
                </a>
                <button
                  onClick={() => {
                    setHasEnded(false);
                    const video = document.querySelector('video');
                    if (video) video.play();
                  }}
                  className="block mt-4 text-white/70 hover:text-white text-sm font-medium transition-colors underline underline-offset-4 cursor-pointer"
                >
                  Watch Again
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="py-16 md:py-28" style={{ background: 'linear-gradient(to right, white 50%, rgba(224, 242, 254, 0.6) 50%)' }}>
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
                      <li key={idx} className="flex items-start gap-2 ">
                        <span className="text-xs mt-1 " style={{ color: 'var(--text-tertiary)' }}>●</span>
                        <span style={{ color: 'var(--text-secondary)', }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {serviceData.detailedDescription && (
                <p className="text-base leading-relaxed capitalize" style={{ color: 'var(--text-tertiary)' }}>
                  {serviceData.detailedDescription}
                </p>
              )}

              <div className="flex gap-4 pt-4 ">
                <button
                  className="rounded-full text-white font-medium px-6 py-2 shadow-lg transition-all hover:shadow-xl hover:scale-105 "
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
                src="/servicesImages/Ai-business-automation.png"
                alt="AI Business Automation"
                className="w-full h-auto rounded-2xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Heading */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Pay only for what you use
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* AI Startup Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden"
            >
              <div className="p-8 pb-4 mt-11">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">AI Startup</h3>
                <p className="text-[15px] text-slate-600 mb-6 min-h-[40px]">
                  For startups and publishers looking to automate basic operations.
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">$399</span>
                  <p className="text-sm text-slate-500 mt-1">user/month, paid yearly</p>
                </div>

                <div className="flex gap-3 mb-8">
                  <button className="bg-[#18b6e3] text-white px-5 py-2 rounded font-semibold text-sm  transition-colors cursor-pointer">
                    Buy now
                  </button>
                  <button className="bg-white text-slate-900 border border-slate-300 px-5 py-2 rounded font-semibold text-sm hover:bg-slate-50 transition-colors cursor-pointer">
                    Request a Demo
                  </button>
                </div>
              </div>

              <div className="px-8 pb-10 flex-grow">
                <p className="text-sm font-bold text-slate-900 mb-4">Plan highlights:</p>
                <ul className="space-y-3">
                  {[
                    "Basic dashboard",
                    "Limited API access",
                    "Email Support",
                    "2 Agents",
                    "Basic analytics"
                  ].map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start text-[14px] text-slate-600">
                      <span className="text-slate-400 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* AI Business Card (Recommended) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all flex flex-col overflow-hidden relative"
            >
              {/* Dark Header Banner */}
              <div className="bg-[#18b6e3] text-white py-2 px-6 text-center text-[13px] font-extrabold leading-6"
              >
                Save up to 35% when you add AI Business Promotion.
              </div>

              <div className="p-8 pb-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">AI Business</h3>
                <p className="text-[15px] text-slate-600 mb-6 min-h-[40px]">
                  For rapidly scaling startups and publishers needing advanced features.
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">$699</span>
                  <p className="text-sm text-slate-500 mt-1">user/month, paid yearly</p>
                </div>

                <div className="flex gap-3 mb-8">
                  <button className="bg-[#18b6e3] text-white px-5 py-2 rounded font-semibold text-sm  transition-colors cursor-pointer">
                    Buy now
                  </button>
                  <button className="bg-white text-slate-900 border border-slate-300 px-5 py-2 rounded font-semibold text-sm hover:bg-slate-50 transition-colors cursor-pointer">
                    Request a Demo
                  </button>
                </div>
              </div>

              <div className="px-8 pb-10 flex-grow">
                <p className="text-sm font-bold text-slate-900 mb-4">Plan highlights:</p>
                <ul className="space-y-3">
                  {[
                    "Advanced dashboard",
                    "Priority API access",
                    "Live chat support",
                    "5 Agents",
                    "Advanced analytics",
                    "Custom branding",
                    "Call recording"
                  ].map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start text-[14px] text-slate-600">
                      <span className="text-slate-400 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* AI Enterprise Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden"
            >
              <div className="p-8 pb-4 mt-11  ">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">AI Enterprise</h3>
                <p className="text-[15px] text-slate-600 mb-6 min-h-[40px] ">
                  Advanced solutions for large enterprises with custom needs.
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">Custom</span>
                  <p className="text-sm text-slate-500 mt-1">per user/month, tailored quote</p>
                </div>
                <div className="h-4"></div> {/* Spacer to match price line height */}

                <div className="flex gap-3 mb-8">
                  <button className="bg-[#18b6e3] text-white px-5 py-2 rounded font-semibold text-sm transition-colors cursor-pointer">
                    Contact Sales
                  </button>
                  <button className="bg-white text-slate-900 border border-slate-300 px-5 py-2 rounded font-semibold text-sm hover:bg-slate-50 transition-colors cursor-pointer">
                    Request a Demo
                  </button>
                </div>
              </div>

              <div className="px-8 pb-10 flex-grow">
                <p className="text-sm font-bold text-slate-900 mb-4">Plan highlights:</p>
                <ul className="space-y-3">
                  {[
                    "Full-featured dashboard",
                    "Unlimited API calls",
                    "24/7 dedicated support",
                    "5+ Customisation agents",
                    "Advanced analytics",
                    "Custom AI models",
                    "SLA guarantee",
                    "Priority processing"
                  ].map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start text-[14px] text-slate-600">
                      <span className="text-slate-400 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12 items-start">
            {/* Title Column */}
            <div className="md:pt-4">
              <h2 className="text-4xl font-bold text-slate-900">
                Compare plans
              </h2>
            </div>

            {/* Plan Summaries columns */}
            {[
              {
                name: "AI Startup",
                price: "$399",
                sub: "user/month, paid yearly",
                type: "Annual subscription—auto renews",
                tax: "Price does not include tax."
              },
              {
                name: "AI Business",
                price: "$699",
                sub: "user/month, paid yearly",
                type: "Annual subscription—auto renews",
                tax: "Price does not include tax."
              },
              {
                name: "AI Enterprise",
                price: "Custom",
                sub: "per user/month, tailored quote",
                type: "Annual subscription—auto renews",
                tax: "Price does not include tax."
              }
            ].map((plan, i) => (
              <div key={i} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-[15px]">{plan.name}</h3>
                  <div className="text-xl font-bold text-slate-900">{plan.price}</div>
                  <div className="text-sm text-slate-600 font-medium">{plan.sub}</div>
                </div>

                <div className="space-y-0.5">
                  <p className="text-[12px] text-slate-500">({plan.type})</p>
                  <p className="text-[12px] text-slate-500">{plan.tax}</p>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <button className="bg-[#18b6e3] text-white py-2 px-4 rounded font-bold text-sm  transition-colors cursor-pointer">
                    {plan.name === "AI Enterprise" ? "Contact Sales" : "Buy now"}
                  </button>
                  <button className="bg-white text-slate-900 border border-slate-300 py-2 px-4 rounded font-bold text-sm hover:bg-slate-50 transition-colors cursor-pointer">
                    Request a Demo
                  </button>
                </div>
              </div>
            ))}
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