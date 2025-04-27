import React, { ReactElement } from "react";
import { cabinetBold, cabinetExtraBold, cabinetMedium, satoshiRegular } from "../../utils/fonts";

interface LegacyCardDetails {
    logo:ReactElement;
    title:string;
    description:string;
   
}

const DeerHack23Legacy: React.FC<LegacyCardDetails> = ({
    logo,
    title,
    description,
}) => {
    return (
        <div className="w-[29.674rem] h-[43.765rem] primary-gradient-background rounded-[3.6rem] p-[0.1875rem]">
            <div className="bg-dark-purple w-full h-full rounded-[3.5rem]">
                <div className="flex flex-col items-center justify-center relative top-[10rem]">
                    <div className="mb-[1rem]">
                        {logo}
                    </div>
                    <div className={`${cabinetExtraBold.className} text-primary-gradient-color text-[4.5rem] font-[700]`}>
                        {title}
                    </div>
                    <div className={`${satoshiRegular.className} text-[1.25rem] font-[500]`}>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeerHack23Legacy;