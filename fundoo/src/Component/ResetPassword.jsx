import React, { Component } from "react";
import "../CSSFile/ResetPassword.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { setNewPassword } from "../Service/Service.jsx";

export class ResetPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showPassword: false,
            password: "",
            confirmpassword: "",
            isvalid: true,
            errors: {},
        };
    }

    handleChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => console.log(this.state, '------>name'))
    }

    validateForm = () => {
        let errors = {}
        let formIsValid = true
        if (!RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})").test(this.state.password)) {
            errors['password'] = '*Enter the valid password'
            formIsValid = false
        }
        if (!this.state.password) {
            errors['password'] = '*Enter the Password'
            formIsValid = false
        }
        if (!this.state.confirmpassword) {
            errors['confirmpassword'] = '*Confirm Your Password'
            formIsValid = false
        }
        if (this.state.password !== this.state.confirmpassword) {
            errors['confirmpassword'] = '*Password doesn\'t match'
            formIsValid = false
        }
        this.setState({
            errors: errors
        })
        return formIsValid
    }

    handleresetpasswordChange = () => {
        if (this.validateForm()) {

            let token = localStorage.getItem("Token");
            console.log(token, "....token...");

            let array = {};

            array.password = this.state.password;
            array.confirmpassword = this.state.confirmpassword;

            setNewPassword(token, array).then(Response => {

                console.log("Password Successfully Changed!!");
                alert(`${Response.data.message}`);

            }).catch(err => {
                // console.log(response.data);
                // console.log("Failed To Change the Password");
                console.log("Error", err.response)
                console.log("Failed To Change the Password");
                alert(`${err.data}`);
            })
        }
    };


    render() {
        return (
            <div className="backgroundreset">
                <div className="wholeresetpage">
                    <div className="resetPassword">
                        <div className="fundoo1">
                            <span style={{ color: "blue" }}>F</span>
                            <span style={{ color: "red" }}>u</span>
                            <span style={{ color: "orange" }}>n</span>
                            <span style={{ color: "blue" }}>d</span>
                            <span style={{ color: "green" }}>o</span>
                            <span style={{ color: "red" }}>o</span>
                        </div>
                        <div className="resetPasswordtitle">
                            <h2>
                                <b>Reset your password</b>
                            </h2>
                        </div>

                        <div className="resetpassword1">
                            <TextField
                                size="small"
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
                        </div>

                        <div className="password2">
                            <TextField
                                size="small"
                                margin="dense"
                                name="confirmpassword"
                                id="outlined-adornment-password"
                                variant="outlined"
                                type={this.state.showPassword ? "text" : "password"}
                                label=" confirm "
                                value={this.state.confirmPassword}
                                onChange={this.handleChangeText}
                                error={this.state.errors.confirmpassword}
                                helperText={this.state.errors.confirmpassword}
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
                        </div>
                        <br />
                        <div className="Resetbutton">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.handleresetpasswordChange}
                            >
                                Submit
          </Button>
                            <Button variant="contained" color="primary">
                                Cancel
          </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResetPassword;
