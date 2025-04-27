import { cabinetBold, cabinetExtraBold } from "@/app/utils/fonts";
import LegacyCard from "@/app/components/Legacy/LegacyCards";
import Deerhack24 from "@/app/assets/icons/MainLogo";
import Deerhack25 from "@/app/assets/icons/Deerhack25";
import styles from "./styles.module.css";
import QuotesCard from "@/app/components/Quotes/QuotesCard";
import WinnerCard from "@/app/components/Winners/WinnersCard";
const Page = () => {
    return (
      <>
       <div className="lg:w-[1351px] lg:h-[1100px]  text-white flex flex-col">
        <h1
        className={`headings ${cabinetExtraBold.className} text-5xl mb-16 pt-32`}>
            Deerhack 2023
            
        </h1>


        {/* Here you will call your components like <QuotesCard/> or <WinnerCard/> */}


        </div>
        </>
        );
        }
        export default Page;