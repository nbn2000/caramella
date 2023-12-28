import { Logo, Profile } from "@/svg/view";
import Link from "next/link";
import React, { useState } from "react";
import LoginModal from "../loginModal";

const DesktopNav = () => {
  const [open, setOpen] = useState(false);
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
        <Link href="/career" className="l-1125 text-text232 hover:font-bold">
          Careers
        </Link>
        <Link href="/order" className="l-1125 text-text232 hover:font-bold">
          Order
        </Link>
        <Link href="/contact" className="l-1125 text-text232 hover:font-bold">
          Contact
        </Link>
      </div>
      <button
        onClick={() => setOpen(true)}
        className="flex flex-row justify-center items-center gap-[0.31rem]"
      >
        <Profile color="#F2360A" />{" "}
        <span className="l-1125 text-text232">My Account</span>
      </button>
      <LoginModal setOpen={setOpen} open={open} />
    </nav>
  );
};

export default DesktopNav;
