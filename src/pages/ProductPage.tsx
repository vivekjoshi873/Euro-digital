import { motion } from "framer-motion";
import { useState } from "react";
import { Check, ChevronRight, DollarSign, Funnel, MessageCircle, RotateCcw, Trophy } from "lucide-react";
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
  showWebsiteShowcase?: boolean;
  pricingVariant?: "grid" | "stacked" | "spotlight" | "ghl";
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
const ghlRows = [
  { feature: "CRM & PIPELINE MANAGEMENT", replaces: ["HS", ">",], otherTools: "$99/MONTHLY" },
  { feature: "UNLIMITED SALES FUNNELS", replaces: ["CF", "CL"], otherTools: "$297/MONTHLY" },
  { feature: "WEBSITE BUILDER", replaces: ["WP", "WIX", "SS"], otherTools: "$29/MONTHLY" },
  { feature: "SURVEYS & FORMS", replaces: ["SG", "T", "WF", "TF"], otherTools: "$49/MONTHLY" },
  { feature: "EMAIL MARKETING", replaces: [">", "MC", "HS", "CC"], otherTools: "$99/MONTHLY" },
  { feature: "2-WAY SMS MARKETING", replaces: ["AC", "TW", "SM"], otherTools: "$99/MONTHLY" },
  { feature: "BOOKING & APPOINTMENTS", replaces: ["CA", "GC", "A"], otherTools: "$29/MONTHLY" },
  { feature: "WORKFLOW AUTOMATIONS", replaces: [">", "HS", "K"], otherTools: "$169/MONTHLY" },
  { feature: "COURSES/PRODUCTS", replaces: ["KA", "T"], otherTools: "$99/MONTHLY" },
  { feature: "CALL TRACKING", replaces: ["CT", "WC"], otherTools: "$49/MONTHLY" },
  { feature: "REPUTATION MANAGEMENT", replaces: ["BI", "SM", "BR"], otherTools: "$159/MONTHLY" },
  { feature: "TRACKING & ANALYTICS", replaces: ["GA"], otherTools: "$299/MONTHLY" },
  { feature: "COMMUNITIES", replaces: ["SK", "M", "C"], otherTools: "$89/MONTHLY" },
  { feature: "DOCUMENT SIGNING", replaces: ["ED", "DS"], otherTools: "$47/MONTHLY" },
  { feature: "GRAY-LABELED MOBILE APP", replaces: [], otherTools: "UNIQUE TO HIGHLEVEL" },
];
const ghlIconColors = [
  "bg-orange-500",
  "bg-blue-500",
  "bg-cyan-500",
  "bg-indigo-500",
  "bg-sky-500",
  "bg-zinc-900",
  "bg-purple-500",
  "bg-amber-500",
  "bg-red-500",
  "bg-stone-700",
  "bg-emerald-500",
  "bg-pink-500",
  "bg-teal-600",
  "bg-slate-700",
  "bg-lime-500",
  "bg-blue-700",
];
const growthTabs = [
  {
    name: "Capture",
    color: "yellow",
    icon: "funnel",
    title: "Get more leads in the door",
    description: "Attract the right people, turn interest into leads and keep your pipeline full.",
    tools: [
      "CRM",
      "Voice AI",
      "Forms, Surveys & Quizzes",
      "Websites, Funnels & Landing Pages",
      "Webinar Funnels",
      "Chat Widget / Conversation AI",
      "Call Tracking",
      "Inbound SMS & Social DMs",
      "Social Planner",
      "Missed Call Text-Back",
      "AI Biz Card Scanner",
      "QR Codes",
      "Prospecting Tool",
      "Ad Manager (Google/FB/Insta Ads)",
    ],
  },
  {
    name: "Nurture",
    color: "blue",
    icon: "message",
    title: "Build relationships that convert",
    description: "The tools you need to follow up, stay relevant and build trust.",
    tools: [
      "Conversation AI",
      "Consolidated conversation stream (SMS, Messenger, Instagram DM, Whatsapp, Livechat)",
      "Sales Pipelines",
      "Workflows & Automations",
      "CalendarsText Snippets",
      "Appointment Reminders",
      "Ringless Voicemail",
      "Mobile App (with video messages)",
      "Automated Outbound Call Connect",
    ],
  },
  {
    name: "Close",
    color: "green",
    icon: "dollar",
    title: "Close deals with less back-and-forth",
    description: "Remove friction and turn conversations into paying customers.",
    tools: [
      "Lead Scoring",
      "Estimate & Proposals",
      "Invoicing",
      "Payment Integrations",
      "Paid Calendars",
      "Order Forms / Upsells / Downsells",
      "Membership Offers / Courses (paid content access)",
      "One-click Upsell Funnels",
      "Text-2-Pay",
      "Tap-2-Pay",
      "Gift Cards",
      "Loyalty programs",
    ],
  },
  {
    name: "Evangelize",
    color: "cyan",
    icon: "trophy",
    title: "Create fans, not just customers",
    description: "Everything you need to turn happy customers into reviews, referrals and buzz.",
    tools: [
      "Reputation Management",
      "Automated Review Requests",
      "Affiliate Manager (for referral tracking)",
      "Website Review Widgets",
      "Video Review Capture",
      "Video Review Widgets",
      "Workflow Automations for Recommendation Requests",
      "AI Review Reply",
      "Social Planner Auto-Review Posts",
      "Communities",
      "Loyalty Programs",
    ],
  },
  {
    name: "Reactivate",
    color: "yellow",
    icon: "reactivate",
    title: "Get back on their radar",
    description: "Re-engage past leads and customers with timely messages that drive repeat sales.",
    tools: [
      "Broadcast Campaigns - Email/SMS/Whatsapp/Messenger",
      "Smart Lists / Segmentation",
      "Automated Birthday Campaigns",
      "Automated Seasonal Campaigns",
      "Database Reactivation Templates",
      "Newsletter Automation",
      "Content AI",
      "Loyalty Programs",
    ],
  },
];

function GrowthSolutionSection() {
  const [activeTab, setActiveTab] = useState(growthTabs[0]);

  const activeClass =
    activeTab.color === "blue"
      ? "border-[#26a8ff] bg-[#4ab2f2] shadow-[0_0_34px_rgba(74,178,242,0.45)]"
      : activeTab.color === "green"
        ? "border-[#1fcf5b] bg-[#35d962] shadow-[0_0_34px_rgba(53,217,98,0.42)]"
        : activeTab.color === "cyan"
          ? "border-[#46c6ff] bg-[#a7e3ff] shadow-[0_0_34px_rgba(70,198,255,0.35)]"
          : "border-yellow-400 bg-yellow-300 shadow-[0_0_34px_rgba(250,204,21,0.62)]";

  const iconClass =
    activeTab.color === "blue"
      ? "bg-[#2f9af4] text-white"
      : activeTab.color === "green"
        ? "bg-[#18d84d] text-white"
        : activeTab.color === "cyan"
          ? "bg-[#79d5ff] text-slate-950"
          : "bg-yellow-300 text-slate-950";

  const renderIcon = () => {
    if (activeTab.icon === "message") return <MessageCircle className="h-5 w-5 stroke-[2.5]" />;
    if (activeTab.icon === "dollar") return <DollarSign className="h-6 w-6 stroke-[2.5]" />;
    if (activeTab.icon === "trophy") return <Trophy className="h-5 w-5 stroke-[2.5]" />;
    if (activeTab.icon === "reactivate") return <RotateCcw className="h-5 w-5 stroke-[2.5]" />;
    return <Funnel className="h-5 w-5 stroke-[2.5]" />;
  };

  const renderVisual = () => {
    if (activeTab.name === "Nurture") {
      return (
        <div className="absolute left-[8%] top-[32%] flex w-[86%] items-start gap-3">
          <div className="rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm font-black text-blue-500 shadow-sm">
            Contact Created
            <div className="text-xs text-slate-500">New Lead Added</div>
          </div>
          <div className="rounded-lg border border-dashed border-blue-200 bg-blue-50 px-7 py-5 text-sm font-black text-blue-500">
            Add New Trigger
          </div>
        </div>
      );
    }

    if (activeTab.name === "Close") {
      return (
        <div className="absolute left-[36%] top-[35%] w-48 rounded-xl bg-white text-slate-900 shadow-xl">
          <div className="grid grid-cols-2 border-b border-slate-200 px-5 py-3 text-xs font-black text-slate-400">
            <span>Amount</span>
            <span>Status</span>
          </div>
          <div className="grid grid-cols-2 items-center px-5 py-6">
            <span className="text-base font-black">$435.00</span>
            <span className="w-fit rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-sm font-black text-emerald-500">
              Paid
            </span>
          </div>
        </div>
      );
    }

    if (activeTab.name === "Evangelize") {
      return (
        <div className="absolute left-[42%] top-[20%] flex w-48 flex-col items-center">
          <div className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-xs font-black text-slate-500 shadow-sm">
            Payment Received
          </div>
          <div className="h-9 w-px bg-slate-200" />
          <div className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-xs font-black text-slate-500 shadow-sm">
            Wait <span className="ml-2 text-[10px] text-slate-400">30 mins</span>
          </div>
        </div>
      );
    }

    if (activeTab.name === "Reactivate") {
      return (
        <div className="absolute left-[34%] top-[18%] flex w-48 flex-col items-center">
          <div className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-xs font-black text-slate-500 shadow-sm">
            <span className="text-blue-500">Trigger</span>
            <br />
            Contact Tag
          </div>
          <div className="h-12 w-px bg-slate-200" />
          <div className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-xs font-black text-slate-500 shadow-sm">
            Free Whitening Offer
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          Your all-in-one solution for
          <span className="block text-slate-700">business growth</span>
        </h2>
        <p className="mt-4 text-lg font-medium text-slate-500">
          All the tools you need in one AI-powered platform
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {growthTabs.map((tab) => (
            <button
              key={tab.name}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`min-w-[132px] rounded-md border px-8 py-3 text-sm font-black text-slate-900 transition-all ${
                activeTab.name === tab.name ? activeClass : "border-slate-200 bg-slate-50 hover:bg-white"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="mt-9 rounded-[24px] border border-slate-200 bg-[#f7f7f8] px-7 py-8 text-left md:px-14 md:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className={`mb-7 flex h-11 w-11 items-center justify-center rounded-full ${iconClass}`}>
                {renderIcon()}
              </div>
              <h3 className="max-w-xl text-3xl font-black leading-tight text-slate-900 md:text-[28px]">
                {activeTab.title}
              </h3>
              <p className="mt-6 max-w-lg text-base font-medium leading-snug text-slate-600">
                {activeTab.description}
              </p>

              <div className="mt-6 grid gap-x-10 gap-y-1 text-sm font-medium text-slate-600 sm:grid-cols-2">
                {activeTab.tools.map((tool) => (
                  <div key={tool} className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                      <Check className="h-2.5 w-2.5 stroke-[4]" />
                    </span>
                    <span className="min-w-0 leading-snug">{tool}</span>
                  </div>
                ))}
              </div>

              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex">
                <button className="inline-flex items-center gap-1 rounded-lg bg-[#06233d] px-10 py-4 text-sm font-black text-white transition-colors hover:bg-[#0b3154]">
                  Start 14 Day Free Trial
                  <ChevronRight className="h-4 w-4 stroke-[3]" />
                </button>
              </a>
            </div>

            <div className="relative min-h-[315px] overflow-hidden bg-gradient-to-r from-transparent via-white/40 to-transparent">
              {activeTab.name === "Capture" ? (
                <>
              <div className="absolute left-[11%] top-[25%] flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-xl shadow-sm">
                  ↑↑
                </span>
                <div className="rounded-lg bg-[#315ee8] px-4 py-3 text-sm font-bold leading-snug text-white shadow-lg">
                  Sorry we missed your call!
                  <br />
                  Want to book an appointment?
                </div>
              </div>

              <div className="absolute right-[5%] top-[47%] flex items-center gap-3">
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-sm">
                  Yes, is 2 PM next Tuesday free?
                </div>
                <img
                  src="/backgroundImages/avatar.png"
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="absolute left-[11%] top-[64%] flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-xl shadow-sm">
                  ↑↑
                </span>
                <div className="rounded-lg bg-[#315ee8] px-4 py-3 text-sm font-bold leading-snug text-white shadow-lg">
                  Yes! You're all set for 2 PM
                  <br />
                  next Tuesday. Thank you!
                </div>
              </div>
                </>
              ) : (
                renderVisual()
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GhlPricingTable() {
  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-b-2xl border-t-[7px] border-[#0f8bd8] bg-[#061421] px-4 pb-14 pt-8 text-white shadow-2xl md:px-12 md:pb-16">
      <h2 className="mb-8 text-center text-3xl font-black tracking-wide text-slate-100 md:text-[34px]">
        What's included with HighLevel
      </h2>

      <div className="min-w-[760px]">
        <div className="grid grid-cols-[1.45fr_1.05fr_1.1fr_0.65fr] items-center px-5 pb-4 text-lg font-black tracking-wide text-slate-100">
          <div>Features</div>
          <div>Replaces</div>
          <div>Other tools</div>
          <div className="text-right text-sm font-black">
            <span className="text-yellow-300">↑</span><span className="text-cyan-300">↑</span><span className="text-green-400">↑</span>HighLevel
          </div>
        </div>

        <div className="space-y-2">
          {ghlRows.map((row, rowIndex) => (
            <div
              key={row.feature}
              className="grid min-h-[38px] grid-cols-[1.45fr_1.05fr_1.1fr_0.65fr] items-center rounded-[9px] border border-white/7 bg-[#121f2b] px-5 text-[11px] font-black tracking-wide text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
            >
              <div className="border-r border-white/8 pr-4">{row.feature}</div>
              <div className="flex items-center gap-2 border-r border-white/8 px-5">
                {row.replaces.map((logo, logoIndex) => (
                  <span
                    key={`${row.feature}-${logo}-${logoIndex}`}
                    className={`flex h-6 w-6 items-center justify-center rounded-full border-2 border-white text-[9px] font-black leading-none text-white shadow-md ${ghlIconColors[(rowIndex + logoIndex) % ghlIconColors.length]}`}
                  >
                    {logo}
                  </span>
                ))}
              </div>
              <div className="border-r border-white/8 px-7">{row.otherTools}</div>
              <div className="flex justify-end">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#162a34] text-[#1fc2ee] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                  <Check className="h-4 w-4 stroke-[3]" />
                </span>
              </div>
            </div>
          ))}

          <div className="grid min-h-[42px] grid-cols-[1.45fr_1.05fr_1.1fr_0.65fr] items-center rounded-[9px] border border-white/7 bg-[#121f2b] px-5 text-[12px] font-black tracking-wide text-slate-100">
            <div className="border-r border-white/8 pr-4" />
            <div className="border-r border-white/8 px-5 text-center text-[#1fc2ee]">OVERALL PRICE</div>
            <div className="border-r border-white/8 px-7">$1,600+ PER MONTH</div>
            <div className="flex items-end justify-end gap-1 text-[#1fc2ee]">
              <span className="pb-3 text-[10px]">$</span>
              <span className="text-3xl leading-none">97</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
          <button className="inline-flex items-center gap-1 rounded-md bg-white px-8 py-4 text-xs font-bold text-slate-950 transition-colors hover:bg-slate-100">
            Start 14 Day Free Trial
            <ChevronRight className="h-4 w-4 stroke-[3]" />
          </button>
        </a>
      </div>
    </div>
  );
}

const websiteShowcases = [
  {
    label: "Business Coaching",
    image: "/servicesImages/image.png",
    description: "High-ticket coaching landing page",
  },
  {
    label: "Creative Agency",
    image: "/servicesImages/ai-builder.png",
    description: "Bold brand and agency website",
  },
  {
    label: "Dental Growth",
    image: "/servicesImages/ai-website-builder.png",
    description: "Local service growth website",
  },
];

function WebsiteBuilderShowcase() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-sky-700">
            Features &amp; Benefits
          </span>
          <h2 className="mt-5 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
            Build faster. Launch smarter. Convert more.
          </h2>
          <p className="mt-4 text-lg font-medium leading-8 text-slate-600">
            From a single prompt to a full, branded site—templates, multi-page flows, prompt-based edits, and CRM-ready handoff are built in, so you spend less time building and more time growing.
          </p>  
        </div>

        <div className="grid gap-7 lg:grid-cols-3">
          {websiteShowcases.map((site) => (
            <motion.div
              key={site.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)]"
            >
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                <span>{site.label}</span>
                <span>Built by AI</span>
              </div>

              <div className="bg-slate-100">
                <img
                  src={site.image}
                  alt={`${site.label} website example`}
                  className="h-[360px] w-full object-cover object-top md:h-[440px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="px-5 py-5">
                <p className="text-sm font-bold text-slate-900">{site.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
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
  showWebsiteShowcase = false,
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
            className="grid md:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-14 items-center"
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

            <motion.img
                src={image}
                alt={title}
                className="mx-auto block h-auto w-full max-h-[480px] rounded-2xl object-contain object-center shadow-2xl sm:max-h-[540px] md:max-h-[640px] lg:max-h-[720px] xl:max-h-[780px]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1280px) 55vw, (min-width: 768px) 50vw, 100vw"
              />
          </motion.div>
        </div>
      </section>

      {showWebsiteShowcase && <WebsiteBuilderShowcase />}

      {pricingVariant === "ghl" && <GrowthSolutionSection />}

      <section id="pricing" className="py-16 md:py-24 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {pricingVariant !== "ghl" && (
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
          )}

          {pricingVariant === "ghl" ? (
            <div className="space-y-12">
              <div className="-mx-6 overflow-x-auto px-6 pb-2 md:mx-0 md:px-0">
                <GhlPricingTable />
              </div>

              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl">
                  {pricingTitle}
                </h2>
                {pricingSubtitle && (
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    {pricingSubtitle}
                  </p>
                )}
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {plans.map((plan) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`flex h-full flex-col rounded-2xl border bg-white p-7 shadow-sm transition-all ${
                      plan.highlighted
                        ? "border-[#18b6e3] shadow-[0_20px_70px_rgba(24,182,227,0.18)]"
                        : "border-slate-200 hover:shadow-md"
                    }`}
                  >
                    {plan.highlighted && (
                      <span className="mb-5 w-fit rounded-full bg-[#18b6e3] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white">
                        Popular
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                    <p className="mt-3 min-h-[56px] text-[15px] leading-6 text-slate-600">
                      {plan.description}
                    </p>

                    <div className="mt-6">
                      <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                      {plan.subprice ? (
                        <p className="mt-2 text-sm font-medium text-slate-500">{plan.subprice}</p>
                      ) : plan.price !== "Custom" ? (
                        <p className="mt-2 text-sm font-medium text-slate-500">per month, paid yearly</p>
                      ) : null}
                    </div>

                    <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-7">
                      <button
                        className={`w-full rounded-lg px-5 py-3 text-sm font-bold transition-colors cursor-pointer ${
                          plan.highlighted
                            ? "bg-[#18b6e3] text-white hover:bg-[#109dca]"
                            : "border border-slate-300 bg-white text-slate-950 hover:bg-slate-50"
                        }`}
                      >
                        {plan.price === "Custom" ? "Contact Sales" : "Buy now"}
                      </button>
                    </a>

                    <div className="mt-7 border-t border-slate-200 pt-6">
                      <p className="mb-4 text-sm font-bold text-slate-900">Plan highlights:</p>
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                            <Check className="mt-1 h-4 w-4 shrink-0 text-[#18b6e3] stroke-[3]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : pricingVariant === "stacked" ? (
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
