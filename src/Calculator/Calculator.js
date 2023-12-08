import Input from "./Input"
import Buttons from "./Buttons"
import React from "react"

export default function Calculator(){
    const [inputValue, setInputValue] = React.useState("")

    function handleClick(content){
        setInputValue(prevInputValue => {
            if (content === "C"){
                return ""
            }else if(content ==="<"){
                return prevInputValue.slice(0, -1)
            }else if(content === "="){
                try {if (typeof(eval(prevInputValue)) === 'number' && !isNaN(eval(prevInputValue))){
                    return String((eval(prevInputValue)))
                }}catch(error){return ""}
            }else{
                return prevInputValue += content
        }
        })
    }

    return (
        <div className="calculator-container">
            <Input content={inputValue}/>
            <div className="calculator-buttons-container">
                <Buttons handleClick={handleClick}/>
            </div>
        </div>
    )
}