import React, { useState } from "react";
import { SmallUnderline, Dot } from "@/svg/view";
import ModalSubmit from "./ModalSubmit";

const Vacancies = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="cont-y container-p">
      <h3 className="h-237575 text-text232 mb-10 ">
        Avialable{" "}
        <span className="h-237575 text-orange relative">
          Vacancies
          <SmallUnderline className="absolute -bottom-2 left-0 w-full" />
        </span>
      </h3>
      <div className="flex flex-row justify-between gap-4 items-start max-w-[95%] xl:flex-col ">
        <div className="flex flex-col w-[18rem] sm:w-full">
          <button className="button-text border-b-2 border-solid border-[#848383] w-full py-4 px-2 text-left hover:bg-text233 hover:text-white">
            Operator
          </button>
          <button className="button-text border-b-2 border-solid border-[#848383] w-full py-4 px-2 text-left hover:bg-text233 hover:text-white">
            Cream Specialist
          </button>
          <button className="button-text border-b-2 border-solid border-[#848383] w-full py-4 px-2 text-left hover:bg-text233 hover:text-white">
            Biscuit Specialist
          </button>
          <button className="button-text border-b-2 border-solid border-[#848383] w-full py-4 px-2 text-left hover:bg-text233 hover:text-white">
            Head Chef
          </button>
          <button className="button-text border-b-2 border-solid border-[#848383] w-full py-4 px-2 text-left hover:bg-text233 hover:text-white">
            Sweets Maker
          </button>
        </div>
        <div className="flex flex-col gap-[32px]">
          <h3 className="h-237575 text-text232">Operator</h3>
          <div className="flex flex-col gap-[24px]">
            <div className="max-w-[540px]">
              <h4 className="h-175063 text-orange">Years Experience</h4>
              <p className="b-0875 text-[#848383]">
                Required 2-5 years expreience
              </p>
            </div>
            <div className="max-w-[540px]">
              <h4 className="h-175063 text-orange">Responsibilites</h4>
              <p className="b-0875 flex flex-row  items-center gap-1 text-[#848383]">
                <Dot />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate, provident?
              </p>
              <p className="b-0875 flex flex-row  items-center gap-1 text-[#848383]">
                <Dot />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum.
              </p>
              <p className="b-0875 flex flex-row  items-center gap-1 text-[#848383]">
                <Dot />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore, laborum delectus.
              </p>
              <p className="b-0875 flex flex-row  items-center gap-1 text-[#848383]">
                <Dot />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
                repudiandae assumenda!
              </p>
              <p className="b-0875 flex flex-row  items-center gap-1 text-[#848383]">
                <Dot />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="max-w-[540px]">
              <h4 className="h-175063 text-orange">Requirements</h4>
              <p className="b-0875 flex flex-row  items-center gap-1 text-[#848383]">
                <Dot />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate, provident?
              </p>
              <p className="b-0875 flex flex-row  items-center gap-1 text-[#848383]">
                <Dot />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum.
              </p>
              <p className="b-0875 flex flex-row  items-center gap-1 text-[#848383]">
                <Dot />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore, laborum delectus.
              </p>
              <p className="b-0875 flex flex-row  items-center gap-1 text-[#848383]">
                <Dot />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
                repudiandae assumenda!
              </p>
              <p className="b-0875 flex flex-row  items-center gap-1 text-[#848383]">
                <Dot />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="max-w-[540px]">
              <h4 className="h-175063 text-orange">Conditions</h4>
              <p className="b-0875 flex flex-row  items-center gap-1 text-[#848383]">
                <Dot />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore, laborum delectus.
              </p>
              <p className="b-0875 flex flex-row  items-center gap-1 text-[#848383]">
                <Dot />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
                repudiandae assumenda!
              </p>
              <p className="b-0875 flex flex-row  items-center gap-1 text-[#848383]">
                <Dot />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <button
            type="submit"
            onClick={() => setOpen(true)}
            className="btn button-text btn-contained  text-white w-full"
          >
            Submit
          </button>
          <ModalSubmit setOpen={setOpen} open={open} />
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
