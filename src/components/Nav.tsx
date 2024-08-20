import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="bg-slate-100 p-4">
      <ul className="flex flex-col gap-4">
        <Link href="/">Search</Link>
        <Link href="/watchlist">Watchlist</Link>
      </ul>
    </nav>
  );
};

export default Nav;
