import { cn } from "@/lib/utils";

interface InitiativeCardProps {
  logo: string;
  name: string;
  ctaText: string;
  logoColors?: string;
}

const InitiativeCard = ({ logo, name, ctaText, logoColors }: InitiativeCardProps) => {
  return (
    <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", logoColors)}>
          <img src={logo} alt={name} className="w-8 h-8" />
        </div>
        <span className="text-xl font-medium">{name}</span>
      </div>
      <button className="px-6 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors">
        {ctaText}
      </button>
    </div>
  );
};

export default InitiativeCard;