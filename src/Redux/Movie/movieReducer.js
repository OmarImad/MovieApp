import {
    GET_MOVEI_START,
    GET_MOVIE_SUCCESS,
    GET_MOVIE_FAILED,
    GET_MOVEI_BY_ID_START,
    GET_MOVEI_BY_ID_SUCCESS,
    GET_MOVEI_BY_ID_FAILED
  } from "./movieTypesConstants";
  
  export const movieReducers = (
    initialState = {
      Movies: [],
      isLoading: false,
      error: "",
      movie:{
        movie:{},
        isLoading: false
      }
    },
    action
  ) => {
    switch (action.type) {
      case GET_MOVEI_START:
        return {
          ...initialState,
          isLoading: true,
        };
      case GET_MOVIE_SUCCESS:
        return {
          ...initialState,
          Movies: [...initialState.Movies, action.payload ],
          isLoading: false,
          // Movies: action.payload,

        };
      case GET_MOVIE_FAILED:
        return {
          ...initialState,
          isLoading: false,
          error: action.payload,
        };

        case GET_MOVEI_BY_ID_START:
        return {
          ...initialState,
          movie:{
          isLoading: true,
        }
        };
      case GET_MOVEI_BY_ID_SUCCESS:
        return {
          ...initialState,
          movie:{
          isLoading: false,
          movie: action.payload,
        }
        };
      case GET_MOVEI_BY_ID_FAILED:
        return {
          ...initialState,
          movie:{
          isLoading: false,
          error: action.payload,
        }
        };
      default:
        return initialState;
    }
  };
  