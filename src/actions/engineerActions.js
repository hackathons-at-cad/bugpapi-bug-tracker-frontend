import {
  GET_ENGINEERS,
  ADD_ENGINEER,
  DELETE_ENGINEER,
  ENGINEERS_ERROR,
  SET_LOADING,
} from "./types";

// Get engineers from server
export const getEngineers = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/engineers");
    const data = await res.json();

    dispatch({
      type: GET_ENGINEERS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ENGINEERS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Add engineer to server
export const addEngineer = (engineer) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/engineers", {
      method: "POST",
      body: JSON.stringify(engineer),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: ADD_ENGINEER,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ENGINEERS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Delete engineer from server
export const deleteEngineer = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/engineers/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_ENGINEER,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: ENGINEERS_ERROR,
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
