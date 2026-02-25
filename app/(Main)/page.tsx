// app/page.tsx
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PremiumPackagesSection from "@/components/PremiumPackagesSection";
import { CurrentProjectId } from "@/lib/ProjectId";
import RatingSection from "@/components/RatingSection";
import { FetchProjectData } from "@/lib/FetchProjectData";

export default async function HomePage() {
  const { data } = await FetchProjectData();

  return (
    <>
      <HeroSection {...data.hero} image={data.about.image ?? ""} />
      <AboutSection
        {...data.about}
        features={data.whyUs.features}
        image={data.gallery[0].url ?? ""}
      />
      <ServicesSection
        {...data.services}
        images={data.gallery.slice(1) ?? []}
      />

      <RatingSection
        projectId={CurrentProjectId}
        averageRating={data.rating?.averageRating ?? 0}
        totalRatings={data.rating?.totalRatings ?? 0}
      />
      <PremiumPackagesSection
        packages={data.packages ?? []}
        whatsapp={data.hero?.whatsApp ?? ""}
      />
      <ContactSection {...data.footer} whatsapp={data.hero?.whatsApp ?? ""} />
    </>
  );
}
