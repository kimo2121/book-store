import React from "react";
import YouTube from "react-youtube";
import "./VideoPlayer.css";
const _onReady = (event) => {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
};
const VideoPlayer = ({ item, slider }) => {
  const opts = {
    height: slider ? "500px" : "230px",
    width: slider ? "70%" : "100%",
    playerVars: {
      https: "developers.google.com / youtube / player_parameters",
      autoplay: 0,
      playsinline: 0,
      controls: 0,
    },
  };

  return <YouTube videoId={item.id} opts={opts} onReady={_onReady} />;
};
export default VideoPlayer;
