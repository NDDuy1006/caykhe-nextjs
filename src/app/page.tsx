"use client"

import { useEffect, useRef, useState } from "react";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Promotion from "./components/Promotion/Promotion";
import Reservation from "./components/Reservation/Reservation";
import Review from "./components/Review/Review";
import Slider from "./components/Slider/Slider";

export default function Home() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const sliderHeight = sliderRef.current.offsetHeight
        
        setScrolled(window.scrollY > sliderHeight)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div>
      <Navbar scrolled={scrolled}/>
      <Slider ref={sliderRef} />
      <About />
      <Menu />
      <Reservation />
      <Promotion />
      <Review />
    </div>
  );
}
