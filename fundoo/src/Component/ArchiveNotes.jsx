import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import { addInArchive } from "../Service/Service";
import { Tooltip } from "@material-ui/core";
import { Redirect } from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import { Divider, IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import { ADD_ARCHIVE } from "../Redux/ActionType";
import React, { Component } from 'react';

class ArchiveNotes extends Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem("Token");
        console.log("Props in Archive", props);

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

    handleaddArchiveChange = () => {
        console.log("Archive change");

        let token = localStorage.getItem("Token");
        this.props.onSelectArchive(true);

        console.log("Archive Props---", this.props);

        addInArchive(this.props.data.id, token)
            .then(Response => {

                console.log("note is archive", Response);
                alert(`${Response.data.data}`)

            })
            .catch(err => {
                console.log("error", err);
            });
    };

    render() {
        return (
            <div className={this.props.view ? (null) : ("footerpadding")} >
                <Tooltip title=" Archive">
                    <ArchiveOutlinedIcon onClick={this.handleaddArchiveChange} />
                </Tooltip>
            </div>
        );
    }
}


export default ArchiveNotes;