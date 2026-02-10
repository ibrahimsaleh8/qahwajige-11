import { HeroSectionData } from "@/lib/responseType";
import HeroLinks from "./AnimatedComponents/HeroLinks";
import Image from "next/image";

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
      className="relative min-h-[90vh] mt-19 flex items-center bg-[hsl(var(--color-main-background))] overflow-hidden">
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <Image
            src={image}
            alt="قهوجيين الرياض - ضيافة فاخرة"
            fill
            sizes="100vw"
            priority
            quality={85}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/60" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white space-y-6">
          <p className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm md:text-base font-medium backdrop-blur-sm">
            قهوجيين الرياض · ضيافة راقية لمناسباتكم
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            {headline}
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            {subheadline}
          </p>

          <div className="mt-4 flex justify-center">
            <HeroLinks whatsApp={whatsApp} />
          </div>
        </div>
      </div>
    </section>
  );
}
