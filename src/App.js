import React, {useState} from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import './App.css';
import Cookies from "js-cookie";

import axios from "axios";


// import components here
import LogIn from "./components/LogIn"
import Register from "./components/Register"
import Search from "./components/Search"
import Profile from "./components/Profile"

import BookCard from "./components/BookCard"
import BookShelf from "./components/BookShelf"
import ChatRoom from "./components/ChatRoom"
import Chat from "./components/Chat"

import Aboutus from "./components/AboutUs"

import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


// axios.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('Bookster')}`

const useStyles = makeStyles((theme)=>({
  root: {
    minHeight: '100vh',
    backgroundImage: 'https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}))







const App = () => {
 
const classes = useStyles();
 
 
 
 
 
 
  return (
    <div className={classes.root}>
     <CssBaseline>
          <Switch> 
      
              <Route path="/bookDetail">
                <BookCard />
              </Route>

              <Route path="/chat">
                <Chat />
              </Route>
              
              <Route path="/chatroom">
                <ChatRoom />
              </Route>


              <Route path="/bookshelf"
                render={(props)=>(<BookShelf {...props}/>)}            
              />
              <Route path="/login">
                <LogIn />
              </Route>
              <Route path="/search"
                render={(props)=>(<Search {...props}/>)}            
              /> 
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route exact path="/">
                <HomePage /> 
              </Route> 
              <Route exact path="/about">
                <Aboutus /> 
              </Route> 
           </Switch> 
           </CssBaseline>
  </div>
  );
}



export default App;
