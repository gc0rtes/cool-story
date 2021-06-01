import axios from "axios";

import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";

//***my actions here***
export const successFetched = (spaces) => ({
  type: "FETCH_SPACES_SUCCESS",
  payload: spaces,
});

export const fetchSpaces = () => {
  return async (dispatch, getState) => {
    const offset = getState().spaces.length;
    const response = await axios.get(
      `${apiUrl}/spaces?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${offset}`
    );
    // console.log("what is response?", response.data.spaces.rows);
    dispatch(successFetched(response.data.spaces.rows));
  };
};
