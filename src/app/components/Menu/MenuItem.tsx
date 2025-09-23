import React from 'react'

type IProps = {
  title: string;
  desc?: string;
  price: number;
}

const MenuItem = ({title, desc, price}: IProps) => {
  return (
    <div className="min-h-9 md:min-h-[62.59px] md:min-w-[532px] flex justify-between mb-4 border-b-[1px] border-b-gray-500">
      <div className="flex flex-col gap-1">
        <h5
          style={{ fontFamily: 'sans-serif' }}
          className="text-[14px] md:text-[16px] uppercase text-[#C8AC77] font-bold"
        >
          {title}
        </h5>
        <p
          style={{ fontFamily: 'sans-serif' }}
          className="text-[14px] text-[#CCC] uppercase"
        >
          {desc}
        </p>
      </div>
      <span
        style={{ fontFamily: 'sans-serif' }}
        className="text-[14px] md:text-[16px] font-normal"
      >
        £{price}
      </span>
    </div>
  )
}

export default MenuItem