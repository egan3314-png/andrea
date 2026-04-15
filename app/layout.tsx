import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: '冯安琪｜用户研究 × 数据分析 × 内容增长',
  description: '应用心理学硕士在读，具备用户研究、数据分析、内容运营与项目推进的复合背景。',
  generator: 'v0.app',
  keywords: ['用户研究', '数据分析', '心理学', '内容运营', 'UX Research'],
  authors: [{ name: '冯安琪' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: '冯安琪｜用户研究 × 数据分析 × 内容增长',
    description: '应用心理学硕士在读，具备用户研究、数据分析、内容运营与项目推进的复合背景。',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#B0C4D1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
