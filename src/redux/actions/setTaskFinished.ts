import { UPDATE_COMPLETED_TODAY, UPDATE_COMPLETED_EVERYDAY } from '../../utils/constants/user';

export function setTaskFinished(name, value, type) {
  const data = { "type": type, "name": name, "value": value}
  console.log(data.type)
  return (dispatch: any) => {
    return data.type === 'completedEveryday' ? dispatch(updateCompletedEveryday(data)): dispatch(updateCompletedToday(data));
  };
}

function updateCompletedEveryday(data) {
  return {
    type: UPDATE_COMPLETED_EVERYDAY,
    payload: data
  };
}

function updateCompletedToday(data) {
  return {
    type: UPDATE_COMPLETED_TODAY,
    payload: data
  };
}

