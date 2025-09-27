import { twMerge } from "tailwind-merge"
import CtaButton from "../CtaButton/CtaButton"
import Logo from "./Logo"
import NavLinkWrapper from "./NavLinkWrapper"

interface IProps {
  scrolled: boolean
}

const Navbar = ({ scrolled }: IProps) => {
  return (
    <div className={twMerge(
      `fixed w-full z-10 shadow-md transition-all duration-400 ease-in-out py-4 ${scrolled ? "bg-[#145C43]" : "bg-[#113426]"}`
    )}>
      <div className="flex items-center justify-between gap-3 md:gap-0 px-6 md:px-16">
        <Logo />
        <NavLinkWrapper />
        <CtaButton primary sectionId="reservation">
          Book a table
        </CtaButton>
      </div>
    </div>
  )
}

export default Navbar

// 

// bg-[#145C43]