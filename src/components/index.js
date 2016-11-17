import React from 'react'

import StateInput from './geolocation/stateinput.js'
import AgeGender from './agegender.js'
import Locations from './locations.js'
// import CustomAudience from './custom-audience.js'

import styles from './style.scss'

const Facebook = () => {
  return(
    <div className="app-container">
      <div className="header">
        <div><strong>Audience</strong></div>
        <span>Define who you want to see your ads. <a href="https://www.facebook.com/help/453530464730606/?ref=adcf-targeting">Learn more.</a></span>
        <ul className="tab tab-block">
          <li className="tab-item">
            <a href="#">Create New</a>
          </li>
          <li className="tab-item">
            <a href="#" className="active">Use a Saved Audience</a>
          </li>
         </ul>
      </div>
      <div className="break-line1"></div>
        <Locations/>
        <AgeGender/>
    </div>
  )
}

export default Facebook
