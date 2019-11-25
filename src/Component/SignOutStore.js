import {reducer} from './SignOutReducer'
import {createStore} from 'redux'

export const store = createStore(reducer)