
const initialState={
    list:[],
    totalPrice:''
}

const cartReducer= (state =initialState, action)=> {
    switch(action.type) {
        case 'ADD_CART':{
            const newList=[...state.list]
            console.log(action.payload.id);
            // if (action.payload.id === state.list.id ){
            //     console.log('trung');
            // }
            newList.push(action.payload)
            console.log(newList);

            return {
                ...state,
                list:newList
            }
        }
        default :
        return state
    }
}

export default cartReducer