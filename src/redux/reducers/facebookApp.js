
const facebookApp = (state= {
  location: [],
  ageMin: '1',
  ageMax: '90',
  gender: 'all',
  language: [],
}, action) => {

  const actions = {
    'ADD_LOCATION': () => {
      console.log(action)
         const newState = {...state, 'location': action.payload}
         return newState
        },

    'SELECT_AGE_MIN': () =>{
      console.log(action)
          const newState = {...state, 'ageMin': action.payload}
          return newState
        },

    'SELECT_AGE_MAX': () =>{
          const newState = {...state, 'ageMax': action.payload}
          return newState
        },

    'SET_GENDER': () =>{
          const newState = {...state, 'gender': action.payload}
          return newState
        },

    'ADD_LANGUAGE': () =>{
          const newState = {...state, 'language': action.payload}
          return newState
        },
  }
  return actions[action.type] ? actions[action.type]() : state
}

export default facebookApp
