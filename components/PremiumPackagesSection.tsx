"use client";
import { motion } from "motion/react";
import { PackageData } from "@/lib/responseType";
import { Check, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function PremiumPackagesSection({
  whatsapp,
  packages,
}: {
  whatsapp: string;
  packages: PackageData[];
}) {
  const whatsappNumber = whatsapp.includes("+")
    ? whatsapp.split("+").join("")
    : whatsapp;
  const waLink = `https://wa.me/${whatsappNumber}?text=`;

  if (!packages?.length) return null;

  return (
    <section
      id="our-packages"
      className="py-24 md:py-36 relative overflow-hidden ">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-2xl mx-auto">
          <p className="text-black text-xs font-bold tracking-[0.3em] uppercase mb-5">
            ✦ باقات مميزة لخدماتنا✦
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[1.1] mb-6"
            style={{ fontFeatureSettings: '"ss01"' }}>
            اختر الباقة
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-l from-amber-600 to-amber-800">
              المناسبة لك
            </span>
          </h2>
          <p className="text-black/90 text-base md:text-lg leading-relaxed">
            نقدم لك مجموعة متميزة من الباقات المصممة بعناية لتلبي احتياجاتك
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group relative flex flex-col h-full rounded-2xl overflow-hidden border border-black/6 bg-black/3 hover:bg-black/6 hover:border-amber-400/20 transition-all duration-500 hover:-translate-y-1.5"
              style={{
                boxShadow: "0 0 0 0 rgba(251,191,36,0)",
              }}>
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                {pkg.image ? (
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-90 group-hover:brightness-100"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-neutral-800 to-neutral-900">
                    <span className="text-6xl font-black text-black/10">
                      {pkg.title?.charAt(0) ?? "?"}
                    </span>
                  </div>
                )}

                {/* Bottom fade */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0c0a09] via-[#0c0a09]/10 to-transparent pointer-events-none" />

                {/* Index badge */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-black/10 flex items-center justify-center">
                  <span className="text-amber-400 text-xs font-black">
                    {index + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-7">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-black text-black mb-5 text-right leading-snug">
                  {pkg.title}
                </h3>

                {/* Divider */}
                <div className="w-full h-px bg-linear-to-l from-amber-400/30 to-transparent mb-5" />

                {/* Features */}
                {pkg.features?.length > 0 ? (
                  <ul className="space-y-3 flex-1 mb-8">
                    {pkg.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + i * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-right">
                        <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
                          <Check
                            className="w-3 h-3 text-amber-400"
                            strokeWidth={2.5}
                          />
                        </span>
                        <span className="text-black/60 text-sm leading-relaxed group-hover:text-black/75 transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex-1 mb-8" />
                )}

                {/* CTA */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2.5 bg-amber-400 text-black hover:bg-amber-300 active:scale-[0.98] shadow-[0_0_24px_rgba(251,191,36,0.15)] hover:shadow-[0_0_32px_rgba(251,191,36,0.3)]">
                  <MessageCircle className="w-4 h-4" />
                  احجزها الان
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
