
const initialState={
    list:[],
    totalPrice:''
}

const cartReducer= (state =initialState, action)=> {
    switch(action.type) {
        case 'ADD_CART':{
            const newList=[...state.list]
            newList.push(action.payload)
            console.log(newList);
            return {
                
            }
        }
        default :
        return state
    }
}

export default cartReducer