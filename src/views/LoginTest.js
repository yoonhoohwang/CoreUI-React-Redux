import React, { useState } from "react"
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { login } from "../actions/auth"

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const { email, password } = formData

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    login(email, password)
  }

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <>
      <h1 className="large text-primary"> Sign In </h1>{" "}
      <p className="lead">
        <i className="fas fa-user" /> Sing into Your Account{" "}
      </p>{" "}
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          ß
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
          />{" "}
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email{" "}
          </small>{" "}
        </div>{" "}
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
          />{" "}
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>{" "}
      <p className="my-1">
        Dont have an account ? <Link to="/register"> Sign Up </Link>{" "}
      </p>{" "}
    </>
  )
}

Login.prototype = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateToProps,
  {
    login
  }
)(Login)