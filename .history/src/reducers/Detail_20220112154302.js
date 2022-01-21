

const detailReducer= (state =[], action)=> {
    switch(action.type) {
        case 'DETAIL_PRODUCT':{
            console.log();
            return action.payload
        }
        default :
        return state
    }
}

export default detailReducer