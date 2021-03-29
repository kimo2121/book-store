import React from "react";
import About from "../About/About";
import Retails from "../Retails/Retails";
import Ourwriters from "../Ourwriters/Ourwriters";
import "./HomePage.css";
import TheVideos from "../TheVideos/TheVideos";
import PeoplePreview from "../PeoplePreviews/PeoplePreview";
import BookStore from "../BookStore/BookStore";
import Contact from "../Contact/Contact";
const HomePage = () => {
  return (
    <div className="home-page">
      <About firstHomePage />
      <Retails secondHomePage />
      <Ourwriters thirdHomePage />
      <TheVideos fourthHomePage />
      <PeoplePreview fifthHomePage />
      <BookStore sixthHomePage />
      <Contact seventhHomePage />
    </div>
  );
};

export default HomePage;
