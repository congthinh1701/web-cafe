import { getAuth } from "firebase/auth";
import { useState } from "react";

const auth = getAuth();
con
  const user = auth.currentUser;
  if (user !== null) {
    user.providerData.forEach((profile) => {
       return profile.uid
    });
  }

const initialState={
    numberCart:0,
    uid:[],
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
                    imageUrl:action.payload.ImageUrl,
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
                    }
                    state.list.push(_cart);
                }
            }
            
            return {
                ...state,
                numberCart:state.numberCart+1
            }
        }
        default :
        return state
    }
}

export default cartReducer