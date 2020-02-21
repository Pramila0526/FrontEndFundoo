import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
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

class ArchiveNotes extends React.Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem("Token");
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
        let token = localStorage.getItem("Token");
        this.props.onSelectArchive(true);

        addInArchive(this.props.data.id, token)
            .then(Response => {

                console.log("note is archive", Response);

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

                {/* <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.opensnackbar}
                    autoHideDuration={6000}
                    onClose={this.handleClose1}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Note Archived</span>}
                    action={[
                        <Button key="undo" color="secondary" size="small" onClick={this.handleClose1}>
                            UNDO
                      </Button>,
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={this.handleClose1}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                /> */}
            </div>
        );
    }
}


export default ArchiveNotes;