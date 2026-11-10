import type { Metadata } from "next";
import { Instrument_Sans, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rashid Mehmood - Senior Full Stack Software Engineer",
  description: "Senior Full Stack Software Engineer with 7+ years building services and products. NestJS, Node.js, .NET, SQL Server, React, Next.js, and React Native.",
  openGraph: {
    title: "Rashid Mehmood - Senior Full Stack Software Engineer",
    description: "Banking portals, checkout, and on-chain platforms. The screen, the API, and the data between them.",
    type: "website",
    images: [{ url: "/portrait.png", width: 864, height: 1152, alt: "Rashid Mehmood" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rashid Mehmood - Senior Full Stack Software Engineer",
    description: "Banking portals, checkout, and on-chain platforms. The screen, the API, and the data between them.",
    images: ["/portrait.png"],
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'){t='dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${instrument.variable} ${inter.variable} ${plexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
