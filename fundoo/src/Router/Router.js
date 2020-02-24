import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from '../Component/Login';
import Register from '../Component/Register';
import ForgotPassword from '../Component/ForgotPassword'
import ResetPassword from '../Component/ResetPassword'
import Dashboard from '../Component/Dashboard'
import Note from '../Component/Note';
import NoteDialog from '../Component/NoteDialog'
import EditLabel from '../Component/EditLabel'
import AddLabel from '../Component/AddLabel';
import { Redirect } from 'react-router';
import Profile from '../Component/Profile';
import Drawer from '../Component/Drawer';
import Archive from '../Component/Archive';
import Trash from '../Component/Trash';

const Router = () => {
    return (
        <BrowserRouter>
            <Route path='/login' exact component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/forgotpassword' component={ForgotPassword} />
            <Route path='/resetpassword' component={ResetPassword} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/dashboard/note' component={Note} />
            <Route path='/notedialog' component={NoteDialog} />
            <Route path='/editlabel' component={EditLabel} />
            <Route path='/dashboard/note/addlabel' component={AddLabel} />
            <Route path='/profile' component={Profile} />
            <Route path='/drawer' component={Drawer} />
            <Route path='/dashboard/archive' component={Archive} />
            <Route path='/dashboard/trash' component={Trash} />
        </BrowserRouter>
    );
};

export default Router;

