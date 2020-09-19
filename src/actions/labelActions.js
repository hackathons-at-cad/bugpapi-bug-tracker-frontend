import {
  GET_LABELS,
  ADD_LABEL,
  DELETE_LABEL,
  LABELS_ERROR,
  SET_LOADING,
} from "./types";

// Get labels from server
export const getLabels = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/labels");
    const data = await res.json();

    dispatch({
      type: GET_LABELS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LABELS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Add label to server
export const addLabel = (label) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/labels", {
      method: "POST",
      body: JSON.stringify(label),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: ADD_LABEL,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LABELS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Delete label from server
export const deleteLabel = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/labels/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_LABEL,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: LABELS_ERROR,
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
