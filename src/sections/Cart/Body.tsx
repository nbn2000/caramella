import { BackArrow, Underline } from "@/svg/view";
import Link from "next/link";
import React from "react";
import { array } from "@/mock";
import Cards from "./Cards";
import { useRouter } from "next/router";

const Body = () => {
  const router = useRouter();
  const repeatedArray = Array.from(
    { length: 3 },
    (_, index) => array[index % array.length]
  );

  const handleCheckout = () => {
    router.push("/checkout");
  };
  return (
    <div className="cont-y container-p flex flex-row items-center justify-between gap-1 l:flex-col l:gap-6 ">
      <div className="w-[50%] 1xl:w-[57%]  l:w-[90%] md:w-full flex flex-col justify-center gap-5">
        <Link
          href="/menu"
          className="flex flex-row items-center gap-4 button-text btn-contained !w-max p-2 text-white"
        >
          <BackArrow /> <span>Харидни Давом Этиш</span>
        </Link>
        <hr className="w-full h-[2px] bg-gray-500 rounded-md" />
        <div>
          <h3 className="h-237575 text-text232 md:text-[3rem]">
            Харид
            <span className="relative h-237575 text-orange md:text-[3rem] ">
              {" "}
              Саватчаси
              <Underline className="absolute  -bottom-4 left-0 w-[100%]" />
            </span>
          </h3>
          <p className="text-gray-500 mt-4">Хозир сизда 3 та махсулот бор</p>
        </div>
        <div className="flex flex-col gap-4">
          {repeatedArray.map((i, idx) => (
            <div key={idx}>
              <Cards
                img={i.file}
                description={i.describtion}
                price={i.price}
                name={i.name}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[400px] md:!w-[95%] l:!w-[80%]  xl:!w-[320px] 1xl:w-[370px]  p-4 flex flex-col justify-center gap-6 sm:gap-3 sticky top-4 xl:static rounded-2xl border-[#232] border-[2px] border-solid">
        <div className="flex justify-between flex-row items-center">
          <span className="h-175063 md:text-base text-dark opacity-60">
            Жами Нархи:
          </span>
          <span className="h-175063 md:text-[1.3rem] whitespace-nowrap text-text232">{`$ 22.00`}</span>
        </div>
        <div>
          <span className="h-175063  md:text-[1.3rem] text-text232">
            <small className="opacity-60 h-175063 md:text-base">
              Махсулот Сони:{" "}
            </small>
            3
          </span>
        </div>
        <hr className="w-full h-[2px] bg-gray-500" />
        <button
          onClick={() => handleCheckout()}
          className="button-text text-white text-gr-white h-12 w-full bg-orange rounded-xl px-6"
        >
          CHECKOUT
        </button>
        <hr className="w-full h-[2px] bg-gray-500" />
        <p className="text-sm font-normal leading-5 text-dark opacity-80 w-full">
          Хозирда бизда йетказ бериш хизмати йоқдиги туфайли, агар сиз Наманган
          шахрида болмасангиз заказ бериш хақида ўйлаб кўришингизни маслахат
          берамиз чунки махсулотни олип кетиш учун ишлаб чиқариш жойига
          келишингиз керак
        </p>
      </div>
    </div>
  );
};

export default Body;