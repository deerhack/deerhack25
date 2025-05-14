import { cabinetBold, cabinetExtraBold } from "@/app/utils/fonts";
import LegacyCard from "@/app/components/Legacy/LegacyCards";
import Deerhack24 from "@/app/assets/icons/MainLogo";
import Deerhack25 from "@/app/assets/icons/Deerhack25";
import styles from "./styles.module.css";

import LightBulbSVG from "@/app/assets/images/lightbulb";
import DataLogoSVG from "@/app/assets/images/dataLogo";
import BlockChainSVG from "@/app/assets/images/blockChainLogo";
import InteractiveLogoSVG from "@/app/assets/images/interactiveTechLogo";
import DeerHack23Legacy from "@/app/components/WinnersLegacy/DeerHack23Legacy";
import Winners23SVG from "@/app/assets/images/legacyWinners23SVG";
const winnersList = [
    {
        id: 1,
        title: "Code Crusaders",
        description: "DeerHack 2023 Open Innovation Track Winner",
        svg: <LightBulbSVG />,
    },
    {
        id: 2,
        title: "The Kripples",
        description: "DeerHack 2023 Data Science / ML Track Winner",
        svg: <DataLogoSVG />,
    },
    {
        id: 3,
        title: "Custodes",
        description: "DeerHack 2023 Blockchain Track Winner",
        svg: <BlockChainSVG />,
    },
    {
        id: 4,
        title: "Pentagon",
        description: "DeerHack 2023 Interactive Technology Track Winner",
        svg: <InteractiveLogoSVG />,
    },
];
const Page = () => {
    return (
      <>
       <div className="lg:w-[1351px] lg:h-[1100px]  text-white flex flex-col">
        <h1
        className={`headings ${cabinetExtraBold.className} text-5xl mb-16 pt-32`}>
            Deerhack 2023
            
        </h1>
         <DeerHack23Legacy 
            logo={<Winners23SVG width={261.03} height={190}/>}
            title="Contrivers" 
            description="Celebrating the innovators of DeerHack 2023" 
            winnersList={winnersList} 
        />
        </div>
        </>
        );
        }
        export default Page;