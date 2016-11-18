import React from 'react'

import Options from './options.js'
import NewStates from './jsonstates.js'
import AutoComplete from './autocomplete.js'
import styles from './style.scss'

class Locations extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      suggestions: [],
      locations: [],
    }
  }

  handleChange(e){
    this.setState({inputValue: e.target.value})
    console.log(this.state.inputValue)
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
