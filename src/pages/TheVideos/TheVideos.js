import React, { useState } from "react";
import PageHeader from "../../components/Page-Header/PageHeader";
import VideoSlider from "../../components/VideoSlider/VideoSlider";
import * as RiIcons from "react-icons/ri";
import "./TheVideos.css";
import videoData from "./VideoData";

const TheVideos = () => {
  const [state, setState] = useState(false);
  const [main, setMain] = useState("main");
  const [video, setVideo] = useState({
    currentVideo: "",
    videos: videoData,
  });
  const onClickHandler = () => {
    setState(!state);
  };
  const mainHandler = () => {
    setMain("main");
  };
  const promoHandler = () => {
    setMain("promo");
  };
  return (
    <div>
      {state && (
        <VideoSlider onClickHandler={onClickHandler} videoData={videoData} />
      )}
      <PageHeader Children="الفيديو" />
      <div className="thevideos-component">
        <div className="videos-btns">
          <button
            onClick={mainHandler}
            className={main === "main" ? "main-btn" : "video-home"}
          >
            الرئيسية
          </button>
          <button
            onClick={promoHandler}
            className={main === "promo" ? "promo-btn" : "video-home"}
          >
            برومو روايات
          </button>
        </div>
        <div className="video-container">
          {videoData
            .filter((item, indx) =>
              main === "main"
                ? item.category === "main"
                : main === "promo" && item.category === "promo"
            )
            .map((item, indx) => (
              <div key={indx} className="each-video-container">
                <div onClick={onClickHandler} className="poster-container">
                  <img className="video-poster" src={item.poster} alt="" />
                  <button className="play-video">
                    <RiIcons.RiArrowRightSFill size={45} />
                  </button>
                </div>
                <p className="video-promo-name">{item.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TheVideos;
