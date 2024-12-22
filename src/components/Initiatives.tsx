import InitiativeCard from "./InitiativeCard";

const Initiatives = () => {
  const initiatives = [
    {
      logo: "/lovable-uploads/8625d22f-f5da-4cee-9e2f-df52878599c6.png",
      name: "My Free Community",
      ctaText: "Join Now",
      logoColors: "bg-white",
    },
    {
      logo: "/lovable-uploads/e26dd5e0-a218-4958-9f9e-fb55477805c2.png",
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