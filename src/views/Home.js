import React, { useEffect } from "react"
import { connect } from "react-redux"
import { getUsers } from "../actions/users"
import User from "../containers/User"

function Home(props) {
  // eslint-disable-next-line no-shadow
  const { getUsers } = props
  useEffect(() => {
    getUsers()
  }, [getUsers])

  return (
    <div className="App">
      <button
        type="button"
        className="loadButton"
        onClick={props.getUsers}
        disabled={props.users.loading}
      >
        Load Users{" "}
      </button>{" "}
      {props.users.users.length > 0 && (
        <ul>
          {" "}
          {props.users.users.map(user => {
            return <User user={user} key={user.id} />
          })}{" "}
        </ul>
      )}{" "}
      {props.users.error && <div> A network error occured </div>}{" "}
    </div>
  )
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

// export default App
