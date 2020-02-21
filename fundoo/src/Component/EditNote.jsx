import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import MiniNote from "./MiniNote";
import WholeNote from './WholeNote';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { createNote } from '../Service/Service';
import { getAllNotes } from '../Service/Service';
import NoteCard from './NoteCard';

class EditNote extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clickAway: false,
            title: '',
            description: '',
            pin: false,
            notes: null
        }
    }

    handleChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = () => {
        this.setState({
            clickAway: true
        })
    }

    sentToBackEnd = () => {
        let note = {};
        console.log("sent");

        note.title = this.state.title;
        note.description = this.state.description;
        let token = localStorage.getItem("Token");
        console.log("Note Outside");

        console.log(note, token);

        console.log("Notesssssss");

        createNote(note, token)
            .then(Response => {
                console.log("Inside Note");

                console.log(Response, "Note Created successfully!!");
                alert(`${Response.data.message}`);
                // this.props.history.push("/");
            }).catch((error) => {
                console.log("Error", error.response)
                console.log(error.response.data.message, "Note not Created");
                alert(error.response.data.message);
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

    showAllNotes = () => {

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

    componentDidMount() {
        console.log('component did mount');

        this.showAllNotes()
    }

    render() {

        return (
            <Container style={{ marginTop: '6em' }} >
                <ClickAwayListener onClickAway={this.onHandleClickaway}>
                    <div>
                        {
                            this.state.clickAway ?

                                <WholeNote
                                    title={this.state.title}
                                    description={this.state.description}
                                    pin={this.state.pin}
                                    handleChangeText={this.handleChangeText}
                                    onHandleClickaway={this.onHandleClickaway}
                                /> :
                                < MiniNote handleClick={this.handleClick} />
                        }
                    </div>
                </ClickAwayListener>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: '2em'
                }}>
                    {
                        this.state.notes !== null &&
                        (this.state.notes).map((items) => (
                            <NoteCard items={items} />
                        ))
                    }

                </div>
            </Container >
        );
    }
}

export default EditNote;