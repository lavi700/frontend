import { NavLink, Route, Routes } from "react-router-dom";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";

export default function ClockRoutes(){
    return(
        <>
        <NavLink to="/clock/timer">Timer</NavLink>
        <> </>
        <NavLink to="/clock/stopwatch">Stopwatch</NavLink>
        </>
    )
}