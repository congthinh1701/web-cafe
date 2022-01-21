
const initialState={
    list:[],
    totalPrice:''
}

const cartReducer= (state =initialState, action)=> {
    switch(action.type) {
        case 'ADD_CART':{
            const newList=[...state.list]
            
            for (var i in state.list){
                if (action.payload.id === state.list[i].id ){
                    console.log('trung');
                }
                
            }

            console.log(newList.id);

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