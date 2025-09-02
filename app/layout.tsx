import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "图片压缩工具 - 本地安全压缩JPG、PNG、WEBP、GIF图片",
  description: "纯本地图片压缩工具，无需上传服务器，保护您的隐私安全。支持JPG、PNG、WEBP、GIF格式，智能压缩算法，保持最佳画质的同时大幅减小文件体积。",
  keywords: "图片压缩, 图像压缩, JPG压缩, PNG压缩, WEBP压缩, GIF压缩, 本地压缩, 隐私安全",
  authors: [{ name: "Web Tools" }],
  openGraph: {
    title: "图片压缩工具 - 本地安全压缩图片",
    description: "纯本地图片压缩工具，无需上传服务器，保护您的隐私安全。",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "图片压缩工具 - 本地安全压缩图片",
    description: "纯本地图片压缩工具，无需上传服务器，保护您的隐私安全。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
