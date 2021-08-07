import React from 'react'
import { Grid, Box } from '@material-ui/core'; 
import './userpage.css';
import Topbar from '../../../components/topbar/Topbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import Footer from '../../../components/footerbar/Footer';

const Userpage = () => {
    const data = JSON.stringify(localStorage.getItem('data'))
    let comments = JSON.parse(localStorage.getItem('user-info'));
       console.log(comments)
    return (
        <div className="top">
             <Topbar />
             <Sidebar />
        <Grid container className="container">
            
            <Grid item xs={12} lg={6} className="grid1">
            <img src={comments.user.avatar} />
            <h3>id: &nbsp; <h4>{comments.user.id}</h4></h3>
                <h3>name:<h4> &nbsp;{comments.user.name}</h4></h3>
                <h3>email: &nbsp;<h4>{comments.user.email}</h4></h3>
               
           </Grid>
            </Grid>
            <Footer />
            </div>
    )
}

export default Userpage
