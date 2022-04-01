import fetchApi from '../service';

export const ADD_USER = 'ADD_USER';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const userAction = (value) => ({ type: ADD_USER, payload: value });

const currenciesAction = (value) => ({ type: ADD_CURRENCIES, payload: value });

const expensesAction = (value, data) => (
  { type: ADD_EXPENSES,
    payload: { ...value, exchangeRates: { ...data } },
  });

export const currencieThunk = () => async (dispatch) => {
  const currencies = await fetchApi();
  dispatch(currenciesAction(currencies));
};

export const expensesThunk = (value) => async (dispatch) => {
  const currencies = await fetchApi();
  dispatch(expensesAction(value, currencies));
};
