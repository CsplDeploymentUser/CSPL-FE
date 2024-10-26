import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/Components/ServerSideComponents/FooterComponents/FooterComponent";
import { HeaderApi } from "@/apis/HomepageApi";
import Header from "@/Components/ServerSideComponents/HeaderComponents/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Consociate Solutions",
  description: "Software Solutions Company",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const response = await HeaderApi();
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header HeaderResponse={response} />
        {children}
        <div className="">
          <Footer response={response} />
        </div>
      </body>
    </html>
  );
}
