import {
  COFFEES_LOADED,
  PARTNER_LOADED,
  INCREASE,
  DECREASE,
  REMOVE_ITEM,
} from "../types";

const initialState = {
  coffees: [],
  partner: [],
  cartItems: [
    {
      id: "blanco-3",
      name: "Ijen Madu Merah",
      company: "Blanco Coffee Roaster",
      price: 95000,
      description: {
        origin: "Banyuwangi, Mt. Ijen, East Java",
        altitude: "1110 - 1200 masl",
        varietas: "Cobra, USDA 762, Lini S",
        process: "Red Honey",
        roasting: "Filter Roast",
        notes:
          "Oolong Tea Aroma, Palm Sugar, syrupy body with hints of chocolate",
      },
      isRecommended: false,
      isTerbaru: false,
      isPilihan: false,
      weight: "200 gram",
      imageUrl: "/images/blanco3.jpg",
      quantity: 1,
    },
    {
      id: "blanco-2",
      name: "Arundaya Giling Basah",
      company: "Blanco Coffee Roaster",
      price: 90000,
      description: {
        origin: "Pantan Musara, Aceh Gayo",
        altitude: "1.650 masl",
        varietas: "Abyssinia, Catura, Bourbon",
        process: "Giling Basah (Wet Hulled)",
        roasting: "Filter Roast",
        notes:
          "Mapple Syrup Aroma, Passion Fruit, Smooth Body, Black Tea Finish",
      },
      isRecommended: false,
      isTerbaru: false,
      isPilihan: true,
      weight: "200 gram",
      imageUrl: "/images/blanco2.jpg",
      quantity: 3,
    },
  ],
  total: [],
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
