
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
                    quantity:action.payload.count,
                    name:action.payload.Name,
                    imageUrl:action.payload.ImageUrl,
                }
                state.list.push(cart)
            }
            else{
                let check=false;
                state.list.map((item,key)=>(
                    if (item.id === action.payload.id ){
                        
                    }
                ))
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