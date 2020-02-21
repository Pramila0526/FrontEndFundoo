import React from 'react';
import { IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { Menu, CreateOutlined } from '@material-ui/icons';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineSharpIcon from '@material-ui/icons/DeleteOutlineSharp';
import { makeStyles } from '@material-ui/core/styles';
import { connect, useSelector, useDispatch } from 'react-redux'
import { toggleDrawer } from '../Redux/Action'
// import "../Component/Css/PersistantDrawer.css";


const useStyle = makeStyles({
    list: {
        width: 260
    },
    drawer: {
        '& .MuiDrawer-paper': {
            top: '3.8em'
        }


    }
})

const DrawerMenu = (props) => {
    const classes = useStyle()

    const [open, setOpen] = React.useState(false) //const [open (state),setOpen (setState)]=destructing


    /*   // method for declaring states for function Component
        // const [state, setState] = React.useState({
        //     fistName: '',
        //     lastName: ''
        // })

        // setState({fistName: 'Aditya'})

    */


    const handleDrawer = () => {
        setOpen(!open)
    }

    const sideList = (
        <div
            className={classes.list}
            role="presentation"

        >
            <List>
                {['Inbox', 'Starred'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <EmojiObjectsOutlinedIcon /> : <NotificationsNoneIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Inbox'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon><CreateOutlined /></ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <ArchiveOutlinedIcon /> : <DeleteOutlineSharpIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
    return (
        <>
            <IconButton
                onClick={() => {
                    handleDrawer()
                    console.log('open', open);
                }}>
                <Menu />
            </IconButton>

            <Drawer
                open={open}
                variant='persistent'
                className={classes.drawer}
            >
                {sideList}
            </Drawer>
        </>
    );
};

export default DrawerMenu