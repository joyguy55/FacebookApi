import React from 'react';

const AutoComplete = (props) =>{

    const handleSearch = (suggestion) => {
      props.handleLocations(suggestion)
    }

    const handleSubtract = (location) => {
      props.subtractLocation(location)
    }

    const arrSuggestions = Array.from(props.suggestions)

    const arrLocations = Array.from(props.locations)

    return(
      <div className="form-autocomplete">
         { arrLocations.length > 0 && (
          <ul className="selections">
            {
              arrLocations.map((location,index)=>{
                return(<li key={index}>
                        <i className="fa fa-map-marker"></i>
                        {location}
                        <i className="fa fa-times" onClick={()=>{handleSubtract(location)}}></i>
                      </li>
                )
              })
            }
          </ul>
         )}

        <input className="form-input" type="text" onChange={props.handleChange} placeholder="Add Location" />
        { arrSuggestions.length > 0 && (
            <ul className="form-autocomplete-list Suggestions">
              {
                arrSuggestions.map((suggestion,index)=>{
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
