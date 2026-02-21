// app/page.tsx
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PremiumPackagesSection from "@/components/PremiumPackagesSection";
import { APP_URL, CurrentProjectId } from "@/lib/ProjectId";
import { ProjectContentResponse } from "@/lib/responseType";
import FloatedIcons from "@/components/FloatedIcons";
import RatingSection from "@/components/RatingSection";
import Header from "@/components/Header";

export default async function HomePage() {
  let data: ProjectContentResponse;

  try {
    const res = await fetch(
      `${APP_URL}/api/project/${CurrentProjectId}/main-data`,
    );
    data = (await res.json()) as ProjectContentResponse;
  } catch (error) {
    console.error("Failed to fetch project content:", error);

    data = {
      header: { brandName: "قهوجيين الرياض" },
      hero: { headline: "", subheadline: "", whatsApp: "" },
      about: { label: "", title: "", description1: "", image: "" },
      services: { label: "", title: "", description: "", items: [] },
      whyUs: { label: "", title: "", description: "", features: [] },
      gallery: [],
      packages: [],
      rating: { averageRating: 0, totalRatings: 0 },
      footer: {
        brandName: "قهوجيين الرياض",
        phone: "",
        email: "",
        address: "",
      },
    };
  }

  return (
    <>
      <Header brandName={data.header.brandName} />
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
      <FloatedIcons
        whatsapp={data.hero?.whatsApp ?? ""}
        telephone={data.footer.phone ?? ""}
      />
      <Footer {...data.footer} description={data.hero?.subheadline} />
    </>
  );
}
