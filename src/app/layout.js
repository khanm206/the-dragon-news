import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export const montserrat = Montserrat({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
export const metadata = {
  title: "The Dragon News",
  description: "Latest News Everyday",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={` h-full antialiased`}>
      <body className="min-h-screen flex flex-col max-w-470 mx-auto ">
        <main className={`${poppins.className}`}>{children}</main>
      </body>
    </html>
  );
}
