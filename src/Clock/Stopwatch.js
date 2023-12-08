import ClockRoutes from "./ClockRoutes"
import React from "react"

export default function Stopwatch(){
    const [stopwatchContent, setStopwatchContent] = React.useState("start")
    const [count, setCount] = React.useState(0)
    const [hundredths, setHundredths] = React.useState(0)
    const [seconds, setSeconds] = React.useState(0)
    const [minutes, setMinutes] = React.useState(0)

    React.useEffect(()=>{
        if(stopwatchContent === "stop"){
            setTimeout(()=>{
                setHundredths(prevHundredths=>{
                    
                if (prevHundredths >= 100){
                    setSeconds(prevSeconds=>{
                        if (prevSeconds >= 60){
                            setMinutes(prevMinutes=>prevMinutes+=0.5)
                            return 0 
                        }return prevSeconds += 0.5
                    })
                    return 0
                }
            return (prevHundredths+=1)})

            },1)
        }
    },[hundredths, stopwatchContent])

    function handleCount(){
        setStopwatchContent(prevContent=>{
            if (prevContent === "start") return "stop"
            else return "start"
        })
    }
    function handleReset(){
        setHundredths(()=>{
            if (stopwatchContent === "start") return 0
            else return -1
        })
        setStopwatchContent("start")
        setSeconds(0)
        setMinutes(0)
    }

    

    return (
        <>
        <ClockRoutes />
        <h1>{minutes}:{seconds}:{hundredths}</h1>
        <button onClick={handleCount}>{stopwatchContent}</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}