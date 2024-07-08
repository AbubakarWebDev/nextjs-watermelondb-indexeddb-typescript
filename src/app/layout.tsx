import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Watermelon DB with React App',
  description: 'Watermelon DB with React App',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<Readonly<RootLayoutProps>> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
