import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import Todo from './Todo.js';
import db from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    });
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); //prevent the REFRESH

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  };

  return (
    <div className="App">
      <h1>Kevin's Todo List 🚀!</h1>
      <form>
        <FormControl>
          <InputLabel>✅Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
