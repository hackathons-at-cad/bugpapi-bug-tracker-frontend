import {
  GET_STATUSZ,
  ADD_STATUS,
  DELETE_STATUS,
  STATUSZ_ERROR,
  SET_LOADING,
} from "./types";

// Get statusz from server
export const getStatusz = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/statusz");
    const data = await res.json();
    console.log("STATUS DATA", data);

    dispatch({
      type: GET_STATUSZ,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STATUSZ_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Add status to server
export const addStatus = (status) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/statusz", {
      method: "POST",
      body: JSON.stringify(status),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log("ADD STATUS", data);

    dispatch({
      type: ADD_STATUS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STATUSZ_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Delete status from server
export const deleteStatus = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/statusz/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_STATUS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: STATUSZ_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
