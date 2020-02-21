import React from 'react';
import { Typography, Dialog, TextField } from "@material-ui/core";
import NoteDialog from './NoteDialog'
const NoteCard = (props) => {

    return (
        <div style={{ borderRadius: 10, width: 288, height: 180, display: 'flex', flexDirection: 'column', border: 'solid rgba(128, 128, 128, 0.21)', margin: 5, padding: 7 }}>
            {/* <Typography> {props.items.title} </Typography>
            <Typography>{props.items.description}</Typography> */}
            <NoteDialog id={props.items.id}
                title={props.items.title}
                description={props.items.description} />
            {/* <Dialog>Hello</Dialog> */}
        </div>
    );
};

export default NoteCard;