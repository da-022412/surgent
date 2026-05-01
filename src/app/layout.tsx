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
        {/* Consent Mode v2 defaults — must run before GTM loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});gtag('set','url_passthrough',true);gtag('set','ads_data_redaction',true);try{var m=document.cookie.match(/(?:^|; )surgent-consent=([^;]*)/);if(m&&decodeURIComponent(m[1])==='granted'){gtag('consent','update',{analytics_storage:'granted',ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'});}}catch(e){}`,
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PBQMFLW9');`,
          }}
        />
      </head>
      <body className="min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PBQMFLW9" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
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
