import { UPDATE_SHARED_STATE } from '../actions/actions';

const initialState = {
  sharedState: '',
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_SHARED_STATE:
      return { ...state, sharedState: action.payload };
    default:
      return state;
  }
};

export default reducer;