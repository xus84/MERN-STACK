import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateUser from './components/CreateUser';
import CreateNote from './components/CreateNote';

function App() {
  return (
    <BrowserRouter>
     <Navigation/>
      <Route path="/" exact component={NotesList} />
      <Route path="/edit/:id" component={CreateNote} />
      <Route path="/create" component={CreateNote} />
      <Route path="/user" component={CreateUser} />
    </BrowserRouter>
  );
}

export default App;