
const forReducer= (state =[], action)=> {
    switch(action.type) {
        case 'for_PRODUCT':{
            return action.payload
        }
        default :
        return state
    }
}

export default detailReducer