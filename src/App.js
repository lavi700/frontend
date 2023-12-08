import { Link, NavLink, Route, Routes, useLocation, BrowserRouter } from "react-router-dom"
import Home from "./Home"
import Calculator from "./Calculator/Calculator"
import Clock from "./Clock/Clock"
import Timer from "./Clock/Timer"
import Stopwatch from "./Clock/Stopwatch"
import Calendar from "./Calendar/Calendar"
import NewNote from "./Calendar/NewNote"
import "./styles.css"
import DeleteNote from "./Calendar/DeleteNote"


export function App(){
  const location = useLocation()
  return (
    <>
    <h1>Tools</h1>
    <NavLink to="/">Home</NavLink>
    <br />
    <NavLink to="/calculator">Calculator</NavLink>
    <br />
    <NavLink to="/clock">Clock</NavLink>
    <br />
    <NavLink to="/Calendar">Calendar</NavLink>
    <br />

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/calculator" element={<Calculator />}/>
      <Route path="/clock" element={<Clock />}/>
      <Route path="/Calendar" element={<Calendar />}/>
      <Route path="/Calendar/new-note" element={<NewNote />}/>
      <Route path="/Calender/delete-note" element={<DeleteNote/>}/>
      <Route path="/clock/timer" element={<Timer />}/>
      <Route path="/clock/stopwatch" element={<Stopwatch />}/>
    </Routes>
    </>
    
    )
}

   
    




