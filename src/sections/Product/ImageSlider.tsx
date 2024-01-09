import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import birthday from "@/assets/connect-us/connect-photo-2.jpg";
import biscuits from "@/assets/gallery/biscuits.jpg";
import cupcake from "@/assets/gallery/cup-cakes.jpg";
import custom from "@/assets/gallery/custom-cakes.jpg";
import macarons from "@/assets/gallery/macarons.jpg";
import wedding from "@/assets/gallery/wedding-cake.jpg";
import oqtort from "@/assets/new-products/oq-to'rt.jpg";

const images = [
  {
    src: oqtort,
    alt: "oq tort",
  },
  {
    src: birthday,
    alt: "birthday",
  },
  {
    src: biscuits,
    alt: "biscuits",
  },
  {
    src: cupcake,
    alt: "cupcake",
  },
  {
    src: custom,
    alt: "custom",
  },
  {
    src: macarons,
    alt: "macarons",
  },
  {
    src: wedding,
    alt: "wedding",
  },
];

const ImageSlider = () => {
  return (
    <div className="sticky mx-auto top-20 1xl:static max-w-[600px] h-[400px] sm:!max-w-[300px] sm:!h-[200px] md:max-w-[400px] md:h-[266.6px] ">
      <Swiper
        navigation
        modules={[Navigation]}
        className="h-full w-full rounded-lg "
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                className="block h-full w-full object-cover object-center rounded-lg"
                width={600}
                height={400}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
