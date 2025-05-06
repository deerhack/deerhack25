import Image from "next/image";
import hero from "../../assets/images/Hero.jpg"
import { ReactElement } from "react";
import { cabinetBold, cabinetExtraBold, cabinetMedium, satoshiRegular } from "../../utils/fonts";

interface QuotesCardDetails {
    title:string;
    description:string;  
    name:string;
    position:string;
    photo:ReactElement;
}

const QuotesCard: React.FC<QuotesCardDetails> = ({
            title,
            description,
            name,
            position, 
            photo,
        }) => {
            return (
        <>
            <div className="flex flex-row justify-center gap-9">
                        <div className="photo">

                            <div className="w-[19.728rem] lg:w-[20.763rem] h-[29.096rem] lg:h-[28.133rem] primary-gradient-background rounded-[1rem] p-[0.1875rem]">
                                <div className="w-[19.728rem] lg:w-full h-[29.096rem] lg:h-full legacy-gradient-background rounded-[1rem] p-[0.1rem]">
                                    <div className="h-fit w-fit">
                                    {photo}
                                    </div>
                                        <div className="z-index-50 bg-[#110C24] flex justify-start h-fit lg:max-h-[7rem] lg-w[15.813rem] rounded-[1rem] mx-3 my-[-1rem] px-3 py-2 ">
                                            <div className="flex flex-col">
                                                <div className={`${cabinetBold.className} text-[1.125rem] h-fit`}>{name}
                                                </div>
                                                <div className={`${cabinetMedium} text-[0.875rem]h-fit`}>
                                                    {position}
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>

                        </div>

                <div className="quotebox">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <div className="w-[19.728rem] lg:w-[50.75rem] h-[29.096rem] lg:h-[28.133rem] legacy-gradient-background rounded-[3.6rem] p-[0.1rem]">
                            <div className="bg-dark-purple w-full h-full rounded-[3.5rem]">
                                <div className="flex flex-col justify-center py-[4.3rem] px-[4.813rem]">
                                 <div className={`${cabinetBold.className} text-[2.25rem] mb-[1.5rem]`}>   
                                {title}<br/>
                                </div>
                                <div className = {`${cabinetMedium.className} text-[1.125rem]`}>
                                {description}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default QuotesCard;