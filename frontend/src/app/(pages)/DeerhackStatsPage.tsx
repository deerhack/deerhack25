import { ReactElement } from "react";
import { cabinetBlack, cabinetExtraBold } from "../utils/fonts";
import DeerHackStats from "../sections/DeerhackStats/DeerhackStats";
import Image from "next/image";

import leaf_deerhack2023_right from "@/app/assets/images/leaf_deerhack2023_right.svg";

export default function DeerhackStatsPage(): ReactElement {
  return (
    <div className="bg-dark-purple py-20 h-fit">
      <div className="relative">
        <Image
          src={leaf_deerhack2023_right}
          alt="leaf"
          height={250}
          className="absolute right-3 top-52 hidden xl:block"
        />
      </div>
      <div className={`${cabinetExtraBold.className} headings`}>
        DeerHack 2023
      </div>
      <div className="flex justify-center mt-10">
        <DeerHackStats />
      </div>
    </div>
  );
}
