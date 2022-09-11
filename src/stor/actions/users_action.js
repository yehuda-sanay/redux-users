import {GET_USER_BY_ID,ADD_USER,UPDAT_USER,REMOV_USER} from '../types/user_types'
function addAction(user){
    return{type:ADD_USER,payload:user}
}


export {addAction,}


