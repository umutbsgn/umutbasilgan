import Hero from "@/components/Hero";
import SocialLinks from "@/components/SocialLinks";
import Initiatives from "@/components/Initiatives";

const Index = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4" style={{
      backgroundImage: `
        linear-gradient(to right, rgba(142, 145, 150, 0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(142, 145, 150, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '64px 64px'
    }}>
      <div className="max-w-4xl mx-auto">
        <Hero />
        <SocialLinks />
        <Initiatives />
        <div className="text-center mt-16 text-gray-500">
          Umut Basilgan
        </div>
      </div>
    </div>
  );
};

export default Index;