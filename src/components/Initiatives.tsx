import InitiativeCard from "./InitiativeCard";

const Initiatives = () => {
  const initiatives = [
    {
      logo: "/lovable-uploads/25a8e79c-66b1-4ede-874b-42556e562c93.png",
      name: "LinkedIn",
      ctaText: "Connect",
      logoColors: "bg-black",
      url: "https://www.linkedin.com/in/umutbasilgan/"
    },
    {
      logo: "/lovable-uploads/8c1e0a24-11c3-41e6-bdca-cc80eeac6ee5.png",
      name: "Data-UB",
      ctaText: "Learn More",
      logoColors: "bg-black",
      url: "https://data-ub.de"
    },
    {
      logo: "/lovable-uploads/6dd3f6bc-bac5-482d-b743-be8088fd13df.png",
      name: "AI Masterclub",
      ctaText: "Start an AI Business",
      logoColors: "bg-black",
    },
  ];

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {initiatives.map((initiative) => (
        <InitiativeCard key={initiative.name} {...initiative} />
      ))}
    </div>
  );
};

export default Initiatives;