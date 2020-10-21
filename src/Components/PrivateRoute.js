// import { Component } from 'react'
// import { Form } from 'react-bootstrap'
// import React  from 'react'
// import { Route, Redirect } from 'react-router-dom'
// import { isLogin} from '../Utils'


// const PrivateRoute = ({ component: Component, ...rest})=>{
//     return(
//         <Route{...rest}
//         render={(props)=>(
//             isLogin()? (<Component {...props}/>): (<Redirect to='/login'/>)
//         )}
//         />
//     )
// }

// export default PrivateRoute

import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'





const PrivateRoute = ({ component: Component, ...rest })=> {
    const { isLogin } = useSelector((state) => state.Auth)
    
    return(
        <Route {...rest} 
            render={(props)=> (
                // console.log(props, "cek ini"),
                isLogin ? (<Component {...props} />):(<Redirect to='/login' />)
            )}
        />
    )


}



export default PrivateRoute