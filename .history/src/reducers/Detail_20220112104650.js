

const detailReducer= (state ={list:[]}, action)=> {
    switch(action.type) {
        case 'DETAIL_PRODUCT':{
            //console.log(action.payload);
            const newDetail=[...state.list]
            newDetail.push(action.payload)
            console.log(state);
            return {
                ...state,
                list:new
            }
        }
        default :
        return state
    }
}

export default detailReducer