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
    this.handleChange = this.handleChange.bind(this)
  }

  handleAddSuggestions(arr,input){

    const newArr = arr.map((word)=>{
      return Score(input, word, .1)
    })

    const adjArr = []

    for(let i = 0; i<arr.length; i++){
       newArr[i]>=.2 ? adjArr.push(arr[i]) : null
    }

    this.setState({suggestions : adjArr})
  }

  handleinputValueChange(){
    this.state.inputValue === '' ? null : this.handleAddSuggestions(justStates,this.state.inputValue)
  }

  handleChange(e){
    const value = e.target.value
    console.log(e.target.value)
    e.target.value === '' ? this.setState({suggestions: []}) : this.setState({inputValue: value})
    this.handleinputValueChange()
  }

  render(){
    return (
       <div className="locations-container">
          <Options/>
          <AutoComplete
            handleChange={this.handleChange}
            locations={this.state.locations}
            suggestions={this.state.suggestions}
          />
       </div>
    )
  }
}

export default Locations
