import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Images from './Images'

const Banner = () => {

    let [DotActive, setDotActive] = useState(0)
    // useState er majhe 0 na dile first slider active border dekhabena 
    const settings = {
        dots: true,
        beforeChange: (prev, next) => {
            setDotActive(next);
        },
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1, 
        arrows: false,
        autoplay: true,
        cssEase: "linear",

        appendDots: dots => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "10%",
                transform: "translatey(-50%)"

              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
            style={
                i===DotActive? 
                {width: "30px",
                color: "#262626",
                borderRight: "4px #262626 solid",
                padding: "10px 0px"} 
                : 
                {width: "30px",
                color: "#262626",
                borderRight: "4px white solid",
                padding: "10px 0px"}}
                >

              0{i + 1}
            </div>
          ),
          responsive: [
            {
              breakpoint: 737,
              settings: {
                dots: false,
              }
            },
          ]
      };
  return (
    <Slider {...settings}>
        <div>
            <Images className="block" imgsrc="image/banner.png"></Images>
        </div>    
        <div>
            <Images className="block" imgsrc="image/banner.png"></Images>
        </div>    
        <div>
            <Images className="block" imgsrc="image/banner.png"></Images>
        </div>    
    </Slider>
  )
}

export default Banner