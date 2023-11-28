import type { Metadata } from "next";
import { Navbar, Footer } from "~/components/ui";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";
import { GSAP } from "~/components";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const description =
  "A Creative Agency for Web Development, UI/UX Design, and Graphics Design.";

export const metadata: Metadata = {
  metadataBase: new URL("https://omsimos.com"),
  title: "OMSIMOS",
  description,
  robots: "index, follow",
  openGraph: {
    url: "https://omsimos.com",
    title: "Weaving Dreams Into Digital Reality!",
    description,
    images: [
      {
        url: "/images/banner.png",
        alt: "omsimos",
        type: "image/png",
      },
    ],
    siteName: "OMSIMOS",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-black text-white`}>
        <Navbar />
        <GSAP>{children}</GSAP>
        <Footer type="creatives" description="Let's weave your dream" />
      </body>
    </html>
  );
}
