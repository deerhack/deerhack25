import { cabinetBold, cabinetExtraBold } from "@/app/utils/fonts";
import LegacyCard from "@/app/components/Legacy/LegacyCards";
import Deerhack24 from "@/app/assets/icons/MainLogo";
import Deerhack25 from "@/app/assets/icons/Deerhack25";
import styles from "./styles.module.css";
import QuotesCard from "@/app/components/Quotes/QuotesCard";
import WinnerCard from "@/app/components/Winners/WinnersCard";
import DeerHack23Legacy from "@/app/components/Legacy/DeerHack23Legacy";
import Winners23SVG from "@/app/assets/images/legacyWinners23SVG";

const Page = () => {
    return (
      <>
       <div className="lg:w-[1351px] lg:h-[1100px]  text-white flex flex-col">
        <h1
        className={`headings ${cabinetExtraBold.className} text-5xl mb-16 pt-32`}>
            Deerhack 2023
            
        </h1>
        <div className = "flex flex-col">
        <QuotesCard />


        
        <DeerHack23Legacy
            logo={<Winners23SVG width={261.03} height={190}/>}
            title="Contrivers"
            description="DeerHack 2023 Overall Winners"
        />
        </div>

        {/* Here you will call your components like <QuotesCard/> or <WinnerCard/> */}


        </div>
        </>
        );
        }
        export default Page;