import InitiativeCard from "./InitiativeCard";

const Initiatives = () => {
  const initiatives = [
    {
      logo: "/sk-logo.png",
      name: "My Free Community",
      ctaText: "Join Now",
      logoColors: "bg-[#0066ff]",
    },
    {
      logo: "/morningside-logo.png",
      name: "Data-UB",
      ctaText: "Learn More",
      logoColors: "bg-[#00ff99]",
      url: "https://data-ub.de"
    },
    {
      logo: "/aaa-logo.png",
      name: "AAA Accelerator",
      ctaText: "Start an AI Business",
      logoColors: "bg-[#ff0066]",
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