import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Link } from 'react-router-dom';
import {Alert, AlertTitle} from '@mui/material';
import { Collapse } from "@mui/material"
import { Paper, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField'
import { v4 as uuidv4 } from 'uuid'

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const Note = []

export default function NewNote(){

    const [checked, setChecked] = React.useState(false)

    React.useEffect(() => {
        setChecked(true)
    },[])

    const [alertDisplay, setAlertDisplay] = React.useState(false)
    const [sendHome, setSendHome] = React.useState(true)

    const titleText = React.useRef(null)
    const noteText = React.useRef(null)

    const [selectedDate, setSelectedDate] = React.useState(null)


    function handleTextChange(){
        if (titleText.current.value && noteText.current.value && selectedDate){
            setSendHome(false)
        }else {
            
            setSendHome(true)}
    }

    const handleDateChange = (date) => {
      setSelectedDate(date)
      if (titleText.current.value && noteText.current.value && date){
        setSendHome(false)
    }else {
        setSendHome(true)}
    }

    function handleClick(){
        if (titleText.current.value && noteText.current.value && selectedDate){
            Note.push({title: titleText.current.value, note: noteText.current.value, date: selectedDate, id: uuidv4()})
            setAlertDisplay(false)
        }else {
            setAlertDisplay(true)}
        
    }

    return (
    <Collapse in={checked}
    {...(checked ? {timeout: 2000} : {})}
    collapseHeight={5500000050}>
        <div>
            <TextField id="standard-basic" onChange={handleTextChange} inputRef={titleText} label="title" variant="standard" sx={{width: 250}} />
            <Button component={Link} to={sendHome?'/Calendar/new-note':'/Calendar'} variant="contained" onClick={handleClick} sx={{marginTop:2, marginLeft:2, width:170}}>Add Note</Button>
            <Paper elevation={5} sx={{marginTop:1, maxWidth: 450}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDatePicker 
                    orientation="portrait"
                    value={selectedDate}
                    onChange={handleDateChange}
                    ToolbarComponent={() => null}/>
                </LocalizationProvider>
                <Typography variant="subtitle1" gutterBottom>
                Selected Date: {selectedDate ? selectedDate.toString() : 'None'}
                </Typography>
            </Paper>
            <TextField id="outlined-multiline-static" onChange={handleTextChange} inputRef={noteText} multiline maxRows={6} label="Note" variant="outlined" sx={{
                width: 450,
            }}/>
            {alertDisplay?<Alert severity="warning" sx={{width: 420}}>
                <AlertTitle>Something is missing :(</AlertTitle>Please fill out all the boxes!</Alert>:<></>}
        </div>
    </Collapse>
    )
}
export const Notes = Note