import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Korak Servis - Professional Electrical & Security Solutions',
  description: 'Your trusted partner for electrical, insulation, and security system needs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}