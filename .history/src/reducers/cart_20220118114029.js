

const cartReducer= (state =[], action)=> {
    switch(action.type) {
        case 'ADD_CART':{
            const check=state.find()
            console.log(state)
            return action.payload
        }
        default :
        return state
    }
}

export default cartReducer