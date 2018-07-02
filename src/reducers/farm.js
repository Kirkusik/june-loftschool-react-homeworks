import { MOVE_ORDER_TO_FARM } from '../actions/marketTypes.js';
import { MOVE_ORDER_TO_CUSTOMER } from '../actions/farmTypes.js';
import { initialState } from './helpers';

const farm = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return { ...state, orders: [action.payload] };
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        orders: state.orders.slice(state.length - 2, state.length - 1)
      };
    default:
      return state;
  }
};

export default farm;
