import InitiativeCard from "./InitiativeCard";

const Initiatives = () => {
  const initiatives = [
    {
      logo: "/lovable-uploads/1f42a4b9-12af-40a9-a47e-4771ab5003eb.png",
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
      logo: "/lovable-uploads/6aac216f-4e49-4223-a01e-1250a4b8acbb.png",
      name: "Crawler Club",
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