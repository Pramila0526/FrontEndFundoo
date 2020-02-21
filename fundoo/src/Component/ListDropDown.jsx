import React from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from "@material-ui/core";
import {
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


export default function SimplePopover(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);


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
            <div style={{ display: "flex", flexDirection: "row" }}>
                <MoreVertIcon
                    onClick={handleClick}
                />

            </div>
            <div>
                <Popover
                    style={{ top: "4%" }}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <div className="moreVertIcon">
                        <Button >
                            <AddLabel></AddLabel>
                        </Button>
                        <br></br>
                        <Button >Add Drawing</Button>
                        <Button >Show </Button>
                    </div>

                </Popover>

            </div>
        </div>
    );
}
