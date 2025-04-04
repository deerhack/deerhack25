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
        <div className="lg:w-[380px] lg:h-[541px] ml-14 py-5 z-0 ">
        <div className="border-[3px] border-secondary rounded-2xl lg:w-[380px] lg:h-[170px] w-[300px] h-[120px] legacy-gradient lg:py-10 py-3 px-9 mx-auto flex justify-center items-center">
        {logo}
        </div>

        <div className="border-[3px] border-secondary rounded-2xl lg:w-[380px] lg:h-[390px] w-[300px] h-[238px] mt-5  lg:py-11 lg:px-6 px-3 py-5 legacy-gradient shadow-sm shadow-secondary ">
        
        <div className="flex justify-between mb-4">
            <div >
                <h2 className={`lg:text-2xl text-sm headings ${cabinetExtraBold.className} ml-[0px] text-left`}>Event Leads</h2>
                <p className="text-sm lg:text-lg">{eventLead}</p>
                <p className="text-sm lg:text-lg">{eventColead}</p>
            </div>
            <div className="ml-3">
                <h2 className={`lg:text-2xl text-sm headings ${cabinetExtraBold.className} ml-[0px]`}>Dates</h2>
                <p className="text-sm lg:text-lg">{date}</p>
            </div>
        </div>
        <div className="mb-4">
            <h2 className={`lg:text-2xl  text-sm headings ${cabinetExtraBold.className} ml-[0px]`}>Applications</h2>
            <p className="text-sm lg:text-lg">{application}</p>
        </div>
        <div>
            <h2 className={`lg:text-2xl text-sm headings ${cabinetExtraBold.className} ml-[0px]`}>Participation</h2>
            <p className="text-sm lg:text-lg"> {participation}</p>
        
    </div>
       
          

        </div>
        </div>
    );
}

export default LegacyCard;