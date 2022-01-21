
const initialState={
    numberCart:0,
    list:[],
    totalPrice:''
}

const cartReducer= (state =initialState, action)=> {
    switch(action.type) {
        case 'ADD_CART':{
            // var flag=false
            // const newList=[...state.list]
            
            // const found=state.list.find(data => data.id===action.payload.id)
            // console.log(found);
            // newList.push(action.payload)

            // // console.log(...newList.id);
            
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