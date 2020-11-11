import React from "react";

const Home = ({ iconLocator }) => {  
  return (
    <div className="about">
      <h1 className="title is-1">Welcome to our Store!</h1>
      <div className="content is-medium">
        <div className="block">
          <strong>
            We've got all kinds of stuff that makes cool sounds!<br />
          </strong>
          Like the enchanting, whimsical xylophone.<br />
          Sure to drive your roommates crazy.
        </div>
        <figure className="content-image image float-right">
          <img src={iconLocator(18)} alt="drums" />
        </figure>
      </div>
      <div className="content is-medium">
        <div className="block">
          <strong>
            Producers, we've got you covered!<br />
          </strong>
          We have a huge stock of mixers on sale!<br />
          Be the next Dr. Dre of Rock Sandwich.
        </div>
        <figure className="content-image image float-left">
          <img src={iconLocator(14)} alt="tambourine" />
        </figure>
      </div>
      <div className="content is-medium">
        <div className="block">
          <strong>
            The Harpist Zone<br />
          </strong>
          We can tune and string your harp, too!<br />
          Harp Shredders have a home here.<br />
          Keep ripping it up, you angel!
        </div>
        <figure className="content-image image float-right">
          <img src={iconLocator(10)} alt="guiro" />
        </figure>
      </div>
    </div>
  );
}

export default Home;
