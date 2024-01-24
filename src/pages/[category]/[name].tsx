import { useRouter } from "next/router";
import Error from "next/error";
import Head from "next/head";
import SectionProduct from "@/sections/Product/view/SectionProduct";
import { Loader } from "@/svg/view";
import { useLazyGetSingleCardQuery } from "@/api/card-api-req";
import { useEffect } from "react";

const Product = () => {
  const router = useRouter();
  const id = router.query.name;
  const [getSingleCard, { data, isLoading, isError }] =
    useLazyGetSingleCardQuery();

  useEffect(() => {
    if (id !== undefined) {
      getSingleCard(String(id));
    }
  }, [id, getSingleCard]);
  if (isLoading || id === undefined) {
    return <Loader />;
  } else {
    if (isError) {
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
          <SectionProduct data={data} />
        </div>
      );
    }
  }
};

export default Product;
