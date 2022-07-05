import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";

import cert1 from "../../img/c1.png";
import cert2 from "../../img/c2.png";
import cert3 from "../../img/c3.png";
import cert4 from "../../img/c4.png";
import cert5 from "../../img/c5.png";
import cert6 from "../../img/c6.png";

const Testimonial = () => {
  const clients = [
    {
      img: cert1,
    },
    {
      img: cert2,
    },
    {
      img: cert3,
    },
    {
      img: cert4,
    },
    {
      img: cert5,
    },
    {
      img: cert6,
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Glimpse of The </span>
        <span>Certifications </span>
        <span>Which I Did...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
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
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
