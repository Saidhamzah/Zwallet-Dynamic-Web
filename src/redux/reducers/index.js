import { combineReducers } from 'redux'
import Auth from './Auth'
import Users from './Users'


const reducers = combineReducers({
    Auth,
    Users
})

export default reducers