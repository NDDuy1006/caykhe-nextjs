import CtaButton from "../CtaButton/CtaButton"
import Logo from "./Logo"
import NavLinkWrapper from "./NavLinkWrapper"

const Navbar = () => {
  return (
    <div className="fixed w-full bg-[#113426] z-10 shadow-md py-6">
      <div className="flex items-center justify-between gap-3 md:gap-0 px-6 md:px-16">
        <Logo />
        <NavLinkWrapper />
        <CtaButton primary>
          Book a table
        </CtaButton>
      </div>
    </div>
  )
}

export default Navbar