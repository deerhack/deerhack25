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
            <div className="lg:flex lg:flex-row justify-center items-center gap-9 sm:flex sm:flex-col">
                        <div className="photo flex justify-center items-center">

                            <div className="w-[19.125rem] lg:w-[20.763rem] h-[24.75rem] lg:h-[28.133rem] primary-gradient-background rounded-[1rem] p-[0.1875rem]">
                                <div className="w-full lg:w-full h-full lg:h-full legacy-gradient-background rounded-[1rem] p-[0.1rem]">
                                    <div className="h-fit w-fit">
                                    {photo}
                                    </div>
                                        <div className="z-index-50 bg-[#110C24] flex justify-start h-fit lg:max-h-[7rem] lg-w[15.813rem] rounded-[1rem] mx-3 mt-[11rem] px-3 py-2 ">
                                            <div className="flex flex-col">
                                                <div className={`${cabinetBold.className} text-[1.125rem] h-fit`}>{name}
                                                </div>
                                                <div className={`${cabinetMedium} text-[0.875rem] h-fit`}>
                                                    {position}
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>

                        </div>

                        <div className="quotebox">
                            <div className="flex flex-col md:flex-row justify-center items-center mt-[2.813rem] lg:mt-0">
                                <div className="w-[19.728rem] lg:w-[50.75rem] h-[29.096rem] lg:h-[28.133rem] sm:h-max-[26.125rem] legacy-gradient-background rounded-[2rem] p-[0.1rem] mb-4">
                                    <div className="bg-dark-purple w-full h-full rounded-[1.9rem]">
                                        <div className="flex flex-col py-[2rem] px-[3.063rem] lg:py-[4.3rem] lg:px-[4.813rem] justify-center items-center">
                                            <div className={`${cabinetBold.className} text-[1.5rem] lg:leading-[3rem] lg:text-[2.25rem] mb-[1.5rem]`}>
                                                {title}<br />
                                            </div>
                                            <div className={`${cabinetMedium.className} text-[0.75rem] leading-[1.5rem] lg:text-[1.125rem]`}>
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