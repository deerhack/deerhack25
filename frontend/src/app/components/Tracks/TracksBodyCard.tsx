import React, { ReactElement } from "react";
import {
  cabinetBold,
  cabinetExtraBold,
  cabinetRegular,
  cabinetMedium,
} from "@/app/utils/fonts";

interface TracksBodyCardProps {
  svg: ReactElement;
  title: string;
  description: string;
  bodyStyling?: string;
}

const TracksBodyCard: React.FC<TracksBodyCardProps> = ({
  svg,
  title,
  description,
  bodyStyling = "",
}: TracksBodyCardProps) => {
  return (
    <div
    className={`relative md:p-10 max-w-[1250px] min-h-[400px] sm:min-h-[526px] sm:max-h-[423px] flex xl:items-center justify-start align-start flex-col xl:flex-row cursor-pointer px-8 lg:pb-44 pb-24 pt-10 text-lg lg:mx-0 ${cabinetBold.className} rounded-2xl bg-grape ${bodyStyling} gap-8 lg:gap-0 `}
  >
    <div className="xl:w-3/5 self-start sm:xl lg:px-5 lg:mt-[100px] lg:ml-[20px] pb-20 sm:pb-0  md:mt-[60px]  ">
  <div className="rounded-full w-16 h-16 flex items-center justify-start">
    {svg}
  </div>
  <div className={`flex flex-col`}>
    <p
      className={`lg:text-4xl text-2xl xl:mt-4 mt-2 ${cabinetExtraBold.className} lg:w-[400px]`}
    >
      {title}
    </p>
    <span
      className={`lg:text-xl text-lg w-[100%] xl:mt-10 lg:w-[70%] mt-4 ${cabinetMedium.className}`}
    >
      {description}
    </span>
  </div>
</div>
<div
  className={`
    flex flex-col p-6 sm:p-0 text-left  sm:text-left sm:static absolute bottom-0 left-2 md:relative md:left-auto md:right-auto md:w-auto  lg:-ml-20 lg:mt-[94px] lg:w-[500px] ml-[0px]`}
>
  <p className={`pt-4 lg:pt-6 ${cabinetExtraBold.className}`}>
    WINNER GETS
  </p>
  <span className={`${cabinetExtraBold.className} lg:text-[90px] text-5xl mt-3`}>
    Rs. 15,000
  </span>
</div>
  </div>
  );
};
export default TracksBodyCard;
