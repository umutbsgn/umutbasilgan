import Hero from "@/components/Hero";
import SocialLinks from "@/components/SocialLinks";
import Initiatives from "@/components/Initiatives";

const Index = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4" style={{
      backgroundImage: `
        linear-gradient(to right, #8E9196 1px, transparent 1px),
        linear-gradient(to bottom, #8E9196 1px, transparent 1px)
      `,
      backgroundSize: '48px 48px',
      backgroundOpacity: '0.1'
    }}>
      <div className="max-w-4xl mx-auto">
        <Hero />
        <SocialLinks />
        <Initiatives />
      </div>
    </div>
  );
};

export default Index;