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
    <div className="flex items-center justify-between p-6 bg-[#E5E5E5] rounded-xl border border-gray-100 hover:shadow-sm transition-all">
      <div className="flex items-center gap-4">
        <div className={cn("w-16 h-16 rounded-xl flex items-center justify-center", logoColors)}>
          <img src={logo} alt={name} className="w-12 h-12" />
        </div>
        <span className="text-xl font-medium text-gray-800">{name}</span>
      </div>
      {url ? (
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-black hover:bg-gray-900 text-white rounded-lg text-sm font-medium transition-colors"
        >
          {ctaText}
        </a>
      ) : (
        <span className="px-6 py-2 bg-black text-white rounded-lg text-sm font-medium">
          {ctaText}
        </span>
      )}
    </div>
  );
};

export default InitiativeCard;