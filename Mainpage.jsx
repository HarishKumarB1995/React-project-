import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeNav } from "./HomeNav";
import Login from "./Login";
import Logup from "./Logup";

function Mainpage(){
    return(
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeNav/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/logup" element={<Logup/>}></Route>
                </Routes>
            </BrowserRouter> 
        </React.Fragment>
    )
}

export default Mainpage;