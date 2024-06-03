import React from "react";
import Footer from "../components/footer";
import Contact from "../components/contact";
import Bestcard from "../components/bestcard";
import Feedback from "../components/feedback";
import Growth from "../components/growth";
import Project from "../components/project";
import About from "../components/about";

const HomePage = () => {
return (
  <>
  <Contact/>
  <Bestcard/>
  <About/>
  <Project/>
  <Growth/>
  <Feedback/>
   <Footer/>
  </>
);
};

export default HomePage;