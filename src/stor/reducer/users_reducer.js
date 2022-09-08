import{GET_USER_BY_ID,ADD_USER,UPDAT_USER,REMOV_USER} from '../types'
export default function usersReducer({users},action){
    switch (action.type) {
        case GET_USER_BY_ID:
            
            return [...users]
        case ADD_USER:
            
            return [...users,action.payload]
        case UPDAT_USER:
            let newArray = users.filter((userItem)=>{
                userItem.id==action.payload.id
            })
            users[users.indexOf(newArray[0])]= action.payload
            return [...users]
        case REMOV_USER:
            newArray = users.filter((userItem)=>{
                userItem.id==action.payload
            })
            return [...newArray]
    
        default:
            return users
    }
}