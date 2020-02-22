import React, { Component } from "react";
import "../CSSFile/Dashboard.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import keeplogo from "../Image/logo.svg";
import keep1 from "../Image/keep1.svg";
import gridview from "../Image/grid.svg";
import SearchIcon from "@material-ui/icons/Search";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined";
import Profile from "../Component/Profile";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import MyDrawer from "./DropDown";
import TextField from "@material-ui/core/TextField";
import { searchNote } from "../Service/Service.jsx";
import { Tooltip } from "@material-ui/core";
import { connect } from "react-redux";
import KeepLogo from '../Image/KeepLogo.png'
import Note from "./Note"
import { toggleView, label_id } from "../Redux/Action";

const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paper: {
                top: "13%"
            }
        },

        PersistentDrawerLeft: {
            drawer: {
                width: "100%"
            }
        }
    }
});


class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {

            userprofile: false,
            allNote: [],
            SearchData: "",
            list: false
        };
    }

    // sliderClass = !this.props.MyDrawer ? 'mainContainer' : 'sideContainer';

    // static getDerivedStateFromProps(props) {
    //     if (!window.matchMedia("(max=width:1000px)")).matches{
    //         return {
    //             ...state,
    //             sliderClass = !this.props.MyDrawer ? 'mainContainer' : 'sideContainer'
    //         }
    //     }
    //   else {
    //         return {
    //             ...state
    //         }
    //     }
    // }

    handleShowProfile = () => {
        this.setState({ userprofle: true });
    };

    handleShowAllNotes = () => {
        this.props.history.push({
            pathname: "/dashboard/note",
            state: { allNote: this.state.allNote }
        });
    };

    handleShowAllArchiveNotes = () => {
        this.props.history.push("/dashboard/note/archive");
    };

    render() {
        return (
            // <div className="backgrounddashboard">
            <div className="toolbarbackground">
                <div className="mainDashboard">
                    <MuiThemeProvider theme={theme}>
                        <AppBar position="fixed">
                            <Toolbar className="toolbar" style={{ backgroundColor: "white" }}>
                                <div className="keepAndLogo">
                                    <div>
                                        <MyDrawer
                                            // handleLabelclick={this.showlabelnotehandle}
                                            showNoteclick={this.handleShowAllNotes}
                                            // trashclick={this.handleAllTrashnote}
                                            // reminderClick={this.handleAllReminderNote}
                                            archiveclick={this.handleShowAllArchiveNote}
                                            {...this.props}
                                        />
                                    </div>

                                    <div>
                                        <img src={KeepLogo} alt="Kepp Logo" />
                                        {/* <image src={KeepLogo} /> */}
                                    </div>

                                    <Typography
                                        className="keep"
                                        variant="h6"
                                        color="inherit"
                                        noWrap
                                    >
                                        <b style={{ marginLeft: "2%" }}>Fundoo</b>
                                    </Typography>
                                </div>

                                <div className="dashboardSearch">
                                    <div className="dashboardsearchicon">
                                        <SearchIcon onClick={this.getAllSearchNotes} />
                                    </div>
                                    <div style={{ width: "90%", height: "2vh" }}>
                                        <TextField
                                            color="white"
                                            placeholder="Search…"
                                            onChange={this.getAllSearchNotes}
                                            id="standard-full-width"
                                            multiline
                                            fullWidth
                                            margin="normal"
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="logokeep1">
                                    <Tooltip title="Refresh">
                                        <RefreshOutlinedIcon />
                                    </Tooltip>
                                    {this.props.view !== true ? (
                                        <Tooltip title="Grid view ">
                                            <img
                                                src={gridview}
                                                width="22px"
                                                height="22px"
                                                onClick={() => this.props.toggleView()}
                                            ></img>
                                        </Tooltip>
                                    ) : (
                                            <Tooltip title="Grid view ">
                                                <img
                                                    src={keep1}
                                                    width="22px"
                                                    height="22px"
                                                    onClick={() => this.props.toggleView()}
                                                ></img>
                                            </Tooltip>
                                        )}
                                    <Tooltip title="Settings">
                                        <SettingsOutlinedIcon />
                                    </Tooltip>
                                </div>

                                <div>
                                    <Tooltip title="Fundoo Account">
                                        <Profile PropsDashboard={this.props} />
                                    </Tooltip>
                                </div>
                            </Toolbar>
                        </AppBar>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        view: state.view
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleView: () => dispatch(toggleView())
    };
};

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default Dashboard;

