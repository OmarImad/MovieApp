import {
    GET_MOVEI_START,
    GET_MOVIE_SUCCESS,
    GET_MOVIE_FAILED,
    GET_MOVEI_BY_ID_START,
    GET_MOVEI_BY_ID_SUCCESS,
    GET_MOVEI_BY_ID_FAILED
  } from "./movieTypesConstants";
  import axios from "axios"

  export const getMovie = (page = 1) => async (dispatch) => {
      dispatch({
          type: GET_MOVEI_START,
      })
      try{
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=dcf2d1463b5703e25fc8d86eb0fce187&page=${page}`
        );          
        // const oldData = getState().movieState.Movies;
        //   const newData = response.data.results;
        // console.log(...oldData, ...newData)
          dispatch({
            type: GET_MOVIE_SUCCESS,
            payload: response.data.results,
          });
      } catch (e) {
        dispatch({
          type: GET_MOVIE_FAILED,
          payload: e?.response?.message,
        });
        console.log("failed  // data")
      }
  }

  // export const getMovie =
  // (page = 1) =>
  // async (dispatch) => {
  //   dispatch({
  //     type: GET_MOVEI_START,
  //   });
  //   try {
  //     const response = await axios.get(
  //       `https://api.themoviedb.org/3/movie/popular?api_key=dcf2d1463b5703e25fc8d86eb0fce187&page=${page}`
  //     );
  //     //   const oldData = getState().movieState.Movies;
  //     //   const newData = response.data.results;
  //     // console.log(...oldData, ...newData)
  //     dispatch({
  //       type: GET_MOVIE_SUCCESS,
  //       payload: response.data.results,
  //     });
  //   } catch (e) {
  //     dispatch({
  //       type: GET_MOVIE_FAILED,
  //       payload: e?.response?.message,
  //     });
  //     console.log("failed  // data");
  //   }
  // };

  export const getMovieById = (id) => async (dispatch) => {
    dispatch({
      type: GET_MOVEI_BY_ID_START,
    });
    
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=dcf2d1463b5703e25fc8d86eb0fce187&language=en-US`);
      dispatch({
        type: GET_MOVEI_BY_ID_SUCCESS,
        payload: response.data,
      });
      console.log(response.data.results)
      console.log("success")
    }catch (e) {
      dispatch({
        type: GET_MOVEI_BY_ID_FAILED,
        payload: e?.response?.message,
      });
      console.log("failed")

    }
  }