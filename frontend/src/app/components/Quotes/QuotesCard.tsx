import Image from "next/image";
import hero from "../../assets/images/Hero.jpg"
export default function QuotesCard() {
    return (
        <>
            <div className="flex flex-row gap-9">
                <div className="photo">

                    <div className="w-[19.728rem] lg:w-[20.763rem] h-[29.096rem] lg:h-[28.133rem] primary-gradient-background rounded-[1rem] p-[0.1875rem]">
                    <div className="w-[19.728rem] lg:w-full h-[29.096rem] lg:h-full legacy-gradient-background rounded-[1rem] p-[0.1rem]">
                        <div className="z-index-20 relative top-[12rem]">

                            {/* <Image
                                src={hero}
                                width={316.208}
                                height={450.130859375}
                                alt="right leaf"
                                className=""
                            /> */}
                            <div className="z-index-50 bg-[#110C24] lg:h-[3.125rem] lg-w[15.813rem] rounded-[1rem]">

                            </div>
                        </div>
                    </div>
                    </div>

                </div>
                <div className="quotebox">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <div className="w-[19.728rem] lg:w-[50.75rem] h-[29.096rem] lg:h-[27.813rem] legacy-gradient-background rounded-[3.6rem] p-[0.1rem]">
                            <div className="bg-dark-purple w-full h-full rounded-[3.5rem]">
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

