import { Helmet } from "react-helmet-async"
import SectionHome from "@/sections/Home/view/SectionHome"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <SectionHome />
    </>
  )
}
