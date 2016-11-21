import React from 'react';

const AutoComplete = (props) =>{

    const handleSearch = (suggestion) => {
     props.handleLocations(suggestion)
    }

    return(
      <div className="form-autocomplete">
         { props.locations === [] ? null :
          <ul className="Selections">
            {
              props.locations.map((location,index)=>{
                return(<li key={index}>{location}</li>)
              })
            }
          </ul>
         }

        <input className="form-input" type="text" onChange={props.handleChange} placeholder="Add Location" />
        { props.suggestions.length > 0 && (
            <ul className="form-autocomplete-list Suggestions">
              {
                props.suggestions.map((suggestion,index)=>{
                  return(<li key={index} className="form-autocomplete-item" onClick={()=>{handleSearch(suggestion)}}>{suggestion}</li>)
                })
              }
            </ul>
          )
        }
      </div>
    )
}

export default AutoComplete;
