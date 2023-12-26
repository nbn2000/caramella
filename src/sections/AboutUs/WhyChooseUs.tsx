import { SmallUnderline } from "@/svg/view";
import Image from "next/image";
import BestValue from "@/assets/about-us/best-value.png";
import FoodSafety from "@/assets/about-us/food-safety-stamp.png";
import Halal from "@/assets/about-us/Halal-logo.png";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="cont-y">
        <h2 className="h-237575 text-text232 text-center mb-10 md:text-center">
          Why{" "}
          <span className="h-237575 text-orange relative md:text-center whitespace-nowrap">
            Choose
            <SmallUnderline className="absolute -bottom-2 left-0 w-full" /> Us
          </span>
        </h2>
      </div>
      <div className="flex flex-row justify-center items-start gap-4 xl:flex-wrap">
        <div className="flex flex-col justify-center items-center gap-6 max-w-[350px]">
          <div className="max-w-[100px] max-h-[100px]">
            <Image
              src={Halal}
              alt="halal logo"
              width={100}
              height={100}
              className="object-cover w-[100px] h-[100px]"
            />
          </div>
          <h3 className="h-175063 text-[#000] max-w-[400px] text-center">
            Our employees work hard
            <hr className="w-[70%] h-[3px] bg-orange rounded-[30rem] my-1 mx-auto" />
          </h3>
          <p className="b-125  text-[#848383] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            molestiae.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 max-w-[350px]">
          <div className="max-w-[100px] max-h-[100px]">
            <Image
              src={BestValue}
              alt="halal logo"
              width={100}
              height={100}
              className="object-cover w-[100px] h-[100px]"
            />
          </div>
          <h3 className="h-175063 text-[#000] max-w-[400px] text-center">
            Our employees work hard
            <hr className="w-[70%] h-[3px] bg-orange rounded-[30rem] my-1 mx-auto" />
          </h3>
          <p className="b-125  text-[#848383] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            molestiae.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 max-w-[350px]">
          <div className="max-w-[100px] max-h-[100px]">
            <Image
              src={FoodSafety}
              alt="halal logo"
              width={100}
              height={100}
              className="object-cover w-[100px] h-[100px]"
            />
          </div>
          <h3 className="h-175063 text-[#000] max-w-[400px] text-center">
            Our employees work hard
            <hr className="w-[70%] h-[3px] bg-orange rounded-[30rem] my-1 mx-auto" />
          </h3>
          <p className="b-125 text-[#848383] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            molestiae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
