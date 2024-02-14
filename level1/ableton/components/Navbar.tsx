import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex w-screen max-w-screen-2xl  text-lg">
      <Logo />
      <ul className="flex justify-around items-center w-screen max-w-[600px]">
        <li>
          <Link href="Live">Live</Link>
        </li>
        <li>
          <Link href="Push">Push</Link>
        </li>
        <li>
          <Link href="Note">Note</Link>
        </li>
        <li>
          <Link href="Link">Link</Link>
        </li>
        <li>
          <Link href="Shop">Shop</Link>
        </li>
        <li>
          <Link href="Packs">Packs</Link>
        </li>
        <li>
          <Link href="Help">Help</Link>
        </li>
      </ul>
      <ul className="flex items-center px-10 w-screen justify-end  space-x-5 ">
        <li>
          <Link href="/">Try Live For Free</Link>
        </li>
        <li>
          <Link href="/">Log in or registere</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
