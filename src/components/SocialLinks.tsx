import { Youtube, Instagram, Twitter } from "lucide-react";

const SocialLinks = () => {
  const socials = [
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      url: "#",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "#",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "#",
    },
  ];

  return (
    <div className="flex justify-center gap-4 mb-12">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
        >
          {social.icon}
          <span>{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;