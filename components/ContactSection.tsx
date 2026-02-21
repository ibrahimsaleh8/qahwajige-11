import { FooterData } from "@/lib/responseType";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";

export default function ContactSection({
  phone,
  whatsapp,
}: FooterData & { whatsapp: string }) {
  const waNumber = whatsapp.includes("+")
    ? whatsapp.split("+").join("")
    : whatsapp;

  return (
    <section
      id="contact-us"
      className="relative py-28 overflow-hidden bg-[#1A2B3C] text-white flex justify-center items-center text-center flex-col gap-9">
      <div className="flex flex-col gap-8">
        <h3 className="text-6xl font-bold">جاهز لاستقبال ضيوفك؟</h3>
        <p className="text-lg font-medium">تواصل معنا الان</p>
      </div>
      <div className="flex items-center gap-4">
        <a
          href={`tel:${phone}`}
          className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-medium rounded-md">
          اتصل بنا
          <FaPhoneVolume className="size-5" />
        </a>
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${waNumber}?text=`}
          target="_blank"
          className="flex items-center gap-2 px-8 py-4 bg-green-800 text-white font-medium rounded-md">
          راسلنا على واتساب
          <FaWhatsapp className="size-5" />
        </a>
      </div>
    </section>
  );
}
