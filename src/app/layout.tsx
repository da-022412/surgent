import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
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
  metadataBase: new URL("https://getsurgent.ai"),
  title: "SurgentAI — AI Automation Agency",
  description:
    "SurgentAI builds custom AI agents for your business — so your team spends less time on repetitive work and more time on what actually moves the needle.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "SurgentAI — AI Automation Agency",
    description:
      "SurgentAI builds custom AI agents for your business — so your team spends less time on repetitive work and more time on what actually moves the needle.",
    url: "https://getsurgent.ai",
    siteName: "SurgentAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SurgentAI — AI Automation Agency",
    description:
      "SurgentAI builds custom AI agents for your business — so your team spends less time on repetitive work and more time on what actually moves the needle.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        {/* Runs synchronously before paint to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('surgent-theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body className="min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-sm focus:bg-surgent-primary focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:font-medium focus:text-surgent-background focus:outline-none"
        >
          Skip to main content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
