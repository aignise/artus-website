import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import logo from "@/assets/images/black-round-artus.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artus",
  description: "Automate product development",
  openGraph: {
    images: logo.src,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
      <Script
        id="vtag-ai-js"
        async
        src="https://r2.leadsy.ai/tag.js"
        data-pid="12N5pyFBFDCXC5zTQ"
        data-version="062024"
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-EH8HW1Y8J7"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EH8HW1Y8J7');
        `}
      </Script>
    </html>
  );
}
