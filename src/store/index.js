import { createStore, applyMiddleware, combineReducers } from 'redux';
import { defaultState } from '../server/DefaultState';

import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import * as sagas from './saga.mock';
import * as mutation from './mutation';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  // eslint-disable-next-line no-unused-vars
  combineReducers({
    tasks(tasks = defaultState.tasks, action) {
      switch(action.type) {
        case mutation.CREATE_TASK:
          return [
            ...tasks, {
              id: action.taskId,
              name: 'New TAsk',
              group: action.groupId,
              user: action.ownerId,
              isComplete:false
            }
          ];
        case mutation.SET_TASK_COMPLETE:
          return tasks.map( task => {
            return (task.id === action.taskId) ? 
              {...task, isComplete: action.isComplete} : 
              task;      
          });
        case mutation.SET_TASK_GROUP:
          return tasks.map( task => {
            return (task.id === action.taskId) ? 
              {...task, name: action.name} : 
              task;      
          });
        case mutation.SET_TASK_NAME:
          return tasks.map( task => {
            return (task.id === action.taskId) ? 
              {...task, group: action.groupId} : 
              task;      
          });
      }
      return tasks;
    },
    comments(comments = defaultState.comments) {
      return comments;
    },
    groups(groups = defaultState.groups) {
      return groups;
    },
    users(users = defaultState.users) {
      return users;
    }
  }),
  applyMiddleware(createLogger(), sagaMiddleware)
);

for( let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}