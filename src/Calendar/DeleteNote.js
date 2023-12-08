import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Notes } from './NewNote';

export default function DeleteNote(props) {
    const [currentTitle, setCurrentTitle] = React.useState('')
    const [currentNoteIndex, setCurrentNoteIndex] = React.useState()

    React.useEffect(() => {
        // Find the title when the component mounts
        const noteToDelete = Notes.find((note) => note.id === props.currentNoteId);
        if (noteToDelete) {
          setCurrentTitle(noteToDelete.title);
        }
        setCurrentNoteIndex(Notes.indexOf(noteToDelete))
      }, [Notes, props.currentNoteId])

    function handleDelete(){
        props.handleClose()
        Notes.splice(currentNoteIndex,1)
    }

  return (
    <React.Fragment>
      
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure youe want to delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            "{currentTitle}"
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Disagree</Button>
          <Button onClick={handleDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}