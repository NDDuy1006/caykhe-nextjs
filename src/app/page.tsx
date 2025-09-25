import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Promotion from "./components/Promotion/Promotion";
import Reservation from "./components/Reservation/Reservation";
import Review from "./components/Review/Review";
import Slider from "./components/Slider/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <About />
      <Menu />
      <Reservation />
      <Promotion />
      <Review />
    </div>
  );
}
