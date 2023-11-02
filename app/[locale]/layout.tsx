import { Inter } from 'next/font/google';
import '../globals.css';

import { UIProvider } from '@/context/ui/UIProvider';
import Navbar from '@/components/navBar/Navbar';
import i18nConfig from '@/i18nConfig';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang={locale}>
      <UIProvider>
        <body className={`${inter.className} bg-primary sm:px-16 px-6`}>
          <Navbar />
          <div className='mt-[10vh]'>{children}</div>
        </body>
      </UIProvider>
    </html>
  );
}

