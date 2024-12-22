import InitiativeCard from "./InitiativeCard";

const Initiatives = () => {
  const initiatives = [
    {
      logo: "/lovable-uploads/cfa1761c-f8dd-4f31-a6be-9295d221bd9c.png",
      name: "My Free Community",
      ctaText: "Join Now",
      logoColors: "bg-white",
    },
    {
      logo: "/lovable-uploads/4d79d30b-400f-4496-92b4-fec973ff6c4b.png",
      name: "Data-UB",
      ctaText: "Learn More",
      logoColors: "bg-white",
      url: "https://data-ub.de"
    },
    {
      logo: "/aaa-logo.png",
      name: "AAA Accelerator",
      ctaText: "Start an AI Business",
      logoColors: "bg-white",
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