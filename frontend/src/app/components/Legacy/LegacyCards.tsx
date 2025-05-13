import React, { ReactElement } from "react";
import { cabinetBold, cabinetExtraBold, cabinetMedium } from "../../utils/fonts";
import Image from "next/image";
import LegacyFlower from "../assets/images/LegacyFlower.svg";
import LegacyLeafLeft from "../assets/images/LegacyLeafLeft.svg";
import LegacyLeafRight from "../assets/images/LegacyLeafRight.svg";


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
        <div className="lg:w-[380px] lg:h-[541px] ml-14 py-5 z-0">
        <div className="border-[3px] border-secondary rounded-2xl lg:w-[380px] lg:h-[170px] md:w-[400px] w-[300px] h-[120px] legacy-gradient lg:py-10 py-3 px-9 mx-auto flex justify-center items-center">
        {logo}
        </div>

        <div className="border-[3px] border-secondary rounded-2xl sm:h-[400px] md:w-[400px] lg:w-[380px] lg:h-[390px] md:h-[380px] w-[310px] h-[320px] mt-5 lg:py-11 lg:px-10 px-6 py-5 legacy-gradient shadow-sm shadow-secondary ">
        
        <div className="flex justify-between mb-4 mt-7 ">
            <div >
                <h2 className={`lg:text-2xl md:text-2xl text-[14px] headings ${cabinetExtraBold.className} ml-[0px] sm-[0px] text-left`}>Event Leads</h2>
               
                <p className="text-[10px] lg:text-[14px] md:text-[15px] py-2">{eventLead}</p>
                <p className="text-[10px] lg:text-[14px] md:text-[15px]">{eventColead}</p>
            </div>
            <div className="ml-3">
                <h2 className={`lg:text-2xl md:text-2xl text-[14px]  headings ${cabinetExtraBold.className} ml-[0px] text-left` }>Dates</h2>
                <p className="text-[10px] lg:text-[14px] md:text-[15px] py-2">{date}</p>
            </div>
        </div>
        <div className="mb-4">
            <h2 className={`lg:text-2xl md:text-2xl text-[14px] headings  ${cabinetExtraBold.className} ml-[0px] text-left`}>Applications</h2>
            <p className="text-[12px] lg:text-[14px] md:text-[15px] py-2">{application}</p>
        </div>
        <div>
            <h2 className={`lg:text-2xl  md:text-2xl text-[14px] headings ${cabinetExtraBold.className} ml-[0px] text-left`}>Participation</h2>
            <p className="text-[12px] lg:text-[14px] md:text-[15px] py-2"> {participation}</p>
              </div>
        </div>
        </div>
    );
}

export default LegacyCard;