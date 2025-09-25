import Image from "next/image"


const ReviewItem = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:w-[780px]">
      <div className="w-[95px] md:w-[190px] flex-shrink-0">
        <img
          src="/images/person-1.jpg"
          alt="guests"
          className="object-cover w-full h-auto"
        />
      </div>
      <div
        style={{ fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif" }}
        className="flex flex-col px-3.5 md:pr-0 md:pl-7 md:pt-5 text-center md:text-left"
      >
        <p
          className="text-[16px] md:text-[18px] font-light text-[#aaa] italic line-clamp-3"
        >
          &quot;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid veritatis accusantium dolorum similique, quidem enim amet iusto ut distinctio, expedita id consequatur cum doloremque error.&quot;
        </p>
        <h3
          className="text-[20px] md:text-[32px] text-[#C8AC77]"
        >
          Katie Becker
        </h3>
        <span className="">
          3 months ago
        </span>
      </div>
    </div>
  )
}

export default ReviewItem