
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
            if (state.numberCart === 0){
                let cart={
                    id:action.payload.id,
                    Quantity:1,
                    Name:action.payload.name,
                    ImageUrl:action.payload.ImageUrl,
                    Price:action.payload.price
                }
            }
            
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