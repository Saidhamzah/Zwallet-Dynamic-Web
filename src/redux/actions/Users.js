import Axios from 'axios'

const UsersRequest = ()=> {
    return{
        type: 'USERS_REQUEST'
    }
}

const UsersSuccess = (data)=> {
    return{
        type: 'USERS_SUCCESS',
        payload: data
    }
}
const UsersError = (error)=> {
    return{
        type: 'USERS_ERROR',
        payload: error
    }
}

export const GetUsers = (fields) => {
    return (dispatch) =>{
        dispatch(UsersRequest())
        return Axios({
            method: 'GET',
            url: `http://localhost:7000/user/profile`,
            headers:{
                'auth-token': fields.token
            }
        }).then((res)=> {
            const data = res.data.data.data
            console.log(data, 'aaa')
            dispatch(UsersSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(UsersError(message))
        })
    }
}
