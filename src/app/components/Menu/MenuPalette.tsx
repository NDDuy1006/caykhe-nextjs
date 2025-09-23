

const MenuPalette = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 md:[grid-template-columns:2fr_auto_2fr] gap-0 md:gap-12 text-left pt-4 pb-1 md:pt-8 md:pb-4">
      {children}
    </div>
  )
}

export default MenuPalette