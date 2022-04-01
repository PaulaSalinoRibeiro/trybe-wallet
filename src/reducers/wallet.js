import { ADD_CURRENCIES, ADD_EXPENSES } from '../actions';

const INIT_STATE = {
  currencies: [],
  expenses: [],
};

const getCurrencies = (object) => Object.keys(object).filter((e) => e !== 'USDT');

const getTotal = () => {
  // implementa soma
};

const wallet = (state = INIT_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: getCurrencies(payload),
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, payload],
      total: getTotal([...state.expenses, payload]),
    };
  default:
    return state;
  }
};

export default wallet;
