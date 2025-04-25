
"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { cabinetBlack, cabinetBold, cabinetExtraBold } from "./utils/fonts";
import { redirect } from "next/navigation";
import GoBackToHome from "./components/GoBack/GoBackToHome";
import Image from "next/image";
import darin_404 from "@/app/assets/images/darin_404.svg";
import Navbar from "./components/Navbar/Navbar";

export default function NotFound() {
  return (

    <div
      className={`${styles.background_container} overflow-hidden`}
    >
      <Navbar/>
      <div className="sm:flex sm:justify-center sm:items-center">
       <div
        className={`rounded-[0.65rem] w-[20.409rem] md:w-[40.808rem] max-w-[1080px] h-[5.531rem] md:h-[10.705rem]
           flex flex-col gap-4 justify-center items-center  border-secondary border-2 backdrop-blur-sm px-2 py-6 mx-auto
            relative top-[20.4rem] md:top-[41.5rem] lg:top-[34rem] left-[0.7rem] lg:left-[14rem]`}
      >
        <p
          className={`${cabinetExtraBold.className} text-[#F5C144] w-fit text-[1.25rem] md:text-[2.674rem] text-center`}
        >
          Nobody seems to be here!
        </p>
        <GoBackToHome />
      </div> 
      </div>
          
      {/* <Image
      src={darin_404}
      alt="darin"
      className="absolute top-[5rem] left-[7.5rem] h-[40rem] overflow-hidden"
      >

      </Image> */}
    </div>

  );
}

{
  /* <div
      className={${styles.background_container} h-screen flex justify-center}
    >
      <div
        className={${styles.muted_color} rounded-[0.65rem] w-[80vw] md:w-[50vw] h-fit lg:h-[24vh] flex flex-col gap-4 justify-center items-center  border-secondary border-2 backdrop-blur-sm px-2 py-6 mx-auto absolute top-[60%]}
      >
        <p
          className={${cabinetExtraBold.className} text-primary-gradient-color-reverse w-fit text-5xl text-center}
        >
          Nobody Seems to be here!
        </p>
        <GoBackToHome />
      </div>
    </div> */
}
