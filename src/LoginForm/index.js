import {Component} from 'react'
import Cookies from 'js-cookie'
import {Navigate} from 'react-router-dom'

import './index.css'


const loginUser =  {
    username:'bharat',
    password:'bharat@2023'
  }




class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    this.setState({showSubmitError: true, errorMsg:"Succcessfully Login"})
  }

  onSubmitFailure = () => {
    this.setState({showSubmitError: true, errorMsg:"Invalid username"})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    // const userDetails = {username, password}
    const loing = loginUser.username === username && loginUser.password === password
    console.log(loing)
    if(loing){
      this.onSubmitSuccess()
    }else{
      this.onSubmitFailure()
    }


  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Navigate to="/" />
    }

    return (
      <div className="login-form-container">
        
        <form className="form-container" onSubmit={this.submitForm}>
         
          <h1 clas>Predera Login</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
