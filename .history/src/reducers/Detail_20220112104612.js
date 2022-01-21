

const detailReducer= (state ={list:[]}, action)=> {
    switch(action.type) {
        case 'DETAIL_PRODUCT':{
            //console.log(action.payload);
            const newDetail=[...state]
            newDetail.push(action.payload)
            console.log(newDetail);
            return {
                newDetail
            }
        }
        default :
        return state
    }
}

export default detailReducer