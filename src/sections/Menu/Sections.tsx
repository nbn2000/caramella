import Cards from "@/components/Cards";
import { useRouter } from "next/router";
import { useState } from "react";
import Pagination from "./Pagination";

const Sections = () => {
  const router = useRouter();
  const query = router?.query?.query || "wedding-cake";
  const [display, setDisplay] = useState(query);
  return (
    <div className="cont-y">
      <div className="container-p w-full bg-orange min-h-[5rem] py-[1rem] flex flex-row flex-wrap justify-center items-center gap-8">
        <button
          onClick={() => setDisplay("wedding-cake")}
          className={`button-text text-white ${
            display === "wedding-cake" && "bg-text233"
          } px-[1rem] py-[0.5rem] rounded-[10rem] hover:bg-text233 transition-all`}
        >
          wedding cakes
        </button>
        <button
          onClick={() => setDisplay("macaron")}
          className={`button-text text-white ${
            display === "macaron" && "bg-text233"
          } px-[1rem] py-[0.5rem] rounded-[10rem] hover:bg-text233 transition-all`}
        >
          macarons
        </button>
        <button
          onClick={() => setDisplay("biscuit")}
          className={`button-text text-white ${
            display === "biscuit" && "bg-text233"
          } px-[1rem] py-[0.5rem] rounded-[10rem] hover:bg-text233 transition-all`}
        >
          biscuits
        </button>
        <button
          onClick={() => setDisplay("custom-cake")}
          className={`button-text text-white ${
            display === "custom-cake" && "bg-text233"
          } px-[1rem] py-[0.5rem] rounded-[10rem] hover:bg-text233 transition-all`}
        >
          custom cakes
        </button>
        <button
          onClick={() => setDisplay("cupcake")}
          className={`button-text text-white ${
            display === "cupcake" && "bg-text233"
          } px-[1rem] py-[0.5rem] rounded-[10rem] hover:bg-text233 transition-all`}
        >
          cupcake
        </button>
        <button
          onClick={() => setDisplay("birthday-cake")}
          className={`button-text text-white ${
            display === "birthday-cake" && "bg-text233"
          } px-[1rem] py-[0.5rem] rounded-[10rem] hover:bg-text233 transition-all`}
        >
          birthday cakes
        </button>
      </div>
      <div className="cont-y">
        <Cards length={15} />
      </div>
      <div className="w-full flex justify-center items-center">
        <Pagination />
      </div>
    </div>
  );
};

export default Sections;
