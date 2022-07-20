import { combineReducers } from "redux";
import AuthenticationReducer from "./AuthenticationReducer";
import { reducer as formReducer } from "redux-form";
import StreamsAvailableReducer from "./StreamsAvailableReducer";

export default combineReducers({
  authentication: AuthenticationReducer,
  form: formReducer,
  availableStreams: StreamsAvailableReducer,
});
