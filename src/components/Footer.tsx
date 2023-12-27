import { Instagram, Logo, Telegram, Facebook } from "@/svg/view";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="min-h-[280px] bg-orange text-[#F0F0F0] ">
      <div className="flex flex-row justify-between items-start p-8 w-full max-w-[1400px] mx-auto lg:flex-wrap md:gap-6 md:justify-center md:items-center">
        <div className="flex flex-col justify-center gap-8 md:items-center md:gap-4">
          <Link href="/">
            <Logo fnlcolorlogo="#F0F0F0" middlecolor="#F0F0F0" />
          </Link>
          <p className="b-0875 max-w-[500px] text-white md:text-center">
            Savor the Symphony of Sweetness: Dive into a World of Irresistible
            Cakes and Cookies, Each Baked to Perfection. Experience the True
            Essence of Delight and Quality Craftsmanship.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-16 lg:gap-0">
          <div className="flex flex-col justify-start items-start gap-4 pt-10 px-6 md:pt-0">
            <Link href="/" className="l-1125 !font-bold">
              Home
            </Link>
            <Link href="/about" className="l-1125 !font-bold">
              About
            </Link>
            <Link href="/menu" className="l-1125 !font-bold">
              Menu
            </Link>
          </div>
          <div className="flex flex-col justify-start items-start gap-4 pt-10 px-6 md:pt-0">
            <Link href="/career" className="l-1125 !font-bold">
              Careers
            </Link>
            <Link href="/order" className="l-1125 !font-bold">
              Order
            </Link>
            <Link href="/contact" className="l-1125 !font-bold">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end gap-4 md:justify-center md:items-center md:gap-2">
          <h3 className="b-125 uppercase !font-bold">Contact Us</h3>
          <div className="flex flex-col justify-center items-center gap-2 font-medium leading-8 tracking-widest">
            <span>+99891 352 4474</span>
            <span>+99833 052 4474</span>
          </div>
          <div className="flex flex-row justify-center items-center gap-8">
            <Link href="/">
              <Instagram />
            </Link>
            <Link href="/">
              <Telegram />
            </Link>
            <Link href="/">
              <Facebook />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full">
        <hr className="h-[2px] w-full bg-[#F0F0F0]" />
        <div className="w-full flex flex-row justify-between items-center py-3 px-4 md:flex-col max-w-[1400px] mx-auto">
          <h3>Copyright © 2023 all rights reserved</h3>
          <Link href="https://github.com/nbn2000" className="underline ">
            Designed by <strong>Makhmudov Nodirbek</strong>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
