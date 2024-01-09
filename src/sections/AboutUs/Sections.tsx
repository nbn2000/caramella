import { SmallUnderline } from "@/svg/view";
import Image from "next/image";
import PastryChef from "@/assets/about-us/pastry-chef.jpg";
import TwoLayerCake from "@/assets/about-us/2layer-cake.png";
import ThreeLayerCake from "@/assets/about-us/3llayer-cake.png";
import BlueCake from "@/assets/about-us/blue-cake.png";
import WhyChooseUs from "./WhyChooseUs";
import { useState } from "react";
import { useRouter } from "next/router";

type statetype = {
  first: boolean;
  second: boolean;
  third: boolean;
};
const Sections = () => {
  const router = useRouter();
  const [readMore, setReadMore] = useState<statetype>({
    first: false,
    second: false,
    third: false,
  });
  const [transition, setTransition] = useState<boolean>(false);
  const onClick = (event: statetype, section: string) => {
    setTransition(true);
    const setTimout = setTimeout(() => {
      setTransition(false);
      setReadMore(event);
      router.push(`#${section}`);
      clearTimeout(setTimout);
    }, 400);
  };
  return (
    <section className="container-p cont-y ">
      <div className="cont-y ">
        <h2 className="h-237575 text-text232 text-center mb-10 md:text-center">
          Preparing Our Product{" "}
          <span className="h-237575 text-orange relative md:text-center whitespace-nowrap">
            With Love
            <SmallUnderline className="absolute -bottom-2 left-0 w-full" />
          </span>
        </h2>
      </div>
      <div className="flex flex-col justify-center  gap-24">
        <div
          id="section-1"
          className="flex flex-row items-start justify-between gap-2 lg:flex-col-reverse lg:justify-center lg:gap-6"
        >
          <div className="flex flex-col gap-[15px] max-w-max md:justify-center md:items-center">
            <h3 className="h-175063 text-[#000] max-w-[400px] md:text-center">
              Our employees work hard
              <hr className="w-[70%] h-[3px] bg-orange rounded-[30rem] my-1 md:mx-auto" />
            </h3>
            <p className="b-125 max-w-[500px] text-[#848383] md:text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              molestiae nemo maxime doloremque laboriosam, dolores libero
              asperiores cum eos odio?
              {/* Sobirova Nazokat 2002-yilda qandolatchilik sohasida o‘z yo‘lini
              boshlagan bo‘lib, dastlab o‘z uyida turib mazali pishiriqlar
              tayorlagan. Uning tashabbusi uning pishsirgan pisishiriqlari
              yoqimli ta'miga maftun bo'lgan do'stlari va qarindosh a'zolaridan
              buyurtmalar kelishi bilan boshlandi. Ijobiy og'zaki nutq tez
              tarqaldi, bu uning shirin va ajoyib ijodiga bo'lgan talabning
              ortishiga olib keldi. O‘tgan yillar davomida Sobirova 1000dan
              ortiq o‘quvchilarga o‘z tajribasini berib, o‘zining ajoyib
              mahorati uchun e’tirof va olqishlarga sazovor bo‘ldi. Ajoyib
              sharaf sifatida uning mahalla komitet tomonidan uning sharafiga
              mahallani nomini Shirinlik ko'chasi deb nomladi. Uning
              qandolatchilikka bo‘lgan ishtiyoqi 2018-yilda sevimli mashg‘ulot
              sifatida boshlangan, mamnun bo‘lgan mijozlarning katta yordami
              tufayli gullab-yashnayotgan biznesga aylandi. Sobirova va uning
              turmush o‘rtog‘i Mahmudov Bosit o‘sish imkoniyatlarini tushunib,
              maxsus qandolatchilik fabrikasini tashkil etish to‘g‘risida
              strategik qaror qabul qilishdi. Ukasi Ibrohim Sobirovning qimmatli
              ko‘magida ular “Caramella” zavodini muvaffaqiyatli ishga
              tushirishdi. Tashkil etilganidan beri Caramella Namangandagi eng
              mashhur qandolatchilik fabrikalaridan biri sifatida mashhurlikka
              erishdi. Bu muvaffaqiyat tarixi Shodiya, Mashxura, Mohidil,
              Muborak, Naima kabi muhim shaxslarning fidoyiligi va mehnatisiz
              amalga oshmasdi. Ularning o'zgarmas sadoqati Caramellani bugungi
              kunda mashhur muassasaga aylantirishda muhim rol o'ynadi.
              Minnatdorchilik belgisi sifatida biz ushbu mehnatsevar va fidoyi
              insonlarga chin dildan minnatdorchilik bildiramiz. */}
              {readMore.first && (
                <p
                  className={`b-125 max-w-[500px] text-[#848383] md:text-center transition-[opacity] duration-400 ease-in-out
                    ${transition ? "opacity-0" : "opacity-100"}
                  `}
                >
                  {p}
                </p>
              )}
            </p>
            <button
              className="btn-contained button-text text-white"
              onClick={() =>
                onClick(
                  {
                    first: !readMore.first,
                    second: readMore.second,
                    third: readMore.third,
                  },
                  "section-1"
                )
              }
            >
              {readMore.first && !transition ? "Read Less" : "Read More"}
            </button>
          </div>
          <div className=" md:max-w-[300px] md:max-h-[300px] relative flex justify-center items-center max-w-[370px] max-h-[370px] p-8 bg-[url('../assets/about-us/background.png')] bg-contain bg-no-repeat">
            <Image
              src={PastryChef}
              alt="pastry chef"
              width={300}
              height={300}
              className="max-w-full max-h-full mask mask-pentagon object-contain -rotate-[30deg] hover:rotate-0 hover:transition-all transition-transform"
            />
            <div className="absolute w-[28%] top-[5%] left-[5%]">
              <Image src={TwoLayerCake} alt="2 layer cake" />
            </div>
            <div className="absolute w-[40%] top-[8%] -right-[10%] md:right-0">
              <Image src={ThreeLayerCake} alt="3 layer cake" />
            </div>
            <div className="absolute w-[20%] bottom-0">
              <Image src={BlueCake} alt="blue cake" />
            </div>
          </div>
        </div>
        <div
          id="section-2"
          className=" flex flex-row justify-between items-start gap-2 lg:flex-col lg:justify-center lg:gap-6"
        >
          <div className=" md:max-w-[300px] md:max-h-[300px] relative flex justify-center items-center max-w-[370px] max-h-[370px] p-8 bg-[url('../assets/about-us/background.png')] bg-contain bg-no-repeat">
            <Image
              src={PastryChef}
              alt="pastry chef"
              width={300}
              height={300}
              className="max-w-full max-h-full mask mask-pentagon object-contain -rotate-[30deg] hover:rotate-0 hover:transition-all transition-transform"
            />
            <div className="absolute w-[28%] top-[5%] left-[5%]">
              <Image src={TwoLayerCake} alt="2 layer cake" />
            </div>
            <div className="absolute w-[40%] top-[8%] -right-[10%] md:right-0">
              <Image src={ThreeLayerCake} alt="3 layer cake" />
            </div>
            <div className="absolute w-[20%] bottom-0">
              <Image src={BlueCake} alt="blue cake" />
            </div>
          </div>
          <div className="flex flex-col gap-[15px] max-w-max md:justify-center md:items-center">
            <h3 className="h-175063 text-[#000] max-w-[400px] md:text-center">
              Our employees work hard
              <hr className="w-[70%] h-[3px] bg-orange rounded-[30rem] my-1 md:mx-auto" />
            </h3>
            <p className="b-125 max-w-[500px] text-[#848383] md:text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              molestiae nemo maxime doloremque laboriosam, dolores libero
              asperiores cum eos odio?
              {readMore.second && (
                <p
                  className={`b-125 max-w-[500px] text-[#848383] md:text-center transition-[opacity] duration-400 ease-in-out
                    ${transition ? "opacity-0" : "opacity-100"}
                  `}
                >
                  {p}
                </p>
              )}
            </p>
            <button
              className="btn-contained button-text text-white"
              onClick={() =>
                onClick(
                  {
                    first: readMore.first,
                    second: !readMore.second,
                    third: readMore.third,
                  },
                  "section-2"
                )
              }
            >
              {readMore.second && !transition ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
        <div
          id="section-3"
          className=" flex flex-row justify-between items-start gap-2 lg:flex-col-reverse lg:justify-center lg:gap-6"
        >
          <div className="flex flex-col gap-[15px] max-w-max md:justify-center md:items-center">
            <h3 className="h-175063 text-[#000] max-w-[400px] md:text-center">
              Our employees work hard
              <hr className="w-[70%] h-[3px] bg-orange rounded-[30rem] my-1 md:mx-auto" />
            </h3>
            <p className="b-125 max-w-[500px] text-[#848383] md:text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              molestiae nemo maxime doloremque laboriosam, dolores libero
              asperiores cum eos odio?
              {readMore.third && (
                <p
                  className={`b-125 max-w-[500px] text-[#848383] md:text-center transition-[opacity] duration-400 ease-in-out
                    ${transition ? "opacity-0" : "opacity-100"}
                  `}
                >
                  {p}
                </p>
              )}
            </p>
            <button
              className="btn-contained button-text text-white"
              onClick={() =>
                onClick(
                  {
                    first: readMore.first,
                    second: readMore.second,
                    third: !readMore.third,
                  },
                  "section-3"
                )
              }
            >
              {readMore.third && !transition ? "Read Less" : "Read More"}
            </button>
          </div>
          <div className=" md:max-w-[300px] md:max-h-[300px] relative flex justify-center items-center max-w-[370px] max-h-[370px] p-8 bg-[url('../assets/about-us/background.png')] bg-contain bg-no-repeat">
            <Image
              src={PastryChef}
              alt="pastry chef"
              width={300}
              height={300}
              className="max-w-full max-h-full mask mask-pentagon object-contain -rotate-[30deg] hover:rotate-0 hover:transition-all transition-transform"
            />
            <div className="absolute w-[28%] top-[5%] left-[5%]">
              <Image src={TwoLayerCake} alt="2 layer cake" />
            </div>
            <div className="absolute w-[40%] top-[8%] -right-[10%] md:right-0">
              <Image src={ThreeLayerCake} alt="3 layer cake" />
            </div>
            <div className="absolute w-[20%] bottom-0">
              <Image src={BlueCake} alt="blue cake" />
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs />
    </section>
  );
};

export default Sections;
const p =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos praesentium corrupti harum! Voluptatum amet provident laboriosam quia quod, nemo officiis laudantium placeat adipisci iste facere inventore laborum quas rem esse odit sint nulla, deleniti perspiciatis saepe dolores cupiditate. Error molestiae dolor esse distinctio? Aliquam unde, veritatis quo id repudiandae aut facilis sapiente delectus accusamus molestiae eaque harum obcaecati? Quasi exercitationem dolorem quidem soluta accusantium quam blanditiis. Accusamus, quod obcaecati velit nemo temporibus voluptas voluptates debitis itaque error soluta quo doloremque cupiditate dolorum totam. Eos suscipit modi ipsum, explicabo facere tempora? Eum sit quasi corrupti vero natus nesciunt nobis, cupiditate soluta.";
