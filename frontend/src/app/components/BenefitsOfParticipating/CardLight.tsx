import { ReactElement } from "react";
import {
  cabinetBlack,
  cabinetBold,
  cabinetExtraBold,
  cabinetMedium,
  cabinetRegular,
} from "@/app/utils/fonts";

export default function CardLight({
  title,
  description,
  pgNo,
  svg,
}: {
  title: string;
  description: string;
  pgNo: string;
  svg: ReactElement;
}) {
  return (
    <div className="secondary-gradient-background lg:w-[39rem] lg:h-[21.19rem] md:w-[36rem] w-full h-fit rounded-[1.875rem] p-[0.1875rem] relative md-pt-14 justify-start gap-5">
      <div className=" w-full h-full rounded-[1.875rem] flex flex-col px-12 pt-9 pb-10 gap-7 justify-start md:pt-14">
        <div
          className={`${cabinetExtraBold.className} text-primary-gradient-color text-[1.25rem] md:text-[2.25rem] w-[10.69rem] md:w-[18.72rem] md:leading-[2.75rem] pb-0 font-extrabold z-10`}
        >
          {title}
        </div>
        <div className="flex flex-row items-left lg:gap-7 gap-10 h-[70%] md:h-auto  md:flex-row  md:items-center">
          <div
            className={`${cabinetRegular.className} text-white w-[16.72rem] md:w-[19.51rem] lg:w-[22.985rem] lg:h-[6rem] text-[1rem] md:text-[1.125rem] font-medium text-justify-stretch pr-7 z-10`}
          >
            {description}
          </div>
          <div className="absolute left-[10.75rem] md:left-[20rem] lg:left-[22.9rem] md:w-[10.749rem] md:h-[9.764rem] top-[2rem] md:top-[2.5rem] lg:top-[3rem] z-0">{svg}
          </div>
          <div className="text-gray-400 text-[0.97rem] md:text-2xl font-bold absolute bottom-6 right-8">{pgNo}</div>
          
        </div>
      </div>
    </div>
  );
}