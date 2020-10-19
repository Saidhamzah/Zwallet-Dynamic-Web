import axios  from 'axios'

export const login=()=>{ 
    // axios
    localStorage.setItem("","")
}

export const logout =()=>{
    localStorage.removeItem("","")
}

export const isLogin =()=>{
    if(localStorage.getItem("")){
        return true
    }
    return false
}