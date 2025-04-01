import { cabinetBold, cabinetExtraBold } from "@/app/utils/fonts";
import LegacyCard from "@/app/components/Legacy/LegacyCards";
const Page = () => {
    return (
      <>
       <div className="lg:w-[1351px] lg:h-[1100px]  text-white flex flex-col">
        <h1
        className={`headings ${cabinetBold.className} text-5xl mb-16 pt-32`}>
            Legacy
        </h1>
        <div className="flex">
        <LegacyCard 
            
            eventLead="Prayatna Mishra"
            eventColead="Bipashree Aryal"
            date="May 5, 6, 7: 2023"
            application={1050}
            participation={75}
             />
             <LegacyCard 
            
            eventLead="Aasutosh Pudasaini"
            eventColead="Sampanna Gautam"
            date="May 8, 9, 10 : 2024"
            application={1050}
            participation={75}
             />
             <LegacyCard 
            
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