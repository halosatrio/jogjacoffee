import {
  COFFEES_LOADED,
  PARTNER_LOADED,
  INCREASE,
  DECREASE,
  REMOVE_ITEM,
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
