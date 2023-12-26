import { useState } from "react";

const Pagination = () => {
  const [active, setActive] = useState(1);
  const activeClass = "w-[5rem] h-full text-white hover:bg-orange bg-orange";
  const notActiveClass =
    "w-[5rem] h-full text-white hover:bg-orange bg-text233";
  return (
    <div className="flex flex-row h-[5rem]">
      {Array.from({ length: 5 }).map((_, idx) => {
        const id = idx + 1;
        return (
          <button
            key={id}
            onClick={() => {
              setActive(id);
            }}
            className={active === id ? activeClass : notActiveClass}
          >
            {id}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
