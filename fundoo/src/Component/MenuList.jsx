import React, { Component } from 'react';
import { MenuItem, Menu, Button } from '@material-ui/core';




class MenuList extends Component {



    render() {
        return (
            <div>
                <MenuItem style={{ backgroundColor: "red" }}>
                    <Button>gjug</Button>
                    <Button>hkbg</Button>
                </MenuItem>
            </div>
        );
    }
}

export default MenuList;