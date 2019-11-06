import axios from "axios"

// eslint-disable-next-line import/prefer-default-export
export const getUsers = () => dispatch => {
  return dispatch({
    type: "GET_USERS",
    payload: axios.get("http://localhost:5000/test")
  })
}
