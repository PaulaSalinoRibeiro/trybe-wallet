// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_USER } from '../actions';

const INIT_STATE = {
  email: '',

};

const user = (state = INIT_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
  case ADD_USER:
    return {
      email: payload,
    };
  default:
    return state;
  }
};

export default user;
