
const initialState={
    list:[]
}

const cartReducer= (state =initialState, action)=> {
    console.log(state.list);
    switch(action.type) {
        case 'ADD_CART':{
            console.log(state.list);
            if (state.list.length === 0){
                let cart={
                    id:action.payload.id,
                    quantity:action.payload.Count,
                    name:action.payload.Name,
                    image:action.payload.ImageUrl,
                    price:action.payload.Price,
                    total: action.payload.Count * action.payload.Price
                }
                state.list.push(cart)
            }
            else{
                let check=false;
                state.list.forEach((item,key) => {
                    if(item.id === action.payload.id){
                        state.list[key].quantity+=action.payload.Count;
                        check=true;
                    }
                });
                
                if (!check){
                    let _cart = {
                        id:action.payload.id,
                        quantity:action.payload.Count,
                        name:action.payload.Name,
                        image:action.payload.ImageUrl,
                        price:action.payload.Price,
                        total:action.payload.Count * action.payload.Price
                    }
                    state.list.push(_cart);
                }
            }
            return {
                ...state,
                numberCart:state.numberCart+1
            }
        }
        
        case 'INC_CART':{
            console.log(state.list);
            const newList=[...state.list]
            const 
            const cart={
                 ...action.payload,
                 quantity:action.payload.quantity + 1
             }
            
            newList.push(cart)
            console.log(newList);
            return {
               list:newList

            }
        }
        case 'DEC_CART':{
           
            const newList=[...state.list]
            const cart={
                 ...action.payload,
                 quantity:action.payload.quantity - 1
             }
            newList.push(cart)
            return {
               ...state,
               list:[...state.list]
            }
        }
        default :
        return state
    }
}

export default cartReducer