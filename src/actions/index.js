import fetchApi from '../service';

export const ADD_USER = 'ADD_USER';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';

export const userAction = (value) => ({ type: ADD_USER, payload: value });

const currenciesAction = (value) => ({ type: ADD_CURRENCIES, payload: value });

export const currencieThunk = () => async (dispatch) => {
  const currencies = await fetchApi();
  dispatch(currenciesAction(currencies));
};
