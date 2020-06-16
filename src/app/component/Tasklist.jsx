import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import { requestTaskCreation } from '../../store/mutation';
// eslint-disable-next-line no-unused-vars
const Tasklist = ({tasks, name, id, createNewTask}) => (
  <div>
    <h1>{name}</h1>
    {
      tasks.map( task => 
        <Link to={`/task/${task.id}`}key={task.id}>
          <p id={task.id}>{task.name}</p>
        </Link>)
    }
    <button onClick={() => createNewTask(id)}>Add New Task</button>
  </div>
);

function mapStateToProps(state, ownProps) {
  let groupId = ownProps.id;
  return {
    name: ownProps.name,
    id: groupId,
    tasks: state.tasks.filter( task => task.group == groupId)
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNewTask(id) {
      dispatch(requestTaskCreation(id));
    }
  };
};
export const ConnectedTasklist = connect(mapStateToProps, mapDispatchToProps)(Tasklist);