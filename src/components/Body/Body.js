import React from 'react';
import "./Body.css";

const Body = () => {
  return (
      <div className='body'>
          <div className='body-content'>
              <div className='larger-text'>Make <br /> remote work</div>
              <div className='content-text'>
                  Get your team in sync,no matter your location.<br/>Streamline process,create team rituals,and <br/>watch productivity soar.
              </div>
              <button>Learn more</button>
          </div>
          <div className='body-image'></div>
    </div>
  )
}

export default Body