

const userReducer= (state =[], action)=> {
    switch(action.type) {
        case 'CHECK_LOGIN':{
            return action.payload
        }
        default :
        return state
    }
}

export default userReducer