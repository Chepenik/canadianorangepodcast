import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://canadianorangepodcast.com";
const ogImage = "https://i.nostr.build/mt5lXdK20ge85YW9.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Canadian Orange Podcast | Fix the Money. Fix Canada.",
    template: "%s | Canadian Orange Podcast",
  },
  description:
    "Canadian Orange Podcast is a Canadian Bitcoin show with Nick, Lucas, Alin, Seb, and friends talking sound money, freedom, and fixing Canada one conversation at a time.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Canadian Orange Podcast | Fix the Money. Fix Canada.",
    description:
      "Canadian Bitcoin conversations with Nick and guests on money, freedom, and the future of Canada.",
    url: siteUrl,
    siteName: "Canadian Orange Podcast",
    images: [
      {
        url: ogImage,
        width: 1920,
        height: 1080,
        alt: "Canadian Orange Podcast cover artwork",
      },
    ],
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canadian Orange Podcast | Fix the Money. Fix Canada.",
    description:
      "Canadian Bitcoin conversations with Nick and friends on sound money and the future of Canada.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
