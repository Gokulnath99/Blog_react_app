import React from 'react';
import { useSelector } from 'react-redux';
import Blogpage from './Pages/Blogpage';
import Navbar from './Components/Navbar/Navbar';
import { selectSignedIn } from './features/userSlice';
import Footer from './Components/Footer/Footer';
import Grid from '@material-ui/core/Grid';
import SignInpage from './Pages/SignInpage'
import "./Styling/app.css";

const App = () => {

    const isSignedIn = useSelector(selectSignedIn)

    return (
        <Grid container className="app">
            <Grid item xs={12} sm={12}>
                <Navbar />
            </Grid>
            <Grid item xs={12} sm={12} style={{margin: '10px 10px'}}>
                {/* <Blogpage/> */}
                <SignInpage />
                {isSignedIn && <Blogpage/>}
            </Grid>
            <Grid item xs={12} sm={12}>
                <Footer title="Footer" description="Something here to give the footer a purpose!" />
            </Grid>
        </Grid>
    )
}

export default App
