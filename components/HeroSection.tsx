import { HeroSectionData } from "@/lib/responseType";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection({
  headline,
  subheadline,
  whatsApp,
  image,
}: HeroSectionData & {
  image: string;
}) {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center bg-[hsl(var(--color-main-background))] overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <Image
            src={image}
            alt="قهوجيين الرياض - ضيافة فاخرة"
            fill
            sizes="100vw"
            priority
            quality={75}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/60" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 mb-4">
        <div className="max-w-3xl mx-auto text-center text-white space-y-6">
          <span className="flex w-fit mx-auto items-center justify-center px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm md:text-base font-medium backdrop-blur-sm">
            ضيافة سعودية فاخرة{" "}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            {headline}
          </h1>

          <h2 className="text-base md:text-lg lg:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            {subheadline}
          </h2>

          <div className="mt-4 flex justify-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/${whatsApp?.replace(/\+/g, "")}?text=`}
              className="inline-flex items-center gap-2 bg-main-color hover:bg-main-color/90 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl">
              <FaWhatsapp className="size-6" />
              احجز معنا الان
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
