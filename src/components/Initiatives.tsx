import InitiativeCard from "./InitiativeCard";

const Initiatives = () => {
  const initiatives = [
    {
      logo: "/lovable-uploads/81a43159-bc45-49c6-91dc-25943a4a3948.png",
      name: "My Free Community",
      ctaText: "Join Now",
      logoColors: "bg-black",
    },
    {
      logo: "/lovable-uploads/fa7c4924-ecf5-463b-83e2-67ab998d5b95.png",
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