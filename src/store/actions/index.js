import { ADD_ARTICLE, COFFEES_LOADED, PARTNER_LOADED } from "../types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getCoffees(payload) {
  return {
    type: COFFEES_LOADED,
    payload,
  };
}

export function getPartner(payload) {
  return {
    type: PARTNER_LOADED,
    payload,
  };
}

// export function getData() {
//   return function (dispatch) {
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch({ type: DATA_LOADED, payload: json });
//       });
//   };
// }
