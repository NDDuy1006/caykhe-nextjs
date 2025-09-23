
const SectionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-5 px-5 md:mt-11 text-center flex flex-col items-center md:px-16">
      {children}
    </div>
  )
}

export default SectionLayout