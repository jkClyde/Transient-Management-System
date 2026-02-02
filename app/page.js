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
      <div className="py-[0px] md:py-[50px]">
        <InfoBoxes />
        <HomeProperties />
      </div>
    </>
  )
}

export default Home