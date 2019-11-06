export default (
  state = {
    users: [],
    loading: false,
    error: false
  },
  action
) => {
  switch (action.type) {
    case "GET_USERS_PENDING":
      return {
        ...state,
        loading: true
      }
    case "GET_USERS_FULFILLED":
      return {
        ...state,
        users: action.payload.data,
        loading: false
      }
    case "GET_USERS_REJECTED":
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}
