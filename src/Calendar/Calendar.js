import { Paper, Typography, Button, Box, Icon } from '@mui/material';
import React from 'react';

import {IconButton} from '@mui/material';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import {Grid} from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

import { Notes } from './NewNote';
import DeleteNote from './DeleteNote';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function Calendar() {
  const [open, setOpen] = React.useState(false);
  const [currentNoteId, setCurrentNoteId] = React.useState('')

  const handleClickOpen = (id) => {
    setOpen(true);
    setCurrentNoteId(id)
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleEdit(id){
    const noteToDelete = Notes.find((note) => note.id === id);
    const index = Notes.indexOf(noteToDelete)
    Notes.splice(index,1)
  }

  const notesPapers = Notes.map((note) => (
    <Grid item xs={4}>
      <Paper elevation={15} sx={{maxWidth:300, height: 380}}>
        <Button onClick={() => handleEdit(note.id)} component={Link} to="/Calendar/new-note" variant="text">
          Edit
        </Button>
        <> </>
        <Button variant="text" onClick={() => handleClickOpen(note.id)}>
          Delete
        </Button>
        <hr/>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Typography sx={{marginRight: 'auto', marginLeft: 'auto'}}>{note.title}</Typography>
        <CalendarMonthOutlinedIcon />
        <Typography sx={{marginRight: 'auto', marginLeft: 'auto'}}>{days[note.date.day()]}-{note.date.date()}/{note.date.month()}</Typography>
        </Box>
        <hr/>
        <br/>
        <Typography>{note.note}</Typography>
      </Paper>
    </Grid>
  ))
  
  return (
    <>
    <DeleteNote open={open} handleClose={handleClose} currentNoteId={currentNoteId}/>
    <IconButton component={Link} to="/Calendar/new-note">
      <NoteAddOutlinedIcon />
    </IconButton>
    <Grid container spacing={2} sx={{maxWidth:1000}}>
      {notesPapers}
    </Grid>
    
    </>
    
  );
}