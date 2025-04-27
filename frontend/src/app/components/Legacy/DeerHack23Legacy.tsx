import React, { ReactElement } from "react";
import { cabinetBold, cabinetExtraBold, cabinetMedium } from "../../utils/fonts";

interface LegacyCardDetails {
    logo:ReactElement;
    // title:string;
    // description:string;
   
}

const DeerHack23Legacy: React.FC<LegacyCardDetails> = ({
    logo,
    // title,
    // description,
}) => {
    return (
        <div className="w-[29.674rem] h-[43.765rem] primary-gradient-background rounded-[3.6rem] p-[0.1875rem]">
            <div className="bg-dark-purple w-full h-full rounded-[3.5rem]">
                <div className="flex items-center justify-center">
                    <div>
                        {logo}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeerHack23Legacy;