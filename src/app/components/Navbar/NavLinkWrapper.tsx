

const NavLinkWrapper = () => {
  return (
    <div className="hidden md:flex gap-10">
      <a className="text-[#C8AC77] transition-all duration-400 ease-in-out hover:text-white hover:opacity-75 hover:scale-110" href="#home">Home</a>
      <a className="text-[#C8AC77] transition-all duration-400 ease-in-out hover:text-white hover:opacity-75 hover:scale-110"  href="#about">About Us</a>
      <a className="text-[#C8AC77] transition-all duration-400 ease-in-out hover:text-white hover:opacity-75 hover:scale-110"  href="#menu">Menu</a>
      <a className="text-[#C8AC77] transition-all duration-400 ease-in-out hover:text-white hover:opacity-75 hover:scale-110"  href="#contact">Contact Us</a>
    </div>
  )
}

export default NavLinkWrapper