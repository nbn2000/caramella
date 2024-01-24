import Image from "next/image";
import Chef from "@/assets/connect-us/connect-photo.jpg";
import { SmallUnderline } from "@/svg/view";

const ConnectUs = () => {
  return (
    <div className="container-p cont-y">
      <h2 className="h-237575 text-text232 text-center mb-10">
        <span className="h-237575 text-orange relative">
          Connect
          <SmallUnderline className="absolute -bottom-2 left-0 w-full" />
        </span>{" "}
        With Us
      </h2>
      <div className="flex flex-row justify-between items-center lg:flex-col lg:justify-center lg:gap-6">
        <div className="w-[45%] lg:w-[90%] md:w-[100%]">
          <Image
            src={Chef}
            alt="chef"
            width={300}
            height={300}
            className="w-[100%] h-[100%]"
            loading="lazy"
          />
        </div>
        <form className="w-[40%] mx-auto lg:w-[80%] md:w-[100%]">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-solid border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#f2360a] focus:outline-none focus:ring-0 focus:border-[#f2360a] peer"
              placeholder=" "
              required
              autoComplete="given-name"
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
              autoComplete="email"
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
              name="description"
              id="description"
              className="resize-none focus:h-[4rem]  block py-2.5 px-0 w-full border-solid text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#f2360a] focus:outline-none focus:ring-0 focus:border-[#f2360a] peer"
              placeholder=" "
              cols={1}
              rows={1}
              required
              autoComplete="description"
            />
            <label
              htmlFor="description"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#f2360a] peer-focus:dark:text-[#f2360a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              The Desctiption
            </label>
          </div>
          <button
            type="submit"
            className="button-text text-white btn-contained w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConnectUs;
