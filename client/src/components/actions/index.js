import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  EDIT_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
} from "./ActionsConstants";
import streams from "../../apis/streams";
import history from "../../history";
import { LIST_STREAMS } from "../../Paths";

export const signIn = (userId) => {
  return { type: SIGN_IN, payload: { userId } };
};

export const signOut = () => {
  return { type: SIGN_OUT };
};

// Using thunk if the action creator returns a function, redux will call it using dispatch and a function to obtain the store state
export const streamCreated =
  (streamInfo) => async (dispatch, getStoreState) => {
    const { userId } = getStoreState().authentication;
    const apiResponse = await streams.post("/streams", {
      ...streamInfo,
      userId,
    });

    dispatch({ type: CREATE_STREAM, payload: apiResponse.data });
    //Return to stream list page
    history.push(LIST_STREAMS);
  };

export const fetchStreams = () => async (dispatch) => {
  const apiResponse = await streams.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: apiResponse.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const apiResponse = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: apiResponse.data });
};

export const editStream = (id, streamInfo) => async (dispatch) => {
  const apiResponse = await streams.patch(`/streams/${id}`, streamInfo);

  dispatch({ type: EDIT_STREAM, payload: apiResponse.data });
  //Return to stream list page
  history.push(LIST_STREAMS);
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
  history.push(LIST_STREAMS);
};
