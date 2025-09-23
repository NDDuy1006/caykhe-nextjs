import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Slider from "./components/Slider/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <About />
      <Menu />
    </div>
  );
}
