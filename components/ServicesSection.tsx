import { ServicesSectionData } from "@/lib/responseType";
import ServiceCard from "./ServiceCard";
import ImageServicesCard from "./ImageServicesCard";

export default function ServicesSection({
  items,
  title,
  images,
}: ServicesSectionData & {
  images: {
    url: string;
    alt?: string;
  }[];
}) {
  return (
    <section
      id="our-services"
      className="py-24 relative overflow-hidden bg-neutral-950">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
            {title}
          </h3>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-indigo-500 to-cyan-400" />
        </div>

        {/* Image Cards Grid */}
        {images && images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {images.map((image, i) => (
              <ImageServicesCard key={i} image={image} index={i} />
            ))}
          </div>
        )}

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items &&
            items.map((card) => <ServiceCard key={card.title} card={card} />)}
        </div>
      </div>
    </section>
  );
}
