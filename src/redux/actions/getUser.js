// import Axios from 'axios'

// const getUsersRequest = ()=> {
//     return{
//         type: 'GET_USERS_REQUEST'
//     }
// }

// const getUsersSuccess = (data)=> {
//     return{
//         type: 'GET_USERS_SUCCESS',
//         payload: data
//     }
// }
// const getUsersError = (error)=> {
//     return{
//         type: 'GET_USERS_ERROR',
//         payload: error
//     }
// }

// export const GetTransferSearch = (fields) => {
//     return (dispatch) =>{
//         dispatch(getUsersRequest())
//         // console.log(fields.token,'cek sini gan')
//         return Axios({
//             method: 'GET',
//             url: `http://localhost:7000/user`,
//             headers:{
//                 'token': fields
//             }
//         }).then((res)=> {
//             const data = res.data.data
//             console.log(data, 'aaaaaaaa')
//             dispatch(getUsersSuccess(data))
//         }).catch((err)=> {
//             const message = err.message
//             dispatch(getUsersError(message))
//         })
//     }
// }
