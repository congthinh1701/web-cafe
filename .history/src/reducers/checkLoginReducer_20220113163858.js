

const checkLoginReducer= (state =[], action)=> {
    switch(action.type) {
        case 'checkLogin_PRODUCT':{
            return action.payload
        }
        default :
        return state
    }
}

export default checkLoginReducer