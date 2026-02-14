import { AboutSectionData, WhyUsFeatureData } from "@/lib/responseType";
import FeatureCard from "./FeatureCard";
export default function AboutSection({
  description1,
  label,
  title,
  features,
}: AboutSectionData & {
  features?: WhyUsFeatureData[];
}) {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#f1f1f1]">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          {label && (
            <p className="flex items-center justify-center w-fit mx-auto text-lg font-bold px-4 py-1.5 text-[#4B3621] border-b-2 border-main-color mb-4">
              {label}
            </p>
          )}
          <p className="text-3xl md:text-4xl font-extrabold text-[#4B3621] mb-4">
            {title}
          </p>
          <p className="text-[#493827] text-lg max-w-3xl mx-auto leading-relaxed">
            {description1}
          </p>
        </div>

        {features && features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-auto">
            {features.map((item, index) => (
              <FeatureCard index={index} key={item.title} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
