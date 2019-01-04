import {combineReducers} from 'redux'
import article from './article'
import home from './home'
const reducers = combineReducers({home, article})

export default reducers
