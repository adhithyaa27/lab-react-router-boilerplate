import React from "react";
import {Route, Routes} from "react-router-dom"
import Home from "../src/Components/Home";
import Contacts from "../src/Components/Contact";
import About from "../src/Components/About";


const AllRoutes=()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
        
        </>
    )
}

export default AllRoutes;