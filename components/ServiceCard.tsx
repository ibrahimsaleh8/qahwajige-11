"use client";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import type { ServiceItemData } from "@/lib/responseType";

import { Coffee, Users, Heart, Building2 } from "lucide-react";
// Optional Lucide icons map
const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Users,
  Heart,
  Building2,
};
interface ServiceCardProps {
  card: ServiceItemData;
  index: number;
}

export default function ServiceCard({ card, index }: ServiceCardProps) {
  const IconComponent =
    iconMap[card.icon as keyof typeof iconMap] || iconMap["Coffee"];
  return (
    <motion.div
      className="flex flex-col items-center bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.18)] transition-all duration-300 text-right"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 * index }}>
      <div className="w-14 h-14 bg-main-color rounded-2xl flex items-center justify-center mb-6 text-main-color">
        {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
      </div>
      <p className="text-xl font-bold text-black mb-3">{card.title || "—"}</p>
      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        {card.description || "—"}
      </p>
      <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4">
        <span>خدمة متكاملة وفق أعلى المعايير</span>
      </div>
    </motion.div>
  );
}
