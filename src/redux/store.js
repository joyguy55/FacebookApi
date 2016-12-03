import { createStore } from 'redux'
import rootReducer from './reducers/index.js'

let store = createStore(rootReducer)

console.log(store.getState())

store.subscribe(() => console.log("Store Changed", store.getState()))

export default store
