import { take, select, put} from 'redux-saga/effects';
import * as mutation from './mutation';
import { v1 as uuid } from 'uuid';

export function* taskCreationSaga() {
  while(true) {
    const {groupId} = yield take(mutation.REQUEST_TASK_CREATION);
    const taskId = uuid();
    const ownerId = 'U1';

    yield put(mutation.createTask(taskId, groupId, ownerId));
  }
}