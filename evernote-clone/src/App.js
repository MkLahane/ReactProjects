import { SentimentSatisfied } from '@material-ui/icons';
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Editor from './Editor/Editor';
import Sidebar from './Sidebar/Sidebar';

const firebase = require('firebase');

function App() {
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const _notes = serverUpdate.docs.map(x => {
          const data = x.data();
          data['id'] = x.id;
          return data;
        });
        setNotes(_notes);
      });
  }, [])

  const selectNote = (note) => {
    setSelectedNote(note);
  };
  const deleteNote = (note) => {
    const deletedNoteId = note.id;
    if (selectedNote != null) {
      if (selectedNote.id === deletedNoteId) {
        selectNote(null);
      } else {
        selectNote(selectedNote);
      }
    }
    firebase
      .firestore()
      .collection('notes')
      .doc(note.id)
      .delete();
  };
  const newNote = async (title) => {
    const newNote = {
      Title: title,
      Body: '',
      id: ''
    };
    const newNoteFromDB = await firebase
      .firestore()
      .collection('notes')
      .add({
        Title: newNote.Title,
        Body: newNote.Body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    const newId = newNoteFromDB.id;
    newNote.id = newId;
    //await setNotes(notes => [...notes, newNote]);
    // const newNoteIndex = notes.indexOf(notes.filter(note => note.id === newId)[0]);
    setSelectedNote(newNote);
    // setSelectedNoteIndex(newNoteIndex);
  };
  const noteUpdate = (text, _selectedNote) => {
    selectedNote.Body = text;
    setSelectedNote(selectedNote);
    firebase
      .firestore()
      .collection('notes')
      .doc(selectedNote.id)
      .update({
        Title: selectedNote.Title,
        Body: selectedNote.Body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
  }
  return (
    <div className="App">
      <Sidebar selectedNote={selectedNote}
        notes={notes}
        selectNote={selectNote}
        deleteNote={deleteNote}
        addNewNote={newNote}
      >
      </Sidebar>
      {
        selectedNote ?
          <Editor
            text={selectedNote.Body}
            selectedNote={selectedNote}
            noteUpdate={noteUpdate}></Editor> : null
      }
    </div>
  );
}

export default App;
