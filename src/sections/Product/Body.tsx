import ImageSlider from "./ImageSlider";
import { SmallUnderline, Dot } from "@/svg/view";
import { useState } from "react";
type objectInterface = [
  {
    value: string;
  }
];

const body = ({ data }: { data: any }) => {
  const [count, setCount] = useState(0);
  const property: objectInterface = data?.property || [];
  const handleCountButton = (calc: boolean) => {
    if (calc) {
      setCount(count + 1);
    } else {
      if (count > 1) setCount(count - 1);
    }
  };
  return (
    <div className="cont-y container-p flex flex-row justify-between gap-8 1xl:flex-col 1xl:items-center 1xl:justify-center md:px-4">
      <div className="md:w-full">
        <ImageSlider files={data?.files} />
      </div>
      <div className="flex flex-col justify-start items-start gap-[3rem] min-w-[400px] w-[400px] 1xl:w-[90%] 1xl:min-w-[90%] 1xl:max-w-[90%]">
        <h3 className="h-237575 text-orange relative">
          {data?.name}
          <SmallUnderline className="absolute -bottom-2 left-0 w-full" />
        </h3>
        <div className="flex flex-col justify-start items-start gap-[1rem]">
          <div>
            <h5 className=" b-0875 text-gray-500 ">Description:</h5>
            <p className="b-125 text-text233">{data?.description}</p>
          </div>
          <div>
            <h5 className="b-0875 text-gray-500 ">Price:</h5>
            <p className="b-125 text-text233">{data?.price} сўм</p>
          </div>

          <div>
            <h5 className="b-0875 text-gray-500 ">Main Ingridients:</h5>
            {Array.isArray(property) &&
              property?.map((i, idx) => (
                <p
                  key={idx}
                  className="b-0875 text-text233 flex flex-row  items-center gap-1"
                >
                  <Dot /> {i?.value}
                </p>
              ))}
          </div>

          <div className="w-full">
            <h5 className="b-0875 text-gray-500 ">Amount:</h5>
            <div className="b-145475 mx-auto w-[200px] h-[50px] flex flex-row justify-between items-center bg-gray-200 rounded-md">
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
          </div>
          <button className="button-text w-full h-[50px] bg-orange rounded-[10px] text-white">
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default body;
