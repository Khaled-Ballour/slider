import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaQuoteRight } from 'react-icons/fa';
import { list } from './data';

const SlickCorousel = () => {
  const settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    sliderToShow: 1,
    sliderToScroll: 1,
  };
  return (
    <section className="slick-container">
      <Slider {...settings}>
        <div>1</div>
        <div>2</div>
      </Slider>
    </section>
  );
};

export default SlickCorousel;
