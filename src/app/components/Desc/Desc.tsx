

const Desc = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      style={{ fontFamily: 'Poppins, sans-serif' }}
      className="text-[16px] text-[#AAA] md:text-[18px] max-w-[820px]"
    >
      {children}
    </p>
  )
}

export default Desc