import { NUMBER_OF_VISITS } from '../actions/index';

INITIAL_STATE = {
  visits: 0,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'APP_DATA':
      return Object.assign({}, state, {
        data: action.data,
      });
    case NUMBER_OF_VISITS:
      return Object.assign({}, state, {
        visits: state.visits + 1,
      });
    default:
      return state;
  }
};
