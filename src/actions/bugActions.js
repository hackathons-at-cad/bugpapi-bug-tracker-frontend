import {
  GET_BUGS,
  SET_LOADING,
  BUGS_ERROR,
  ADD_BUG,
  DELETE_BUG,
  UPDATE_BUG,
  SEARCH_BUGS,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "./types";

// Get bugs from server
export const getBugs = () => async (dispatch) => {
  // So we have our getBugs action which is going to go and make our request,
  // get the data, dispatch to our reducer, and change the state. The state
  // is going to be changed with our reducer.
  try {
    setLoading();

    const res = await fetch("/bugs");
    const data = await res.json();

    dispatch({
      type: GET_BUGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BUGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Add new bugs
export const addBug = (bug) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/bugs", {
      method: "POST",
      body: JSON.stringify(bug),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("ADD NEW BUG", data);

    dispatch({
      type: ADD_BUG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BUGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Delete bug from server
export const deleteBug = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/bugs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_BUG,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: BUGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Update bug
export const updateBug = (bug) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/bugs/${bug.id}`, {
      method: "PUT",
      body: JSON.stringify(bug),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_BUG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BUGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Search server bugs
export const searchBugs = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`http://localhost:3006/bugs?q=${text}`);
    const data = await res.json();
    console.bug(data);

    dispatch({
      type: SEARCH_BUGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BUGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Set current bug
export const setCurrent = (bug) => {
  return {
    type: SET_CURRENT,
    payload: bug,
  };
};

// Clear current bug
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
