import { cabinetBold, cabinetExtraBold } from "@/app/utils/fonts";
import LegacyCard from "@/app/components/Legacy/LegacyCards";
import Deerhack24 from "@/app/assets/icons/MainLogo";
import Deerhack25 from "@/app/assets/icons/Deerhack25";
import styles from "./styles.module.css";
const Page = () => {
    return (
      <>
       <div className="lg:w-[1351px] lg:h-[1100px]  text-white flex flex-col">
        <h1
        className={`headings ${cabinetExtraBold.className} text-5xl mb-16 pt-32`}>
            Legacy
        </h1>
        <div className="lg:flex ">

        <LegacyCard 
            logo={<Deerhack24 width={208} height={92}/>}
            eventLead="Prayatna Mishra"
            eventColead="Bipashree Aryal"
            date="May 5, 6, 7: 2023"
            application={1050}
            participation={75}
             />

             <LegacyCard 
            logo={<Deerhack24 width={208} height={92}/>}
            eventLead="Aasutosh Pudasaini"
            eventColead="Sampanna Gautam"
            date="May 8, 9, 10 : 2024"
            application={1050}
            participation={75}
             />

             <LegacyCard 
            logo={<Deerhack25 width={208} height={92}/>}
            eventLead="Dipan Silwal"
            eventColead="Pragalva Sapkota"
            date="June 5, 6, 7: 2025"
            application={1050}
            participation={75}
             />
        </div>
       
        
       </div>
      </>
    );
};
    export default Page;