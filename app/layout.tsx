import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/Common/Header";
import Footer from "@/component/Common/Footer";
import ScrollToTop from "@/libs/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "COMMENCE - 인하대 No.1 밴드 동아리 꼬망스에서 24학번 신입부원을 기다립니다.",
  description: "꼬망스 2024년도 지원 페이지 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[51.2rem] w-full mx-auto bg-[#f5f5f5] text-black mt-[6rem]">
          <Header />
          <ScrollToTop />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
