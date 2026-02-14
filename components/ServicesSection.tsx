import { ServicesSectionData } from "@/lib/responseType";
import ServiceCard from "./ServiceCard";

export default function ServicesSection({
  description,
  items,
  label,
  title,
}: ServicesSectionData) {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {label && (
            <p className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-main-color/5 text-main-color text-sm font-semibold mb-4">
              {label}
            </p>
          )}
          <p className="text-3xl md:text-4xl font-extrabold text-[hsl(var(--color-text-heading))] mb-4">
            {title}
          </p>
          <p className="text-low-color text-lg max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items &&
            items.map((card, i) => (
              <ServiceCard index={i} key={card.title} card={card} />
            ))}
        </div>
      </div>
    </section>
  );
}
