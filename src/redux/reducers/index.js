import { combineReducers } from 'redux'
import Auth from './Auth'
import Users from './Users'
// import getUsers from './getUser'


const reducers = combineReducers({
    Auth,
    Users,
    // getUsers
})

export default reducers