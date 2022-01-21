

const detailReducer= (state =[], action)=> {
    switch(action.type) {
        case 'DETAIL_PRODUCT':{
            //console.log(action.payload);
            const newDetail=[...state]
            newDetail.push(action.payload)
            console.log(state);
            return {
                newDetail
            }
        }
        default :
        return state
    }
}

export default detailReducer