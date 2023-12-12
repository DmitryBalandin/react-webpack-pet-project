import React, { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import About from "../about/About";


export const App = () =>{
        const [count, setCount] = useState(0)
        const icremeant = () => setCount(prev => prev + 1);
    return(
        <div>
            <Link to={"./about"}>about</Link>
            <br />
            <Link to={"./shop"}>shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={icremeant}>inceу</button>
            <About/>
        </div>
    );
};