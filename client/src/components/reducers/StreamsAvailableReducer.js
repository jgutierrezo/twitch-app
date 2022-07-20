import {
  CREATE_STREAM,
  EDIT_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
} from "../actions/ActionsConstants";
import _ from "lodash";

//It is easier to handle the state as an object than as an array, but both options are valid
export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      //Key interpolation: [action.payload.id]: action.payload
      // It is adding a new key value pair to the object. If already exists then it will update
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case DELETE_STREAM:
      const { [action.payload]: deletedStream, ...restObject } = state;
      return restObject;

    default:
      return state;
  }
};
