import {
  COFFEES_LOADED,
  PARTNER_LOADED,
  INCREASE,
  DECREASE,
  REMOVE_ITEM,
  ADD_ITEM,
  CLEAR,
  CHECKOUT,
} from "../types";

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

export function addProduct(payload) {
  return {
    type: ADD_ITEM,
    payload,
  };
}

export function increase(payload) {
  return {
    type: INCREASE,
    payload,
  };
}

export function decrease(payload) {
  return {
    type: DECREASE,
    payload,
  };
}

export function removeProduct(payload) {
  return {
    type: REMOVE_ITEM,
    payload,
  };
}

export function handleCheckout() {
  console.log("CHECKOUT");
  return {
    type: CHECKOUT,
  };
}

export function clearCart() {
  return {
    type: CLEAR,
  };
}

// export const getCoffees = (payload) => (dispatch) => {
//   dispatch({
//     type: COFFEES_LOADED,
//     payload,
//   });
// };

// export const getPartner = (payload) => (dispatch) => {
//   dispatch({
//     type: PARTNER_LOADED,
//     payload,
//   });
// };

// export const increase = (payload) => (dispatch) => {
//   dispatch({
//     type: INCREASE,
//     payload,
//   });
// };
