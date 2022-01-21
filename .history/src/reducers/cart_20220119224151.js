const initialState = {
  list: [],
  numberCart:0
};

const cartReducer = (state = initialState, action) => {
  console.log(state.list);
  switch (action.type) {
    case "ADD_CART": {
      console.log(state.list);
      if (state.list.length === 0) {
        let cart = {
          id: action.payload.id,
          quantity: action.payload.Count,
          name: action.payload.Name,
          image: action.payload.ImageUrl,
          price: action.payload.Price,
          total: action.payload.Count * action.payload.Price,
        };
        state.list.push(cart);
      } else {
        let check = false;
        state.list.forEach((item, key) => {
          if (item.id === action.payload.id) {
            state.list[key].quantity += action.payload.Count;
            check = true;
          }
        });

        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: action.payload.Count,
            name: action.payload.Name,
            image: action.payload.ImageUrl,
            price: action.payload.Price,
            total: action.payload.Count * action.payload.Price,
          };
          state.list.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    }

    case "INC_CART": {
      state.list[action.payload].quantity++;
      return {
        ...state,
      };
    }
    case "DEC_CART": {
      const quantity = state.list[action.payload].quantity;
      if (quantity > 1) {
        state.list[action.payload].quantity--;
      } else {
        state.list.splice(action.payload, 1);
      }
      return {
        ...state,
      };
    }
    case "DELETE_CART":{
        state.list.splice(action.payload, 1);
        return{
            ...state
        }
    }
    default:
      return state;
  }
};

export default cartReducer;
