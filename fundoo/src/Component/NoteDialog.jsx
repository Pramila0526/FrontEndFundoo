import React, { Component } from 'react';
import '../CSSFile/Note.css';
import { updateNote, getAllNotes } from '../Service/Service'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ImageIcon from '@material-ui/icons/Image';
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LinkIcon from '@material-ui/icons/Link';
import InputBase from '@material-ui/core/InputBase'
import UndoTwoToneIcon from '@material-ui/icons/UndoTwoTone';
import RedoTwoToneIcon from '@material-ui/icons/RedoTwoTone';
import Paper from '@material-ui/core/Paper';
import Images from '../Image/images.png'
import Tooltip from '@material-ui/core/Tooltip';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import ArchiveNotes from './ArchiveNotes'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import ListDropDown from './ListDropDown'

// const useStyles = makeStyles(theme => ({
//     popover: {
//         pointerEvents: 'none',
//     },
//     paper: {
//         padding: theme.spacing(1),
//     },
// }));

export default function NoteDialog(data) {
    console.log('title=>', data.id);
    // const classes = useStyles();
    // const [anchorEl, setAnchorEl] = React.useState(null);

    // const handlePopoverOpen = event => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handlePopoverClose = () => {
    //     setAnchorEl(null);
    // };

    const noteArray = '';

    const [open, setOpen] = React.useState(false);

    const [title, description] = '';

    const [archive, setArchive] = React.useState(false);

    const [trash, unTrash] = React.useState(false);

    const handleArchive = () => {
        setArchive(!archive)
    }

    const handleTrash = () => {
        unTrash(!trash)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEditClose = () => {
        setOpen(false);
        let updateNote = {}

        console.log(title)
        console.log(description)

        updateNote.title = title;
        updateNote.description = description;

        let token = localStorage.getItem("Token");

        let noteId = noteArray.id;

        updateNote(noteId, updateNote, token)
            .then(Response => {
                console.log('res:----- ', Response);
                console.log('res data:----- ', Response.data.data);
                showAllNotes();
                alert("Note Updated Successfully!!");
            }).catch(error => {
                console.log("Error", error.response)
                console.log(error.response.message, "Note Not Updated");
                alert("Note Not Updated")
            })
    }

    const showAllNotes = () => {

        let token = localStorage.getItem("Token");
        console.log('show all notes');

        getAllNotes(token)
            .then(Response => {
                console.log("savg");
                console.log('res:----- ', Response);
                console.log('res data:----- ', Response.data.data);
                this.setState({
                    notes: (Response.data.data).reverse()
                })
            })
    }


    // const handleEditNote = () => {
    //     let note = {};
    //     note.title = title;
    //     note.description = description;

    //     let token = localStorage.getItem("Token");
    //     console.log("Editing outside");

    //     // let id = useParams.getItem("id");

    //     updateNote(note, token)
    //         .then(Response => {
    //             console.log('res:----- ', Response);
    //             console.log('res data:----- ', Response.data.data);
    //             alert("Note Updated Successfully!!")
    //         }).catch(error => {
    //             console.log("Error", error.response)
    //             console.log(error.response.message, "Note Not Updated");
    //             alert("Note Not Updated")
    //         })
    // }
    return (
        <div>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open alert dialog
             </Button> */}
            <div >
                {/* <Typography
                    aria-owns={open1 ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                > */}

                <Typography onClick={handleClickOpen}> {data.title}</Typography>

                <Typography onClick={handleClickOpen}> {data.description}</Typography>

                {/* </Typography> */}
                {/* <Popover
                    id="mouse-over-popover"
                    className={classes.popover}
                    classes={{
                        paper: classes.paper,
                    }}
                    open={open1}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    // transformOrigin={{
                    //     vertical: 'top',
                    //     horizontal: 'left',
                    // }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                > */}

                <div className="iconsDialog" >

                    <IconButton aria-label="Remind me">
                        <Tooltip title="Reminde me">
                            <AddAlertIcon />
                        </Tooltip>
                    </IconButton>

                    <IconButton aria-label="Collaborator">
                        <Tooltip title="Collaborator">
                            <PersonAddIcon />
                        </Tooltip>
                    </IconButton>

                    <IconButton aria-label="Change color">
                        <Tooltip title="Change color">
                            <ColorLensIcon />
                        </Tooltip>
                    </IconButton>

                    <IconButton aria-label="Add image">
                        <Tooltip title="Add image">
                            <ImageIcon />
                        </Tooltip>
                    </IconButton>

                    <IconButton aria-label="Archive note">
                        <Tooltip title="Archive">
                            <ArchiveNotes onSelectArchive={handleArchive} data={data} />
                        </Tooltip>
                    </IconButton>

                    {/* 
                    <IconButton aria-label="Archive note">
                        <Tooltip title="Archive">
                            <DeleteOutlineOutlinedIcon onSelectTrash={handleTrash} data={data} />
                        </Tooltip>
                    </IconButton> */}

                    <IconButton aria-label="More">
                        <Tooltip title="More">
                            <ListDropDown />
                        </Tooltip>
                    </IconButton>

                </div>
                {/* </Popover> */}

            </div>

            <Dialog
                className="dialogOpen"
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <InputBase defaultValue={data.title} />
                </DialogContent>

                <DialogContent>
                    <InputBase defaultValue={data.description} />
                </DialogContent>

                <DialogActions>

                    <IconButton aria-label="Remind me">
                        <Tooltip title="Reminde me">
                            <AddAlertIcon />
                        </Tooltip>
                    </IconButton>

                    <IconButton aria-label="Collaborator">
                        <Tooltip title="Collaborator">
                            <PersonAddIcon />
                        </Tooltip>
                    </IconButton>

                    <IconButton aria-label="Change color">
                        <Tooltip title="Change color">
                            <ColorLensIcon />
                        </Tooltip>
                    </IconButton>

                    <IconButton aria-label="Add image">
                        <Tooltip title="Add image">
                            <ImageIcon />
                        </Tooltip>
                    </IconButton>

                    <IconButton aria-label="Archive note">
                        <Tooltip title="Archive">
                            <ArchiveNotes onSelectArchive={handleArchive} data={data} />
                        </Tooltip>
                    </IconButton>


                    <IconButton aria-label="More">
                        <Tooltip title="More">
                            <ListDropDown />
                        </Tooltip>
                    </IconButton>

                    <IconButton aria-label="Undo">
                        <Tooltip title="Undo">
                            <UndoTwoToneIcon />
                        </Tooltip>
                    </IconButton>

                    <IconButton aria-label="Redo">
                        <Tooltip title="Redo">
                            <RedoTwoToneIcon />
                        </Tooltip>
                    </IconButton>

                    <Tooltip title="Close">
                        <Button className="closeButton"
                            margin="dense"
                            size="small"
                            color="primary"
                            onClick={handleEditClose}
                        >Close</Button></Tooltip>
                </DialogActions>
            </Dialog>
        </div >
    );
}
