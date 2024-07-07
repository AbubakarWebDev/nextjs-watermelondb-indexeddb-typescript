import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Watermelon DB with React App',
  description: 'Watermelon DB with React App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
