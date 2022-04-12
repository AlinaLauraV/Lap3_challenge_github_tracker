import React from "react";
import { Repos } from "./pages/Repos";
import {Header, Footer} from './layout'
import { Routes, Route } from 'react-router-dom';
// import { NavBar } from './components';

//must be changed
const App =() =>{
        return (
            <>
              <Header/>
              <Repos />
              <Footer />
            </>
        )
    
}

export default App;


