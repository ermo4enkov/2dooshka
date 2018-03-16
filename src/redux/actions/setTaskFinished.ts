import { UPDATE_TASK_STATE } from '../../utils/constants/user';
import { DB } from '../../utils/constants/db';

export function setTaskFinished(name, value, type) {
  DB.completedTasks.push(name);
  delete DB[type][value];

  return (dispatch: any) => {
    return dispatch(updateTaskState());
  };
}

function updateTaskState() {
  return {
    type: UPDATE_TASK_STATE,
  };
}
