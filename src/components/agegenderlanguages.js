import React from 'react'
import { connect , dispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions/index.js'

const AgeGenderLanguages = (actions) => {

  return (
    <div className="agegenderlang-container">

    <div className="age-container">
      <div className="description">Age
        <div className="fa fa-info-circle" aria-hidden="true"></div>
      </div>
      <input className="form-input col-sm-3 float-right" type="number" placeholder="Max"
              min="1" max="100" onChange={(e)=>{actions.selectAgeMin(e.target.value)}}
              defaultValue={90}/>
      <span className="float-right col-sm-1 text-center">{'‐'}</span>
      <input className="form-input col-sm-3 float-right" type="number" placeholder="Min"
              min="1" max="100" onChange={(e)=>{actions.selectAgeMax(e.target.value)}}
              defaultValue={1}/>
    </div>

     <div className="gender-container">
       <div className="description">Gender
          <div className="fa fa-info-circle" aria-hidden="true"></div>
        </div>
        <div className="btn-group btn-group-block">
          <button className="btn" value="all" onClick={(e)=>{actions.setGender(e.target.value)}}>All</button>
          <button className="btn" value="men" onClick={(e)=>{actions.setGender(e.target.value)}}>Men</button>
          <button className="btn" value="women" onClick={(e)=>{actions.setGender(e.target.value)}}>Women</button>
        </div>
      </div>

    <div className="languages-container">
     <div className="description">Languages
        <div className="fa fa-info-circle" aria-hidden="true"></div>
      </div>
      <input className="form-input" type="text" id="input-example-1"
      placeholder="Name" onChange={(e)=>{actions.addLanguage(e.target.value)}}/>
    </div>

    </div>
  )
}

export default connect(
  function mapStateToProps(state){
    return state},
  function mapDispatchToProps(dispatch){
    return bindActionCreators(actions, dispatch)},
)(AgeGenderLanguages)
