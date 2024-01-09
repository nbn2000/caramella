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
    <div className="cont-y container-p flex flex-row justify-between items-start">
      <div className="flex flex-col gap-4 w-[50%]">
        <h3 className="h-237575 text-text232 md:text-[3rem]">Information</h3>
        <div className="flex flex-col w-[500px] gap-2">
          <span className="b-0875 text-gray-500">
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
      <div className="flex flex-col gap-6">
        <h3 className="h-237575 text-text232 md:text-[3rem]">Буюртмалар:</h3>
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
        <h3 className="h-175063 text-text232 md:text-[3rem]">
          Хаммаси Бўлиб:{" "}
          <span className="h-237575 text-orange md:text-[3rem]">$1000</span>
        </h3>
      </div>
    </div>
  );
};

export default Body;
