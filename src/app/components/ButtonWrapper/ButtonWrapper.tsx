

const ButtonWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-6 md:mt-8 flex justify-between gap-9">
      {children}
    </div>
  )
}

export default ButtonWrapper