import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-9 lg:px-12 text-white ">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Remix Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </Link>
      <nav className="flex">
        <Link
          href="/"
          className="mx-2 text-base font-semibold opacity-80 last:mr-0 hover:opacity-100 sm:mx-4 "
        >
          Blog
        </Link>
        <Link
          className="mx-2 text-base font-semibold opacity-80 last:mr-0 hover:opacity-100 sm:mx-4 "
          href="/"
        >
          Docs
        </Link>
        <Link
          className="mx-2 text-base font-semibold opacity-80 last:mr-0 hover:opacity-100 sm:mx-4 "
          href="/"
        >
          GitHub
        </Link>
        <Link
          className="mx-2 text-base font-semibold opacity-80 last:mr-0 hover:opacity-100 sm:mx-4 "
          href="/"
        >
          Remix Conf
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
