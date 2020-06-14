import React from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line no-unused-vars
const Tasklist = ({tasks, name}) => (
  <div>
    <h1>{name}</h1>
    {
      // eslint-disable-next-line react/jsx-key
      tasks.map( task => <p id={task.id}>{task.name}</p>)
    }
  </div>
);

function mapStateToProps(state, ownProps) {
  let groupId = ownProps.id;
  // eslint-disable-next-line no-console
  console.log(ownProps);
  return {
    name: ownProps.name,
    tasks: state.tasks.filter( task => task.group == groupId)
  };
}

export const ConnectedTasklist = connect(mapStateToProps)(Tasklist);