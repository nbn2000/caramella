import { Helmet } from "react-helmet-async";
import SectionContact from "@/sections/Contact/view/SectionContact";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <SectionContact />
    </>
  );
}
