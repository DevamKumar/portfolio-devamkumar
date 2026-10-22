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
    default: "Devam Kumar — Backend & AI Engineer · Associate Solution Architect",
    template: "%s | Devam Kumar",
  },
  description:
    "Backend and AI Engineer and Associate Solution Architect at Iron Mountain, shipping agentic AI document workflows on an enterprise IDP platform.",
  keywords: [
    "Devam Kumar",
    "Associate Solution Architect",
    "Solution Architect",
    "Backend Engineer",
    "AI Engineer",
    "Agentic AI",
    "Intelligent Document Processing",
    "LangGraph",
    "LangChain",
    "MCP Server",
    "FastAPI",
    "Spring Boot",
    "Python",
    "Java",
    "RAG",
    "AWS",
    "Docker",
    "Kubernetes",
    "CI/CD",
  ],
  authors: [{ name: "Devam Kumar" }],
  creator: "Devam Kumar",
  metadataBase: new URL("https://devamkumar.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devamkumar.vercel.app",
    title: "Devam Kumar — Backend & AI Engineer · Associate Solution Architect",
    description:
      "Backend and AI Engineer and Associate Solution Architect at Iron Mountain, shipping agentic AI document workflows on an enterprise IDP platform.",
    siteName: "Devam Kumar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devam Kumar — Backend & AI Engineer · Associate Solution Architect",
    description:
      "Backend and AI Engineer and Associate Solution Architect at Iron Mountain, shipping agentic AI document workflows on an enterprise IDP platform.",
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
              jobTitle: "Backend & AI Engineer · Associate Solution Architect",
              url: "https://devamkumar.vercel.app",
              email: "email2devam@gmail.com",
              description:
                "Backend and AI Engineer and Associate Solution Architect at Iron Mountain, shipping agentic AI document workflows on an enterprise IDP platform.",
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
                "Agentic AI Workflows",
                "LangGraph",
                "LangChain",
                "OpenAI Agents SDK",
                "Model Context Protocol (MCP)",
                "Retrieval-Augmented Generation (RAG)",
                "Intelligent Document Processing (IDP)",
                "Solution Architecture",
                "FastAPI",
                "Spring Boot",
                "Python",
                "Java",
                "PostgreSQL & Vector Databases",
                "AWS Cloud Architecture",
                "Docker & Kubernetes",
                "CI/CD Pipelines",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
