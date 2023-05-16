import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage ';
import NavBar from './components/NavBar.js'
import { useState } from 'react';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
    
          <header className="App-header">
            <h1>Exercise til you're Exorcised</h1>
            <p><cite> When working out becomes a spiritual experience </cite> </p>
            <p> use this app to keep track of your workouts</p>
          </header>
          <NavBar />
          <main className='App-main'>
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path="/create-exercise">
            <CreateExercisePage />
          </Route>
          <Route path="/edit-exercise">
            <EditExercisePage exerciseToEdit={exerciseToEdit} />
          </Route>
          </main>
        

      </Router>
      <footer className="App-footer"> 
        <p>
          Modified on 3/10/22. &copy; Catherine Martens 2022.
        </p>
      </footer>
    </div>
  );
}

export default App;