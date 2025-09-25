import ReviewItem from "./ReviewItem"


const ReviewContent = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-wrap gap-6 md:gap-8 justify-center mt-6 md:mt-11">
      {children}
    </div>
  )
}

export default ReviewContent