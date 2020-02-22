import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import MiniNote from "./MiniNote";
import WholeNote from './WholeNote';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { createNote } from '../Service/Service';
import { getAllArchiveNotes, updateNote } from '../Service/Service';
import NoteCard from './NoteCard';

class Archive extends Component {

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

    showAllArchiveNotes = () => {

        let token = localStorage.getItem("Token");
        console.log('show all notes');

        getAllArchiveNotes(token)

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

        this.showAllArchiveNotes()
    }

    render() {

        return (
            <Container style={{ marginTop: '6em' }} >

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

export default Archive;