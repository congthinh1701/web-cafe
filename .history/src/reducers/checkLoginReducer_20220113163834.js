

const detailReducer= (state =[], action)=> {
    switch(action.type) {
        case 'DETAIL_PRODUCT':{
            return action.payload
        }
        default :
        return state
    }
}

export default detailReducer