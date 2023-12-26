import { SmallUnderline, Badge } from "@/svg/view";
import Image from "next/image";
import Link from "next/link";
import AmericanHeritache from "@/assets/new-products/american-heritage-chocolate.jpg";
import ChocolateCake from "@/assets/new-products/chocolate-cake.jpg";
import CreamyCake from "@/assets/new-products/creamy-cake.jpg";
import Cards from "@/components/Cards";

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
      <Cards length={3} />
    </div>
  );
};

export default NewProducts;
