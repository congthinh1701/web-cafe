

const detailReducer= (state =[], action)=> {
    switch(action.type) {
        case 'DETAIL_PRODUCT':{
            //console.log(action.payload);
            const newDetail=[...state.list]
            newDetail.push(action.payload)
            console.log(state.list);
            return {
                ...state,
                list:newDetail
            }
        }
        default :
        return state
    }
}

export default detailReducer