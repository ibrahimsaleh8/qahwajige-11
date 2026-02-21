import { WhyUsFeatureData } from "@/lib/responseType";

interface FeatureCardProps {
  item: WhyUsFeatureData;
}

const FeatureCard = ({ item }: FeatureCardProps) => {
  return (
    <div className="group bg-white text-black hover:border-main-color/60 rounded-2xl p-8 text-center shadow-sm hover:shadow-luxury transition-all duration-300">
      <div className="text-lg font-bold text-main-color mb-2">{item.title}</div>
      <div className="text-low-color text-sm leading-relaxed">
        {item.description}
      </div>
    </div>
  );
};

export default FeatureCard;
