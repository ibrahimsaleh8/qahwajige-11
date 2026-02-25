// app/layout.tsx
import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import { APP_URL, CurrentProjectId, currentURL } from "@/lib/ProjectId";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const almaraiFont = Almarai({
  weight: ["300", "400", "700", "800"],
  subsets: ["arabic"],
});
type MetaDataResponseDataType = {
  title: string;
  description: string;
  keywords: string[];
  brandName: string;
};

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(
      `${APP_URL}/api/project/${CurrentProjectId}/metadata`,
      {
        next: {
          tags: ["metadata"],
        },
      },
    );
    const data: MetaDataResponseDataType = await res.json();
    const brandName = data.brandName;

    return {
      title: data.title,
      description: data.description,
      keywords: data.keywords,
      creator: brandName,
      publisher: brandName,
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
        },
      },
      openGraph: {
        title: data.title,
        description: data.description,
        url: currentURL,
        siteName: brandName,
        type: "website",
      },
      alternates: {
        canonical: currentURL,
      },
      verification: {
        google: "36Emp_FqbOUkXFl_UAv_pWxPOoeFAbrwd6jHjLRubJI",
      },
    };
  } catch (error) {
    console.error("Metadata fetch failed:", error);
    return {
      title: "قهوجيين الرياض",
      description: "خدمات الضيافة العربية في الرياض",
    };
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${almaraiFont.className} antialiased`}>
        {children}

        <Analytics />

        <Script id="clixtell-tracking" strategy="afterInteractive">
          {`
            var script = document.createElement('script');
            var prefix = document.location.protocol;
            script.async = true;
            script.type = 'text/javascript';
            var target = prefix + '//scripts.clixtell.com/track.js';
            script.src = target;
            document.head.appendChild(script);
          `}
        </Script>

        <noscript>
          <img
            src="//tracker.clixtell.com/track/t.gif"
            alt="clixtell-tracker"
          />
        </noscript>
      </body>
    </html>
  );
}
