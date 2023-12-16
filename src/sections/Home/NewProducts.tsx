import { SmallUnderline, Badge } from "@/svg/view";
import Image from "next/image";
import Link from "next/link";
import AmericanHeritache from "@/assets/new-products/american-heritage-chocolate.jpg";
import ChocolateCake from "@/assets/new-products/chocolate-cake.jpg";
import CreamyCake from "@/assets/new-products/creamy-cake.jpg";

const NewProducts = () => {
  return (
    <div className="cont-y container-p">
      <h2 className="h-237575 text-text232 text-center mb-10">
        New{" "}
        <span className="h-237575 text-orange relative">
          Products
          <SmallUnderline className="absolute -bottom-2 left-0 w-full" />
        </span>
      </h2>
      <div className="flex flex-row justify-between items-start gap-4 1xl:justify-center 1xl:flex-wrap">
        <Link href="/" className="card w-96 card-compact bg-base-100 shadow-xl">
          <figure>
            <Image
              src={AmericanHeritache}
              alt="Shoes"
              width={384}
              height={254}
              className="w-[384px] h-[254px]"
              loading="lazy"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black h-175063">
              American Heritache Chocolate
              <div className="relative ">
                <Badge className="w-10 h-10" />
                <span className=" text-[0.7rem] text-[#F0F0F0] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                  NEW
                </span>
              </div>
            </h2>
            <p className="text-text233 b-0875">
              Indulge in the rich legacy of American Heritage Chocolate, a
              sublime blend of tradition and taste.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline btn-border py-3 px-5 text-text232">
                $125
              </div>
            </div>
          </div>
        </Link>
        <Link href="/" className="card w-96 card-compact bg-base-100 shadow-xl">
          <figure>
            <Image
              src={ChocolateCake}
              alt="Shoes"
              width={384}
              height={254}
              className="w-[384px] h-[254px]"
              loading="lazy"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black h-175063">
              Chocolate Cake
              <div className="relative ">
                <Badge className="w-10 h-10" />
                <span className=" text-[0.7rem] text-[#F0F0F0] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                  NEW
                </span>
              </div>
            </h2>
            <p className="text-text233 b-0875">
              Indulge in the rich legacy of American Heritage Chocolate, a
              sublime blend of tradition and taste.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline btn-border py-3 px-5 text-text232">
                $125
              </div>
            </div>
          </div>
        </Link>

        <Link href="/" className="card w-96 card-compact bg-base-100 shadow-xl">
          <figure>
            <Image
              src={CreamyCake}
              alt="Shoes"
              width={384}
              height={254}
              className="w-[384px] h-[254px]"
              loading="lazy"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black h-175063">
              Creamy Cake
              <div className="relative ">
                <Badge className="w-10 h-10" />
                <span className=" text-[0.7rem] text-[#F0F0F0] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                  NEW
                </span>
              </div>
            </h2>
            <p className="text-text233 b-0875">
              Indulge in the rich legacy of American Heritage Chocolate, a
              sublime blend of tradition and taste.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline btn-border py-3 px-5 text-text232">
                $125
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NewProducts;
