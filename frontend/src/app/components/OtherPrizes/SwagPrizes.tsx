import type { ReactElement } from "react"
import { cabinetExtraBold } from "@/app/utils/fonts"

export default function Swagprizes({
  svg,
}: {
  svg: ReactElement
}) {
  return (
    <div>
      <div className="bg-violet flex lg:flex-col flex-row md:items-center items-start h-fit sm:h-fit md:h-fit lg:h-[29.041rem] w-[20.027rem] sm:w-[20.027rem] md:w-[24.027rem] max-w-[23.5rem] rounded-[2rem] justify-between py-6 px-10">
        <div
          className={`${cabinetExtraBold.className} text-center text-primary-gradient-color h-[7.875rem] w-[10.375rem] leading-none text-[1.701rem] sm:text-[1.701rem] md:text-[2.01rem] lg:text-[2.5rem] py-4 sm:w-[10.375rem] md:w-[10.375rem] lg:w-[20rem] lg:items-center`}
        >
          Swags and Freebies!
        </div>
        <div className="flex justify-center w-full h-fit py-4 ">{svg}</div>
      </div>
    </div>
  )
}
