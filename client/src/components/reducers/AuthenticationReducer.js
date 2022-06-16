import { SIGN_IN, SIGN_OUT } from "../actions/types";

const AuthenticationReducer = (
  state = { isSignedIn: null, userId: null },
  action
) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload.userId };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};

export default AuthenticationReducer;
