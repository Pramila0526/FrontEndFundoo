import React, { Component } from 'react';
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import ClearIcon from "@material-ui/icons/Clear";
import TextField from "@material-ui/core/TextField";
import CheckIcon from "@material-ui/icons/Check";
import { Divider } from "@material-ui/core";
import { Tooltip } from "@material-ui/core";
import { createLabel, getAllLabels, editLabel } from "../Service/Service";
import EditShowOrDelete from "./EditShowOrDelete";
import ShowEditLabel from "./ShowEditLabel";

class EditLabel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allLable: [],
            clickAway: false,
            name: '',
            labels: null
        }
    }

    handleChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    sentToBackEnd = () => {
        let label = {};
        console.log("sent");

        label.name = this.state.name;
        let token = localStorage.getItem("Token");
        console.log("Label Outside");

        console.log(label, token);

        console.log("Labels");

        createLabel(label, token)
            .then(Response => {
                console.log("Inside Label");

                console.log(Response, "Label Created successfully!!");
                alert(`${Response.data.message}`);
                // this.props.history.push("/");
            }).catch((error) => {
                console.log("Error", error.response)
                console.log(error.response.data.message, "Label not Created");
                alert(error);
            });
    }

    onHandleClickaway = () => {
        this.setState({
            clickAway: false

        });
        console.log('click away');
        if (this.state.title !== '' || this.state.description !== '') {
            this.sentToBackEnd()
            this.setState({
                title: '',
                description: '',
                pin: false,
            })
        }

    }

    showAllLabels = () => {

        let token = localStorage.getItem("Token");
        console.log('show all labels');
        getAllLabels(token)
            .then(Response => {
                let array = [];

                console.log("savg");

                console.log('res:----- ', Response);
                console.log('res data:----- ', Response.data.data);
                this.setState({
                    notes: (Response.data.data).reverse()
                })
            })
    }

    componentDidMount() {
        console.log('component did mount');

        this.showAllLabels()
    }

    render() {
        return (
            <div>
                <div variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Edit labels
        </div>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <Typography>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                                flexDirection: "column",
                                width: "120%"
                            }}
                        >
                            <div style={{ padding: "5%" }}>
                                <b>Edit Labels</b>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    flexDirection: "row"
                                }}
                            >
                                <Tooltip title="Cancel">
                                    <ClearIcon style={{ paddingTop: "10px" }} />
                                </Tooltip>
                                <TextField
                                    id="standard-dense"
                                    placeholder="Create new label"
                                    margin="dense"
                                    style={{ paddingLeft: "5%" }}
                                    onChange={this.Handlelabeldata}
                                />
                                <Tooltip title="Create label">
                                    <CheckIcon
                                        style={{ paddingLeft: "5%", paddingTop: "10px" }}
                                        onClick={this.handleClickCreatelabel}
                                    />
                                </Tooltip>
                            </div>
                            <div>
                                {this.state.allLable.map(label => (
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-around",
                                            paddingTop: "5%"
                                        }}
                                    >
                                        <span>
                                            <EditShowOrDelete deleteidprops={label.id} refresh={this.getAllLabel} />
                                        </span>
                                        <span onClick={() => this.handleeditdata(label.id)}>
                                            <TextField
                                                id="standard-full-width"
                                                style={{ margin: 8 }}
                                                defaultValue={label.lable_title}
                                                multiline
                                                fullWidth
                                                margin="normal"
                                                InputProps={{
                                                    disableUnderline: true
                                                }}
                                                onChange={this.handleeditlabel}
                                            />
                                        </span>
                                        <ShowEditLabel></ShowEditLabel>                                    </div>

                                ))}
                            </div>
                            <Divider />
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    paddingTop: "5%",
                                    paddingBottom: "5%"
                                }}
                                onClick={this.handleClose}
                            >
                                Done
              </div>
                        </div>
                    </Typography>
                </Dialog>
            </div>
        );
    }
}

export default EditLabel;