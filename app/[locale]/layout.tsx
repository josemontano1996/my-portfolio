import { Inter } from 'next/font/google';
import '../globals.css';

import { UIProvider } from '@/context/ui/UIProvider';
import Navbar from '@/components/navBar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <UIProvider>
        <body className={`${inter.className}  bg-primary`}>
          <Navbar />
          {children}
        </body>
      </UIProvider>
    </html>
  );
}

