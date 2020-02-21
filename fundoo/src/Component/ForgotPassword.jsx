import React, { Component } from 'react'
import '../CSSFile/ForgotPassword.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { forgotPassword } from "../Service/Service.jsx";


export class ForgotPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showPassword: false,
            email: "",
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

        if (!RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\. [A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$").test(this.state.email)) {
            errors['email'] = '*Enter valid Email id'
        }
        if (!this.state.email) {
            errors['email'] = '*Enter the Email Id'
            formIsValid = false
        }
        this.setState({
            errors: errors
        })
        return formIsValid
    }

    handleForgotForm = () => {
        if (this.validateForm()) {
            let user = {};

            user.email = this.state.email;

            console.log(user);

            forgotPassword(user)
                .then(Response => {
                    console.log(Response, "Token has been sent to your mail, Please Verify it first");
                    alert(`${Response.data.message}`);
                    this.props.history.push("/login");
                })
                .catch(err => {
                    console.log(Response, "Account Recovery Failed");
                    alert(" Email Id Doesn't Exists");
                });
        }
    }

    render() {
        return (
            <div className="background">
                <div className="forgotwholepage">

                    <div className="userForgotPassword">
                        <div className="fundooLogin">
                            <span style={{ color: "blue" }}>F</span>
                            <span style={{ color: "red" }}>u</span>
                            <span style={{ color: "orange" }}>n</span>
                            <span style={{ color: "blue" }}>d</span>
                            <span style={{ color: "green" }}>o</span>
                            <span style={{ color: "red" }}>o</span>
                        </div>
                        <div className="ForgotPasswordtitle">ForgotPassword</div>

                        <div className="emailtext">
                            <TextField id="outlined-search" margin="dense"
                                size="small"
                                label="Enter the Email id"
                                type="search"
                                variant="outlined"
                                name="email"
                                onChange={this.handleChangeText}
                                error={this.state.errors.email}
                                helperText={this.state.errors.email}
                            />
                        </div>
                        <div className="forgotbutton">
                            <Button variant="contained" color="primary" onClick={this.handleForgotForm}>
                                Submit
                    </Button>
                            <Button variant="contained" color="primary" onClick={() => this.props.history.push('/login')}>
                                Cancel
                  </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ForgotPassword
