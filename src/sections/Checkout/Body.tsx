import { array } from "@/mock";
import Cards from "./Cards";
import dynamic from "next/dynamic";
const Form = dynamic(() => import("./Form"), { ssr: false });

const Body = () => {
  const repeatedArray = Array.from(
    { length: 3 },
    (_, index) => array[index % array.length]
  );
  return (
    <div className="cont-y container-p flex flex-row gap-6 xl:flex-col xl:justify-center xl:items-center justify-between items-start">
      <div className="flex flex-col gap-4 w-[40%] md:!px-0 lg:!w-full lg:px-[10%] xl:w-[55%] ">
        <h3 className="h-237575 text-text232 md:text-[3rem]">Information</h3>
        <div className="flex flex-col max-w-[500px] gap-2">
          <span className="b-0875 text-gray-500 ">
            Агар телеграмда рўйхатдан ўтган телефон рақамингиз қўнғироқлар учун
            мобил рақамингиз бўлмаса, илтимос рақамингизни Йозинг!{" "}
          </span>
          <span className="b-0875 text-orange">
            Диққат! Бу телефон номерингизни биз сизга буюртмангизни тасдиқлаш
            қўнғироғи учун ишлатамиз агар қўнғироқ тасдиқисиз сизнинг
            буюртмангизни бошлай ололмаймиз{" "}
          </span>
        </div>
        <Form />
      </div>
      <div className="flex flex-col gap-6 w-[45%] lg:!w-[80%] xl:w-[65%]">
        <h3 className="h-237575 text-text232 md:text-[2rem]">Буюртмалар:</h3>
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
        <h3 className="h-175063 text-text232 md:text-[2rem] sm:!text-[1.5rem]">
          Хаммаси Бўлиб:{" "}
          <span className="h-237575 text-orange md:text-[2.2rem] sm:!text-[1.7rem]">
            $1000
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Body;
