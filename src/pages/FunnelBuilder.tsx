import ProductPage from "./ProductPage";

function FunnelBuilder() {
  return (
    <ProductPage
      id="funnel-builder"
      title="AI Funnel Builder"
      description="Build high-converting landing pages, lead flows, booking journeys, and offer funnels without stitching together a stack of disconnected tools."
      image="/servicesImages/ai-funnel.png"
      video="https://48yfcqwona.ucarecd.net/6cc782ca-d65c-42ef-8ce2-cfae21e8e7e4/Irfan2.mp4"
      poster="/servicesImages/ai-funnel.png"
      overlayTitle="Ready to Build Your Funnel?"
      showFAQs
      features={[
        "Drag-and-drop landing pages",
        "Lead capture and form automation",
        "Booking and consultation flows",
        "Campaign tracking and conversion insights",
      ]}
      detailedDescription="AI Funnel Builder helps teams launch campaigns faster while keeping every lead, click, and follow-up connected."
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
