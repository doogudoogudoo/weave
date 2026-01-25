import type { Metadata } from 'next';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: 'Weave',
  description: 'Weave',
  icons: {
    icon: '/weave.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main className='mt-20 min-h-100'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
