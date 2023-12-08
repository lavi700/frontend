import React from "react"

export default function Input(props){
    

    function handleChange(){
        setInputValue(prevInputValue => props.content)
    }

    return(
        <input value={props.content}/>
    )
}