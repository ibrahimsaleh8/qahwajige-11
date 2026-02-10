import {
  FaFacebookF,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function FloatedIcons({ whatsapp }: { whatsapp: string }) {
  return (
    <div className="fixed z-100000 left-4 bottom-4 flex flex-col gap-3">
      <a
        aria-label="whatsapp"
        target="_blank"
        href={`https://wa.me/${
          whatsapp.includes("+") ? whatsapp.split("+").join("") : whatsapp
        }?text=`}
        className="flex items-center justify-center hover:scale-105 duration-300 md:w-14 md:h-14 w-8 h-8 bg-[#25d366] rounded-full">
        <FaWhatsapp className="md:w-8 md:h-8 w-5 h-5 text-white" />
      </a>

      <a
        aria-label="tiktok"
        target="_blank"
        href="https://www.tiktok.com/@user61719922769991"
        className="flex items-center justify-center hover:scale-105 duration-300 md:w-14 md:h-14 w-8 h-8 bg-black rounded-full">
        <FaTiktok className="md:w-7 md:h-7 w-5 h-5 text-white" />
      </a>

      <a
        aria-label="facebook"
        target="_blank"
        href="https://www.facebook.com/SbabinAlkahwaa/?_rdr"
        className="flex items-center justify-center hover:scale-105 duration-300 md:w-14 md:h-14 w-8 h-8 bg-[#1877f2] rounded-full">
        <FaFacebookF className="md:w-7 md:h-7 w-5 h-5 text-white" />
      </a>
      <a
        aria-label="twitter"
        target="_blank"
        href="https://x.com/NghmAbw11703"
        className="flex items-center justify-center hover:scale-105 duration-300 md:w-14 md:h-14 w-8 h-8 bg-[#1da1f2] rounded-full">
        <FaTwitter className="md:w-8 md:h-8 w-5 h-5 text-white" />
      </a>
      <a
        aria-label="youtube"
        target="_blank"
        href="https://www.youtube.com/channel/UCProSRhVIgB-Bkn6_NPrMng"
        className="flex items-center justify-center hover:scale-105 duration-300 md:w-14 md:h-14 w-8 h-8 bg-[#ff0000] rounded-full">
        <FaYoutube className="md:w-8 md:h-8 w-5 h-5 text-white" />
      </a>
    </div>
  );
}
