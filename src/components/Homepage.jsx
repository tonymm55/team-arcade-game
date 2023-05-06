import { register } from "swiper/element/bundle";
import "../styles/Homepage.css";

register();

const Homepage = () => {
  return (
    <main className="homepage">
      <h2>Homepage Component</h2>
      <swiper-container slides-per-view="1" navigation="true" pagination="true">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper-container>
    </main>
  );
};

export default Homepage;
