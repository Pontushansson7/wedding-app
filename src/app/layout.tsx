import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vårt Bröllop',
  description: 'Information om vårt bröllop',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className="font-sans bg-[#FAF9F6] text-[#2F2F2F]">{children}</body>
    </html>
  );
}
