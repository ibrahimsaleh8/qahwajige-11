"use client";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { WhyUsFeatureData } from "@/lib/responseType";
import { Award, Clock, Sparkles, Shield } from "lucide-react";
const iconMap: Record<string, LucideIcon> = {
  Award,
  Clock,
  Shield,
  Sparkles,
};

interface FeatureCardProps {
  item: WhyUsFeatureData;
  index: number;
}

const FeatureCard = ({ item, index }: FeatureCardProps) => {
  const Icon = iconMap[item.icon as keyof typeof iconMap];
  return (
    <motion.div
      key={item.title}
      className="group bg-white text-black hover:border-main-color/60 rounded-2xl p-8 text-center shadow-sm hover:shadow-luxury transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 * index, ease: "easeInOut" }}>
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-main-color group-hover:bg-main-color/90 duration-300 transition-colors">
        {Icon && (
          <Icon className="w-7 h-7 text-white group-hover:scale-105 transition-transform" />
        )}
      </div>
      <div className="text-lg font-bold text-main-color mb-2">{item.title}</div>
      <div className="text-low-color text-sm leading-relaxed">
        {item.description}
      </div>
    </motion.div>
  );
};

export default FeatureCard;
