import type { Metadata } from "next";
import { IBM_Plex_Mono, Newsreader, Outfit } from "next/font/google";
import { SiteFrame } from "@/components/SiteFrame";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  weight: ["400", "500", "600"],
});

const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agenticplc.com"),
  title: {
    default: "Agentic PLC — Companies that run themselves.",
    template: "%s · Agentic PLC",
  },
  description:
    "A holding company that instantiates operating businesses run by agents. Humans remain directors. Agents remain operators.",
  openGraph: {
    title: "Agentic PLC — Companies that run themselves.",
    description:
      "Incorporate. Instantiate. Operate. A public-limited holding company for autonomous enterprise.",
    url: "https://agenticplc.com",
    siteName: "Agentic PLC",
    type: "website",
    images: [{ url: "/media/hero-hq.jpg", width: 1200, height: 675 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic PLC",
    description: "Companies that run themselves.",
    images: ["/media/hero-hq.jpg"],
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${newsreader.variable} ${ibm.variable} antialiased`}>
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
