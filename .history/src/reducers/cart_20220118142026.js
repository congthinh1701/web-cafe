
const initialState={
    list:[],
    totalPrice:''
}

const cartReducer= (state =initialState, action)=> {
    switch(action.type) {
        case 'ADD_CART':{
            const newList=[...state.list]
            
            const found=state.list.find(data)
            newList.push(action.payload)

            console.log(...newList.id);

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