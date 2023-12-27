import { Helmet } from "react-helmet-async";
import SectionCareer from "@/sections/Career/view/SectionCareer";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <SectionCareer />
    </>
  );
}
