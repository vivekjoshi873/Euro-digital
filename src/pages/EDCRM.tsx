import ProductPage from "./ProductPage";

function EDCRM() {
  return (
    <ProductPage
      id="edcrm"
      title="ED-CRM"
      description="Manage leads, conversations, sales activity, and customer relationships in a GHL-powered workspace built for follow-up speed and visibility."
      image="/servicesImages/ed-Crm.png"
      video="https://48yfcqwona.ucarecd.net/fa36c224-8dc7-4a7c-b9ee-dea56a9ddb94/irfan1.mp4"
      overlayTitle="Ready to Organize Your Sales Pipeline?"
      showFAQs
      features={[
        "Lead and contact management",
        "Pipeline tracking",
        "Task reminders and follow-up automation",
        "Sales activity reporting",
      ]}
      detailedDescription="ED-CRM keeps your sales operation calm, searchable, and accountable with a GHL setup that helps teams respond faster and close more consistently."
      pricingVariant="ghl"
      pricingTitle="GHL Pricing"
      pricingSubtitle="Choose the CRM package that fits your team size, automation needs, and reporting depth."
      plans={[
        {
          name: "Starter",
          price: "$149",
          description: "Perfect for small teams building a clean sales workflow.",
          subprice: "per month, paid yearly",
          features: ["1 Pipeline", "Contact Management", "Task Reminders", "Basic Reporting"],
        },
        {
          name: "Business",
          price: "$299",
          description: "Built for growing teams that need stronger automation.",
          highlighted: true,
          subprice: "per month, paid yearly",
          features: ["Multiple Pipelines", "Workflow Automation", "Team Activity Tracking", "Priority Support"],
        },
        {
          name: "Enterprise",
          price: "Custom",
          description: "For advanced CRM teams with custom workflows and integrations.",
          features: ["Custom Fields", "API Integrations", "Advanced Permissions", "Dedicated Success Manager"],
        },
      ]}
    />
  );
}

export default EDCRM;
