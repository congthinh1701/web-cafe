

const userReducer= (state =[], action)=> {
    switch(action.type) {
        case 'CHECK_LOGIN':{
            console.log(ac);
            return action.payload
        }
        default :
        return state
    }
}

export default userReducer