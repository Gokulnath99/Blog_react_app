import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import { GoogleLogout } from 'react-google-login';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { 
    selectSignedIn, 
    selectUserData , 
    setInput,
    setSignedIn,
    setUserData
} from '../../features/userSlice';
import './navbar.css';
import "../../Styling/loginbutton.css";
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';



const Navbar = () => {

    const [inputValue, setInputValue] =  useState("tech")
    const isSignedIn = useSelector(selectSignedIn)
    const userData = useSelector(selectUserData)

    const dispatch = useDispatch()

    const logout = (response) =>{
        console.log(response);
        dispatch(setSignedIn(false))
        dispatch(setUserData(null))
    }

    const login = (response) =>{
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    };

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setInput(inputValue))
    };

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
        },
        paper: {
          marginRight: theme.spacing(2),
        },
      }));
      
        const classes = useStyles();
        const [open, setOpen] = React.useState(false);
        const anchorRef = React.useRef(null);
      
        const handleToggle = () => {
          setOpen((prevOpen) => !prevOpen);
        };
      
        const handleClose = (event) => {
          if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
          }
      
          setOpen(false);
        };
      
        function handleListKeyDown(event) {
          if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
          }
        }
      
        // return focus to the button when we transitioned from !open -> open
        const prevOpen = React.useRef(open);
        React.useEffect(() => {
          if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
          }
      
          prevOpen.current = open;
        }, [open]);

    return (
        <div className="navbar">
            <h1 className="navbar__header">Blog Logo</h1>
            {isSignedIn && (
                <div className="blog__search">
                    <input 
                        className="search" 
                        placeholder="Search for a blog" 
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className="submit" onClick={handleClick}>
                        Search
                    </button>
                </div>
                )}

                {isSignedIn ? (
                
                <div className={classes.root}>
                <div>
                <Avatar className="user" src={userData?.imageurl} alt={userData?.name}/>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    <h1 className="signedIn">{userData?.givenName}</h1>
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <GoogleLogout
                                            clientId="287865871848-g6v15mjnv6v17qodv1ltchpsjbecu3tk.apps.googleusercontent.com"
                                            render = {() =>(
                                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                                                )}
                                            onLogoutSuccess={logout}
                                    />
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                    )}
                  </Popper>
                </div>
              </div>
                ) : (
                    <GoogleLogin 
                            clientId="287865871848-g6v15mjnv6v17qodv1ltchpsjbecu3tk.apps.googleusercontent.com"
                            render={(renderProps)=> (
                                <button 
                                    className="offset"
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                >
                                    Login
                                </button>                      
                            )}
                            onSuccess={login}
                            onFailure={login}
                            isSignedIn={true}
                            cookiePolicy={"single_host_origin"}
                        />
                    )
                }
        </div>
    );
};

export default Navbar;