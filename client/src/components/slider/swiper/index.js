import { SliderWrap } from "./swiper.style";
// styled-component wrap
//import {Swiper, SwiperSlide} from 'swiper/react';
import { Swiper, SwiperSlide } from "swiper/react";
// SwiperSlide is pretty self-explantory. it is one slide that would contain
// one of data you want to show
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Scrollbar,
  A11y,
} from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay, Scrollbar, A11y]);

const Slider = ({ children, settings }) => {
  const sliderOptions = {
    slidesPerView: 3,
    pagination: true,
    navigation: true,
    loop: true,
    spaceBetween: 1,
    autoplay: {
      delay: 1000,
      disableOnInteraction: true,
    },
    ...settings,
    // Uncomment autoply option then you can see the swiper play automatically
    // you can override setting options pass settings props to this component
  };
  // swiper takes options as props
  // you can find more about options on the website link above

  return (
    <SliderWrap
      dots={sliderOptions?.pagination}
      arrows={sliderOptions?.navigation}
      // I pass dots and arrow props to custom pagination and navigation in styled-component
    >
      <Swiper {...sliderOptions}>{children}</Swiper>
    </SliderWrap>
  );
};

export { SwiperSlide as Slide };
export default Slider;
