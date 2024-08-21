export const inittialState = {
  son: 9,
  wishlist: [],
  cart: [],
  token: null,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, son: state.son + 1 };
    case "ADD_TO_WISHLIST":
      let index = state.wishlist.findIndex(item=>item.id === action.payload.id)
      if(index < 0){
      return { ...state, wishlist: [...state.wishlist, action.payload] }
    };
    case "CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
