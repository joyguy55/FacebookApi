import React from 'react'

const Options = () => {
  return (
     <div className="options">
       <div className="options-text">Locations
         <div className="fa fa-info-circle" aria-hidden="true"></div>
       </div>
        <select className="form-select">
            <option>Everyone in this location</option>
            <option>People who live in this location</option>
            <option>People recently in this location</option>
            <option>People traveling in this location</option>
        </select>
      <div className="options-selector">
      </div>
     </div>
  )
}

export default Options
