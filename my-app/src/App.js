import React from "react";
import {Switch ,Route } from "react-router-dom";
import Home from './Component/Home'
import About from './Component/About'
import Services from './Component/Services'
import Contact from './Component/Contact'
import Policy from './Component/Policy'
import Error from './Component/Error'
import List from './Component/List'
import Footer from "./Component/Footer";
 const App=()=>{
     return(
     <>
      <List/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/About" component={About}/>
    <Route path="/Services" component={Services}/>
    <Route path="/Contact" component={Contact}/>
    <Route path="/Policy" component={Policy}/>
    <Route component={Error}/>
    </Switch>
      <Footer/>
     </>
     )
 }
 export default App