


import axios from "axios"
import * as types from "./actionTypes"
import { API_BASE } from "@/lib/utils"




const signup =(payload)=>(dispatch)=>{
dispatch({type:types.POST_LOGIN_REQUEST})
return axios
.post(`${API_BASE}/user/signup`,payload)
.then((r)=>{
     console.log(r); //big obj have data key : books bheetl aani token pn
     console.log(r.data)
    dispatch({type:types.POST_LOGIN_SUCCESS,payload:r.data})
})
.catch((e)=>dispatch({type:types.POST_LOGIN_FAILURE,payload:e}))
}



const login=(payload)=>(dispatch)=>{
    dispatch({type:types.POST_LOGIN_REQUEST})
    return axios
    .post(`${API_BASE}/user/login`,payload)
    .then((r)=>{
         console.log(r); //big obj have data key : books bheetl aani token pn
         console.log(r.data);
        return dispatch({type:types.POST_LOGIN_SUCCESS,payload:r.data.token})
    })
    .catch((e)=>dispatch({type:types.POST_LOGIN_FAILURE,payload:e}))
}
export {signup,login}