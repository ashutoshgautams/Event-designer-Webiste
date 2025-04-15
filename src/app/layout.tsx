import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Khushiyaan | Luxury Event Design',
  description: 'Aapke khas lamhon ko aur khaas banane ke liye',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${montserrat.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
