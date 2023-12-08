import { Collapse } from "@mui/material"
import Acc from "./HomeAcc"
import React from "react"

export default function Home(){
    const [checked, setChecked] = React.useState(false)

    React.useEffect(() => {
        setChecked(true)
    },[])

    return (
        <>
        <Collapse in={checked}
                {...(checked ? {timeout: 1000} : {})}>
            <h1>Welcome to our Tools!</h1>
            <Acc />
        </Collapse>
        </>
    )
}