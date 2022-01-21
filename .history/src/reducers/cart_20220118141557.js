
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
                else{
                    newList.push(action.payload)
                }
            }

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