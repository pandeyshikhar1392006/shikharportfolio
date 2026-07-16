import type { Metadata } from "next";
import { League_Spartan, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CursorFollower from "@/components/CursorFollower";
import { WorkAudioProvider } from "@/components/WorkAudioProvider";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shikhar Pandey, Creative Video Editor & Designer",
  description:
    "Shikhar Pandey is a creative video editor and designer based in Delhi, building ideas that inspire, engage, and create impact.",
  keywords: [
    "Shikhar Pandey",
    "video editor portfolio",
    "creative video editor Delhi",
    "video editor designer",
    "social media designer",
    "Hansraj College",
  ],
  openGraph: {
    title: "Shikhar Pandey, Creative Video Editor & Designer",
    description:
      "Passionate about building ideas that inspire, engage, and create impact.",
    type: "website",
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
        className={`${leagueSpartan.variable} ${jakarta.variable} ${spaceGrotesk.variable} antialiased bg-cream text-ink grain`}
      >
        <WorkAudioProvider>
          <SmoothScrollProvider>
            <CursorFollower />
            {children}
          </SmoothScrollProvider>
        </WorkAudioProvider>
      </body>
    </html>
  );
}
