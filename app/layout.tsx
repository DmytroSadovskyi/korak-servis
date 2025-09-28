import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import croatianLang from '../messages/hr.json';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const { title, description } = croatianLang.metaData;

export const metadata = {
  title: title,
  description: description,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await  getLocale() || 'hr';
  const messages = await import(`../messages/${locale}.json`).then((mod) => mod.default);
  return (
    <html lang={locale}>
      <body className={inter.className}>
       
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
        <Footer/>
      </body>
    </html>
  );
}