import { cabinetExtraBold } from "@/app/utils/fonts";
import Link from "next/link";
const GoBackToHome = () => {
  return (
    <div className={`bg-secondary w-48 ${cabinetExtraBold.className} text-center py-3 px-4 rounded-[0.231rem] w-[6.969rem] md:w-[14.202rem] h-[1.7rem] md:h-[3.445rem]`}
    >
      <a
        className={`text-[0.7rem] md:text-[1.5rem] md:font-black absolute left-[7.5rem] md:left-[17rem] bottom-[0.7rem] md:bottom-[2rem]`}
        href="/"
      >
        Go Back to Home
      </a>
    </div>
  );
};

export default GoBackToHome;
