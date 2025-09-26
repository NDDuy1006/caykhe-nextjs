/* eslint-disable @next/next/no-img-element */
"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import CtaButton from "../CtaButton/CtaButton";


const Slider = () => {
  const slides = [
    {
      imgSrc: "/images/img-placeholder.png",
      title: "Cay Khe",
      desc: "Cay Khe in Oxford serves authentic Vietnamese dishes in a warm, welcoming setting.",
      buttonLabel: "Book a table"
    },
    {
      imgSrc: "/images/slider-item-1.jpg",
      title: "Cay Khe",
      desc: "Cay Khe in Oxford serves authentic Vietnamese dishes in a warm, welcoming setting.",
      buttonLabel: "Book a table"
    },
  ]

  return (
    <section id="home" className="mx-auto">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        speed={1800}
      >
        {
          slides.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
              <img
                src={item.imgSrc}
                alt="hero"
                className="object-cover w-full h-[55vh] md:h-[100vh]"
              />
              <div
                className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4"
              >
                <h1
                  className="text-3xl md:text-6xl font-extrabold text-[#C8AC77] drop-shadow-lg"
                >
                  {item.title}
                  </h1>
                  <p
                    style={{ fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif" }}
                    className="my-4 md:max-w-2xl font-light text-[16px] md:text-[20px] text-white"
                  >
                    {item.desc}
                  </p>
                  <CtaButton
                    primary
                    sectionId="reservation"
                  >
                    {item.buttonLabel}
                  </CtaButton>
              </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

export default Slider