import { Helmet } from "react-helmet-async";
import SectionMenu from "@/sections/Menu/view/SectionMenu";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>Menu</title>
      </Helmet>
      <SectionMenu />
    </>
  );
}
