import { Logo, Profile } from "@/svg/view";
import Link from "next/link";
import React from "react";

const DesktopNav = () => {
  return (
    <nav className="h-[130px] flex flex-row justify-between items-center container-p lg:hidden">
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center gap-[3.44rem] 1xl:gap-4 xl:gap-2">
        <Link href="/" className="l-1125 text-text232 hover:font-bold">
          Home
        </Link>
        <Link href="/about" className="l-1125 text-text232 hover:font-bold">
          About
        </Link>
        <Link href="/menu" className="l-1125 text-text232 hover:font-bold">
          Menu
        </Link>
        <Link href="/careers" className="l-1125 text-text232 hover:font-bold">
          Careers
        </Link>
        <Link href="/order" className="l-1125 text-text232 hover:font-bold">
          Order
        </Link>
        <Link href="/contact" className="l-1125 text-text232 hover:font-bold">
          Contact
        </Link>
      </div>
      <button className="flex flex-row justify-center items-center gap-[0.31rem]">
        <Profile color="#F2360A" />{" "}
        <span className="l-1125 text-text232">My Account</span>
      </button>
    </nav>
  );
};

export default DesktopNav;
