"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import DeerhackLogo from "@/app/assets/icons/DeerhackLogo"
import { cabinetBold, cabinetMedium, satoshiBlack } from "@/app/utils/fonts"
import Image from "next/image"
import menuSVG from "@/app/assets/icons/menu.svg"
import crossSVG from "@/app/assets/icons/cross.svg"
import Counter_wrapper from "../counter/Counter"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isResourceOpen, setIsResourceOpen] = useState(false)
  const resourceRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleResourceClick = () => {
    setIsResourceOpen(!isResourceOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    const currentRef = resourceRef.current as HTMLElement | null
    if (currentRef && !currentRef.contains(event.target as Node)) {
      setIsResourceOpen(false)
    }
  }

  useEffect(() => {
    if (isResourceOpen) {
      window.addEventListener("click", handleClickOutside)
    } else {
      window.removeEventListener("click", handleClickOutside)
    }

    return () => {
      window.removeEventListener("click", handleClickOutside)
    }
  }, [isResourceOpen])

  return (
    <div className="w-full flex justify-center">
      <header className="fixed bg-[#110C24A6] isolate z-10 shadow-lg rounded-xl backdrop-blur-sm w-[95%] mt-7">
        <nav
          className={`flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-[86.5rem] mx-auto lg:h-[6rem] py-4 px-4 lg:px-14`}
        >
          <div className="flex justify-between items-center w-full lg:w-auto">
            <a href="/" className="flex-shrink-0">
              <DeerhackLogo width="50" height="50" />
            </a>
            <button onClick={toggleMenu} className="lg:hidden text-secondary">
              {isMenuOpen ? (
                <Image src={crossSVG || "/placeholder.svg"} alt="Close Menu" width={40} height={40} />
              ) : (
                <Image src={menuSVG || "/placeholder.svg"} alt="Open Menu" width={40} height={40} />
              )}
            </button>
          </div>

          <div className={`${isMenuOpen ? "block mt-6" : "hidden"} lg:block lg:mt-0`}>
            <Counter_wrapper />
          </div>

          <div
            className={`${isMenuOpen ? "flex flex-col" : "hidden"} lg:flex lg:flex-row lg:items-center h-full lg:gap-8 ${cabinetBold.className} text-magnolia`}
          >
            <Link href="/schedule" className="hover:text-secondary py-3 lg:py-0 text-xl lg:text-base">
              Schedule
            </Link>

            <div className="relative" ref={resourceRef}>
              <span
                className="hover:text-secondary cursor-pointer py-3 lg:py-0 block text-xl lg:text-base"
                onClick={handleResourceClick}
              >
                Resources
              </span>

              {isMenuOpen && isResourceOpen && (
                <div className={`lg:hidden block ${cabinetMedium.className}`}>
                  <ul>
                    <li className="pt-4 px-6 mb-4">
                      <a
                        href="/resources/selection_criteria.pdf"
                        className="hover:text-secondary text-lg"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Selection Criteria
                      </a>
                    </li>
                    <li className="pt-4 px-6 mb-4">
                      <a
                        href="/judging-criteria"
                        className="hover:text-secondary text-lg"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Judging Criteria
                      </a>
                    </li>
                    <li className="pt-4 px-6">
                      <a
                        href="/code-of-conduct"
                        className="hover:text-secondary text-lg"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Code Of Conduct
                      </a>
                    </li>
                  </ul>
                </div>
              )}

              {isResourceOpen && (
                <div
                  className={`fixed bg-violet/50 backdrop-blur-md ${cabinetMedium.className} shadow-lg transition-all ease-in-out duration-500 z-20 text-white hidden lg:block rounded-br-xl rounded-bl-xl border-sm top-20 mt-[1rem]`}
                >
                  <ul className="w-[18.6rem] mt-0.5 text-left list-none">
                    <li className="p-5 mb-2">
                      <a href="/judging-criteria" className="hover:text-secondary" target="_blank" rel="noreferrer">
                        Judging Criteria
                      </a>
                    </li>
                    <li className="pt-4 px-6 mb-4">
                      <a
                        href="/resources/selection_criteria.pdf"
                        className="hover:text-secondary"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Selection Criteria
                      </a>
                    </li>
                    <li className="pt-4 px-6 mb-4">
                      <a href="/code-of-conduct" className="hover:text-secondary" target="_blank" rel="noreferrer">
                        Code Of Conduct
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link href="/organizers" className="hover:text-secondary py-3 lg:py-0 text-xl lg:text-base">
              Organizers
            </Link>

            <Link href="/legacy" className="hover:text-secondary py-3 lg:py-0 text-xl lg:text-base">
              Legacy
            </Link>

            <Link href="/winners" className="hover:text-secondary py-3 lg:py-0 text-xl lg:text-base">
              Winners
            </Link>
          </div>

          <div className={`${isMenuOpen ? "block mt-6 mb-4" : "hidden"} lg:block lg:mt-0 lg:mb-0`}>
            <Link href="https://deerhack24.devfolio.co" target="_blank">
              <button
                className={`${satoshiBlack.className} font-[20px] bg-secondary text-dark-purple text-xl p-3 rounded bg-opacity-90 hover:bg-opacity-100 transition duration-300 ease-in-out w-[12rem]`}
              >
                Register Now
              </button>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
