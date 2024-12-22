import Hero from "@/components/Hero";
import SocialLinks from "@/components/SocialLinks";
import Initiatives from "@/components/Initiatives";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Hero />
        <SocialLinks />
        <Initiatives />
      </div>
    </div>
  );
};

export default Index;