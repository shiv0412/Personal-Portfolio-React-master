import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import p1 from "../../img/proj1.png";
import p2 from "../../img/proj2.png";
import p3 from "../../img/proj3.png";
import p4 from "../../img/proj4.png";
import p5 from "../../img/proj5.png";
import p6 from "../../img/proj6.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween:0,
          },
          // when window width is >= 480px
          481: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide style={{paddingBottom:"50px"}}>
          <img src={p1} alt="" height="210" />
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:"50px"}}>
          <img src={p2} alt="" height="210" />
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:"50px"}}>
          <img src={p3} alt=""  height="210"/>
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:"50px"}}>
          <img src={p4} alt="" height="210"/>
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:"50px"}}>
          <img src={p5} alt="" height="210"/>
        </SwiperSlide>
        <SwiperSlide style={{paddingBottom:"50px"}}>
          <img src={p6} alt="" height="210"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
