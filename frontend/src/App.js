import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateUser from './components/CreateUser';
import CreateNote from './components/CreateNote';

function App() {
  return (
    <BrowserRouter>
     <Navigation/>
      <div className="container p-4">
      <Route path="/" exact component={NotesList} />
      <Route path="/edit/:id" component={CreateNote} />
      <Route path="/create" component={CreateNote} />
      <Route path="/user" component={CreateUser} />
      </div>
    </BrowserRouter>
  );
}

export default App;
