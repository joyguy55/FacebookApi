import React from 'react'

import Options from './options.js'
import justStates from './jsonstates.js'
import AutoComplete from './autocomplete.js'
import styles from './style.scss'
import Score from './magic.js'

class Locations extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      suggestions: [],
      locations: [],
    }
  }

  handleAddSuggestions(arr,input){

    const newArr = arr.map((word)=>{
      return Score(input, word, .1)
    })

    const addSuggestions = []
    const locationSet =  new Set()
    for(let i = 0; i<this.state.locations.length; i++){
      locationSet.add(this.state.locations[i])
    }
    console.log(locationSet)
    for(let i = 0; i<arr.length; i++){
      newArr[i]>=.2 && !locationSet.has(newArr[i]) ? addSuggestions.push(arr[i]) : null
    }

    this.setState({suggestions : addSuggestions})
  }

  handleinputValueChange(searchValue){
    searchValue === '' ? null : this.handleAddSuggestions(justStates,searchValue)
    searchValue === '' ? this.setState({suggestions: []}) : null
  }

  handleLocations(locationValue){
    this.setState({locations:[...this.state.locations, locationValue]})
  }

  handleChange(e){
    let value =  e.target.value
    this.setState({inputValue: value})
    this.handleinputValueChange(value)
  }

  render(){
    return (
       <div>
          <Options/>
          <AutoComplete
            handleLocations={this.handleLocations.bind(this)}
            handleChange={this.handleChange.bind(this)}
            locations={this.state.locations}
            suggestions={this.state.suggestions}
          />
       </div>
    )
  }
}

export default Locations
