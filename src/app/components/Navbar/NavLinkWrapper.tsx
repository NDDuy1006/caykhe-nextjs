"use client"

const NavLinkWrapper = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hidden lg:flex gap-10">
      <a
        className="text-[#C8AC77] transition-all duration-400 ease-in-out hover:text-white hover:opacity-75 hover:scale-110 cursor-pointer"
        onClick={() => handleScroll("home")}
      >
        Home
      </a>
      <a
        className="text-[#C8AC77] transition-all duration-400 ease-in-out hover:text-white hover:opacity-75 hover:scale-110 cursor-pointer"
        onClick={() => handleScroll("about")}
      >
        About Us
      </a>
      <a
        className="text-[#C8AC77] transition-all duration-400 ease-in-out hover:text-white hover:opacity-75 hover:scale-110 cursor-pointer"
        onClick={() => handleScroll("menu")}
      >
        Menu
      </a>
      <a
        className="text-[#C8AC77] transition-all duration-400 ease-in-out hover:text-white hover:opacity-75 hover:scale-110 cursor-pointer"
        onClick={() => handleScroll("contact")}
      >
        Contact Us
      </a>
    </div>
  )
}

export default NavLinkWrapper