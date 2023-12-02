import React from "react";
import "./Services.css";
import Card from "../../card/card";
import Resume from '../../../components/resume/Akshay.pdf';

const Services = () => {
  return (
    <div className="services">
      {/* leftside */}
      <div className="awesome">
        <span> My Awesome</span>
        <span> Services</span>
        <span>
          Having knowledge of front-end technologies HTML, CSS
          <br /> BOOSTRAP, JAVASCRIPT ,REACT JS <br />
          Knowledge of Design Tools FIGMA , PHOTOSHOP
        </span>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        <div style={{ left: "23rem" }}>
          <Card
            // emoji={HeartEmoji}
            heading={"Web Designer"}
            title={"Designing Technologies"}
            detail={"FIGMA,PHOTOSHOP"}
          ></Card>
        </div>

        {/* second card */}
        <div style={{ top: "17rem", left: "-1rem" }}>
          <Card
            heading={" Web Developer"}
            title={"Frontend Technologies"}
            detail={"HTML,CSS,JAVASCRIPT"}
          ></Card>
        </div>

        {/* third card */}
        <div style={{ top: "19rem", left: "30rem" }}>
          <Card
            heading={"FrameWorks"}
            title={"On which I have worked"}
            detail={"BOOSTRAP,REACT.js"}
          ></Card>
        </div>
        <div
          className="blur s-blur-2 s-blur-1"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
