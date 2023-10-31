import { Inter } from 'next/font/google';
import '../globals.css';

import { UIProvider } from '@/context/ui/UIProvider';
import Navbar from '@/components/navBar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <UIProvider>
        <body className={`${inter.className} bg-primary sm:px-16 px-6`}>
          <Navbar />
          <main className='mt-[10vh]'>
          {children}
          </main>
        </body>
      </UIProvider>
    </html>
  );
}

