import React, { Component } from "react";
import { IconButton, Drawer, createMuiTheme, List, ListItem, ListItemIcon, Divider } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { MuiThemeProvider } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import { getAllLabels } from "../Service/Service.jsx";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { label_id, drawer, openDrawer } from "../Redux/Action";
import EditLabel from './EditLabel'
import Archive from './ArchiveNotes';
import { connect } from "react-redux";
import '../CSSFile/DropDown.css'
import { getAllNotes, getAllArchiveNotes } from '../Service/Service';
import { makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paper: {
                marginTop: "70px",
                width: "23%"
            }
        }
    }
});

export class DropDown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            AnchorEl: null,
            allLable: [],
        };
    }

    handleDrawer = event => {
        this.props.openDrawer();

        const { currentTarget } = event;
        this.setState({
            AnchorEl: currentTarget,
            open: !this.state.open
        });
    };

    handleArchive = event => {


    };

    render() {
        let open = this.state.open;
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <IconButton onClick={this.handleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <div style={{ textAlign: "initial" }}>
                        <Drawer variant="persistent" anchor="left" open={open}>
                            <List>
                                <ListItem className="over"
                                    onClick={() => this.props.history.push('/dashboard/note')}
                                    button
                                    key="Notes"

                                >
                                    <ListItemIcon>
                                        <EmojiObjectsOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Notes" />
                                </ListItem>

                                <ListItem className="over"
                                    button
                                    key="Reminders"
                                    className="over"
                                >
                                    <ListItemIcon>
                                        <AddAlertOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Reminder" />
                                </ListItem>
                            </List>

                            <Divider></Divider>

                            <Divider></Divider>

                            <br />
                            <div
                                className="label"
                            >
                                LABELS
                           </div>
                            <List>
                                {/* {this.state.allLable.map(label => ( */}
                                <ListItem
                                    // onClick={() => {
                                    //     console.log('labelid--->' + label.id);
                                    //     this.props.label_id(label.id)
                                    //     this.props.handleLabelClick(label)

                                    // }}
                                    button
                                    key="label"
                                    className="over"
                                >
                                    <ListItemIcon>
                                        <LabelOutlinedIcon />
                                    </ListItemIcon>
                                    {/* <div > {label.lable_title}</div> */}
                                </ListItem>

                                <ListItem className="over">
                                    <EditOutlinedIcon />
                                    {/* <div style={{ paddingLeft: "31px" }}>
                                        {/* <EditLabel refresh={this.getAllLabels} /> */}

                                    {/* </div> */}
                                    {/* <ListItemText primary="Edit Label" /> */}
                                    <EditLabel />
                                </ListItem>
                            </List>
                            <Divider></Divider>
                            <Divider></Divider>
                            <List   >
                                <ListItem
                                    // onClick={this.handleArchive}
                                    button
                                    key="Archive"
                                    className="over"
                                    onClick={() => this.props.history.push('/dashboard/archive')}
                                >
                                    <ListItemIcon>
                                        <ArchiveOutlinedIcon
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary="Archive" />
                                </ListItem>
                                <ListItem className="over"
                                    button
                                    key="Trash"
                                    onClick={() => this.props.history.push('/dashboard/trash')}
                                >
                                    <ListItemIcon>
                                        <DeleteOutlineOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Trash" />
                                </ListItem>
                            </List>
                        </Drawer>
                    </div>
                </MuiThemeProvider>
            </div >
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        openDrawer: () => dispatch(openDrawer()),
    };
};
export default connect(null, mapDispatchToProps)(DropDown);
