import ProductPage from "./ProductPage";

function AIBuilder() {
  return (
    <ProductPage
      id="ai-builder"
      title="Emotion AI"
      description="Create AI assistants, automation flows, and business-specific agents that can support customers, qualify leads, and handle repeatable work."
      image="/servicesImages/emotion_ai.png"
      video="https://2c3wn7zfav.ucarecd.net/89c0b95c-c651-42a0-a61e-4b22c91f3a3b/irfan5.mp4"
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
