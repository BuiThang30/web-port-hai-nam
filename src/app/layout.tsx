import type { Metadata } from 'next';
import './globals.css';
import Nav from '../components/nav/nav';

export const metadata: Metadata = {
  title: 'Do Hai Nam | Portfolio',
  description: 'Turning Ideas Into Motion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}