import React from "react";
import Slider from "react-slick";
import * as RiIcons from "react-icons/ri";
import "./VideoSlider.css";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import * as AiIcons from "react-icons/ai";
import videoData from "../../pages/TheVideos/VideoData";

const VideoSlider = ({ onClickHandler }) => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <RiIcons.RiArrowRightSFill size={70} className="right-direction" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <RiIcons.RiArrowLeftSFill size={70} className="left-direction" />
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <nav className="video-slider-component">
      <AiIcons.AiOutlineClose
        onClick={onClickHandler}
        className="video-slider-x-icon"
        size="35"
      />
      <Slider className="video-slider" {...settings}>
        {videoData.map((item, indx) => (
          <VideoPlayer slider item={item} />
        ))}
      </Slider>
    </nav>
  );
};
export default VideoSlider;
