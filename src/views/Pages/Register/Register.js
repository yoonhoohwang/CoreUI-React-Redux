import React, { useState } from "react"
import { connect } from "react-redux"
import { Link, Redirect } from "react-router-dom"
import PropTypes from "prop-types"
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap"

import { setAlert } from "../../../actions/alert"
import { register } from "../../../actions/auth"

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  })

  const { name, email, password, password2 } = formData

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    if (password !== password2) {
      setAlert("Password do not match", "danger")
    } else {
      console.log(name, email, password)
      register({
        name,
        email,
        password
      })
    }
  }

  // Redirect if user register
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="9" lg="7" xl="6">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form onSubmit={e => onSubmit(e)}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Username"
                      autoComplete="username"
                      value={name}
                      onChange={e => onChange(e)}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      name="email"
                      placeholder="Email"
                      autoComplete="email"
                      value={email}
                      onChange={e => onChange(e)}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-lock" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      value={password}
                      onChange={e => onChange(e)}
                    />
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-lock" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="password"
                      name="password2"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      value={password2}
                      onChange={e => onChange(e)}
                    />
                  </InputGroup>
                  <Button type="submit" color="success" block>
                    Create Account
                  </Button>
                </Form>
              </CardBody>
              <CardFooter className="p-4">
                <Row>
                  <Col xs="12" sm="6">
                    <Button className="btn-facebook mb-1" block>
                      <span>facebook</span>
                    </Button>
                  </Col>
                  <Col xs="12" sm="6">
                    <Button className="btn-twitter mb-1" block>
                      <span>twitter</span>
                    </Button>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

Register.prototype = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateToProps,
  {
    setAlert,
    register
  }
)(Register)
