import { motion } from "framer-motion";
import FAQ from "../components/FAQ";
import ServiceHeroVideo from "../components/ServiceHeroVideo";
import { getFAQsByServiceId } from "../data/faqData";

type ProductPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

type ProductPageProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  video: string;
  poster: string;
  features: string[];
  detailedDescription: string;
  overlayTitle: string;
  plans: ProductPlan[];
  showFAQs?: boolean;
};

const bookingUrl = "https://link.quickadpro.com/widget/booking/56bGknArJkPUj93VXRrj";

function ProductPage({
  id,
  title,
  description,
  image,
  video,
  poster,
  features,
  detailedDescription,
  overlayTitle,
  plans,
  showFAQs = false,
}: ProductPageProps) {
  const faqs = showFAQs ? getFAQsByServiceId(id) : undefined;

  return (
    <>
      <ServiceHeroVideo
        videoUrl={video}
        poster={poster}
        overlayTitle={overlayTitle}
        ctaLink={bookingUrl}
      />

      <section className="py-16 md:py-24" style={{ background: "linear-gradient(to right, white 50%, rgba(224, 242, 254, 0.6) 50%)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-semibold" style={{ color: "var(--primary-navy)" }}>
                {title}
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {description}
              </p>

              <ul className="space-y-2 ml-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>●</span>
                    <span style={{ color: "var(--text-secondary)" }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-base leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
                {detailedDescription}
              </p>

              <div className="flex gap-4 pt-4">
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                  <button
                    className="rounded-full text-black font-medium px-6 py-2 shadow-lg cursor-pointer"
                    style={{ backgroundColor: "var(--primary-blue)" }}
                  >
                    Request a Demo
                  </button>
                </a>
              </div>
            </div>

            <div className="relative">
              <motion.img
                src={image}
                alt={title}
                className="w-full h-auto rounded-2xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-24 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Pricing
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`bg-white rounded-xl border border-gray-200 transition-all flex flex-col overflow-hidden ${plan.highlighted ? "shadow-lg hover:shadow-xl relative" : "shadow-sm hover:shadow-md"}`}
              >
                {plan.highlighted && (
                  <div className="bg-[#18b6e3] text-white py-2 px-6 text-center text-[13px] font-extrabold">
                    Recommended for growing teams.
                  </div>
                )}

                <div className={`p-8 pb-4 ${plan.highlighted ? "" : "mt-11"}`}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{plan.name}</h3>
                  <p className="text-[15px] text-slate-600 mb-6 min-h-[40px]">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <p className="text-sm text-slate-500 mt-1">per month, paid yearly</p>
                    )}
                  </div>

                  <div className="flex gap-3 mb-8">
                    <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                      <button className="bg-[#18b6e3] text-white px-5 py-2 rounded font-semibold text-sm transition-colors cursor-pointer">
                        {plan.price === "Custom" ? "Contact Sales" : "Buy now"}
                      </button>
                    </a>
                    <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                      <button className="bg-white text-slate-900 border border-slate-300 px-5 py-2 rounded font-semibold text-sm hover:bg-slate-50 transition-colors cursor-pointer">
                        Request a Demo
                      </button>
                    </a>
                  </div>
                </div>

                <div className="px-8 pb-10 flex-grow">
                  <p className="text-sm font-bold text-slate-900 mb-4">Plan highlights:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 items-start text-[14px] text-slate-600">
                        <span className="text-slate-400 font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {faqs && (
        <FAQ
          faqs={faqs.faqs}
          subtitle={faqs.subtitle}
        />
      )}
    </>
  );
}

export default ProductPage;
