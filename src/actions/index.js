import fetchApi from '../service';

export const ADD_USER = 'ADD_USER';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const SAVED_EDIT_EXPENSE = 'SAVED_EDIT_EXPENSE';

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

export const deleteAction = (id) => ({ type: DELETE_EXPENSES, payload: id });

export const editExpenseAction = (id) => ({ type: EDIT_EXPENSE, payload: id });

export const savedEditExpenseAction = (value) => (
  { type: SAVED_EDIT_EXPENSE, payload: value });
