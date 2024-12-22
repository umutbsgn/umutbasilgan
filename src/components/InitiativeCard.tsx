import { cn } from "@/lib/utils";

interface InitiativeCardProps {
  logo: string;
  name: string;
  ctaText: string;
  logoColors?: string;
  url?: string;
}

const InitiativeCard = ({ logo, name, ctaText, logoColors, url }: InitiativeCardProps) => {
  return (
    <div className="flex items-center justify-between p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center gap-4">
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", logoColors)}>
          <img src={logo} alt={name} className="w-8 h-8" />
        </div>
        <span className="text-xl font-medium text-gray-800">{name}</span>
      </div>
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2.5 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
      >
        {ctaText}
      </a>
    </div>
  );
};

export default InitiativeCard;