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
        <Link
          href="/"
          className="l-1125 text-text232 hover:underline hover:decoration-[#f2360a] hover:decoration-4"
        >
          Бош Сахифа
        </Link>
        <Link
          href="/about"
          className="l-1125 text-text232 hover:underline hover:decoration-[#f2360a] hover:decoration-4"
        >
          Биз Хақимизда
        </Link>
        <Link
          href="/menu"
          className="l-1125 text-text232 hover:underline hover:decoration-[#f2360a] hover:decoration-4"
        >
          Меню
        </Link>
        <Link
          href="/career"
          className="l-1125 text-text232 hover:underline hover:decoration-[#f2360a] hover:decoration-4"
        >
          Карьера
        </Link>
        <Link
          href="/cart"
          className="l-1125 text-text232 hover:underline hover:decoration-[#f2360a] hover:decoration-4"
        >
          Саватча
        </Link>
        <Link
          href="/contact"
          className="l-1125 text-text232 hover:underline hover:decoration-[#f2360a] hover:decoration-4"
        >
          Кантакт
        </Link>
      </div>
      <button
        onClick={() => setOpen(true)}
        className="flex flex-row justify-center items-center gap-[0.31rem]"
      >
        <Profile color="#F2360A" />{" "}
        <span className="l-1125 text-text232">Менинг Профелим</span>
      </button>
      <LoginModal setOpen={setOpen} open={open} />
    </nav>
  );
};

export default DesktopNav;
