import React from 'react';
import "./Body.css";
import bgimage from "../../../src/bgimage.png";
import microsoft from "../../../src/microsoft.png";
import nginx from "../../../src/nginx.png";

const Body = () => {
  return (
      <div className='body'>
          <div className='body-content'>
              <div className='larger-text'>Make <br /> remote work</div>
              <div className='content-text'>
                  Get your team in sync,no matter your location.<br/>Streamline process,create team rituals,and <br/>watch productivity soar.
              </div>
              <button>Learn more</button>
              <div className='logos'>
                  <img src={microsoft} alt="" />
                  <img src={nginx} alt="" />
                  <img src={microsoft} alt="" />
                  <img src={nginx} alt="" />
              </div>
          </div>
          <div className='body-image'>
              <img src={bgimage} alt="" />
          </div>
    </div>
  )
}

export default Body;