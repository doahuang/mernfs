import {
  RECEIVE_SHOPS,
  RECEIVE_SHOP
} from '../actions/action_types';

export default (state = {}, action) => {
  Object.freeze(state);

  let newState = {};

  switch (action.type) {
    case RECEIVE_SHOPS:
      action.shops.forEach(shop => {
        newState[shop._id] = shop;
      });
      return newState;
    case RECEIVE_SHOP:
      return Object.assign({}, state, {
        [action.shop._id]: action.shop
      });
    default:
      return state;
  }
};