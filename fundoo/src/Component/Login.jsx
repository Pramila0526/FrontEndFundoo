import React, { Component } from "react";
import "../CSSFile/Login.css";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import { userLogin } from "../Service/Service.jsx";

export class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showPassword: false,
            firstname: "",
            lastname: "",
            password: "",
            email: "",
            isValid: true,
            errors: {}
        };
        // this.Registerhandle=this.Registerhandle.bind(this);
    }

    handleChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state, '------>name'))
    }

    validateForm = () => {
        let errors = {}
        let formIsValid = true

        if (!RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\. [A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$").test(this.state.email)) {
            errors['email'] = '*Enter valid Email id'
        }
        if (!this.state.email) {
            errors['email'] = '*Enter the Email Id'
            formIsValid = false
        }
        if (!RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})").test(this.state.password)) {
            errors['password'] = '*Enter the valid password'
            formIsValid = false
        }
        if (!this.state.password) {
            errors['password'] = '*Enter the password'
            formIsValid = false
        }
        this.setState({
            errors: errors
        })
        return formIsValid
    }

    submitUserSignInForm = () => {
        if (this.validateForm()) {
            let user = {};
            user.email = this.state.email;
            user.password = this.state.password;

            userLogin(user)
                .then(Response => {
                    console.log('data', Response.data.data);

                    localStorage.setItem("FirstName", Response.data.userData.firstName)
                    localStorage.setItem("LastName", Response.data.userData.lastName)
                    localStorage.setItem("Email", Response.data.userData.email)
                    localStorage.setItem("Token", Response.data.data)

                    console.log("Res", Response)
                    alert(`Login Successfull!!`);
                    this.props.history.push("/dashboard/note");

                })
                .catch(err => {
                    console.log(Response, "User login fail");
                    alert(err);
                });
        }
    }

    render() {
        return (
            <div className="backgroundlogin">
                <div className="wholepage">
                    <div className="login">

                        <div className="fundooLogin">
                            <span style={{ color: "blue" }}>F</span>
                            <span style={{ color: "red" }}>u</span>
                            <span style={{ color: "orange" }}>n</span>
                            <span style={{ color: "blue" }}>d</span>
                            <span style={{ color: "green" }}>o</span>
                            <span style={{ color: "red" }}>o</span>
                        </div>
                        <div className="signInLogin">
                            {" "}
                            <span>Sign in</span>
                        </div>

                        <div className="usernameLogin">
                            {" "}
                            <TextField
                                margin="dense"
                                size="small"
                                name="email"
                                id="outlined-required"
                                label="username"
                                variant="outlined"
                                onChange={this.handleChangeText}
                                error={this.state.errors.email}
                                helperText={this.state.errors.email}
                            />
                        </div>
                        <br></br>
                        <div className="passwordLogin">
                            <TextField
                                style={{ width: "100%" }}
                                size="small"
                                margin="dense"
                                id="outlined-adornment-password"
                                variant="outlined"
                                name="password"
                                type={this.state.showPassword ? "text" : "password"}
                                label="password"
                                margin="dense"
                                onChange={this.handleChangeText}
                                error={this.state.errors.password}
                                helperText={this.state.errors.password}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end" sytle={{ width: "1px" }}>
                                            <IconButton
                                                onClick={
                                                    () => this.setState({ showPassword: !this.state.showPassword })
                                                }
                                            >
                                                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>

                                        </InputAdornment>
                                    )
                                }}
                            />
                            <br /><br />
                        </div>
                        <div className="buttonLogin">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => this.props.history.push('/register')}
                            >
                                Register
          </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.submitUserSignInForm}
                            >
                                Login
          </Button>

                        </div>
                        <div className="Forgotpassword">
                            {" "}
                            <Button onClick={() => this.props.history.push('/forgotpassword')} style={{ textTransform: 'lowercase', color: '#0423ce' }}>Forgot Password?</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;


