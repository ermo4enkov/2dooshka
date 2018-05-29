import { UPDATE_TASK_STATE } from '../../utils/constants/user';
import { DB } from '../../utils/constants/db';

export function setTaskFinished(name, value, type) {
  // DB.completedTasks.push(name);
  const data = { "type": type, "name": name}
  console.log(data)
  return (dispatch: any) => {
    return dispatch(updateTaskState(data));
  };
}

function updateTaskState(data) {
  return {
    type: UPDATE_TASK_STATE,
    payload: data
  };
}
