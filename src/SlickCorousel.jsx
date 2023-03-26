import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaQuoteRight } from 'react-icons/fa';
import { list } from './data';

const SlickCorousel = () => {
  const settings = {
    dots: true,
    Infinite: true,
    speed: 2000,
    sliderToShow: 1,
    sliderToScroll: 1,
  };
  return (
    <section className="slick-container">
      <Slider {...settings} />
    </section>
  );
};

export default SlickCorousel;
