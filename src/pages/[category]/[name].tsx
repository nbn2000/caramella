import { useRouter } from "next/router";
import Error from "next/error";
import Head from "next/head";
import SectionProduct from "@/sections/Product/view/SectionProduct";
import { array } from "@/mock";
import { Loader } from "@/svg/view";

const Product = () => {
  const router = useRouter();
  const id = router.query.name;
  const object = array.find((i) => id === i.id);

  if (id === undefined) {
    return <Loader />;
  } else {
    if (object === undefined) {
      return (
        <>
          <Head>
            <title>404 Not Found</title>
          </Head>
          <Error statusCode={404} />
        </>
      );
    } else {
      return (
        <div>
          <Head>
            <title>Product page</title>
          </Head>
          <SectionProduct data={object} />
        </div>
      );
    }
  }
};

export default Product;
