import React from 'react';
import { connect }from 'react-redux';
import { Link } from 'react-router-dom';
import * as mutation from '../../store/mutation';

const TaskDetail = ({id, comments, task, isComplete, groups, 
  setTaskComplete, setTaskName, setTaskGroup}) => (
  <div>
    <div>
      <input onChange={setTaskName} value={task.name} />
    </div>
    <div>
      <button onClick={() => setTaskComplete(id, !isComplete)}>{ isComplete ? 'Reopen' : 'Complete'}</button>
    </div>
    <div>
      <select onChange={setTaskGroup} value={task.group}>
        {
          groups.map( group => (
            <option key={group.key} value={group.id}>{group.name}</option>
          )) 
        }
      </select>
    </div>
    <div>
      <Link to="/dashboard">
        <button>Done</button>
      </Link>
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  let task = state.tasks.find( task => task.id === id);
  let groups  = state.groups;
  return {
    id,
    task,
    groups,
    isComplete: task.isComplete
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let id = ownProps.match.params.id;
  return {
    setTaskComplete(id, isComplete) {
      dispatch(mutation.setTaskComplete(id, isComplete));
    },
    setTaskName(e) {
      dispatch(mutation.setTaskName(id, e.target.value));
    },
    setTaskGroup(e) {
      dispatch(mutation.setTaskGroup(id, e.target.value));
    }
  };
};

export const ConnectedTaskDetail = connect(mapStateToProps, mapDispatchToProps)(TaskDetail);