import { cabinetExtraBold } from "@/app/utils/fonts";
import Link from "next/link";
const GoBackToHome = () => {
  return (
    <div className={`bg-secondary w-48 ${cabinetExtraBold.className} text-center py-3 px-4 rounded-[0.231rem] w-[8rem] md:w-[12.651rem] h-[1.7rem] md:h-[3.107rem] flex justify-center items-center`}
    >
      <a
        className={`text-[0.75rem] md:text-[1.232rem] md:font-black`}
        href="/"
      >
        Go Back to Home
      </a>
    </div>
  );
};

export default GoBackToHome;
