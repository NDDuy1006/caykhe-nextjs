

const SectionHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-center flex flex-col items-center gap-6 md:gap-8">
      {children}
    </div>
  )
}

export default SectionHeader