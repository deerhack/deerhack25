import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import LegacyFlower from "../assets/images/LegacyFlower.svg";
import LegacyLeafLeft from "../assets/images/LegacyLeafLeft.svg";
import LegacyLeafRight from "../assets/images/LegacyLeafRight.svg";
import { LegacySection } from "../sections/LegacySection";
export default function LegacyPage(){
    return(
        <>
        <Navbar/>
        <div className="relative overflow-hidden flex items-center justify-center w-full  mx-auto">
     
        <LegacySection/>
        <Image
  src={LegacyFlower}
  width={370.47} 
  height={252.2}
  alt="center flower"
  className="absolute top-[700px] left-[640px]  lg:block"
/>

<Image
  src={LegacyLeafRight}
  width={645}
  height={284}
  alt="right leaf"
  className="absolute top-[566.57px] left-[860px]  lg:block"
/>

<Image
  src={LegacyLeafLeft}
  width={645}
  height={284}
  alt="left leaf"
  className="absolute top-[566.57px] left-[155px]  lg:block"
/>

        </div>
        <Footer/>
      
        
        </>
    )
}