
const initialState={
    list:[],
    active:''
}

const cartReducer= (state =initialState, action)=> {
    switch(action.type) {
        case 'ADD_CART':{
            console.log(state)
            const newList=[...state.list]
            return action.payload
        }
        default :
        return state
    }
}

export default cartReducer