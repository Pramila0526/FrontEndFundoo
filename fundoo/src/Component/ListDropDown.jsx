import React from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from "@material-ui/core";
import {
    Menu,
    MenuItem,
    Avatar,
    TextField,
    Dialog,
    DialogContent,
    DialogContentText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import { changeProfile } from "../Service/Service";
import MoreVertIcon from '@material-ui/icons/MoreVert'
import '../CSSFile/ListDropDown.css'
import AddLabel from "./AddLabel";
import TrashNote from './TrashNote';
import NoteDialog from './NoteDialog';


export default function SimplePopover(data) {


    const [anchorEl, setAnchorEl] = React.useState(null);

    const [trash, unTrash] = React.useState(false);

    const handleTrash = () => {
        unTrash(!trash)
    }

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    // const id = open ? "simple-popover" : null;

    return (


        <div>
            <MoreVertIcon
                onClick={handleClick}
            />
            <Menu
                id="simple-menu"
                style={{ top: "6%" }}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem ><TrashNote onSelectTrash={handleTrash} data={data} /></MenuItem>
                <MenuItem ><AddLabel></AddLabel></MenuItem>
                <MenuItem >Add Drawing</MenuItem>
                <MenuItem >Show Checkboxes</MenuItem>
            </Menu></div>
    );
}
