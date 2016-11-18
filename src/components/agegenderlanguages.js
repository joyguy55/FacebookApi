import React from 'react'

const AgeGenderLanguages = () => {
  return (
    <div className="agegenderlang-container">

     <div className="age-container">
        <div className="description">Age
          <div className="fa fa-info-circle" aria-hidden="true"></div>
        </div>
        <input className="form-input col-sm-3 float-right" type="number" placeholder="Max"
                min="0" max="120"
                defaultValue={120}/>
        <span className="float-right col-sm-1 text-center">{'‐'}</span>
        <input className="form-input col-sm-3 float-right" type="number" placeholder="Min"
                min="0" max="120"
                defaultValue={0}/>
      </div>

     <div className="gender-container">
       <div className="description">Gender
          <div className="fa fa-info-circle" aria-hidden="true"></div>
        </div>
        <div className="btn-group btn-group-block">
          <button className="btn">All</button>
          <button className="btn">Men</button>
          <button className="btn">Women</button>
        </div>
      </div>

      <div className="languages-container">
       <div className="description">Languages
          <div className="fa fa-info-circle" aria-hidden="true"></div>
        </div>
        <input className="form-input" type="text" id="input-example-1" placeholder="Name" />
      </div>

    </div>
  )
}

export default AgeGenderLanguages
