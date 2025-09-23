

const ImageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col content-center justify-center gap-9">
      {children}
    </div>
  )
}

export default ImageWrapper