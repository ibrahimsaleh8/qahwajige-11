import type { ServiceItemData } from "@/lib/responseType";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface ServiceCardProps {
  card: ServiceItemData;
}

export default function ServiceCard({ card }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center bg-white border border-yellow-300 rounded-3xl p-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.18)] transition-all duration-300 text-right">
      <h3 className="text-xl font-bold text-black mb-3">{card.title}</h3>
      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        {card.description}
      </p>

      <Link
        className="text-lg font-medium flex items-center gap-2 text-green-800 underline hover:gap-4 duration-500"
        href={"#contact"}>
        تواصل معنا للتفاصيل
        <FaArrowLeft className="size-4" />
      </Link>
    </div>
  );
}
