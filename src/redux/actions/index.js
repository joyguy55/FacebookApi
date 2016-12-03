

export const addLocation = (location) => {
  return {
    type: 'ADD_LOCATION',
    payload: location
  }
}

export const selectAgeMin = (ageMin) => {
  return {
    type: 'SELECT_AGE_MIN',
    payload: ageMin
  }
}

export const selectAgeMax = (ageMax) => {
  return {
    type: 'SELECT_AGE_MAX',
    payload: ageMax
  }
}

export const setGender = (gender) => {
  return {
    type: 'SET_GENDER',
    payload: gender
  }
}

export const addLanguage = (language) => {
  return {
    type: 'ADD_LANGUAGE',
    payload: language
  }
}
