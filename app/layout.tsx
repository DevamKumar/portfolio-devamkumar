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

export const metadata: Metadata = {
  title: {
    default: "Devam Kumar | Associate Solution Architect & AI Engineer",
    template: "%s | Devam Kumar",
  },
  description:
    "Associate Solution Architect, AWS Certified, AI Engineer. Building cloud-native applications, AI-powered solutions, and enterprise-scale architectures.",
  keywords: [
    "Devam Kumar",
    "Associate Solution Architect",
    "AI Engineer",
    "Java Developer",
    "Python Developer",
    "AWS Solutions Architect",
    "Cloud Engineer",
    "DevOps Engineer",
    "Agentic AI",
    "Full Stack Developer",
  ],
  authors: [{ name: "Devam Kumar" }],
  creator: "Devam Kumar",
  metadataBase: new URL("https://devamkumar.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devamkumar.vercel.app",
    title: "Devam Kumar | Associate Solution Architect & AI Engineer",
    description:
      "Building cloud-native applications, AI-powered solutions, and enterprise-scale architectures.",
    siteName: "Devam Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devam Kumar | Associate Solution Architect & AI Engineer",
    description:
      "Building cloud-native applications, AI-powered solutions, and enterprise-scale architectures.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Devam Kumar",
              jobTitle: "Associate Solution Architect",
              url: "https://devamkumar.vercel.app",
              email: "email2devam@gmail.com",
              sameAs: [
                "https://linkedin.com/in/devam-kumar",
                "https://github.com/DevamKumar",
                "https://medium.com/@devamkumar",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Chandigarh University",
              },
              knowsAbout: [
                "Cloud Architecture",
                "AI Agents",
                "Java",
                "Python",
                "AWS",
                "DevOps",
                "Solution Architecture",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
