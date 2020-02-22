import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { addInTrash } from "../Service/Service";
import { Tooltip } from "@material-ui/core";

import Button from '@material-ui/core/Button';

class TrashNote extends React.Component {
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

    handleTrashNotes = () => {
        let token = localStorage.getItem("Token");
        this.props.onSelectTrash(true);

        addInTrash(this.props.data.id, token)
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
                    <div onClick={this.handleTrashNotes} >Delete Note</div>
                </Tooltip>

            </div>
        );
    }
}


export default TrashNote;