"use client"
import { cabinetExtraBold } from "../utils/fonts"
// Use dynamic imports to prevent build errors if files don't exist
const leaf_prizes_right = "/placeholder.svg?height=250&width=250"
const leaf_deerhack2023_right = "/placeholder.svg?height=250&width=250"
import Image from "next/image"
import ExperienceCard from "../sections/Experience/ExperienceCard"
import { useState, useRef } from "react"

export default function ExperiencePage() {
  const [activeCard, setActiveCard] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleDotClick = (index: number) => {
    setActiveCard(index)

    // Scroll to the selected card
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector(".snap-center")?.clientWidth || 0
      const spacing = 16 // space-x-4 = 1rem = 16px
      scrollContainerRef.current.scrollTo({
        left: index * (cardWidth + spacing),
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="bg-dark-purple flex flex-col py-20 overflow-hidden relative">
      <div className="relative">
        <Image
          src={leaf_prizes_right || "/placeholder.svg"}
          alt="leaf"
          height={250}
          width={250}
          className="absolute right-3 top-46 hidden xl:block -rotate-12"
        />
      </div>

      <div className={`${cabinetExtraBold.className} headings w-[17.875rem] md:w-[45rem] md:h-[6rem]`}>
        The DeerHack Experience
      </div>

      <div className="w-full flex flex-col">
        <div
          ref={scrollContainerRef}
          className="w-full mx-auto md:mx-0 overflow-x-auto scroll-smooth snap-x snap-mandatory md:no-scrollbar p-2"
        >
          <div className="w-full flex space-x-4 snap-x snap-mandatory">
            <div className="snap-x snap-mandatory">
              <ExperienceCard />
            </div>

          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeCard === index ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`View experience card ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <Image
        src={leaf_deerhack2023_right || "/placeholder.svg"}
        alt="leaf"
        height={250}
        width={250}
        style={{ transform: "scaleX(-1)" }}
        className="absolute left-1 bottom-0 hidden lg:block"
      />
    </div>
  )
}
