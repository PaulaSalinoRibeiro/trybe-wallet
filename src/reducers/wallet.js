import { ADD_CURRENCIES } from '../actions';

const INIT_STATE = {
  currencies: [],
  expenses: [],
};

const getCurrencies = (object) => Object.keys(object).filter((e) => e !== 'USDT');

const wallet = (state = INIT_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: getCurrencies(payload),
    };
  default:
    return state;
  }
};

export default wallet;
