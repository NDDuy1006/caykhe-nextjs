

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-2xl text-[#C8AC77] md:text-5xl md:max-w-[1120px]">
      {children}
    </h3>
  )
}

export default Title