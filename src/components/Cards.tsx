import { Badge } from "@/svg/view";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/cards.module.css";
import { array } from "@/mock";

const Cards = ({ length }: any) => {
  const repeatedArray = Array.from(
    { length: length },
    (_, index) => array[index % array.length]
  );
  return (
    <div className={styles.body}>
      {repeatedArray.map((i, idx) => (
        <Link
          href={`/${i.category}/${i.id}`}
          key={idx}
          className="card card-compact w-[22rem] h-[22rem]  bg-base-100 shadow-xl hover:scale-[0.99] hover:transition-all"
        >
          <figure>
            <Image
              src={i.file}
              alt="Shoes"
              width={384}
              height={254}
              className="w-[384px] h-[254px]"
              loading="lazy"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black h-175063">
              {i.name}
              {i.badge && (
                <div className="relative ">
                  <Badge className="w-10 h-10" />
                  <span className=" text-[0.7rem] text-[#F0F0F0] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                    NEW
                  </span>
                </div>
              )}
            </h2>
            <p className="text-text233 b-0875">{i.describtion}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline btn-border py-3 px-5 text-text232">
                ${i.price}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
