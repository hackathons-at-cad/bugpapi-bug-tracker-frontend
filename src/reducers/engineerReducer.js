import {
  GET_ENGINEERS,
  ADD_ENGINEER,
  DELETE_ENGINEER,
  SET_LOADING,
  ENGINEERS_ERROR,
} from "../actions/types";

const initialState = {
  engineers: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ENGINEERS:
      return {
        ...state,
        engineers: action.payload,
        loading: false,
      };
    case ADD_ENGINEER:
      return {
        ...state,
        engineers: [...state.engineers, action.payload],
        loading: false,
      };
    case DELETE_ENGINEER:
      return {
        ...state,
        engineers: state.engineers.filter(
          (engineer) => engineer.id !== action.payload
        ),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ENGINEERS_ERROR:
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
