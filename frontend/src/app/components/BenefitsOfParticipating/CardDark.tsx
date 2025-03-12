import { ReactElement } from "react";
import {
  cabinetBlack,
  cabinetBold,
  cabinetExtraBold,
  cabinetMedium,
  cabinetRegular,
} from "@/app/utils/fonts";

export default function CardDark({
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
    <div className=" primary-border-background w-[20.63rem] h-[14.44rem] md:w-[37.99rem] md:h-[21.19rem] rounded-[1.875rem] p-[0.1875rem] relative ">
      <div className=" new-gradient-background w-full h-fill md:h-full  rounded-[1.875rem] flex flex-col px-12 pt-9 pb-10 gap-7 justify-start md:pt-14">
        <div
          className={`${cabinetExtraBold.className} text-primary-gradient-color text-[1.25rem] md:text-[2.25rem] w-[10.69rem] md:w-[18.72rem] md:leading-[2.75rem] pb-0 font-extrabold`}
        >
          {title}
        </div>
        <div className="flex flex-col items-left gap-10 h-[70%] md:h-auto  md:flex-row  md:items-center">
          <div
            className={`${cabinetRegular.className} text-white w-[16.72rem] md:w-[19rem] text-[1rem] md:text-[1.125rem] font-medium md:text-left pr-7`}
          >
            {description}
     
          </div>
          <div className="absolute left-[10px] md:left-[17.28rem] md:w-auto md:h-auto bottom-[-22px] md:bottom-[20px]">{svg}
          </div>
          <div className="text-gray-400 text-[0.97rem] md:text-2xl font-bold absolute bottom-1 right-9 md:bottom-7 md:right-8">{pgNo}</div>
        </div>
      </div>
    </div>
  );
}
