import React from "react";
import { SmallUnderline, Facebook, Instagram, Telegram } from "@/svg/view";
import Link from "next/link";

const ContactAndForm = () => {
  return (
    <div className="cont-y container-p flex flex-row justify-between items-start gap-6 lg:flex-col lg:items-center">
      <div>
        <h3 className="h-237575 text-text232">Do you have questions ?</h3>
        <h5 className="b-145475 text-gray-500 mb-7">Send Us Message</h5>
        <form>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-solid border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#f2360a] focus:outline-none focus:ring-0 focus:border-[#f2360a] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#f2360a] peer-focus:dark:text-[#f2360a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full border-solid text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#f2360a] focus:outline-none focus:ring-0 focus:border-[#f2360a] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#f2360a] peer-focus:dark:text-[#f2360a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Email Address
            </label>
          </div>

          <div className="relative max-h-max z-0 w-full mb-5 group">
            <textarea
              name="desctiption"
              id="desctiption"
              className="resize-none focus:h-[4rem]  block py-2.5 px-0 w-full border-solid text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#f2360a] focus:outline-none focus:ring-0 focus:border-[#f2360a] peer"
              placeholder=" "
              cols={1}
              rows={1}
              required
            />
            <label
              htmlFor="desctiption"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#f2360a] peer-focus:dark:text-[#f2360a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              The Desctiption
            </label>
          </div>
          <button
            type="submit"
            className="button-text text-white btn-contained w-full"
          >
            Send
          </button>
        </form>
      </div>
      <div className="flex flex-col justify-start items-start gap-[3rem]">
        <h3 className="h-237575 text-orange relative">
          Caramella
          <SmallUnderline className="absolute -bottom-2 left-0 w-full" />
        </h3>
        <div className="flex flex-col justify-start items-start gap-[2rem]">
          <div>
            <h5 className="b-145475  text-text233">Our Address:</h5>
            <p className="b-0875 text-gray-500">
              Uzbekistan &#10093; Namangan &#10093; Boburshox street &#10093;
              Near to Bossmilk cafe
            </p>
          </div>
          <hr className="w-full h-[2px] bg-gray-300" />
          <div>
            <div className="flex flex-row gap-4 justify-start items-center">
              <h5 className="text-lg text-text233">Phone Number:</h5>
              <p className="b-0875 text-gray-500">+998 91 352 44 74</p>
            </div>
            <div className="flex flex-row gap-4 justify-start items-center">
              <h5 className="text-lg text-text233">Phone Number:</h5>
              <p className="b-0875 text-gray-500">+998 33 052 44 74</p>
            </div>
            <div className="flex flex-row gap-4 justify-start items-center">
              <h5 className="text-lg text-text233">Email:</h5>
              <p className="b-0875 text-gray-500">caramella@gmail.com</p>
            </div>
            <div className="flex flex-row gap-4 justify-start items-center">
              <h5 className="text-lg text-text233">Working Hours:</h5>
              <p className="b-0875 text-gray-500">
                <strong>Mon-Sun:</strong> 9:00-18:00
              </p>
            </div>
          </div>
          <hr className="w-full h-[2px] bg-gray-300" />
          <div className="flex flex-row justify-center items-center gap-12 w-full bg-orange p-4 rounded-lg">
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
    </div>
  );
};

export default ContactAndForm;
