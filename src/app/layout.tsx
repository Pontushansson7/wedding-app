import './globals.css';
import type { Metadata } from 'next';
import { Great_Vibes, Playfair_Display, Lora } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Pontus & Amandas bröllop',
  description: 'Information om vårt bröllop',
};

// Ladda fonter
const script = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
});

const serif = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
});

const body = Lora({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-body',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body
        className={`${script.variable} ${serif.variable} ${body.variable} bg-[#FAF9F6] text-[#2F2F2F]`}
      >
        {children}
      </body>
    </html>
  );
}
