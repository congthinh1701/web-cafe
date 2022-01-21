const init={
    list:[]
}

const detailReducer= (state =init, action)=> {
    switch(action.type) {
        case 'DETAIL_PRODUCT':{
            console.log(payload);
            return state
        }
        default :
        return state
    }
}

export default detailReducer