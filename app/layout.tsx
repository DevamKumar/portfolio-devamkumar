import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Devam Kumar — Solution Architect & AI Engineer",
    template: "%s | Devam Kumar",
  },
  description:
    "I architect enterprise platforms, build AI agents, and engineer backend systems that scale. Solution Architect at Iron Mountain. AWS Certified.",
  keywords: [
    "Devam Kumar",
    "Solution Architect",
    "AI Engineer",
    "Backend Engineer",
    "Enterprise Architecture",
    "AI Agents",
    "MCP Server",
    "SDK Development",
    "Java",
    "Spring Boot",
    "Python",
    "System Design",
    "AWS",
  ],
  authors: [{ name: "Devam Kumar" }],
  creator: "Devam Kumar",
  metadataBase: new URL("https://devamkumar.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devamkumar.vercel.app",
    title: "Devam Kumar — Solution Architect & AI Engineer",
    description:
      "I architect enterprise platforms, build AI agents, and engineer backend systems that scale.",
    siteName: "Devam Kumar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devam Kumar — Solution Architect & AI Engineer",
    description:
      "I architect enterprise platforms, build AI agents, and engineer backend systems that scale.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Devam Kumar",
              jobTitle: "Solution Architect & AI Engineer",
              url: "https://devamkumar.vercel.app",
              email: "email2devam@gmail.com",
              description: "I architect enterprise platforms, build AI agents, and engineer backend systems that scale.",
              sameAs: [
                "https://linkedin.com/in/devam-kumar",
                "https://github.com/DevamKumar",
                "https://medium.com/@devamkumar",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Iron Mountain",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Chandigarh University",
              },
              knowsAbout: [
                "Solution Architecture",
                "AI Agents",
                "Backend Engineering",
                "MCP Servers",
                "SDK Development",
                "Java",
                "Spring Boot",
                "Python",
                "System Design",
                "AWS",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
