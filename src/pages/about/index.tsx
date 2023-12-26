import { Helmet } from "react-helmet-async";
import SectionAboutUs from "@/sections/AboutUs/view/SectionAboutUs";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <SectionAboutUs />
    </>
  );
}
