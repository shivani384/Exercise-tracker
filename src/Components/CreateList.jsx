import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import Exercise from './Exercise'

 



const ExerciseList = (props) => {
    const [exercises,setexercises]=useState([])
    useEffect(()=>{
        axios.get('https://mern-exercise-tracker1.herokuapp.com/exercises/')
        .then(response => {
          setexercises(response.data )
        })
        .catch((error) => {
          console.log(error);
        })
    },[])

   const deleteExercise=(id)=>{
        axios.delete('https://mern-exercise-tracker1.herokuapp.com//exercises/'+id)
          .then(response => { console.log(response.data)});
    
        setexercises(exercises.filter(el => el._id !== id) )
      }
    
      /*const exerciseList=()=>{
        return setexercises(exercises.map(currentexercise => {
          return <Exercise exercise={currentexercise} deleteExercise={deleteExercise(currentexercise._id)} 
          key={currentexercise._id}/>;
        }))
    

         
      }*/
    
    return (
        <div>
            <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              

           {  exercises.map(exercise => {
          return  <tr key={exercise._id}>
          <td>{exercise.username}</td>
          <td>{exercise.description}</td>
          <td>{exercise.duration}</td>
          <td>{exercise.date.substring(0,10)}</td>
          <td>
            <Link to={"/edit/"+exercise._id}>edit</Link> | <a href="#" onClick={() =>
                 { deleteExercise(exercise._id) }}>delete</a>
          </td>
        </tr>
          
          
        })
 } 
          </tbody>
        </table>
      </div>
    )
 
         
}

export default ExerciseList;
/*
 class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)
     

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

   exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} 
      key={currentexercise._id}/>;
    })

     
  }

   

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ExercisesList;

*/









