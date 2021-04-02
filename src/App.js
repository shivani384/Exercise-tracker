import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter , Route} from "react-router-dom";

import Navbar from "./Components/Navbar"
import ExercisesList from "./Components/CreateList";
import EditExercise from "./Components/EditExercise";
import CreateExercise from "./Components/CreateExercise";
import CreateUser from "./Components/CreateUser";

function App() {
  return (
    
      <div className="container">
         <Navbar />
 
          <br/>
          <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </div>
     
  );
}

export default App;