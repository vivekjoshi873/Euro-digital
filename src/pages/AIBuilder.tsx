import ProductPage from "./ProductPage";

function AIBuilder() {
  return (
    <ProductPage
      id="emotionai"
      title="Emotion AI"
      description="Create AI assistants, automation flows, and business-specific agents that can support customers, qualify leads, and handle repeatable work."
      image="/servicesImages/emotion_ai.png"
      video="https://player.mediadelivery.net/play/661416/78158008-7515-443f-a183-a54a8d3b3a3f"
      overlayTitle="Ready to Build Your AI Assistant?"
      showFAQs
      features={[
        "Custom AI assistant builder",
        "Prompt and knowledge setup",
        "Workflow automation",
        "Website and CRM integration",
      ]}
      detailedDescription="Emotion AI gives your team a practical way to create useful AI systems without starting from scratch every time."
      plans={[
        {
          name: "Launch",
          price: "$199",
          description: "For one AI assistant or automation flow.",
          features: ["1 assistant", "Knowledge setup", "Basic workflow", "Email support"],
        },
        {
          name: "Scale",
          price: "$499",
          description: "For teams building multiple AI workflows.",
          highlighted: true,
          features: ["5 assistants", "Advanced workflows", "CRM integration", "Priority support"],
        },
        {
          name: "Custom",
          price: "Custom",
          description: "For advanced AI systems and private workflows.",
          features: ["Custom agents", "API access", "Private knowledge base", "Dedicated support"],
        },
      ]}
    />
  );
}

export default AIBuilder;
