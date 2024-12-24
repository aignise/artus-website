// import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artus",
  description: "Automate product development",
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
    </html>
  );
}
