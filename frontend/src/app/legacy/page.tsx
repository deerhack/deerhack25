import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import LegacyFlower from "../assets/images/LegacyFlower.svg";
import LegacyLeafLeft from "../assets/images/LegacyLeafLeft.svg";
import LegacyLeafRight from "../assets/images/LegacyLeafRight.svg";
import { LegacySection } from "../sections/LegacySection";
import { HistorySection } from "../sections/HistorySection";
import { cabinetBold, cabinetExtraBold, cabinetMedium } from "@/app/utils/fonts";
export default function LegacyPage(){
    return(
        <>
        <Navbar/>
        <div className="relative overflow-hidden flex items-center justify-center w-full  mx-auto">
        <LegacySection/>

        </div>
       <div className="pb-[10rem] flex items-center justify-center">
          <HistorySection/>
        </div>
        <div className={`headings ${cabinetBold.className} text-left lg:p-16 sm:text-justify px-10`}>
          Honoring the legacy of DeerHack by honoring its Essence, Evolving its vision and passing it with a purpose every year.
        </div>
        <Footer/>
      
        
        </>
    )
}