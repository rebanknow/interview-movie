import Nav from '@/components/Nav';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

type TLayout = {
  children: React.ReactNode;
};

const Layout = ({ children }: TLayout) => {
  return (
    <main className={`${inter.className} flex flex-row h-screen`}>
      <Nav />
      <div className="p-8">{children}</div>
    </main>
  );
};

export default Layout;
