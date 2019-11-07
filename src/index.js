import "react-app-polyfill/ie9" // For IE 9-11 support
import "react-app-polyfill/stable"
// import 'react-app-polyfill/ie11'; // For IE 11 support
import "./polyfill"
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { Provider } from "react-redux"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import configureStore from "./store/store"

const backUrl = {
  test: "http://localhost:3010",
  backend: "http://backend-url:{PORT}"
}
ReactDOM.render(
  <Provider store={configureStore()} globalState={backUrl.test}>
    <App />
  </Provider>,
  document.getElementById("root")
)

serviceWorker.unregister()
