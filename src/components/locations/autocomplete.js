import React from 'react';

const AutoComplete = (props) =>{
    return(
      <div className="form-autocomplete">
         { props.locations === [] ? null :
          <ul className="Selections">
            {
              props.locations.map((location)=>{
                return(<li>{location}</li>)
              })
            }
          </ul>
         }
        <input className="form-input" type="text" onChange={props.handleChange} placeholder="Add Location" />
         { props.suggestions === [] ? null :
          <ul className="form-autocomplete-list Suggestions">
            {
              props.suggestions.map((suggestion)=>{
                return(<li className="form-autocomplete-item">{suggestion}</li>)
              })
            }
          </ul>
         }
      </div>
    )
}

export default AutoComplete;
