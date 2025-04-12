import ApplicantsSVG from "@/app/assets/images/applicants"

import { cabinetBold, cabinetRegular } from "@/app/utils/fonts"

export default function CardMedium() {
  return (
    <div className="h-52 w-80 lg:w-[24rem] card-background-gradient rounded-2xl px-6 pt-8 flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <ApplicantsSVG height={40} width={40} />
        <div className="flex justify-between items-center">
          <p className={`${cabinetBold.className} text-white text-2xl leading-tight`}>Total</p>
          <p className={`${cabinetRegular.className} text-white text-4xl`}>1107</p>
        </div>
        <p className={`${cabinetBold.className} text-white text-2xl leading-tight`}>Applicants</p>
      </div>
    </div>
  )
}
