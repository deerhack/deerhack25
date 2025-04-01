import React, { ReactElement } from "react";
import { cabinetBold, cabinetExtraBold, cabinetMedium } from "../../utils/fonts";

interface LegacyCardDetails {
    logo:ReactElement;
    eventLead: string;
    eventColead: string;
    date: string;
    application: number;
    participation: number;
}

const LegacyCard: React.FC<LegacyCardDetails> = ({
    logo,
    eventLead,
    eventColead,
    date,
    application,
    participation,
}) => {
    return (
        <div className="lg:w-[380px] lg:h-[541px]  ml-14 py-5 z-10">
        <div className="border-[3px] border-secondary rounded-lg lg:w-[380px] lg:h-[139px] legacy-gradient">
        {logo}
        </div>

        <div className="border-2 border-secondary rounded-2xl lg:w-[380px] lg:h-[347px] mt-2  py-11 px-9  legacy-gradient">
        
        <div className="flex justify-between mb-4">
            <div>
                <h2 className={`text-2xl  headings ${cabinetExtraBold.className} ml-[0px]`}>Event Leads</h2>
                <p>{eventLead}</p>
                <p>{eventColead}</p>
            </div>
            <div className="ml-3">
                <h2 className={`text-2xl headings ${cabinetExtraBold.className} ml-[0px]`}>Dates</h2>
                <p>{date}</p>
            </div>
        </div>
        <div className="mb-4">
            <h2 className={`text-2xl headings ${cabinetExtraBold.className} ml-[0px]`}>Applications</h2>
            <p>{application}</p>
        </div>
        <div>
            <h2 className={`text-2xl  headings ${cabinetExtraBold.className} ml-[0px]`}>Participation</h2>
            <p> {participation}</p>
        
    </div>
       
          
              
           
        </div>
        </div>
    );
}

export default LegacyCard;