import { AboutSectionData, WhyUsFeatureData } from "@/lib/responseType";
import FeatureCard from "./FeatureCard";
import Image from "next/image";
export default function AboutSection({
  description1,
  title,
  features,
  image,
}: AboutSectionData & {
  features?: WhyUsFeatureData[];
  image: string;
}) {
  return (
    <section id="about-us" className="py-24 relative bg-[#f1f1f1]">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 bg-white p-6 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#4B3621] mb-4">
            {title}
          </h2>
          <p className="text-[#493827] text-lg max-w-3xl mx-auto leading-relaxed">
            {description1}
          </p>
        </div>
        <div className="flex gap-10 flex-col md:flex-row">
          <div className="flex flex-col gap-2 w-full">
            {features?.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>

          <div className="w-full flex flex-col gap-3 ">
            <Image
              src={image}
              alt={"قهوجيين يقدمون الشاى"}
              width={1000}
              height={1000}
              className="w-full h-130 rounded-2xl object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
