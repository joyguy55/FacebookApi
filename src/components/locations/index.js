import React from 'react'

import Options from './options.js'
import justStates from './jsonstates.js'
import AutoComplete from './autocomplete.js'
import styles from './style.scss'
import Score from './magic.js'

import { connect , dispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions/index.js'

const locationSet = new Set()

class Locations extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      suggestions: [],
      locations: locationSet,
    }
  }


  handleAddSuggestions(arr,input){

    const newArr = arr.map((word)=>{
      return Score(input, word, .1)
    })

    const searchSet =  new Set(this.state.suggestions)

    for(let i = 0; i<arr.length; i++){
        newArr[i]>=.2 && searchSet.add(arr[i])
    }

    for(let location of this.state.locations){
      searchSet.delete(location)
    }
    this.setState({suggestions : searchSet})
  }

  handleinputValueChange(searchValue){
    searchValue === '' ? null : this.handleAddSuggestions(justStates,searchValue)
    searchValue === '' ? this.setState({suggestions: []}) : null
  }

  handleLocations(location){
    locationSet.add(location)
    this.setState({locations: locationSet})
    const stateArr = [...this.state.locations]
    this.props.addLocation(stateArr)
  }

  handleChange(e){
    let value =  e.target.value
    this.setState({inputValue: value})
    this.handleinputValueChange(value)
  }

  subtractLocation(location){
    locationSet.delete(location)
    this.setState({locations: locationSet})
  }

  render(){
    return (
       <div className="regions">
          <Options/>
          <AutoComplete
            handleLocations={this.handleLocations.bind(this)}
            handleChange={this.handleChange.bind(this)}
            locations={this.state.locations}
            suggestions={this.state.suggestions}
            subtractLocation={this.subtractLocation.bind(this)}
          />
       </div>
    )
  }

}

export default connect(
  function mapStateToProps(state){
    return state},
  function mapDispatchToProps(dispatch){
    return bindActionCreators(actions, dispatch)},
)(Locations)
