import { FaPhone, FaWhatsapp } from "react-icons/fa";

export default function FloatedIcons({
  whatsapp,
  telephone,
}: {
  whatsapp: string;

  telephone: string;
}) {
  return (
    <div className="fixed z-30 left-4 bottom-4 flex flex-col gap-3">
      <a
        aria-label="whatsapp"
        target="_blank"
        href={`https://wa.me/${
          whatsapp.includes("+") ? whatsapp.replace("+", "") : whatsapp
        }?text=`}
        className="flex items-center justify-center md:size-20 size-16 bg-[#25d366] rounded-full">
        <FaWhatsapp className="md:size-14 size-11 text-white" />
      </a>
      <a
        aria-label="telephone"
        target="_blank"
        href={`tel:${telephone}`}
        className="flex items-center justify-center md:size-20 size-16 bg-blue-600 rounded-full">
        <FaPhone className="md:size-14 size-11 text-white rotate-110" />
      </a>
    </div>
  );
}
