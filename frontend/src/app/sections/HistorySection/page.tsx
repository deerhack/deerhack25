import { cabinetBold, cabinetExtraBold } from "@/app/utils/fonts";
import LegacyCard from "@/app/components/Legacy/LegacyCards";
import Deerhack24 from "@/app/assets/icons/MainLogo";
import Deerhack25 from "@/app/assets/icons/Deerhack25";
import styles from "./styles.module.css";
import QuotesCard from "@/app/components/Quotes/QuotesCard";
import WinnerCard from "@/app/components/Winners/WinnersCard";
import DeerHack23Legacy from "@/app/components/Legacy/DeerHack23Legacy";
import Winners23SVG from "@/app/assets/images/legacyWinners23SVG";
import LegacyDemoSVG from "../../assets/images/legacyWinners23SVG";
import { data } from "./data";
import CarouselImage from "@/app/components/Legacy/CarouselImage";

const Page = () => {

    return (
        <>
            <div className="lg:w-[1171px] text-white flex flex-col gap-10">
                <h1
                    className={`headings ${cabinetExtraBold.className} text-5xl mb-16 pt-32`}>
                    Deerhack 2023

                </h1>
                <div className="flex flex-col">
                    <div className="">
                        <QuotesCard
                            title_front="We wanted Deehack to be the "
                            title_highlight="Best Hackathon in Nepal"
                            title_back=" and we made it possible”"
                            description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non"
                            name="John Doe"
                            position="CEO, ABC"
                            photo={<LegacyDemoSVG width={261.03} height={190} />}
                        />
                    </div>


                    
                </div>
                <div className = "flex flex-row">
                        <div className=" text-primary-gradient-color">Participating Teams:</div>
                        <div className="w-full inline-flex  flex-nowrap overflow-hidden bg-[#1B133854] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)">

                            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
                                {data.map((e, i) => (
                                   <div className="flex items-center"><CarouselImage key={i} text={`${e.text}`} />
                                    <div className="font-bold text-[1rem]">
                                       &middot;
                                     </div>
                                    </div>
                                    
                                ))}
                               
                            </ul>

                            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
                                {data.map((e, i) => (
                                    <div className="flex items-center"><CarouselImage key={i} text={`${e.text}`} />
                                    <div className="font-bold text-[1rem]">
                                       &middot;
                                     </div>
                                    </div>
                                    
                                ))}
                                 
                            </ul>
                        </div>
                    </div>
                <DeerHack23Legacy
                    logo={<Winners23SVG width={261.03} height={190} />}
                    title="Contrivers"
                    description="DeerHack 2023 Overall Winners"
                />
            </div>

            {/* Here you will call your components like <QuotesCard/> or <WinnerCard/> */}
        </>
        );
        }
export default Page;