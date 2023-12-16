import { SmallUnderline } from "@/svg/view";
import Image from "next/image";
import BirthdayCake from "@/assets/what-we-offer/birthday-cake.jpg";
import biscuits from "@/assets/what-we-offer/biscuits.jpg";
import cookies from "@/assets/what-we-offer/cookies.jpg";

const WhatWeOffer = () => {
  return (
    <div className="container-p cont-y">
      <h2 className="h-237575 text-text232 text-center mb-10">
        What We{" "}
        <span className="h-237575 text-orange relative">
          Offer <SmallUnderline className="absolute -bottom-2 left-0 w-full" />
        </span>
      </h2>
      <div className="flex flex-row justify-between items-start gap-4 1xl:justify-center 1xl:flex-wrap">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src={BirthdayCake}
              alt="birthday cake"
              width={384}
              height={254}
              className="w-[384px] h-[254px]"
              loading="lazy"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black h-175063">Birthday Cakes</h2>
            <p className="text-text233 b-0875">
              We provide variety of birthday cakes for any party made with
              high-qualty natural ingridients and no preservatives
            </p>
            <div className="card-actions justify-end">
              <button className="text-white btn bg-orange">Read More</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src={cookies}
              alt="cookies"
              width={384}
              height={254}
              className="w-[384px] h-[254px]"
              loading="lazy"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black h-175063">
              Veriety of Cookies
            </h2>
            <p className="text-text233 b-0875">
              We provide variety of birthday cakes for any party made with
              high-qualty natural ingridients and no preservatives
            </p>
            <div className="card-actions justify-end">
              <button className="text-white btn bg-orange">Read More</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <Image
              src={biscuits}
              alt="biscuits for cake"
              width={384}
              height={254}
              className="w-[384px] h-[254px]"
              loading="lazy"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black h-175063">
              Helf Ready Products
            </h2>
            <p className="text-text233 b-0875">
              We provide variety of birthday cakes for any party made with
              high-qualty natural ingridients and no preservatives
            </p>
            <div className="card-actions justify-end">
              <button className="text-white btn bg-orange">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
