import { COFFEES_LOADED, PARTNER_LOADED } from "../types";

const initialState = {
  // articles: [],
  // remoteArticles: [],
  coffees: [],
  partner: [],
};

function rootReducer(state = initialState, action) {
  // if (action.type === ADD_ARTICLE) {
  //   return {
  //     ...state,
  //     articles: [...state.articles, action.payload],
  //   };
  // }

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
  return state;
}

export default rootReducer;

// if (action.type === FETCH_COFFEES) {
//   return {
//     ...state,
//     coffees: action.payload,
//   };
// }
