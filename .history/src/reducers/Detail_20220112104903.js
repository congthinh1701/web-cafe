

const detailReducer= (state =[], action)=> {
    switch(action.type) {
        case 'DETAIL_PRODUCT':{
            //console.log(action.payload);
            
            console.log(state);
            return state
        }
        default :
        return state
    }
}

export default detailReducer