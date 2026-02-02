import Hero from "../components/Hero"
import InfoBoxes from "../components/InfoBoxes"
import HomeProperties from "../components/HomeProperties"
import connectDB from "@/config/database"
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);



const Home = () => {
  connectDB();
  return (
    <>
      {/* <Hero/> */}
      <InfoBoxes />
      <HomeProperties />
    </>
  )
}

export default Home