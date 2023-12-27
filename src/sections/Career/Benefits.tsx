import React from "react";
import Image from "next/image";
import ClientLogo from "@/assets/careers/client-logo.png";
import FamilyLogo from "@/assets/careers/family-logo.png";
import ProductLogo from "@/assets/careers/product-logo.png";
import ProductionLogo from "@/assets/careers/production-logo.png";
import { SmallUnderline } from "@/svg/view";

const Benefits = () => {
  return (
    <div className="container-p cont-y flex flex-row justify-between items-start gap-6 xl:flex-col ">
      <div className="flex flex-col justify-start items-start gap-4 max-w-[27rem] 1xl:max-w-[23rem] xl:max-w-[27rem]">
        <h2 className="h-175063 text-orange">Benefits</h2>
        <h3 className="h-237575 text-text232">
          Why you Should Join Our{" "}
          <span className="h-237575 text-orange relative">
            Awesome
            <SmallUnderline className="absolute -bottom-2 left-0 w-full" />
          </span>{" "}
          Team
        </h3>
        <p className="b-0875  text-[#848383]">
          we want to feel like home when you are working at JMC(Japan Marketing
          & Consultancy Limited) & for that we have curated a great set of
          benefits for you.It all starts with the free lunch!
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-5">
        <div className="flex flex-col justify-start items-start gap-2 max-w-[250px]">
          <div className="max-w-[80px] max-h-[80px]">
            <Image
              src={ClientLogo}
              alt="halal logo"
              width={80}
              height={80}
              className="object-cover w-[80px] h-[80px] "
            />
          </div>
          <h3 className="b-145475 text-orange max-w-[200px] uppercase">
            Clients
          </h3>
          <p className="b-0875  text-[#848383] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            molestiae.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 max-w-[250px]">
          <div className="max-w-[80px] max-h-[80px] ">
            <Image
              src={ProductionLogo}
              alt="halal logo"
              width={80}
              height={80}
              className="object-cover w-[80px] h-[80px]"
            />
          </div>
          <h3 className="b-145475 text-orange max-w-[200px] uppercase">
            Production
          </h3>
          <p className="b-0875  text-[#848383] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            molestiae.
          </p>
        </div>{" "}
        <div className="flex flex-col justify-start items-start gap-2 max-w-[250px]">
          <div className="max-w-[80px] max-h-[80px] ">
            <Image
              src={FamilyLogo}
              alt="halal logo"
              width={80}
              height={80}
              className="object-cover w-[80px] h-[80px]"
            />
          </div>
          <h3 className="b-145475 text-orange max-w-[200px] uppercase">
            We Are Family
          </h3>
          <p className="b-0875  text-[#848383] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            molestiae.
          </p>
        </div>{" "}
        <div className="flex flex-col justify-start items-start gap-2 max-w-[250px]">
          <div className="max-w-[80px] max-h-[80px] ">
            <Image
              src={ProductLogo}
              alt="halal logo"
              width={80}
              height={80}
              className="object-cover w-[80px] h-[80px]"
            />
          </div>
          <h3 className="b-145475 text-orange max-w-[200px] uppercase">
            Our Product
          </h3>
          <p className="b-0875  text-[#848383] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            molestiae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
