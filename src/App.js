import React from "react";
import { Repos } from "./pages/Repos";
import {Header, Footer} from './layout'
import { Routes, Route } from 'react-router-dom';
// import { NavBar } from './components';

//must be changed
const App =() =>{
    return (
        <div id="app">
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element = {<Pages.Welcome/>}/>
                    <Route path="/search" element = {<Pages.Search/>} />
                </Routes>
            </main>
        </div>
    )
}

export default App;


