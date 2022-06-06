import React from "react";
import "./SliderSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Slider from "./Slider";
const SliderSection = () => {
  return (
    <>
      <div className="section pt-0">
        <div className="container">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            loop={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Slider heading="Maria Jones" img="https://untree.co/demos/impact/images/person_1.jpg" role="Customer" description=" “Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts. Separated they live in Bookmarksgrove
                          right at the coast of the Semantics, a large language
                          ocean.”"/>
            </SwiperSlide>
            <SwiperSlide>
              <Slider heading="Maria Jones" img="https://untree.co/demos/impact/images/person_2.jpg" role="Customer" description=" “Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts. Separated they live in Bookmarksgrove
                          right at the coast of the Semantics, a large language
                          ocean.”"/>
            </SwiperSlide>
            <SwiperSlide>
              <Slider heading="Maria Jones" img="https://untree.co/demos/impact/images/person_3.jpg" role="Customer" description=" “Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts. Separated they live in Bookmarksgrove
                          right at the coast of the Semantics, a large language
                          ocean.”"/>
            </SwiperSlide>
           
          </Swiper>
        </div>
      </div>

    </>
  );
};

export default SliderSection;
