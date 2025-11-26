import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "./components/Navigation";
import { AuthProvider } from "./contexts/AuthContext";
import "./globals.css";
import ReactQueryProvider from "./providers/ReactQueryProvider";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "My-Dash | Neo-Brutalism Dashboard",
   description:
      "A modern Neo-Brutalism styled dashboard template with bold designs, raw aesthetics, and functional elegance.",
   keywords: [
      "dashboard",
      "neo-brutalism",
      "admin panel",
      "modern design",
      "brutalist design",
   ],
   creator: "Homayoun Mohammadi",
   openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://neo-brutalism-dashboard-template.vercel.app/",
      title: "My-Dash | Neo-Brutalism Dashboard",
      description: "A modern Neo-Brutalism styled dashboard template",
      siteName: "My-Dash",
      images: [
         {
            url: "/image/dashboard_main_page.png",
            width: 1856,
            height: 973,
            alt: "My-Dash Neo-Brutalism Dashboard",
         },
         {
            url: "/image/analytic_dashboard_page.png",
            width: 1856,
            height: 973,
            alt: "My-Dash Neo-Brutalism Analytic Dashboard Page",
         },
      ],
   },
   twitter: {
      card: "summary_large_image",
      title: "My-Dash | Neo-Brutalism Dashboard",
      description: "A modern Neo-Brutalism styled dashboard template",
      images: ["/image/dashboard_main_page.png"],
      creator: "@homayounmmdy",
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
      <html lang="en">
         <head>
            <script
               dangerouslySetInnerHTML={{
                  __html: `
(function(){
  try {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved === 'dark' || (saved === null && prefersDark);
    document.documentElement.classList.toggle('dark', isDark);
  } catch (_) {}
})();
            `,
               }}
            />
         </head>
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         >
            <AuthProvider>
               <ReactQueryProvider>
                  <Navigation />
                  <main className="mt-14">{children}</main>
               </ReactQueryProvider>
            </AuthProvider>
         </body>
      </html>
   );
}
