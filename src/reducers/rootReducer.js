import { combineReducers } from "redux"
import users from "./user"
import alert from "./alert"
import auth from "./auth"

export default combineReducers({
  alert,
  auth,
  users
})
