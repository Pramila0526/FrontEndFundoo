import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import { addInTrash } from "../Service/Service";
import { Tooltip } from "@material-ui/core";
import { Redirect } from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import { Divider, IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import { ADD_ARCHIVE } from "../Redux/ActionType";
import React, { Component } from 'react';

class TrashNotes extends Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem("Token");
        console.log("Props in constructor", props);

    }

    state = {
        anchorEl: null
    };

    handlePopoverOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose1 = () => {
        this.setState({
            opensnackbar: false
        });
    };


    handlePopoverClose = () => {
        this.setState({ anchorEl: null });
    };

    handleAddTrashChange = () => {
        let token = localStorage.getItem("Token");
        this.props.onSelectTrash(true);
        // console.log(".....id", props);

        addInTrash(this.props.data.data.id, token)
            .then(Response => {

                console.log("Note is trash", Response);
                alert("Note Successfully Added to Trash!!")

            })
            .catch(err => {
                console.log("error", err);
            });
    };

    render() {
        // console.log("Trash notes", this.props.data.data.id);

        return (
            <div className={this.props.view ? (null) : ("footerpadding")} >
                <Tooltip title=" Archive">
                    <div onClick={this.handleAddTrashChange} >Trash Note</div>
                </Tooltip>
            </div>
        );
    }
}


export default TrashNotes;