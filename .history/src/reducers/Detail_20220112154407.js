

const detailReducer= (state =[], action)=> {
    switch(action.type) {
        case 'DETAIL_PRODUCT':{
            console.log(action.);
            return action.payload
        }
        default :
        return state
    }
}

export default detailReducer