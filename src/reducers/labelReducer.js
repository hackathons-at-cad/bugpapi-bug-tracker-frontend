import {
  GET_LABELS,
  ADD_LABEL,
  DELETE_LABEL,
  SET_LOADING,
  LABELS_ERROR,
} from "../actions/types";

const initialState = {
  labels: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LABELS:
      return {
        ...state,
        labels: action.payload,
        loading: false,
      };
    case ADD_LABEL:
      return {
        ...state,
        labels: [...state.labels, action.payload],
        loading: false,
      };
    case DELETE_LABEL:
      return {
        ...state,
        labels: state.labels.filter((label) => label.id !== action.payload),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LABELS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
