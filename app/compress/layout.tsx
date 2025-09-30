import type { Metadata } from "next";

// 页面级别的metadata
export const metadata: Metadata = {
  title: "图片压缩工具 - 在线压缩JPG、PNG、WEBP、GIF图片",
  description: "免费在线图片压缩工具，支持JPG、PNG、WEBP、GIF格式。纯本地处理，保护隐私安全，智能压缩算法保持最佳画质。",
  keywords: "在线图片压缩, JPG压缩, PNG压缩, WEBP压缩, GIF压缩, 图片优化, 文件压缩",
  openGraph: {
    title: "图片压缩工具 - 在线压缩图片文件",
    description: "免费在线图片压缩工具，纯本地处理，保护您的隐私安全。",
  },
};

export default function CompressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}