import { Check, Coffee, Crown, Zap } from "lucide-react";

interface Package {
  id: string;
  name: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon?: React.ReactNode;
  bgColor?: string;
}
const packages: Package[] = [
  {
    id: "platinum",
    name: "الباقة البلاتينية",
    description: "اتصل للاستعلام",
    popular: false,
    icon: <Coffee className="w-6 h-6" />,
    bgColor: "bg-gradient-to-br from-slate-900 to-slate-800",
    features: [
      "ديكور ملكي من متر من حتى 8 متر على حسب المساحة المتوفرة لدى العميل",
      "1 فوتوجي و 4 صباب",
      "10 أنواع شاي",
      "قهوة عربي وأمريكي",
      "معدل حرامي 25 متر",
    ],
  },
  {
    id: "gold",
    name: "الباقة الذهبية",
    description: "اتصل للاستعلام",
    popular: true,
    icon: <Crown className="w-6 h-6" />,
    bgColor: "bg-gradient-to-br from-amber-500 via-orange-500 to-red-500",
    features: [
      "ديكور ملكي من متر من حتى 8 متر على حسب المساحة المتوفرة لدى العميل",
      "1 فوتوجي و 9 صباب",
      "10 أنواع شاي",
      "قهوة عربي وأمريكي",
      "معدل حرامي 25 متر",
    ],
  },
  {
    id: "silver",
    name: "الباقة الفضية",
    description: "اتصل للاستعلام",
    popular: false,
    icon: <Zap className="w-6 h-6" />,
    bgColor: "bg-gradient-to-br from-slate-800 to-slate-700",
    features: [
      "ديكور ملكي من متر من حتى 8 متر على حسب المساحة المتوفرة لدى العميل",
      "1 فوتوجي و 6 صباب",
      "10 أنواع شاي",
      "قهوة عربي وأمريكي",
      "معدل حرامي 25 متر",
    ],
  },
  {
    id: "royal",
    name: "الباقة الملكية",
    description: "اتصل للاستعلام",
    popular: false,
    icon: <Crown className="w-6 h-6" />,
    bgColor: "bg-gradient-to-br from-yellow-600 to-yellow-500",
    features: [
      "ديكور ملكي من متر من حتى 8 متر على حسب المساحة المتوفرة لدى العميل",
      "1 فوتوجي و 15 صباب",
      "10 أنواع شاي",
      "قهوة عربي وأمريكي",
      "معدل حرامي 25 متر",
    ],
  },
];

export default function PremiumPackagesSection({
  whatsapp,
}: {
  whatsapp: string;
}) {
  return (
    <section
      id="packages"
      className="py-24 relative overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-main-color/5 text-main-color text-sm font-semibold mb-4">
            باقات مميزة
          </p>
          <p className="text-3xl md:text-4xl font-extrabold text-[hsl(var(--color-text-heading))] mb-4">
            اختر الباقة المناسبة لك
          </p>
          <p className="text-low-color text-lg max-w-3xl mx-auto leading-relaxed">
            نقدم لك مجموعة متميزة من الباقات المصممة بعناية لتلبي احتياجاتك
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col h-full rounded-3xl p-8 pb-4 transition-all duration-300 ${
                pkg.popular
                  ? "bg-white border-2 border-main-color shadow-[0_24px_60px_rgba(15,23,42,0.18)] md:scale-105"
                  : "bg-white border border-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
              }`}>
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                  <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-main-color text-white text-sm font-semibold">
                    الأكثر طلباً
                  </span>
                </div>
              )}

              {/* Package Name */}
              <p className="text-4xl font-bold text-main-color text-right mb-2">
                {pkg.name}
              </p>

              {/* Description */}
              <p className="text-right text-low-color text-sm mb-6">
                {pkg.description}
              </p>

              {/* Features List */}
              <div className="space-y-4 flex-1">
                <p className="text-right font-semibold text-slate-900 mb-4">
                  المميزات:
                </p>
                {pkg.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-main-color shrink-0 mt-0.5" />
                    <p className="text-right text-black text-sm">{feature}</p>
                  </div>
                ))}
              </div>
              {/* CTA Button */}
              <a
                href={`https://wa.me/${
                  whatsapp.includes("+")
                    ? whatsapp.split("+").join("")
                    : whatsapp
                }?text=`}
                target="_blank"
                className={`w-full py-3 px-6 text-center rounded-xl font-semibold transition-all duration-300 mt-5 ${
                  pkg.popular
                    ? "bg-main-color text-white hover:shadow-lg hover:-translate-y-0.5"
                    : "border-2 border-main-color text-main-color hover:bg-main-color/5"
                }`}>
                اطلب الخدمة
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
