import { ADD_CURRENCIES,
  ADD_EXPENSES,
  DELETE_EXPENSES,
  EDIT_EXPENSE,
  SAVED_EDIT_EXPENSE } from '../actions';

const INIT_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
  isEdit: false,
  editSelect: undefined,
};

const getCurrencies = (object) => Object.keys(object).filter((e) => e !== 'USDT');

export const getTotal = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, e) => {
    const { value, currency, exchangeRates } = e;
    acc += Number(value) * exchangeRates[currency].ask;
    return acc;
  }, 0);
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
  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: state.expenses.filter((e) => e.id !== payload),
      total: getTotal(state.expenses.filter((e) => e.id !== payload)),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      isEdit: true,
      editSelect: state.expenses.find((e) => e.id === payload),
    };
  case SAVED_EDIT_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.map((e) => (e.id === payload.id ? payload : e)),
      isEdit: false,
    };
  default:
    return state;
  }
};

export default wallet;
