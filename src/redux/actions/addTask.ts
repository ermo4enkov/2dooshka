import { UPDATE_TASK_STATE } from '../../utils/constants/user';
import { DB } from '../../utils/constants/db';

export function addTask(value) {
  DB.todayTasks.push(value);

  return (dispatch: any) => {
    return dispatch(updateTaskState());
  };
}

function updateTaskState() {
  return {
    type: UPDATE_TASK_STATE,
  };
}
