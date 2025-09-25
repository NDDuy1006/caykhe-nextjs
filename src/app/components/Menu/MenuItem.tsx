import React from 'react'

type IProps = {
  title: string;
  desc?: string;
  price: number;
}

const MenuItem = ({title, desc, price}: IProps) => {
  return (
    <div className="min-h-9 md:min-h-[62.59px] lg:min-w-[280px] xl:min-w-[490px] flex justify-between mb-4 border-b-[1px] border-b-gray-500">
      <div className="flex flex-col gap-1">
        <h5
          className="text-[14px] md:text-[16px] uppercase text-[#C8AC77] font-bold"
        >
          {title}
        </h5>
        <p
          className="text-[14px] text-[#CCC] uppercase"
        >
          {desc}
        </p>
      </div>
      <span
        className="text-[14px] md:text-[16px] font-normal"
      >
        £{price}
      </span>
    </div>
  )
}

export default MenuItem