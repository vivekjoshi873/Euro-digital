import ProductPage from "./ProductPage";

function EDCRM() {
  return (
    <ProductPage
      id="edcrm"
      title="ED-CRM"
      description="Manage leads, conversations, sales activity, and customer relationships in a GHL-powered workspace built for follow-up speed and visibility."
      image="/servicesImages/ed-Crm.png"
      video="https://48yfcqwona.ucarecd.net/fa36c224-8dc7-4a7c-b9ee-dea56a9ddb94/irfan1.mp4"
      poster="/servicesImages/ed-Crm.png"
      overlayTitle="Ready to Organize Your Sales Pipeline?"
      showFAQs
      features={[
        "Lead and contact management",
        "Pipeline tracking",
        "Task reminders and follow-up automation",
        "Sales activity reporting",
      ]}
      detailedDescription="ED-CRM keeps your sales operation calm, searchable, and accountable with a GHL setup that helps teams respond faster and close more consistently."
      pricingVariant="stacked"
      pricingTitle="GHL Pricing"
      pricingSubtitle="Explore ED-CRM packages in the same stacked scroll style as AI add-on services."
      plans={[
        {
          name: "Basic",
          price: "$149",
          description: "For small teams managing leads and follow-ups.",
          subprice: "per month, paid yearly",
          image: "/backgroundImages/GHL.png",
          features: ["1 pipeline", "Contact management", "Task reminders", "Basic reporting"],
        },
        {
          name: "Business",
          price: "$299",
          description: "For growing teams that need automation.",
          highlighted: true,
          subprice: "per month, paid yearly",
          image: "/backgroundImages/GHL-business.png",
          features: ["Multiple pipelines", "Workflow automation", "Team activity tracking", "Priority support"],
        },
        {
          name: "Enterprise",
          price: "Custom",
          description: "For advanced CRM workflows and custom integrations.",
          image: "/backgroundImages/GHL-custom.png",
          features: ["Custom fields", "API integrations", "Advanced permissions", "Dedicated success manager"],
        },
      ]}
    />
  );
}

export default EDCRM;
