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
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
    typography: {
        padding: theme.spacing(2)
    }
}));

export default function SimplePopover(props) {

    let firstName = localStorage.getItem("FirstName");
    let lastName = localStorage.getItem("LastName");
    let email = localStorage.getItem("Email");

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLoginChange = () => {
        console.log(props);

        localStorage.removeItem("Token")
        localStorage.removeItem("FirstName")
        localStorage.removeItem("LastName")
        localStorage.removeItem("Email")

        props.PropsDashboard.history.push("/login")
    }
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : null;

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Tooltip title="Fundoo Account">
                    <Avatar
                        onClick={handleClick}
                    /></Tooltip>
            </div>
            <Popover
                style={{ top: "1.5%" }}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
            >
                <Typography className={classes.typography}>
                    <div className="mainprofle">
                        <div
                            style={{ justifyContent: "center", display: "flex", top: "3%" }}
                        >
                            <Badge
                                overlap="circle"
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "right"
                                }}
                                badgeContent={
                                    <CameraAltIcon
                                        style={{ backgroundColor: "white", borderRadius: "50%" }}
                                    />
                                }
                            >
                                <Avatar
                                    // alt={localStorage.getItem{"email"}}
                                    style={{ width: "77px", height: "77px" }}
                                />
                            </Badge>
                        </div>

                        <div
                            style={{ justifyContent: "center", display: "flex", top: "4%" }}
                        >
                            {/* let alt={localStorage.getItem{"email"}} */}
                            <b>{firstName} {lastName}</b>

                        </div>

                        <div
                            style={{ justifyContent: "center", display: "flex", top: "5%", color: "gray" }}
                        >
                            {/* let alt={localStorage.getItem{"email"}} */}
                            <b>{email}</b>
                        </div>
                        <div
                            style={{
                                justifyContent: "center",
                                display: "flex",
                                top: "2%",
                                padding: "2%"
                            }}
                        >
                        </div>
                        <div
                            className="profileaccount"
                            style={{
                                backgroundColor: "#e0e0e0",
                                padding: "3% ",
                                paddingBottom: "3%",
                                borderradius: "10px"
                            }}
                        >
                            Manage Your Fundoo Account
                         </div>

                        <Divider />
                        <div
                            style={{
                                justifyContent: "center",
                                display: "flex",
                                padding: "9%"
                            }}
                        >
                            <Button
                                variant="contained"
                                color="white"
                                style={{ justifyContent: "center", display: "flex" }}
                                onClick={handleLoginChange}
                            >
                                Sign out
                       </Button>
                        </div>
                        <Divider />
                        <div className="profilefooter">
                            Privacy Policy . Terms of Service
            </div>
                    </div>
                </Typography>
            </Popover>
        </div>
    );
}
