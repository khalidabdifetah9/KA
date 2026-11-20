import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Theme from "@/context/ThemeContext";
import SmoothScroll from "@/components/smoothScroll";
import Loader from "@/components/loader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Kalid",
  description:
    "Portfolio of Kalid Abdifeta, a web designer and full stack developer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex bg-red-500 flex-col">
        <Loader />
        <Theme>
          <SmoothScroll>{children}</SmoothScroll>
        </Theme>
      </body>
    </html>
  );
}
