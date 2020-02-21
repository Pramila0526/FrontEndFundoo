import React, { Component } from "react";
import "../CSSFile/Register.css";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import fundoo from "../Image/account.svg";
import { userRegistration } from "../Service/Service.jsx";

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPassword: false,
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            confirmPassword: "",
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
        if (!this.state.firstName) {
            errors['firstName'] = '*Enter the First Name'
            formIsValid = false
        }
        if (!this.state.lastName) {
            errors['lastName'] = '*Enter the Last Name'
            formIsValid = false
        }
        if (!RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\. [A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$").test(this.state.email)) {
            errors['email'] = '*Enter valid Email id'
        }
        if (!this.state.email) {
            errors['email'] = '*Enter the Email Id'
            formIsValid = false
        }
        if (!RegExp("(0/91)?[7-9][0-9]{9}").test(this.state.phoneNumber)) {
            errors['phoneNumber'] = '*Enter valid Phone Number'
        }
        if (!this.state.phoneNumber) {
            errors['phoneNumber'] = '*Enter your Phone Number'
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
        if (!this.state.confirmPassword) {
            errors['confirmPassword'] = '*Enter the confirm password'
            formIsValid = false
        }
        if (this.state.password !== this.state.confirmPassword) {
            errors['confirmPassword'] = '*Password doesn\'t match'
            formIsValid = false
        }

        this.setState({
            errors: errors
        })
        return formIsValid
    }

    submitUserSignUpForm = () => {
        if (this.validateForm()) {
            let user = {};
            user.firstname = this.state.firstName;
            user.lastname = this.state.lastName;
            user.email = this.state.email;
            user.password = this.state.password;
            user.phonenumber = this.state.phoneNumber;

            console.log(user);

            userRegistration(user)
                .then(Response => {
                    console.log(Response, "User Registered successfully!!");
                    alert(`${Response.data.message}`);
                    // this.props.history.push("/");
                }).catch((error) => {
                    console.log("Error", error.response)
                    console.log(error.response.data.message, "User Registration failed");
                    alert(error.response.data.message);
                });
        }
    }

    render() {
        return (
            <div className="backgroundregister">
                <div className="wholeregisterpage">
                    <div className="userregister">
                        <div className="userfundoo">
                            <span style={{ color: "blue" }}>F</span>
                            <span style={{ color: "red" }}>u</span>
                            <span style={{ color: "orange" }}>n</span>
                            <span style={{ color: "blue" }}>d</span>
                            <span style={{ color: "green" }}>o</span>
                            <span style={{ color: "red" }}>o</span>
                        </div>
                        <div className="usersignUp">Create your Fundoo Account</div>
                        <div className="main" style={{ flexDirection: 'row' }}>
                            <div>
                                <div className="userfirstlastname">
                                    <TextField
                                        margin="dense"
                                        size="small"
                                        name="firstName"
                                        id="outlined"
                                        label="First Name"
                                        variant="outlined"
                                        style={{ width: "48%" }}
                                        onChange={this.handleChangeText}
                                        error={this.state.errors.firstName}
                                        helperText={this.state.errors.firstName}

                                    />

                                    <TextField
                                        margin="dense"
                                        size="small"
                                        name="lastName"
                                        id="outlined"
                                        label="Last Name"
                                        variant="outlined"
                                        style={{ width: "48%" }}
                                        onChange={this.handleChangeText}
                                        error={this.state.errors.lastName}
                                        helperText={this.state.errors.lastName}
                                    />
                                </div>
                                <br></br>
                                <div className="useremail1">
                                    <TextField
                                        margin="dense"
                                        size="small"
                                        name="email"
                                        id="outlined"
                                        label="Email"
                                        variant="outlined"
                                        onChange={this.handleChangeText}
                                        error={this.state.errors.email}
                                        helperText={this.state.errors.email}
                                    />
                                    <p className="passwordline">You can use letters,numbers and dots(.)</p>
                                    <br></br>
                                    <br></br>
                                </div>
                                <div className="phonenumber">
                                    <TextField
                                        margin="dense"
                                        size="small"
                                        className="phoneNumber"
                                        name="phoneNumber"
                                        id="outlined"
                                        label="Phone Number"
                                        variant="outlined"
                                        onChange={this.handleChangeText}
                                        error={this.state.errors.phoneNumber}
                                        helperText={this.state.errors.phoneNumber}
                                    />
                                    <p className="passwordline">Do not add 0 in front</p>
                                    <br />
                                </div>

                                <br></br>
                                <div className="userpassword">
                                    <TextField
                                        size="small"
                                        id="outlined-adornment-password"
                                        variant="outlined"
                                        name="password"
                                        type={this.state.showPassword ? "text" : "password"}
                                        label="password"
                                        margin="dense"
                                        style={{ width: "48%" }}
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
                                    <br></br>

                                    <TextField
                                        size="small"
                                        margin="dense"
                                        name="confirmPassword"
                                        id="outlined-adornment-password"
                                        variant="outlined"
                                        type={this.state.showPassword ? "text" : "password"}
                                        label=" confirm "
                                        value={this.state.confirmPassword}
                                        onChange={this.handleChangeText}
                                        error={this.state.errors.confirmPassword}
                                        helperText={this.state.errors.confirmPassword}
                                        style={{ width: "48%" }}
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
                                <p className="passwordline">Use 8 or more characters with atleast 1 Capital Letter, 1 Small Letter & 1 Special character</p>
                                <br></br>
                                <br></br>
                                <br></br>
                                <div className="userbutton">
                                    <Button
                                        margin="dense"
                                        size="small"
                                        variant="contained"
                                        color="primary"
                                        onClick={this.submitUserSignUpForm}
                                    >
                                        Submit
                                    </Button>

                                    <Button
                                        margin="dense"
                                        size="small"
                                        variant="contained"
                                        color="primary"
                                        onClick={() => this.props.history.push('/login')}
                                    >
                                        Already Registered?
                            </Button>
                                </div>
                            </div>

                            <div className="img1">
                                <img src={fundoo} width="80%" height="60%" alt="hello"></img>
                                <p className="sloganline" >
                                    One account.All of Fundoo working for you
                       </p>
                            </div>
                        </div>
                    </div>
                </div></div>
        );
    }
}

export default Register;


