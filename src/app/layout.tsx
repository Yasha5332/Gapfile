import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'GapFile — Competitor Weaknesses, Straight From Their Own Reviews',
  description: 'AI-powered competitor review intelligence for Shopee, TikTok Shop, Amazon, Lazada & Apify partner platforms. Turn rival customer complaints into your winning marketing strategy.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
