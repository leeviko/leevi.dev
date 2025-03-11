import type { Metadata } from 'next';
import { Poppins, Nunito, Roboto_Mono } from 'next/font/google';
import '@/styles/globals.css';
import Nav from '@/components/Nav';

const poppins = Poppins({
  variable: '--poppins',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

const nunito = Nunito({
  variable: '--nunito',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  variable: '--roboto-mono',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Leevi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
      </head>
      <body
        className={`${poppins.variable} ${nunito.variable} ${robotoMono.variable}`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
