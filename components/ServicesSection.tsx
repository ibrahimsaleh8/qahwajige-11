import { ServicesSectionData } from "@/lib/responseType";
import { Coffee, Users, Heart, Building2, LucideIcon } from "lucide-react";

// Optional Lucide icons map
const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Users,
  Heart,
  Building2,
};

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
            items.map((card) => {
              const IconComponent =
                iconMap[card.icon as keyof typeof iconMap] || Coffee;
              return (
                <div
                  key={card.title}
                  className="flex flex-col items-center bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.18)] transition-all duration-300 text-right">
                  <div className="w-14 h-14 bg-main-color rounded-2xl flex items-center justify-center mb-6 text-main-color">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-xl font-bold text-black mb-3">
                    {card.title}
                  </p>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4">
                    <span>خدمة متكاملة وفق أعلى المعايير</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
