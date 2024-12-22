import { Instagram } from "lucide-react";

const SocialLinks = () => {
  const socials = [
    {
      name: "Instagram",
      icon: <Instagram className="w-4 h-4" />,
      url: "https://www.instagram.com/umut_basilgan/",
    },
    {
      name: "Twitter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="13"
          viewBox="0 0 90 90"
          className="fill-[#1da1f2]"
        >
          <path d="M28.303 81.565c33.962 0 52.538-28.138 52.538-52.538 0-.799 0-1.595-.054-2.387 3.614-2.614 6.733-5.85 9.212-9.558-3.37 1.493-6.945 2.473-10.606 2.905 3.855-2.308 6.74-5.937 8.118-10.213-3.625 2.151-7.59 3.667-11.725 4.482-6.993-7.436-18.69-7.795-26.126-.802-4.796 4.51-6.83 11.23-5.342 17.643C29.473 30.352 15.64 23.34 6.264 11.804c-4.901 8.437-2.398 19.231 5.717 24.649-2.939-.087-5.813-.88-8.381-2.311 0 .076 0 .155 0 .234.002 8.79 6.198 16.36 14.814 18.101-2.718.741-5.571.85-8.338.317 2.419 7.522 9.351 12.675 17.251 12.823-6.539 5.139-14.616 7.928-22.932 7.92C2.926 73.534 1.459 73.445 0 73.27c8.444 5.419 18.27 8.293 28.303 8.28" />
        </svg>
      ),
      url: "https://x.com/umutbasilgan",
    },
  ];

  return (
    <div className="flex justify-center gap-3 mb-16">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-700 rounded-lg border border-gray-200 transition-all hover:shadow-sm"
        >
          {social.icon}
          <span className="text-sm font-medium">{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;