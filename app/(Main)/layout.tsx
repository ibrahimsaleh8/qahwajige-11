import { FetchProjectData } from "@/lib/FetchProjectData";
import Header from "@/components/Header";
import FloatedIcons from "@/components/FloatedIcons";
import Footer from "@/components/Footer";
import DisableCopy from "@/components/DisableCopy";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await FetchProjectData();

  return (
    <>
      <Header brandName={data.header.brandName} />
      {children}
      <FloatedIcons
        whatsapp={data.hero?.whatsApp ?? ""}
        telephone={data.footer.phone ?? ""}
      />
      <DisableCopy />
      <Footer {...data.footer} description={data.hero?.subheadline} />
    </>
  );
}
