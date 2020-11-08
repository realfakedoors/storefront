import React from "react";

const About = ({ iconLocator }) => {  
  return (
    <div className="about">
      <h1 className="title is-1">Our Story</h1>
      <p className="content is-medium">
        <div className="block">
          <strong>
            We care about great musicians.<br />
          </strong>
          We started as a garage band!<br />
          We're all from Rock Sandwich, TX.
        </div>
        <figure className="content-image image float-right">
          <img src={iconLocator(11)} alt="drums" />
        </figure>
      </p>
      <p className="content is-medium">
        <div className="block">
          <strong>
            We live in a bus out back.<br />
          </strong>
          We built a hookah lounge on the roof!<br />
          We're all fans of the Rock Sandwich Cassowaries.
        </div>
        <figure className="content-image image float-left">
          <img src={iconLocator(29)} alt="tambourine" />
        </figure>
      </p>
      <p className="content is-medium">
        <div className="block">
          <strong>
            We only eat avocados.<br />
          </strong>
          There's a pinball machine in the shower!<br />
          The Rock Sandwich Times called us their #9<br />
          music shop in town. Yes! Top ten, baby!
        </div>
        <figure className="content-image image float-right">
          <img src={iconLocator(13)} alt="guiro" />
        </figure>
      </p>
    </div>
  );
}

export default About;
