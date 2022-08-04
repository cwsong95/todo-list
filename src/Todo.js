import React from 'react';
import './Todo.css';
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import db from './firebase';

function Todo(props) {
  return (
    <List className='todo__list'>
      <ListItem>
        <ListItemAvatar>

        </ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="Dummy deadline ⏰"/>
        <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
      </ListItem>
    </List>
  );
}

export default Todo