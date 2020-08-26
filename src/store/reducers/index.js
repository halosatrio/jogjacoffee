import {
  COFFEES_LOADED,
  PARTNER_LOADED,
  INCREASE,
  DECREASE,
  REMOVE_ITEM,
  ADD_ITEM,
} from "../types";

const initialState = {
  coffees: [],
  partner: [],
  cartItems: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === COFFEES_LOADED) {
    return {
      ...state,
      coffees: action.payload,
    };
  }

  if (action.type === PARTNER_LOADED) {
    return {
      ...state,
      partner: action.payload,
    };
  }

  if (action.type === ADD_ITEM) {
    if (!state.cartItems.find((item) => item.id === action.payload.id)) {
      state.cartItems.push({
        ...action.payload,
        quantity: 1,
      });
    }

    return {
      ...state,
      cartItems: [...state.cartItems],
    };
  }

  if (action.type === INCREASE) {
    state.cartItems[
      state.cartItems.findIndex((item) => item.id === action.payload.id)
    ].quantity++;
    return {
      ...state,
      cartItems: [...state.cartItems],
    };
  }

  if (action.type === DECREASE) {
    state.cartItems[
      state.cartItems.findIndex((item) => item.id === action.payload.id)
    ].quantity--;
    return {
      ...state,
      cartItems: [...state.cartItems],
    };
  }

  if (action.type === REMOVE_ITEM) {
    return {
      ...state,
      cartItems: [
        ...state.cartItems.filter((item) => item.id !== action.payload.id),
      ],
    };
  }
  return state;
}

export default rootReducer;

// switch (action.type) {
//   case COFFEES_LOADED:
//     return {
//       ...state,
//       coffees: action.payload,
//     };

//   case PARTNER_LOADED:
//     return {
//       ...state,
//       coffees: action.payload,
//     };

//   case INCREASE:
//     state.cartItems[
//       state.cartItems.findIndex((item) => item.id === action.payload.id)
//     ].quantity++;
//     return {
//       ...state,
//       cartItems: [...state.cartItems],
//     };

//   default:
//     return state;
// }
