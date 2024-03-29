import React, { Component } from 'react';

import { LeftImage, RightImage } from './LoginPage-Svg-Images';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import './Login-page.css'

class LoginPage extends Component {

  constructor() {
    super();
    this.state = {
      loggedIn: false,
      password: '',
      username: '',
      email:"",
      showPassword: "",
      enableError: false,
      snackbar: false,
      loading: false
    }
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username === "admin" && this.state.password === "admin@123") {
      this.setState({
        loading: true,
      })
      setTimeout(() => {
        this.setState({
          snackbar: true
        })
      }, 3000);
      setTimeout(() => {
        this.setState({
          loggedIn: true,
        })
      }, 4500);
      window.location.href = "/homepage"
    } else {
      this.setState({
        enableError: true
      })
    }
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      snackbar: false
    });
  };

  render() {
    return (
      <div className="maincontainer">
        <div className="navbar-tab-device">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
              <g>
                <g>
                  <g>
                    <path d="M0 0L24 0 24 24 0 24z" transform="translate(-20 -23) translate(20 23)" />
                    <path fill="#051F33" fill-rule="nonzero" d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" transform="translate(-20 -23) translate(20 23)" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="LeftImagemaindiv">
          <LeftImage />
        </div>
        <div className="logincontainer">
          <div className="digitallog">
            <svg className="digilogo" width="144" height="36" viewBox="0 0 144 36">
              <g fill="none" fillRule="evenodd">
                <g>
                  <g>
                    <path fill="#FFF" fillOpacity=".01" d="M0 0H144V36H0z" transform="translate(-918 -328) translate(918 328)" />
                    <g>
                      <path fill="#051F33" d="M38.966 21.606L41.741 21.606 41.741.394 38.966.394zM54.367 18.94c2.13 0 3.87-.758 5.224-2.273 1.353-1.515 2.03-3.404 2.03-5.667 0-2.262-.677-4.151-2.03-5.667-1.354-1.515-3.095-2.272-5.224-2.272h-5.373V18.94h5.373zm0-18.546c2.845 0 5.208 1.025 7.09 3.076 1.88 2.05 2.82 4.56 2.82 7.53 0 2.97-.94 5.48-2.82 7.53-1.882 2.051-4.245 3.076-7.09 3.076h-8.148V.394h8.148zM87.797 11.09v1.274c0 2.768-.936 5.066-2.806 6.894C83.12 21.086 80.643 22 77.559 22c-3.184 0-5.816-1.065-7.895-3.197-2.08-2.13-3.12-4.732-3.12-7.803 0-3.07 1.04-5.671 3.12-7.803C71.743 1.066 74.354 0 77.499 0c1.93 0 3.701.47 5.313 1.409 1.612.94 2.855 2.177 3.73 3.712l-2.387 1.424c-.597-1.151-1.497-2.075-2.701-2.772-1.204-.697-2.533-1.046-3.985-1.046-2.388 0-4.348.793-5.88 2.38C70.057 6.691 69.29 8.656 69.29 11c0 2.344.77 4.303 2.313 5.879 1.542 1.576 3.537 2.364 5.985 2.364 2.089 0 3.78-.52 5.073-1.56 1.294-1.041 2.08-2.39 2.359-4.047H77.35v-2.545h10.447zM91.169 21.606L93.945 21.606 93.945.394 91.169.394zM111.795.394L111.795 3.061 105.616 3.061 105.616 21.606 102.87 21.606 102.87 3.061 96.721 3.061 96.721.394zM116.63 14.212h7.492L120.36 3.758l-3.731 10.454zm10.148 7.394l-1.702-4.757h-9.401l-1.702 4.757h-2.955l7.79-21.212h3.135l7.79 21.212h-2.955zM134.986 18.94L144 18.94 144 21.606 132.21 21.606 132.21.394 134.986.394z" transform="translate(-918 -328) translate(918 328) translate(0 7)" />
                      <path fill="#1089F5" d="M28.588 3.482c-1.9-2.04-4.283-3.06-7.149-3.06h-8.208v4.937c-.567.5-.927 1.236-.927 2.058 0 1.506 1.203 2.727 2.686 2.727 1.484 0 2.686-1.22 2.686-2.727 0-.863-.396-1.631-1.012-2.13V3.754h4.775c1.97 0 3.577.682 4.821 2.045 1.243 1.364 1.865 3.106 1.865 5.228 0 2.1-.622 3.838-1.865 5.212-1.244 1.374-2.85 2.06-4.82 2.06h-4.776v-2.406H13.23v5.74h8.208c2.866 0 5.249-1.025 7.15-3.076 1.899-2.05 2.85-4.561 2.85-7.53 0-2.99-.951-5.505-2.85-7.546" transform="translate(-918 -328) translate(918 328) translate(0 7)" />
                      <path fill="#1089F5" d="M18.379 15.852c1.336 0 2.42-1.1 2.42-2.458 0-1.357-1.084-2.457-2.42-2.457-1.337 0-2.42 1.1-2.42 2.457 0 1.357 1.083 2.458 2.42 2.458M9.738 10.045c-1.302 0-2.359 1.072-2.359 2.394 0 1.323 1.057 2.395 2.36 2.395 1.302 0 2.358-1.072 2.358-2.395 0-1.322-1.056-2.394-2.359-2.394M9.407 6.669c0-.949-.758-1.718-1.692-1.718-.934 0-1.692.77-1.692 1.718 0 .949.758 1.717 1.692 1.717.934 0 1.692-.768 1.692-1.717M3.858 8.89c-.745 0-1.349.613-1.349 1.37 0 .756.604 1.37 1.35 1.37.745 0 1.349-.614 1.349-1.37 0-.757-.604-1.37-1.35-1.37M1.35 4.963c-.746 0-1.35.613-1.35 1.37 0 .756.604 1.37 1.35 1.37.745 0 1.348-.614 1.348-1.37 0-.757-.603-1.37-1.349-1.37" transform="translate(-918 -328) translate(918 328) translate(0 7)" />
                    </g>
                  </g>
                </g>
              </g>
            </svg></div>
          <span className="logintext">Log In</span>
          <span className="logindetailtext">Please enter your login details below</span>
          <form className="formalign-tab" noValidate autoComplete="off" onSubmit={this.handleSubmit.bind(this)}>
            <TextField 
              className="usernametextfield"
              type="text"
              name="username"
              required
              value={this.state.username}
              onChange={this.onChange.bind(this)}
              variant="outlined"
              label="username"
              error={this.state.enableError}
              helperText={this.state.enableError ? "user not found" : ""}
              inputProps={{
                className: "removepaddingfromtextfield"
              }}
            />
            <TextField className="passwordtextfield"
              name="password"
              label="Password"
              required
              variant="outlined"
              helperText={this.state.enableError ? "Incorrect password" : ""}
              type={this.state.showPassword ? 'text' : 'password'}
              value={this.state.password}
              error={this.state.enableError}
              onChange={this.onChange.bind(this)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" >
                    <div
                      className="pointer"
                      onClick={this.handleClickShowPassword}
                    >
                      {this.state.showPassword ? "hide" : "show"}
                    </div>
                  </InputAdornment>
                )
              }} />
            <div className="btnmaindiv">
              <button className="submitbtn" type="submit">{this.state.loading ? <div className="dot-flashing"></div> : <span className="text">submit</span>}</button>
            </div>
          </form>
        </div>
        <div className="RightImagemaindiv">
          <RightImage />
        </div>
        {this.state.snackbar &&
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            TransitionComponent={this.state.Transition}
            ContentProps={{
              className: "messagebar"
            }}
            open={this.state.snackbar}
            autoHideDuration={4000}
            onClose={this.handleClose.bind(this)}
            message="Well done! you are successfully login"
            action={
              <React.Fragment>
                <svg className="pointer" onClick={this.handleClose.bind(this)} width="24" height="24" viewBox="0 0 24 24">
                  <g fill="none" fill-rule="evenodd">
                    <g>
                      <g>
                        <g>
                          <path d="M0 0L24 0 24 24 0 24z" transform="translate(-1856 -141) translate(1208 129) translate(648 12)" />
                          <path fill="#FFF" fill-rule="nonzero" d="M4.222 2.808l16.97 16.97-1.414 1.414-16.97-16.97 1.414-1.414zm-1.414 16.97l16.97-16.97 1.414 1.414-16.97 16.97-1.414-1.414z" transform="translate(-1856 -141) translate(1208 129) translate(648 12)" />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </React.Fragment>
            }
          />}
      </div>
    )
  }
}

export default LoginPage;