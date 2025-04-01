import React, { ReactElement } from "react";
import { cabinetBold, cabinetExtraBold } from "../../utils/fonts";

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
        <div className="lg:w-[380px] lg:h-[541px]  ml-14 py-5">
        <div className="border-[3px] border-secondary rounded-lg lg:w-[380px] lg:h-[139px] legacy-gradient">

        </div>

        <div className="border-[3px] border-secondary rounded-lg lg:w-[380px] lg:h-[347px] mt-2 legacy-gradient py-11 px-9">
            {/* <div className="lg:w-[282px] lg:h-[220px] justify-center mx-auto my-auto flex">
            <h1 className={`headings ${cabinetBold.className} text-3xl mb-16`}>Event Leads</h1>
                <h2 className="text-xl font-bold">{eventLead}</h2>
                <h2 className="text-xl font-semibold">{eventColead}</h2>
                <p className="text-sm">Date: {date}</p>
                <p className="text-sm">Applications: {application}</p>
                <p className="text-sm">Participation: {participation}</p>
            </div> */}
            
        <div className="flex justify-between mb-4">
            <div>
                <h2 className={`text-2xl font-bold headings ${cabinetBold.className}`}>Event Leads</h2>
                <p>{eventLead}</p>
                <p>{eventColead}</p>
            </div>
            <div>
                <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500">Dates</h2>
                <p>{date}</p>
            </div>
        </div>
        <div className="mb-4">
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500">Applications</h2>
            <p>{application}</p>
        </div>
        <div>
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500">Participation</h2>
            <p> {participation}</p>
        
    </div>
              
           
        </div>
        </div>
    );
}

export default LegacyCard;