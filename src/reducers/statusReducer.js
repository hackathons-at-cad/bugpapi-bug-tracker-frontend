import {
  GET_STATUSZ,
  ADD_STATUS,
  DELETE_STATUS,
  SET_LOADING,
  STATUSZ_ERROR,
} from "../actions/types";

const initialState = {
  statusz: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STATUSZ:
      return {
        ...state,
        statusz: action.payload,
        loading: false,
      };
    case ADD_STATUS:
      return {
        ...state,
        statusz: [...state.statusz, action.payload],
        loading: false,
      };
    case DELETE_STATUS:
      return {
        ...state,
        statusz: state.statusz.filter((status) => status.id !== action.payload),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case STATUSZ_ERROR:
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
