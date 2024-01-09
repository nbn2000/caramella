import { CarretUp, CarretDown, Trash } from "@/svg/view";

import { array } from "@/mock";
import Image from "next/image";
import { useState } from "react";
import { StaticImageData } from "next/image";

const Cards = ({
  img,
  description,
  price,
  name,
}: {
  img: StaticImageData;
  description: string;
  price: number;
  name: string;
}) => {
  const [count, setCount] = useState(1);
  const handleCountButton = (calc: boolean) => {
    if (calc) {
      setCount(count + 1);
    } else {
      if (count > 1) setCount(count - 1);
    }
  };
  return (
    <div className="max-w-full h-[100px] p-4 flex flex-row justify-between items-center gap-[5px] md:flex-col md:h-max md:gap-6   shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] rounded-[15px]">
      <div className="flex flex-row gap-5 items-center md:flex-col">
        <Image
          src={img}
          alt="image alt"
          width={100}
          height={100}
          className="rounded-[5px] md:w-full"
        />
        <div>
          <h5 className="b-125 text-text233">{name}</h5>
          <p className="b-0875 text-gray-500  w-[200px] h-[40px] line-clamp-2 md:line-clamp-none md:w-full">
            {description}
          </p>
        </div>
      </div>
      <div className="md:hidden flex flex-row justify-center items-center ">
        <span className="text-text232 b-145475 ">{count}</span>
        <div className="flex flex-col justify-center items-center h-full">
          <button
            className="active:scale-90"
            onClick={() => handleCountButton(true)}
          >
            <CarretUp />
          </button>
          <button
            className="active:scale-90"
            onClick={() => handleCountButton(false)}
          >
            <CarretDown />
          </button>
        </div>
      </div>
      <div className="hidden md:flex b-145475 mx-auto w-[200px] h-[50px] flex-row justify-between items-center bg-gray-200 rounded-md">
        <button
          className="h-full bg-orange w-[50px] text-white rounded-tl rounded-bl"
          onClick={() => handleCountButton(false)}
        >
          -
        </button>
        <span className="text-text232 b-145475 ">{count}</span>
        <button
          className="h-full bg-orange w-[50px] text-white rounded-tr rounded-br"
          onClick={() => handleCountButton(true)}
        >
          +
        </button>
      </div>

      <div className="flex flex-row justify-center items-center gap-4 whitespace-nowrap md:!justify-between md:w-[95%]">
        <span className="b-125 text-text233">$ {price}</span>
        <Trash />
      </div>
    </div>
  );
};

export default Cards;
