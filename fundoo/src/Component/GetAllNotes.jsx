import React, { Component } from 'react';
import { getAllNotes } from '../Service/Service';
import WholeNote from './WholeNote';
import Note from './Note';

class GetAllNotes extends Component {
    constructor(props) {
        super(props);
        // let token = localStorage.getItem("Token");
        // let LoggedIn = true;
        // if (token == null) {
        //     LoggedIn = false;
        // }

        this.state = {
            allNote: [],
            title: "",
            description: "",

        };
    }

    showAllNotes = () => {

        let token = localStorage.getItem("Token");

        getAllNotes(token)
            .then(Response => {
                let array = [];
                console.log(Response.data);
                
                Response.data.forEach(element => {
                    this.setState({
                        allNote: array
                    }).catch(err => {
                        console.log(err);

                    })
                })
            })
    }
    componentDidMount=()=> {
        this.showAllNotes
    }
    

    render() {
        return (
            <div>
                <Note refresh={this.showAllNotes} />
            </div >
        );
    }
}

export default GetAllNotes;