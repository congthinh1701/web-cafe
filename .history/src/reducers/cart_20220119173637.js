
const initialState={
    numberCart:0,
    list:[],
    totalPrice:''
}

const cartReducer= (state =initialState, action)=> {
    switch(action.type) {
        case 'ADD_CART':{
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
           
            const newList=[]
            const cart={
                 action.pay
              
             }
            newList.push(cart)
            console.log(cart);
            return {
               ...state,
            }
        }
        default :
        return state
    }
}

export default cartReducer