

const MenuCategory = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      style={{ fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif" }}
      className="text-[16px] md:text-[19px] uppercase mb-1 md:mb-4 font-bold"
    >
      {children}
    </p>
  )
}

export default MenuCategory