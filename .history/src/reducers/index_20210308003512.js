import {combineReducers} from 'redux'
import postsRecducer from './postsReducer'

export default combineReducers({
   posts:postsReducer
})
