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
  subprice?: string;
  image?: string;
};

type ProductPageProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  video: string;
  features: string[];
  detailedDescription: string;
  overlayTitle: string;
  plans: ProductPlan[];
  showFAQs?: boolean;
  pricingVariant?: "grid" | "stacked" | "spotlight";
  pricingTitle?: string;
  pricingSubtitle?: string;
};

const bookingUrl = "https://link.quickadpro.com/widget/booking/56bGknArJkPUj93VXRrj";
const stackedCardThemes = [
  "from-cyan-50 to-blue-100",
  "from-purple-50 to-pink-100",
  "from-green-50 to-teal-100",
  "from-orange-50 to-amber-100",
];
const stackedTopOffsets = ["md:top-24", "md:top-32", "md:top-40", "md:top-48"];

function ProductPage({
  id,
  title,
  description,
  image,
  video,
  features,
  detailedDescription,
  overlayTitle,
  plans,
  showFAQs = false,
  pricingVariant = "grid",
  pricingTitle = "Pricing",
  pricingSubtitle,
}: ProductPageProps) {
  const faqs = showFAQs ? getFAQsByServiceId(id) : undefined;

  return (
    <>
      <ServiceHeroVideo
        videoUrl={video}
        overlayTitle={overlayTitle}
        ctaLink={bookingUrl}
      />

      <section
        className="py-16 md:py-24"
        style={{ background: "linear-gradient(to right, white 50%, rgba(224, 242, 254, 0.6) 50%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-12 items-center"
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
                    <span className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>
                      •
                    </span>
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
                className="w-full h-[280px] rounded-2xl object-cover shadow-2xl md:h-[360px] lg:h-[440px]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-24 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              {pricingTitle}
            </h2>
            {pricingSubtitle && (
              <p className="text-lg text-slate-600 max-w-3xl mt-4">
                {pricingSubtitle}
              </p>
            )}
          </div>

          {pricingVariant === "stacked" ? (
            <div className="space-y-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`md:sticky ${stackedTopOffsets[index] ?? "md:top-24"} bg-gradient-to-br ${stackedCardThemes[index % stackedCardThemes.length]} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
                  style={{ zIndex: 10 + index * 10 }}
                >
                  <div className="grid md:grid-cols-2 gap-0 items-stretch">
                    <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                      {plan.highlighted && (
                        <div className="inline-flex w-fit rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white mb-6">
                          Recommended for growing teams
                        </div>
                      )}

                      <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                        {plan.name}
                      </h3>
                      <p className="text-lg text-slate-700 mb-8 max-w-xl">
                        {plan.description}
                      </p>

                      <div className="mb-8">
                        <span className="text-5xl md:text-7xl font-bold text-slate-800">{plan.price}</span>
                        {plan.subprice ? (
                          <div className="text-base text-slate-600 mt-2">{plan.subprice}</div>
                        ) : plan.price !== "Custom" ? (
                          <div className="text-base text-slate-600 mt-2">per month, paid yearly</div>
                        ) : null}
                      </div>

                      <div className="flex flex-wrap gap-3 mb-8">
                        <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                          <button className="bg-[#18b6e3] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors cursor-pointer">
                            {plan.price === "Custom" ? "Contact Sales" : "Buy now"}
                          </button>
                        </a>
                        <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                          <button className="bg-white text-slate-900 border border-slate-300 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-slate-50 transition-colors cursor-pointer">
                            Request a Demo
                          </button>
                        </a>
                      </div>

                      <div className="space-y-4">
                        {plan.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <span className="text-green-500 text-2xl font-bold">✓</span>
                            <span className="text-slate-700 text-lg">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="hidden md:block min-h-[420px]">
                      <img
                        src={plan.image ?? "/backgroundImages/GHL.png"}
                        alt={`${plan.name} visual`}
                        className="h-full w-full object-cover object-center"
                        loading="lazy"
                        decoding="async"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : pricingVariant === "spotlight" ? (
            <div className="relative rounded-[44px] bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.16),_transparent_58%)] px-5 pb-8 pt-12 md:px-8 md:pb-10 md:pt-14 lg:px-10">
              <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
                {plans.map((plan) => {
                  const isHighlighted = !!plan.highlighted;

                  return (
                    <motion.div
                      key={plan.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className={`relative flex h-full flex-col overflow-hidden rounded-[30px] border shadow-[0_24px_80px_rgba(15,23,42,0.10)] ${isHighlighted
                        ? "border-[#1d8fff] bg-[#102b47] text-white"
                        : "border-[#d8e2ef] bg-white text-slate-900"
                        }`}
                    >
                      {isHighlighted && (
                        <div className="absolute left-1/2 top-5 -translate-x-1/2 rounded-full bg-[#1d8fff] px-10 py-3 text-sm font-extrabold uppercase tracking-[0.26em] text-white shadow-lg">
                          Popular
                        </div>
                      )}

                      <div className={`flex h-full flex-col px-8 pb-8 ${isHighlighted ? "pt-24 md:pt-28" : "pt-12 md:pt-14"} md:px-10 md:pb-10`}>
                        <div className="mb-8 flex justify-center">
                          <span className={`rounded-[18px] px-7 py-3 text-xl font-bold ${isHighlighted
                            ? "bg-white/10 text-white"
                            : "bg-slate-100 text-slate-800"
                            }`}>
                            {plan.name}
                          </span>
                        </div>

                        <div className="mb-5 text-center">
                          <div className="flex items-end justify-center gap-2 md:gap-3">
                            <span className={`text-6xl font-black leading-none md:text-7xl ${isHighlighted ? "text-white" : "text-slate-950"}`}>
                              {plan.price}
                            </span>
                            {plan.price !== "Custom" && (
                              <span className={`pb-1.5 text-xl font-medium md:text-2xl ${isHighlighted ? "text-white/90" : "text-slate-700"}`}>
                                /Month
                              </span>
                            )}
                          </div>
                          {plan.subprice && (
                            <p className={`mt-4 text-sm font-medium ${isHighlighted ? "text-white/70" : "text-slate-500"}`}>
                              {plan.subprice}
                            </p>
                          )}
                        </div>

                        <p className={`mx-auto mb-8 max-w-[18rem] text-center text-lg leading-8 font-medium ${isHighlighted ? "text-white/90" : "text-slate-700"}`}>
                          {plan.description}
                        </p>

                        <div className="mb-10 space-y-0">
                          {plan.features.map((feature) => (
                            <div
                              key={feature}
                              className={`border-t px-4 py-6 text-center text-[20px] leading-8 font-semibold ${isHighlighted
                                ? "border-white/10 text-white"
                                : "border-slate-200 text-slate-900"
                                }`}
                            >
                              {feature}
                            </div>
                          ))}
                        </div>

                        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-auto block">
                          <button
                            className={`w-full rounded-2xl px-6 py-4 text-lg font-bold transition-colors cursor-pointer ${isHighlighted
                              ? "bg-white text-[#1d8fff] hover:bg-slate-100"
                              : "bg-[#1d8fff] text-white hover:bg-[#0f7ce0]"
                              }`}
                          >
                            {plan.price === "Custom" ? "Contact Sales" : "Start Your Trial"}
                          </button>
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ) : (
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
                      {plan.subprice ? (
                        <p className="text-sm text-slate-500 mt-1">{plan.subprice}</p>
                      ) : plan.price !== "Custom" ? (
                        <p className="text-sm text-slate-500 mt-1">per month, paid yearly</p>
                      ) : null}
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
          )}
        </div>
      </section>

      {faqs && <FAQ faqs={faqs.faqs} subtitle={faqs.subtitle} />}
    </>
  );
}

export default ProductPage;
