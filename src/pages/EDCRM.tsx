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
          name: "Growth Essentials",
          price: "$29",
          description: "Core marketing and communication tools for growing your customer pipeline.",
          subprice: "per month",
          features: [
            "Email + SMS Marketing",
            "Inbound & outbound calling",
            "Unified Conversations",
            "Social Media Management",
            "Workflow Automation",
            "Forms, Surveys & Quizzes",
            "Booking Calendars",
            "Ad Manager",
            "Online Reputation Management",
          ],
        },
        {
          name: "AI Business Suite",
          price: "$49",
          description: "AI-powered CRM, funnel, reporting, and website tools for scaling teams.",
          highlighted: true,
          subprice: "per month",
          features: [
            "Conversation AI",
            "Voice AI",
            "Content AI",
            "Funnel AI",
            "Reviews AI*",
            "Website & Funnel Builder",
            "Domain Management",
            "CRM & Pipelines",
            "Custom Dashboards & Reporting",
          ],
        },
        {
          name: "Custom",
          price: "Custom",
          description: "For businesses that need custom features, integrations, and development support.",
          features: [
            "Custom feature development",
            "Workflow and CRM customization",
            "Third-party integrations",
            "Advanced automation setup",
            "Custom dashboards and reporting",
            "Dedicated development support",
          ],
        },
      ]}
    />
  );
}

export default EDCRM;
