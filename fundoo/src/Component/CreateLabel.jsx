import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import MiniNote from "./MiniNote";
import WholeNote from './WholeNote';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { createNote } from '../Service/Service';
import { getAllNotes } from '../Service/Service';
import NoteCard from './NoteCard';

class Label extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clickAway: false,
            name: '',
            labels: null
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
        let label = {};
        console.log("sent");

        label.name = this.state.name;
        let token = localStorage.getItem("Token");
        console.log("Note Outside");

        console.log(label, token);

        console.log("Notesssssss");

        createLabel(label, token)
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

    showAllLabels = () => {

        let token = localStorage.getItem("Token");
        console.log('show all notes');

        getAllLabels(token)

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
                <div>
                    <Typography
                        onClick={this.handleClick}
                        name={this.state.name}
                    />
                </div>

            </Container >
        );
    }
}

export default Label;