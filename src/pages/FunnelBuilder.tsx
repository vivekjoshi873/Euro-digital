import ProductPage from "./ProductPage";

function FunnelBuilder() {
  return (
    <ProductPage
      id="website-builder"
      title="AI Website Builder"
      description="Launch polished, high-converting websites in minutes—not weeks. Describe what you need, and AI Website Builder assembles landing pages, supporting pages, and offer flows without touching a line of code."
      image="/servicesImages/ai-funnel.png"
      video="https://player.mediadelivery.net/play/661416/02126d15-3c9d-4d94-a8ac-1d8bbc37332e"
      overlayTitle="Ready to Build Your Website?"
      showFAQs
      showWebsiteShowcase
      features={[
        "Generate full landing pages with compelling offers in seconds—no developers required",
        "Start from 10+ proven, conversion-focused templates or build a completely custom layout",
        "Create an entire site in one go—pricing, privacy policy, terms, and more—with consistent branding across every page",
        "Refine headlines, sections, and copy with simple prompts while your design and structure stay intact",
        "Go live with CRM-ready pages that connect straight to your marketing and sales tools—no extra wiring",
      ]}
      detailedDescription="Whether you are launching a new offer or refreshing an existing site, AI Website Builder keeps speed, design quality, and lead capture in one place—so your team can publish faster and convert more visitors into customers."
      plans={[
        {
          name: "Starter",
          price: "$99",
          description: "For simple campaign pages and lead capture.",
          features: ["5 funnels", "Lead forms", "Basic analytics", "Email support"],
        },
        {
          name: "Growth",
          price: "$199",
          description: "For teams running multiple campaigns.",
          highlighted: true,
          features: ["Unlimited funnels", "A/B testing", "CRM handoff", "Priority support"],
        },
        {
          name: "Enterprise",
          price: "Custom",
          description: "For custom funnel systems and advanced teams.",
          features: ["Custom workflows", "Advanced integrations", "Team permissions", "Dedicated support"],
        },
      ]}
    />
  );
}

export default FunnelBuilder;
