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

export const Users = (fields) => {
    return (dispatch) =>{
        dispatch(UsersRequest())
        // console.log(fields.token,'cek sini gan')
        return Axios({
            method: 'GET',
            url: `http://localhost:7000/user/profile`,
            headers:{
                'token': fields.token
            }
        }).then((res)=> {
            const data = res.data.data
            console.log(data, 'aaaaaaaa')
            dispatch(UsersSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(UsersError(message))
        })
    }
}
